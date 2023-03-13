import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel, CarouselItem, Image } from 'react-bootstrap';

function Home() {

    const [promociones, setPromociones] = useState([]);

    function inicializarPromociones() {
        const promocionesEjemplo = [
        {
            titulo: 'Promoción de Verano',
            descripcion: 'Aprovecha nuestras rebajas en ropa de verano',
            imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKY4DUuMDr3sw3y7aZdjk58eDEh8KXTNOYK3ReQqj3wTjLJUoArHy_OT1PRfy6dIwj9hk&usqp=CAU',
        },
        {
            titulo: 'Oferta del Día',
            descripcion: 'Hoy es el día para conseguir lo que necesitas',
            imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVL7g5e2fDYbARvho5nMGmViTOWMvAt1ULNsoKziI525wfmlMUn4V2c2qdfGMk-BY96U&usqp=CAU',
        },
        {
            titulo: 'Liquidación de Invierno',
            descripcion: 'Todo lo que necesitas para el invierno',
            imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSFTaLZgQPQJRDXFDt9V3kGW2GyR4r_kxQtw&usqp=CAU',
        },
        ];
        setPromociones(promocionesEjemplo);
    }

    useEffect(() => {
        inicializarPromociones();
    }, []);

    return (
        <Container>
        <Row className="my-4">
            <Col >
            <Carousel>
                {promociones.map((promocion, index) => (
                <CarouselItem key={index}>
                    <Image src={promocion.imagenUrl} fluid className="d-block w-100" />
                    <Carousel.Caption>
                    <h3>{promocion.titulo}</h3>
                    <p>{promocion.descripcion}</p>
                    </Carousel.Caption>
                </CarouselItem>
                ))}
            </Carousel>
            </Col>
        </Row>
        </Container>
    );
}

export default Home;
