import { useNavigate } from "react-router-dom";
export default function Form() {
      const navigate = useNavigate();
    return (
        <div className="container-form">
            <h3>Registro de Usuario</h3>

            <div className="container-text">
                <input type="text" placeholder="Nombre completo" /><br />
                <input type="email" placeholder="Correo electrónico" /><br />
                <input type="text" placeholder="Nombre de Usuario" /><br />
                <input type="password" placeholder="Contraseña" /><br />
                <input type="password" placeholder="Confirmar contraseña" /><br />


                <select>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                    <option value="prefiero-no-decirlo">Prefiero no decirlo</option>
                </select><br />

                <select>
                    <option value="bolivia">Bolivia</option>
                    <option value="argentina">Argentina</option>
                    <option value="chile">Chile</option>
                    <option value="peru">Perú</option>
                    <option value="mexico">México</option>
                    <option value="otro">Otro</option>
                </select>
            </div>
            <div className="container-button-form">
                <button>Registrarse</button><br />
                <button onClick={() => navigate("/")}>Volver al inicio</button>
            </div>
</div>

    );
}