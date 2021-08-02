import { Row, Col } from "react-bootstrap"
import xoxo from '../images/xoxo.png'

export const Form = () => {
    return (
        <div>
               <Row>
                   <Col md={6} className="formsection">
                   <form action="#">
                        <input type="text" className="form-control mb-3" placeholder="Name"/>
                        <input type="email" className="form-control mb-3" placeholder="E-mail"/>
                        <textarea className="form-control mb-3" id="textarea" rows="3" placeholder="Message*"></textarea>
                        <button className="text-light bouton">Submit</button>
                  </form>

                   </Col>
                   <Col md={6}>
                       <img src={xoxo} alt="" className="fork"/>
                   </Col>
               </Row>
        </div>
    )
}