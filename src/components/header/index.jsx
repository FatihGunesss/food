import "assets/allCss/all.css";
import "assets/allCss/container.css";
import "assets/allCss/font.css";
import "./style.css";


const Header = (className) => {
  return (
      <div className="container">
      <div className={className + " header"}>
        <div className="header-tds">
          <h1 className="header-title">Jaegar Resto</h1>
          <p className="header-desc">Tuesday, 2 Feb 2021</p>
        </div>

        <div>
          <div className="search-icon"></div>
          <input
            className="header-search"
            type="search"
            placeholder="Search for food, coffe, etc.."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
