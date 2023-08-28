import choseCoffee from "../asset/chose-coffee.png"
import coffe from "../asset/coffe-cup.png"
import truck from "../asset/track.png"
import "../style/Delivery.css"

function Card({img , text, title}){
  return (
    <div className="card--delivery">
      <img className="img--delivery" alt="" src={img} />
      <p className="title--delivery">{title}</p>
      <p className="p--delivery">{text}</p>
    </div>
  );}



function Delivery(){
    return (
      <div className="container--delivery">
        <h2 className="name--delivery">How to use delivery service</h2>
        <Card
          img={choseCoffee}
          text="there are 20+ coffees for you"
          title="choose your coffee"
        />
        <Card
          img={truck}
          text="Choose delivery service"
          title="we delivery it to you"
        />
        <Card
          img={coffe}
          text="taste your coffee"
          title="Enjoy your coffee"
        />
      </div>
    );
}

export default Delivery