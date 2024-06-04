import "assets/allCss/all.css";
import "assets/allCss/container.css";
import "assets/allCss/font.css";
import "./style.css";

const Button = ({style, title}) => {
  return (
    <div className="button" style={style} > {title} </div>
  )
}

export default Button