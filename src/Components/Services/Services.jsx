import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'      // importing services data from assets whish is array of objects
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='services'>

      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="theme_pattern_img" />
      </div>

      <div className="services-container">
        {Services_Data.map((service, index)=>{  //return whole div for each service
            return <div className='services-fromat'> 
                <h3>{service.s_no}</h3>          
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>

                <div className='services-readmore'>
                    <p>Read More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
        })}
      </div>


    </div>
  )
}

export default Services
