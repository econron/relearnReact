import information from './information.jpeg';
import ingredients from './ingredients.jpeg';
import programming from './programming.jpeg';
import vaccine from './vaccine.png';
import './style.css';

const MenuBar = props => {
  let basicStyle = 'resize';
  let newsStyle = basicStyle;
  let ingredientStyle = basicStyle;
  let programminStyle = basicStyle; 
  let vaccineStyle = basicStyle;
  
  let styled = 'resize layer1';
  console.log('styledImage: ' + props.styledimage);
  switch(props.styledimage) {
    case 'news':
      newsStyle = styled;
      break;
    case 'ingredient':
      ingredientStyle = styled;
      break;
    case 'programming':
      programminStyle = styled;
      break;
    case 'vaccine':
      vaccineStyle = styled;
      break; 
    default:
      let nothing = 'non';        
  }
  console.log(newsStyle);
    return (
      <>
      <ul className="sidebyside">
        <li><img src={information} className={newsStyle} alt="" /></li>
        <li><img src={ingredients} className={ingredientStyle} alt="" /></li>
        <li><img src={programming} className={programminStyle} alt=""/></li>
        <li><img src={vaccine} className={vaccineStyle} alt="" /></li>
      </ul>
      </>
    );
  };

export default MenuBar;