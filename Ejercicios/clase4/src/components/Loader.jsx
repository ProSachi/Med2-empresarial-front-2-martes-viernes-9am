import userMock from "../data/userMock"

export function Loader() {

    return (
        <div class="loader-container">
            <h3>Cargando sistema...{userMock.nombre}</h3>
            <br></br>
            <img src="spinner.gif" ></img>
            <p>Por favor espere {userMock.rol}</p>
        </div>
    )
}
