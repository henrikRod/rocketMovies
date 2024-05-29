import "./styles.css";

export function ButtonText({ title, icon: Icon, ...rest} ) {
  return (
    <button className="customButtonText">
      {Icon && <Icon size={20} />}
      {title}
    </button>
  )
}