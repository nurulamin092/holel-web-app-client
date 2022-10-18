import React from 'react';
import sImg from '../../images/serviceHImg.png'
const Service = () => {
    return (
        <div className='section m-10 '>
<div className='flex gap-20'>
    <div className=''>
        <img className='rounded-tr-el' src={sImg} alt="" />
    </div>
    <div>
        <h2 className="card-title text-2xl mt-10">Benefits of using our services</h2> 
        <div className='flex gap-4 my-10'>
            <h3>01</h3>
            <p>Amet minim mollit non deserunt <br /> ahjas ullamco est sit aliqua dolor <br />
             amet sint. Velit officia consequat</p>
        </div>
        <div className='flex gap-4 my-10'>
            <h3>02</h3>
            <p>Amet minim mollit non deserunt <br /> ahjas ullamco est sit aliqua dolor <br />
             amet sint. Velit officia consequat</p>
        </div>
        <div className='flex gap-4'>
            <h3>03</h3>
            <p>Amet minim mollit non deserunt <br /> ahjas ullamco est sit aliqua dolor <br />
             amet sint. Velit officia consequat</p>
        </div>
        
    </div>
</div>
               
            
        </div>
    );
};

export default Service;