import { useState } from "react";
import { Button, Col, Input, Row } from "reactstrap";
import "./Contact.css";

const Contact = () => {

    const [name, setName] = useState('');

    const submit = () => {
        alert("Thankyou "+name+ " for contacting us we will get to you soon");
    }

    const contactName = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <br />
            <br />
            <Row className="contact container">
                <Col><div >
                    <p className="contact__heading">SIB-kart Help Center | 24x7 Customer Care Support</p>
                    <p className="contact__text">The SIB-kart Help Centre page lists out various types of issues that you may have encountered so that there
                        can be quick resolution and you can go back to shopping online. For example, you can get more information
                        regarding order tracking, delivery date changes, help with returns (and refunds), and much more. The SIB-kart
                        Help Centre also lists out more information that you may need regarding SIB-kart Plus, payment, shopping,
                        and more. The page has various filters listed out on the left-hand side so that you can get your queries
                        solved quickly, efficiently, and without a hassle. You can get the SIB-kart Help Centre number or even
                        access SIB-kart Help Centre support if you need professional help regarding various topics. The support
                        executive will ensure speedy assistance so that your shopping experience is positive and enjoyable.
                        You can even inform your loved ones of the support page so that they can properly get their grievances
                        addressed as well. Once you have all your queries addressed, you can pull out your shopping list and
                        shop for all your essentials in one place. You can shop during festive sales to get your hands on some
                        unbelievable deals online. This information is updated on 27-Sep-21</p>
                </div>
                </Col>

                <Col>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                    <Input type="text" className="contact_input" onChange={contactName} placeholder="Name..." ></Input>
                    <Input type="email" className="contact_input" placeholder="Email Id..."></Input>
                    <Input type="textarea" rows="5" className="contact_input" placeholder="Message..."></Input>
                    <Button className="contact_button" onClick={submit} >Submit</Button>
                </Col>
            </Row>
        </div>
    );
}

export default Contact;