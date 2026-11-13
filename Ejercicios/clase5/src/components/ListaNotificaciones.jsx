import notificaciones from "../data/notificaciones"
import CursosCard from "./CursosCard"
const ListaNotificaciones = () => {
    return (
        <section>
            <h2>Alertas del Sistema</h2>
            {notificaciones.map((notificacion) => (     
                <CursosCard key={notificacion.id} 
            nombre={notificacion.titulo}
            estado={notificacion.leida}
            />
            ))}
        </section>
    )
}
export default ListaNotificaciones
