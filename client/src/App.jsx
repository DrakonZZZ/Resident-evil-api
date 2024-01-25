import { useEffect, useState } from 'react';
import './App.css';
import CharDetails from './components/CharDetails';
import CharCard from './components/CharCard';

function App() {
  const [list, setList] = useState([]);
  const [selectChar, setSelectChar] = useState(null);

  const handleSelect = async (id) => {
    try {
      const result = await fetch(`http://localhost:3000/api/char/${id}`);
      const charData = await result.json();
      setSelectChar(charData);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(list);
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
      <main>
        <h2>RESIDENT EVIL CHARACTER</h2>
        <CharCard list={list} handleSelect={handleSelect} />
        {selectChar && <CharDetails selectChar={selectChar} />}
      </main>
    </>
  );
}

export default App;
