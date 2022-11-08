import { backgroundColors } from '../../../types/colors';
import Nav from '../../utilities/Nav/Nav';
import useMQuery from '../../../hooks/useMQuery';

interface HeaderType {
  backgroundColor: backgroundColors;
}

const Header: React.FC<HeaderType> = ({ backgroundColor }) => {
  const mQuery = useMQuery({
    initMatch: window.innerWidth >= 800 ? true : false,
    mediaQueryExp: '(min-width: 50em)',
  });

  return (
    <header className={`header ${backgroundColor}`} data-testid='header'>
      <span className='header__logo'>{`<JoshuaRodriguez />`}</span>
      <Nav
        type='header'
        backgroundColor={`${
          mQuery ? backgroundColor : 'bg-color__light--accent-medium-opaque'
        }`}
      />
    </header>
  );
};

export default Header;
