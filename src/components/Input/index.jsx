import "./styles.css"

export function Input({icon: Icon, isNewTag, handleConfirmAction, ...rest}) {
  return(
    <div className={`inputContainer ${isNewTag ? "newTag" : ""}`} >
      {Icon && <Icon size={22} onClick={handleConfirmAction} />}
      <input {...rest} />
    </div>
  )
};