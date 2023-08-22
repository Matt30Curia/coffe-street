import cart from '../asset/icon_cart.svg';
import logo from '../asset/logo.svg';

function Navbar(){
    return (
        <nav>
            <img src = {logo} alt = "logo" className='logo'/>
            <div className='text--navbar'>

                <h3 className='link--navbar'>about us</h3>  {/*mettere un router*/}
                <h3 className='link--navbar' >delivery</h3>
            
            </div>
            <div className='input--navbar'>
                <input placeholder='cappuccino' className='searchBar'/>
                <img src = {cart} alt="cart" className='cart'/>
            </div>
        </nav>
    )
}

export default Navbar