import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="container-login">
      <h3>Iniciar Sesión</h3>

      <div className="container-text">
        <input type="text" placeholder="Usuario" /><br />
        <input type="password" placeholder="Contraseña" /><br />
      </div>

      <div className="container-button">
        <button>Iniciar Sesión</button>
        <button onClick={() => navigate("/form")}>Crear Cuenta</button><br />
        <button onClick={() => navigate("/")}>Volver al inicio</button>


      </div>
    </div>
  );
}

export default Login;