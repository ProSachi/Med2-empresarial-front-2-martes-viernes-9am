
const CardProducto = () => {
    /* Maquetar una tarjeta, inyectar el mock de un producto e implementar un ternario que desactive por color(gris) botón de compra si el stock es cero */
    const producto = { nombre: "Teclado Keychron", precio: 120, stock: 5 };
    return (
        <div style={{ border: '2px solid black', padding: '1rem', width: '200px' }}>
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            {producto.stock > 0 ? (
                <button>Comprar ahora</button>
            ) : (
                <p style={{ color: 'red', fontWeight: 'bold' }}>Producto Agotado</p>
            )}
        </div>
    );

}
export default CardProducto