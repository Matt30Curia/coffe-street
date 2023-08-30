import Card from "./Card";
import "../style/SpecialMenu.css"

function SpecialMenu(){
  return (
    <div className="grid--special">
      <h2 className="title--special">
        Special menu for you
      </h2>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default SpecialMenu;