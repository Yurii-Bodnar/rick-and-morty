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
