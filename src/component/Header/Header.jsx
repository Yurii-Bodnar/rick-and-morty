import headerImg from '../../assets/images/headerImg.jpg';
import { HeaderBox } from './Header.styled';
const Header = () => {
  return (
    <HeaderBox>
      <img src={headerImg} alt="Title" width="600" />
    </HeaderBox>
  );
};

export default Header;
