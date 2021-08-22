import information from './information.jpeg';
import ingredients from './ingredients.jpeg';
import programming from './programming.jpeg';
import vaccine from './vaccine.png';
import './style.css';

const MenuBar = () => {
    return (
      <>
      <ul className="sidebyside">
        <li><img src={information} className="resize" alt="" /></li>
        <li><img src={ingredients} className="resize" alt="" /></li>
        <li><img src={programming} className="resize" alt=""/></li>
        <li><img src={vaccine} className="resize" alt="" /></li>
      </ul>
      </>
    );
  };

export default MenuBar;