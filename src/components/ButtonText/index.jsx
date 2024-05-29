import { Link } from "react-router-dom";
import "./styles.css";

export function ButtonText({ title, icon: Icon, ...rest} ) {
  return (
    <Link className="customButtonText" {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Link>
  )
}