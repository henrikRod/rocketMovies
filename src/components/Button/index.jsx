import { Link } from "react-router-dom";
import "./styles.css";

export function Button({ icon: Icon, title, btnStyle = "", isLink = false, ...rest }) {
  return (
    <>
      {isLink ? (
        <Link { ...rest } className={`customButton ${btnStyle}`}>
          {Icon && <Icon size={20} />}
          {title}
        </Link>
      ) : (
        <button type="button" { ...rest } className={`customButton ${btnStyle}`}>
          {Icon && <Icon size={20} />}
          {title}
        </button>
      )}
    </>
  );
}
