
const Alert = () => {
    const tipo = "Alerta Crítica";
    const mensaje = "El servidor de base de datos no responde.";
    return (
        <div className="bg-red-50 border-l-4 border-red-600 p-4 text-red-700 my-4">
            <strong>{tipo}: </strong> {mensaje}
        </div>
    );
}
export default Alert