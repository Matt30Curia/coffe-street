import aboutUs from "../asset/about-us.png";
import "../style/AboutUS.css";

function AboutUs() {
  return (
    <div class="background--aboutus">
      <img src={aboutUs} alt="" class="img--aboutus" />
      <div class="text-container">
        <h1 class="section-name--aboutus">About us</h1>
        <div class="text-content">
          <h2 class="title--aboutus">
            We provide quality coffee, and ready to deliver.
          </h2>
          <p class="content--aboutus">
            We are a company that makes and distributes delicious drinks. Our
            main product is made with a secret recipe and available in stores
            worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
