import Button from "./Button";

function PerfilUsuario() {
  const nombre = "Cristin"; // Lógica de JS
  
  // Retorno de JSX
  return (
    <div className="tarjeta-perfil">
      {/* Las llaves {} permiten inyectar expresiones de JavaScript puro */}
      <h1>Perfil de {nombre}</h1> 
      <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Avatar del usuario" />
    <Button />
    </div>
  );
}

export default PerfilUsuario