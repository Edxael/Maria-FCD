import React from 'react'

// https://react-slick.neostack.com/  
import Slider from "react-slick"
// Im inporting CSS in index.html from : https://react-slick.neostack.com/docs/get-started/



import P0 from './IMG/01-Home-Slider/00.jpg'
import P1 from './IMG/01-Home-Slider/01.jpg'
import P2 from './IMG/01-Home-Slider/02.jpg'
import P3 from './IMG/01-Home-Slider/03.jpg'
import P4 from './IMG/01-Home-Slider/04.jpg'
import P5 from './IMG/01-Home-Slider/05.jpg'
import P6 from './IMG/01-Home-Slider/06.jpg'
 
export default class extends React.Component{
    render(){ 
        
        const settings = { dots: true, infinite: true, slidesToShow: 3, slidesToScroll: 1, autoplay: true, speed: 3500, autoplaySpeed: 2500, cssEase: "linear" };

        return(
            <div>
                <h1>Professional Cleaning Services </h1>

                <p>At <strong>Fashion Cleaning Day</strong> we believe that a clean environment is always in fashion.</p>
                <p>Use your time to be more successful at the office, or just enjoy and relax in a clean home, cleaning doesn't have to be your second job, let us take care of that. </p>
                <p>No job is too small.</p>


                <div className="carusel-cont" >
                    <h2>Cleaning services on a budget</h2>
                        <Slider {...settings}>
                            <div>
                                <img className="pics1" src={P0} alt="x"/>
                            </div>
                            <div>
                                <img className="pics1" src={P1} alt="x"/>
                            </div>
                            <div>
                                <img className="pics1" src={P2} alt="x"/>
                            </div>
                            <div>
                                <img className="pics1" src={P3} alt="x"/>
                            </div>
                            <div>
                                <img className="pics1" src={P4} alt="x"/>
                            </div>
                            <div>
                                <img className="pics1" src={P5} alt="x"/>
                            </div>
                            <div>
                                <img className="pics1" src={P6} alt="x"/>
                            </div>
                           
                        </Slider>
                </div>
                <br/><br/>
                
            </div>
        )
    }
}