import { useState } from "react";
import { Link } from "react-router-dom";

import {
  BsArrowLeftShort,
  BsChevronDown,
  BsPeople,
  BsReverseLayoutTextWindowReverse,
} from "react-icons/bs";
import { GiTomato } from "react-icons/gi";
import { RiDashboardFill, RiTimerFill, RiSettings4Line } from "react-icons/ri";

export function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState<number>(0);

  const setSubmenuOpenHandler = (
    e: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    e.preventDefault();

    if (submenuOpen === index) {
      return setSubmenuOpen(0);
    }
    setSubmenuOpen(index);
  };

  const menuitems = [
    {
      title: "Dashboard",
      path: "/",
    },
    {
      title: "Timer",
      path: "/timer",
      icon: <RiTimerFill />,
      spacing: true,
    },
    {
      title: "Clients",
      path: "/clients",
      submenu: true,
      icon: <BsPeople />,
      submenuitems: [
        {
          key: "CID-1",
          title: "long client name 1 AS",
          path: "/clients/1",
        },
        {
          key: "CID-3",
          title: "Client name 2",
          path: "/clients/2",
        },
      ],
    },
    {
      title: "Projects",
      path: "/projects",
      submenu: true,
      icon: <BsReverseLayoutTextWindowReverse />,
      submenuitems: [
        {
          key: "PID-1",
          title: "Lastest project 1",
          path: "/project/1",
        },
        {
          key: "PID-2",
          title: "Another project",
          path: "/project/2",
        },
      ],
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <RiSettings4Line />,
      spacing: true,
    },
  ];

  return (
    <>
      {/* // side bar navigatin */}
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          drawerOpen ? "w-60" : "w-20"
        }  duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            !drawerOpen && "rotate-180"
          } `}
          onClick={() => setDrawerOpen(!drawerOpen)}
        />

        <div className='inline-flex'>
          <GiTomato
            className={`text-red-600 text-3xl mr-2 duration-500 ${
              drawerOpen && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium pr-8 text-2xl duration-300 ${
              !drawerOpen && "scale-0"
            }`}
          >
            PomoFocus
          </h1>
        </div>
        <ul className='pt-2'>
          {menuitems.map((item, index) => (
            <div key={index}>
              <li
                className={`text-gray-300 text-sm  hover:bg-light-white rounded-md ${
                  item.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <Link to={item.path}>
                  <span className='flex items-center gap-x-2 p-2'>
                    <span className='text-2xl block float-left'>
                      {item.icon ? item.icon : <RiDashboardFill />}
                    </span>
                    <span
                      className={`text-base font-medium flex-1 duration-200 ${
                        !drawerOpen && "hidden"
                      }`}
                    >
                      {item.title}
                    </span>
                    {item.submenu && drawerOpen && (
                      <BsChevronDown
                        onClick={(event: React.MouseEvent<HTMLElement>) =>
                          setSubmenuOpenHandler(event, index)
                        }
                        className={`hover:bg-gray-400 duration-200 ${
                          submenuOpen === index && "rotate-180"
                        }`}
                      />
                    )}
                  </span>
                </Link>
              </li>
              {item.submenu && submenuOpen === index && drawerOpen && (
                <ul className='duration-300'>
                  {item.submenuitems.map((submenuitem, index) => (
                    <li
                      key={submenuitem.key}
                      className='text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 pl-10 hover:bg-light-white rounded-md'
                    >
                      {submenuitem.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
