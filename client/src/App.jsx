import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('http://localhost:3000/api/char');
        const parsedJson = await result.json();
        setList(parsedJson);
      } catch (error) {
        console.error("Couldn't fetch data");
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        {list.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </>
  );
}

export default App;
