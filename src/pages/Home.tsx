import { useState } from 'react'
import { Button } from '@/components/ui/button';


export function Home() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('SELECT * FROM repositories');
  const [response, setResponse] = useState();

  async function send(sql) {
    const result = await window.myApi.dbquery(sql);
    setResponse(result);
  }
  
  return (
     <div>
      <h1>PomoFocus</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button onClick={() => send(message)}>
          Send
        </Button>
        <pre> 
          {(response && JSON.stringify(response, null, 2)) ||
            'No query results yet!'}
        </pre>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR function
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}