import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slice";

const Products = () => {

    // عايزين نعمل dispatch to action معين
    const dispatch = useDispatch();



    // انا عايز او لما افتح ال page يجيب لي ال products دي => useEffect
    useEffect(() =>{
        dispatch(fetchProducts())
    }, []) // after dispatch 



    // عايز اجيب ال product
    const products = useSelector((state) => state.products)

    // console.log(products)
    // هنروح بقا تحط ال products دي ف product



    return(
        <Container className="py-5">
            <Row className="mt-5">
                {products.map((product) => (
                <Col key={product.id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{height: "400px"}} variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                            {product.description}
                            </Card.Text>
                            <Card.Text>
                            {product.price} $
                            </Card.Text>
                            <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    )
}// عايزين ندوس ع add to cart => يزود ع cart (1) => ويضيفهم ف ال cart => نعمل => cart slice

/*
عايز لما ادوس ع add to cart => يعمل => dispatch to action => addToCart
عاوز اضيف ال product كله
*/


export default Products;