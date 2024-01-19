import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('http://localhost:3000/api/char');
        const parsedJson = await result.json();
        console.log(parsedJson);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return <>hello</>;
}

export default App;
