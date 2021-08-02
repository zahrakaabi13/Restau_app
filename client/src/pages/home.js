import {NavbarMenu} from '../components/Navbar'
import { About } from '../components/About'
import { Pasta } from '../components/gradients'
import { Review } from '../components/review'
import { Form } from '../components/formContact'
import { Footer } from '../components/footer'

export const Home = () => {
    return (
        <>
        <NavbarMenu/>
        <div className="landing"></div>
        <About/>
        <Pasta/>
        <Review/>
        <Form/>
        <Footer/>
        </>
    )
}