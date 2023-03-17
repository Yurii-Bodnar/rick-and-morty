import Filter from 'component/Filter/Filter';
import Header from 'component/Header/Header';
import ListItem from 'component/ListItem/ListItem';
import { useEffect, useState } from 'react';
import { getHeroData } from 'utility/rickAndMortyApi';

const HomePage = () => {
  const [filteredList, setFilteredList] = useState(null);
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    getHeroData().then(dataHero => {
      const res = dataHero.results.sort(
        (a, b) => (a.name < b.name && -1) || (a.name > b.name && 1) || 0
      );
      setData(res);
    });
  }, []);
  useEffect(() => {
    if (value === '') {
      setFilteredList(null);
    }
    if (localStorage.getItem('data')) {
      setValue(localStorage.getItem('data'));
      setFilteredList(JSON.parse(localStorage.getItem('savedFilter')));
    }
  }, [value]);

  return (
    <>
      <Header />
      <Filter
        value={value}
        setValue={setValue}
        setFilteredList={setFilteredList}
        data={data}
      />
      <ListItem filteredList={filteredList} value={value} data={data} />
    </>
  );
};

export default HomePage;
