import { useState } from "react";
import Menu from "./pages/menu";
import Usuario from "./pages/usuario";
import Estadistica from "./pages/estadisticas";
import { useNavigate } from "react-router-dom";

function App(){
  const navigate = useNavigate();
  const [pagina, setPagina] = useState<"menu" | "usuario" | "estadistica"|"home">("home");
  return(
    <div className="container-header">
      <h3>Pagina principal</h3>

      <table border={4}>
          <tr>
            <th>
              <div className="container-button">
                <button onClick={() => setPagina("menu")}>Crear Menú</button><br />
                <button onClick={() => setPagina("usuario")}>Gestion de Ususarios</button><br />
                <button onClick={() => setPagina("estadistica")}>Estadistica de Ventas</button><br />
              </div>
              <button onClick={() => navigate("/login")}>Iniciar sesión</button>
            </th>
            
            <th>
              {pagina === "menu" && <Menu/>}
              {pagina === "usuario" && <Usuario/>}
              {pagina === "estadistica" && <Estadistica/>}
            </th>
          </tr>
      </table>
    </div>
    
  );
}

export default App;