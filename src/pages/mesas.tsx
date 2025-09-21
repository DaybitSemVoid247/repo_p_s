import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Mesas_disp from "./mesas_disp";
import Pedidos from "./pedidos";
import Reserva from "./reserva";
export default function Mesas(){
    const navigate = useNavigate();
    const [pagina, setPagina] = useState<"mesas_disp" | "pedidos" |"reserva"|"home">("home");
    return(
        <table border={4} >
            <tr>
                        <th>
                          <div className="container-button">
                            <button onClick={() => setPagina("mesas_disp")}>Mesas Diponibles</button><br />
                            <button onClick={() => setPagina("pedidos")}>Pedidos</button><br />
                            <button onClick={() => setPagina("reserva")}>reserva</button><br />
                          </div>
                          <button onClick={() => navigate("/")}>Volver al Inicio</button>
                        </th>
                        
                        <th>
                          {pagina === "mesas_disp" && <Mesas_disp/>}
                          {pagina === "pedidos" && <Pedidos/>}
                          {pagina === "reserva" && <Reserva/>}
                        </th>
                      </tr>
        </table>
    );
}

