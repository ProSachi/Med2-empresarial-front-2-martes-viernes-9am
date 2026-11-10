import userMock from "../data/userMock";

const Notificacion = () => {
    const estaCargando = false;
    return (
        <div className={`${estaCargando ? 'bg-verde' : 'bg-amarillo'}`}>
            {/* Ternario: Dos caminos posibles */}
            {estaCargando ? <p>Cargando datos...</p> : <p>Datos listos.</p>}
            {/* En su tarjeta, agregar si una variable cargando.
            si  cargando es true el background debe ser amarillo
            si  cargando en false, debe ser verde */}
            <p className={`${userMock.activo ? 'bg-verde' : 'bg-rojo'}`}>Estado por color</p>
        </div>
    );
}

export default Notificacion