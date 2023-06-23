const ItemList = (props) => {
    return (
        <li>
            <h5>Producto: {props.name}</h5>
            <p>Precio: {props.price}</p>
        </li>
    )
}

export const ItemListContainer = (props) => {
    return(
        <section>
            <div>
            <h2>CARRITO</h2>
            <button className="btn-close" onClick={props.event}>X</button>
            </div>
            <ul>
                <>
                    <ItemList name="Auriculares inalámbricos" price="$16000"/>
                    <ItemList name="Smartwatch" price="$8000"/>
                    <ItemList name="Cámara de acción" price="$64000"/>
                </>
            </ul>
        </section>
    )
}