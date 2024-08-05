import "./styles.css"

export function Input({icon: Icon, isNewTag, ...rest}) {
  return(
    <div className={`inputContainer ${isNewTag ? "newTag" : ""}`} >
      {Icon && <Icon size={22}/>}
      <input {...rest} />
    </div>
  )
};