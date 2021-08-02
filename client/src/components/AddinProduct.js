import { useState } from 'react'
import { useDispatch} from 'react-redux'
import {addProduct} from '../actions/action'
import {Form, Button} from 'react-bootstrap'



/*ADD PRODUCT==
====================================================================== */
export const AddinProduct = () => {


    // const product = useSelector(state=>state.productstore.datas)
    const dispatch = useDispatch()

    //Posting data from db.json================================
    //Declaring form input's state
    const [input, setInput] = useState({
      namePlat : "",
      descripPlat : "",
      pricePlat : "",
      ratePlat : ""
    }) 
  
    //Posting data to the db.json==============================
    const handelSubmit=(e)=>{
      e.preventDefault()
       dispatch( addProduct(input.namePlat, input.descripPlat, input.pricePlat, input.ratePlat))
       console.log('val input', input)
     }
  
    return(
      <div className="form-container">
         <Form onSubmit={handelSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>namePLat</Form.Label>
                <Form.Control type="text" placeholder="Enter email" 
                      name = "namePlat"
                      value={input.namePlat} 
                      onChange={ e =>setInput({...input, namePlat : e.target.value})}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>descripPlat</Form.Label>
                <Form.Control type="text" placeholder="Password" 
                      name = "descripPlat"
                      value={input.descripPlat} 
                      onChange={ e =>setInput({...input, descripPlat : e.target.value})}/>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>pricePlat</Form.Label>
                <Form.Control type="pricePlat" placeholder="pricePlat" 
                      name = "pricePlat"
                      value={input.pricePlat} 
                      onChange={ e =>setInput({...input, pricePlat : e.target.value})}/>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>ratePlat</Form.Label>
                <Form.Control type="ratePlat" placeholder="ratePlat" 
                      name = "ratePlat"
                      value={input.ratePlat} 
                      onChange={ e =>setInput({...input, ratePlat : e.target.value})}/>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
  
            <Button variant="primary" type="submit">
              Submit
            </Button>
        </Form>
      </div>
    )
  }