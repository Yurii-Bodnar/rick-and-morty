import { Box, Input, Section, Svg } from './Filter..styled';

import iconSearch from '../../assets/sprite.svg';
const Filter = ({ value, setValue, setFilteredList, data }) => {
  const handleChange = e => {
    if (data.length > 0) {
      const curValue = e.target.value;
      setValue(curValue);
      localStorage.setItem('data', curValue);
      const correctData = curValue.toLowerCase();
      const filteredList = data.filter(({ name }) =>
        name.toLowerCase().includes(correctData)
      );
      console.log('filteredList===>', filteredList, curValue);
      if (filteredList) {
        localStorage.setItem('savedFilter', JSON.stringify(filteredList));
        setFilteredList(filteredList);
      }
    }
  };
  return (
    <Section>
      <Box>
        <Input
          onChange={handleChange}
          type="text"
          value={value}
          placeholder="Filter by name..."
        />
        <Svg>
          <use href={iconSearch + '#icon-search-2'}></use>
        </Svg>
      </Box>
    </Section>
  );
};

export default Filter;
