import aboutUs from '../asset/about-us.png'


function AboutUs(){
  return (
    <div className="background--aboutus">
      <img src={aboutUs} alt="" />
      <h1 className="section-name--aboutus">About us</h1>
      <h2 className="title--aboutus">
        We provide quality coffee, and ready to deliver.
      </h2>
      <p className="content--aboutus">
        We are a company that makes and distributes delicious drinks. our main
        product is made with a secret recipe and available in stores worldwide.
      </p>
    </div>
  );
}


export default AboutUs