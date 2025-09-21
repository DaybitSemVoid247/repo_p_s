
export default function Menu() {
    return (
        <div className="container-menu">
            <h3>Registro de Usuario</h3>

            <div className="container-text">
                <input type="text" placeholder="Nombre" />
                <input type="number" placeholder="Porcion" />
                <input type="number" placeholder="Precio" />

                <select>
                    <option value="postre">Postre</option>
                    <option value="almuerzo">Almuerzo</option>
                    <option value="desayuno">Desayuno</option>
                    <option value="Cena">Cena</option>
                </select>
            </div>
            <div className="container-button">
                <button>Guardar</button>
                <a href="../App.tsx"><button>volver al inicio</button></a>
            </div>
</div>

    );
}