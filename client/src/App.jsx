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

  const handleInput = async (e) => {
    const inputValue = e.target.value.toLowerCase();
    if (inputValue === '') {
      fetchData();
    } else {
      const filteredList = list.filter((item) => {
        return item.name.toLowerCase().includes(inputValue);
      });
      setList(filteredList);
    }
  };

  const fetchData = async () => {
    try {
      const result = await fetch('http://localhost:3000/api/char/all');
      const parsedJson = await result.json();
      setList(parsedJson);
    } catch (error) {
      console.error("Couldn't fetch data");
    }
  };

  console.log(list);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <main>
        <h2>RESIDENT EVIL CHARACTER</h2>
        <input
          type="text"
          id="name"
          placeholder="search for a character"
          onChange={handleInput}
        />
        <CharCard list={list} handleSelect={handleSelect} />
        {selectChar && <CharDetails selectChar={selectChar} />}
      </main>
    </>
  );
}

export default App;
