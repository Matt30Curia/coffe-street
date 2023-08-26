import Card from "./Card"
import "../style/Popular.css";

function Popular(){
    return (
      <div className="popular-now">
        <h1 className="title--popular-now">popular now</h1>

        <Card />
        <Card />
        <Card />
        <div className="background--popular"></div>
      </div>
    );
}       


export default Popular