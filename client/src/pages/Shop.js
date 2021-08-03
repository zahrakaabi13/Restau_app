import { NavbarMenu } from "../components/Navbar"
import ProductList from '../components/product'
import { Footer } from '../components/footer'

export const Shop = () => {
    return (
      <>
        <main className="landing shop-cov">
          <NavbarMenu/>
          <div className="shop-descrip col-md-12">
            <h3>Shop all</h3>
            <p>
            Explore our curated collection of recepieces made in Tunisia,  <br></br> Italien and Japan.  From wheat to organic pasta and Japanese <br></br> food, each piece has been thoughtfully selected.
            </p>
          </div>
          <ProductList/>
          <Footer/>
        </main>
        
      </>
    )
} 