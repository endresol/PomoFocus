let dbInstance: BetterSQLite3Database<typeof schema> | null = null;

export const createDatabase = () => {
  if (dbInstance) {
    return dbInstance;
  }

  const isDev = is.dev;
  const productionDbPath = join(app.getPath("appData"), "animal-care");

  if (!isDev && !fs.existsSync(productionDbPath)) {
    fs.mkdirSync(productionDbPath);
  }

  const dbPath = isDev
    ? "./animal_care.db"
    : join(productionDbPath, "animal_care.db");

  const sqlite = new Database(dbPath);
  sqlite.pragma("journal_mode = WAL");
  const db = drizzle(sqlite, { schema });

  dbInstance = db;
  return db;
};

export const db = dbInstance ?? createDatabase();

// -----

const migrateDb = (database: typeof db) => {
  const migrationsPath =
    process.env.NODE_ENV === "development"
      ? "public/drizzle" // Local development path
      : join(app.getAppPath(), "public", "drizzle");

  migrate(database, { migrationsFolder: migrationsPath });
};

const main = () => {
  try {
    migrateDb(db);
  } catch (e) {
    log.error(e);
  }
};

export default main;

// ----
app
  .whenReady()
  .then(() => {
    createDatabase();
  })
  .then(() => {
    runMigrations();
  })
  .then(() => {
    electronApp.setAppUserModelId("com.electron");

    app.on("browser-window-created", (_, window) => {
      optimizer.watchWindowShortcuts(window);
    });

    createWindow();

    app.on("activate", function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });
