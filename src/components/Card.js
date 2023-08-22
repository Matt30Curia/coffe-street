import coffe from "../asset/coffe.png"
import star from "../asset/icons_star.png"
import cart from "../asset/cart.png"

function Rating(){
    return(
        <div className="rating--card">
            4.8    
            <img className="star" src = {star} alt="" />
        </div>
    )
}



function Card(){
    return(
        <div className="border--card">
            <div className="background--card">

                <div className="image--card">
                    <img className="coffe" src = {coffe} alt="coffe"/>
                    <Rating/>
                </div>

                <div className="text-container--card">
                    <h2 className="name--card">Vanilla Latte</h2>
                    <h2 className="order--card">48k</h2>
                    <div style={{clear: "both;"}}></div>
                </div>

                <div className="button-conatiner--card">
                    <button className="button--card">hot</button>
                    <button className="button--card">cold</button>
                    <button class="rounded--card" > <img src ={cart} alt="" /> </button>
                </div>

            </div>
        </div>
    )
}


export default Card
