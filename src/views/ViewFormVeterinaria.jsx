import { useEffect, useState } from "react";
import FormVeterinaria from "../componentes/FormVeterinaria/FormVeterinaria";
import TableVeterinaria from "../componentes/FormVeterinaria/TableVeterinaria";

const ViewFormVeterinaria = () => {
  const pacientesEnLs = JSON.parse(localStorage.getItem("pacientes")) || [];
  const [pacientes, setPacientes] = useState(pacientesEnLs);
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Administrador veterinaria</h1>
      <FormVeterinaria pacientes={pacientes} setPacientes={setPacientes} />
      <TableVeterinaria pacientes={pacientes} setPacientes={setPacientes} />
    </div>
  );
};

export default ViewFormVeterinaria;
