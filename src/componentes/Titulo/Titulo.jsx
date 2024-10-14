import PropTypes from "prop-types";
import { useState } from "react";
const Titulo = (props) => {
const [msj, setMsj] = useState("")
  const {titulo} = props
  const cambiar = ()=>{if(msj ==="cambio de estado"){
  setMsj("")}else{setMsj("cambio de estado")}
  
  }
  return (
    <>
    <h1>{titulo}</h1>
    <button onClick={cambiar}>Mostrar</button>
    <p>{msj}</p>
    </>
  )
}
Titulo.propTypes = {titulo : PropTypes.string.isRequired}
export default Titulo
