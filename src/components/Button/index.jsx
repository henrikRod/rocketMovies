import "./styles.css"

export function Button({icon: Icon, title, ...rest}) {
  return (
    <button className="customButton">
      {Icon && <Icon size={20}/>}
      {title}
    </button>
  )
}