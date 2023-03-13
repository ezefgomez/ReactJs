import React, { useState } from 'react';
import { mockedProducts } from '../../components/utils/products'; // importa el array de productos desde otro archivo

function AgregarProducto() {
    const [producto, setProducto] = useState({}); // crea un estado para el producto
    const [imagen, setImagen] = useState(null); // crea un estado para la imagen

    function handleChange(event) {
        const { name, value } = event.target;
        setProducto(prevProducto => ({ ...prevProducto, [name]: value }));
    }

    function handleImageChange(event) {
        const archivo = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImagen(reader.result);
        };
        reader.readAsDataURL(archivo);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        const productoConImagen = { ...producto, imagen }; // agrega la imagen al objeto del producto
        mockedProducts.push(productoConImagen); // agrega el producto al array de productos
        // guarda los cambios en el archivo de productos
        // muestra un mensaje de éxito o error al usuario
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>
            id:
            <input type="number" name="id" value={producto.id} onChange={handleChange} />
        </label>
        <label>
            category:
            <input type="text" name="nombre" value={producto.category} onChange={handleChange} />
        </label>
        <label>
            img:
            <input type="file" name="img" value={producto.img} onChange={handleImageChange} />
        </label>
        <label>
            name:
            <input type="text" name="nombre" value={producto.name} onChange={handleChange} />
        </label>
        <label>
            description:
            <textarea name="descripcion" value={producto.description} onChange={handleChange} />
        </label>
        <label>
            stock:
            <input type="number" name="id" value={producto.stock} onChange={handleChange} />
        </label>
        <label>
            price:
            <input type="number" name="precio" value={producto.price} onChange={handleChange} />
        </label>
        <button type="submit">Agregar Producto</button>
        </form>
    );
}

export default AgregarProducto;