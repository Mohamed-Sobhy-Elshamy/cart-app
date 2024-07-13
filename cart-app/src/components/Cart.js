import { Button, Image } from "react-bootstrap";
import React from "react";
import Container from "react-bootstrap/esm/Container";
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";

const Cart = () => {

    // عايز اجيب من state بتاعتي => cart => اخد product بتاعت ال cart => اعرضها قدام عنيا كده
    const cart = useSelector(state => state.cart);
    // نظهر الحاجات دي => map function

    // زرار ال delete => use Dispatch
    const dispatch = useDispatch();


    // عايزين نجمع ال price => total => use => acc
    const totalPrice = cart.reduce((acc, product) => {
        acc += product.price * product.quantity ;
        return acc;
    }, 0)



    return(
        <Container>
            <h1 className="pt-5">Welcome To Cart </h1>

        <h3>Total Price : {totalPrice.toFixed(2)} $</h3>

            <Table striped bordered hover>
                    <thead>
                            <tr>
                            <th>id</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                            </tr>
                    </thead>
                    <tbody>
                            {cart.map((product) => (
                            <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td> <Image src={product.image} style={{width: "100px", height:"100px"}} /> </td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td> <Button variant="danger" onClick={() => dispatch(deleteFromCart(product))} >Delete</Button> </td>
                            </tr>
                            ))}
                    </tbody>
            </Table>

            <Button onClick={() => dispatch(clear())} variant="success">Delete All</Button>

        </Container>
    )
}

export default Cart;   
