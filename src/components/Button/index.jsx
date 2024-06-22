import "./styles.css"

export function Button({icon: Icon, title, btnStyle = ""}) {
  return (
    <button className={`customButton ${ btnStyle }`}>
      {Icon && <Icon size={20}/>}
      {title}
    </button>
  )
}