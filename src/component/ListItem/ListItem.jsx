import { dataContext } from '../../App';
import { useContext } from 'react';
import {
  Box,
  Img,
  Item,
  Link,
  List,
  Section,
  Text,
  Title,
} from './ListItem.styled';

const ListItem = ({ filteredList, value, data }) => {
  //   const { data, filteredList, value } = useContext(dataContext);
  //   const { data } = useContext(dataContext);
  return (
    <Section>
      <List>
        {filteredList && value !== ''
          ? filteredList.map(({ id, image, name, species }) => (
              <Item key={id}>
                <Link to={`/details/${id}`}>
                  <Img src={image} alt="Hero" />
                  <Box>
                    <Title>{name}</Title>
                    <Text>{species}</Text>
                  </Box>
                </Link>
              </Item>
            ))
          : data.map(({ id, image, name, species }) => (
              <Item key={id}>
                <Link to={`/details/${id}`}>
                  <Img src={image} alt="Hero" />
                  <Box>
                    <Title>{name}</Title>
                    <Text>{species}</Text>
                  </Box>
                </Link>
              </Item>
            ))}
        {/* {data.map(({ id, image, name, species }) => (
          <Item key={id}>
            <Link to={`/details/${id}`}>
              <Img src={image} alt="Hero" />
              <Box>
                <Title>{name}</Title>
                <Text>{species}</Text>
              </Box>
            </Link>
          </Item>
        ))} */}
      </List>
    </Section>
  );
};

export default ListItem;
