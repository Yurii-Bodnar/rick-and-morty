import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getHeroDetails } from 'utility/rickAndMortyApi';
import goBack from '../../assets/sprite.svg';
import {
  Box,
  BoxImg,
  BoxText,
  Btn,
  BtnContainer,
  Item,
  ItemText,
  ItemTitle,
  List,
  Section,
  Svg,
  Wrapper,
  WrapperTitle,
} from './Details.styled';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [heroDetails, setHeroDetails] = useState(null);
  useEffect(() => {
    getHeroDetails(id).then(data => setHeroDetails(data));
  }, [id]);

  const handleClick = () => {
    navigate('/rick-and-morty');
    setHeroDetails(null);
  };

  if (heroDetails !== null) {
    const { image, name, gender, status, species, origin, type } = heroDetails;
    return (
      <Section>
        <BtnContainer>
          <Svg>
            <use href={goBack + '#icon-arrow_back'}></use>
          </Svg>
          <Btn type="button" onClick={handleClick}>
            GO BACK
          </Btn>
        </BtnContainer>
        <Box>
          <BoxImg src={image} alt="Avatar" width={300} />
          <BoxText>{name}</BoxText>
        </Box>
        <Wrapper>
          <WrapperTitle>Informations</WrapperTitle>
          <List>
            <Item>
              <ItemTitle>Gender</ItemTitle>
              <ItemText>{gender}</ItemText>
            </Item>
            <Item>
              <ItemTitle>Status</ItemTitle>
              <ItemText>{status}</ItemText>
            </Item>
            <Item>
              <ItemTitle>Specie</ItemTitle>
              <ItemText>{species}</ItemText>
            </Item>
            <Item>
              <ItemTitle>Origin</ItemTitle>
              <ItemText>{origin.name}</ItemText>
            </Item>
            <Item>
              <ItemTitle>Type</ItemTitle>
              <ItemText>{type === '' ? 'unkown' : type}</ItemText>
            </Item>
          </List>
        </Wrapper>
      </Section>
    );
  }
};

export default Details;
