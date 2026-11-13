import notificaciones from "../data/notificaciones"
const ListaNotificaciones = () => {
    return (
        <section>
            <h2>Alertas del Sistema</h2>
            {notificaciones.map((notificacion) => (     
                <div key={notificacion.id}>           
                    <h4>{notificacion.titulo}</h4>  
                    <span>Estado: {notificacion.leida ? 'Leída' : 'Pendiente'}</span>
                </div>
            ))}
        </section>
    )
}
export default ListaNotificaciones

