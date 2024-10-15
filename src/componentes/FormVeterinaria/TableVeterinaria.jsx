import PropTypes from "prop-types";
import CardPaciente from "./CardPaciente";
import Swal from "sweetalert2";

const TableVeterinaria = (props) => {
  const { pacientes, setPacientes } = props;
  const deleteCard = (paciente, idPaciente) => {
    Swal.fire({
      title: "Atencion",
      text: `Estas por eliminar ${paciente.nombreMascota}.¿Estas seguro que deseas eliminarlo?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "SI , eliminar",
      cancelButtonText: "NO",
      confirmButtonColor: "red",
    }).then((res) => {
      if (res.isConfirmed) {
        const nuevaLista = pacientes.filter(
          (paciente) => paciente.id !== idPaciente
        );
        setPacientes(nuevaLista);
        Swal.fire({
          title: `${paciente} ha sido eliminado correctamente`,
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  return (
    <div className="  row g-3 m-2 border border-dark rounded-4 w-75 mx-auto text-center">
      <h1>Citas:</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {pacientes.map((paciente) => {
          return (
            <CardPaciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPacientes}
              deleteCard={deleteCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TableVeterinaria;

TableVeterinaria.propTypes = {
  pacientes: PropTypes.array.isRequired,
  setPacientes: PropTypes.func.isRequired,
};
