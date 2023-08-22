
import heroImage from '../asset/img-hero.png'

function Hero()
{
    return(
        <div className="hero">

            <img src = {heroImage} alt = 'hero' className='image--hero'/>

            <div className='text--hero'>
                <h1 className="title--hero">
                    Enjoy your coffee<br/> before your activity
                </h1>
                <p className="description--hero"> 
                    Boost your productivity and build your <br/>mood with a glass of coffee in the morning 
                </p>
            </div>

            <button className="button--hero">Order now</button>
            
        </div>
    )
}

export default Hero