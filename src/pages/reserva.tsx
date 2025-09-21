export default function Reserva(){
    return(
        <div className="container-menu">
            <h3>Reserva de Mesas</h3>

            <div className="container-text">
                <input type="text" placeholder="Nombre" />
                <input type="number" placeholder="Detalle del Pedido" />
                <input type="number" placeholder="Total" />

                <select>
                    <option value="mesa1">Mesa 1</option>
                    <option value="mesa2">Mesa 2</option>
                    <option value="mesa3">Mesa 3</option>
                    <option value="mesa4">Mesa 4</option>
                </select>
            </div>
            <div className="container-button">
                <button>Guardar</button>
            </div>
        </div>
    );
}