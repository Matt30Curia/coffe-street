import choseCoffee from "../asset/chose-coffee.png"
import coffe from "../asset/coffe-cup.png"
import truck from "../asset/track.png"

function Card({img , text, title}){
  return( 
    <div className="card--delivery">
        <img src = {img} />
        <p>{title}</p>
        <p>{text}</p>
    </div>
)}



function Delivery(){
    return (
      <div className="container--delivery">
        <h2 className="title--delivery">How to use delivery service</h2>
        <Card img={choseCoffee} text="there are 20+ coffees for you" />
        <Card img={truck} text="Choose delivery service" />
        <Card img={coffe} text="Choose delivery service" />
      </div>
    );
}

export default Delivery