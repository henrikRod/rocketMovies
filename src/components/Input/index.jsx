import "./styles.css"

export function Input({icon: Icon, ...rest}) {
  return(
    <div className="inputContainer">
      {Icon && <Icon size={20}/>}
      <input {...rest} />
    </div>
  )
};