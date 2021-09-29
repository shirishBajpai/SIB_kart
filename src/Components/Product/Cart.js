import { useState } from "react";
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import "./Cart.css";

const Cart = (prop) => {
    const [modalOpen, setModalOpen] = useState(false);
    
    const removeItem = (id) => {
        console.log(id);
        const arr = prop.yourCart.filter((item) => item.id != id);
        prop.setYourCart(arr);
        // prop.setYourCart(arr.length);
    }
    
    return (
        <>
            <span className="modal__button" onClick={() => setModalOpen(!modalOpen)}>
                Cart
            </span>
            <Modal size="lg" toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                <div className="modal__header">
                    <p className="modal__title">
                        Your Cart
                    </p>
                    <hr/>
                </div>
                
                <ModalBody>{prop.yourCart.map((user) => (
                    <div key={user.id}>
                        <Row className="modal__body" >
                            <Col><img src={`${user.image}`} width="80" height="150" /></Col>
                             <Col className="modal__body__name"><br/><br/>{user.name}</Col>
                             <Col className="modal__body__cost"><br/><br/>&#8377; {user.Cost}</Col> 
                             <Col><br/><br/><Button color="danger" onClick={() => removeItem(user.id)} >Remove</Button></Col> 
                        </Row>
                        <hr/>
                    </div>
                ))}</ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        Close
                    </Button>
                    <Button color="success" >
                        purchase
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default Cart;