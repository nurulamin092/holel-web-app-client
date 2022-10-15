import React from 'react';
import sImg from '../../images/h5.png'
const Service = () => {
    return (
        <div>

                <div className="card lg:card-side  shadow-xl m-10">
                 <figure><img className='rounded-tr-el' src= {sImg} alt="Album"/></figure>
                     <div className="card-body">
                        <h2 className="card-title text-2xl">Benefits of using our services</h2>                     
                  
                    <div className="card-actions justify-center"> 
                        <h2 className='text-xl'>01 Best Breakfast</h2> 
                        <p className='text-xl'>Amet minim mollit non deserunt <br /> ahjas ullamco  est sit aliqua dolor <br /> amet sint. Velit officia consequat </p>

                    </div>
                    <div  className="card-actions justify-center">
                        <h2 className='text-xl'>02 Parking Area</h2>
                        <p className='text-xl'>Amet minim mollit non deserunt <br /> ahjas ullamco  est sit aliqua dolor <br /> amet sint. Velit officia consequat </p>

                    </div>
                    <div  className="card-actions justify-center">
                        <h2 className='text-xl'>03 Free Electicity</h2>
                        <p className='text-xl'>Amet minim mollit non deserunt <br /> ahjas ullamco  est sit aliqua dolor <br /> amet sint. Velit officia consequat </p>

                    </div>
                 </div>
                </div>
            
        </div>
    );
};

export default Service;