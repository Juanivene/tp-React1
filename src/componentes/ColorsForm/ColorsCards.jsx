import PropTypes from "prop-types";
import Swal from "sweetalert2";

const ColorsCards = (props) => {
  const { color, colores, setColores } = props;
  const deleteColor = () => {
    console.log(colores);
    console.log(color);
    Swal.fire({
      title: "Atencion",
      text: `Estas por eliminar ${color}.¿Estas seguro que deseas eliminarlo?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "SI , eliminar",
      cancelButtonText: "NO",
      confirmButtonColor: "red",
    }).then((res) => {
      if (res.isConfirmed) {
        const nuevaLista = colores.filter((clr) => clr !== color);
        setColores(nuevaLista);
        Swal.fire({
            title: `${color} ha sido eliminado correctamente`,
            icon: "success",
            showCancelButton: false,
            showConfirmButton: false,
            timer: 2000,
          });
      }
    });
  };
  return (
    <div className="card w-50 mx-auto" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{color}</h5>
        <div
          style={{
            backgroundColor: color,
            height: "50px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        ></div>
        <button onClick={deleteColor} className="btn btn-danger">
          borrar
        </button>
      </div>
    </div>
  );
};

export default ColorsCards;
ColorsCards.propTypes = {
  color: PropTypes.string.isRequired,
  colores: PropTypes.array.isRequired,
  setColores: PropTypes.func.isRequired,
};
