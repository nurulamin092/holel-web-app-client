import React from 'react';
import serviceImg from '../../images/icons/Rectangle13.png'
import serviceHImg from '../../images/serviceHImg.png';
import Service from './Service';
const Services = () => {
 
  const services = [
    {
      serviceNumber: "01",
      name: "Best Breakfast",
      img: serviceImg,
      description: "Amet minim mollit non deserunt ahjas ullamco est sit aliqua dolor amet sint. Velit officia consequat ",
      
    },
    {
      serviceNumber: "02",
      name: "Parking Area",
      img: serviceImg,
      description: "Amet minim mollit non deserunt ahjas ullamco est sit aliqua dolor amet sint. Velit officia consequat ",
      
    },
    {
      serviceNumber: "03",
      name: "Free Electicity",
      img: serviceImg,
      description: "Amet minim mollit non deserunt ahjas ullamco est sit aliqua dolor amet sint. Velit officia consequat ",
      
    },
  ];
    return (
       
    <div className='section m-10'>
      <div className='flex gap-4'>
        <div>
          <img src={serviceHImg} alt="" />
        </div>    
        <div>     
      <div>
        <h2 className=" text-2xl mt-10">Benefits of using our services</h2>
      </div>
      <div>
        {services.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </div>
    </div>
        </div>
        
     
    </div>
    );
};

export default Services;
