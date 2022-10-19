import React from 'react';
const Service = ({service}) => {
    const {serviceNumber,name,img,description} = service;
    return (
<div className='section m-10 '>
<div className='flex gap-4'>
    
    <div className=''>   
    <h1 className="text-7xl mb-[-10px]">{serviceNumber}</h1>  
        <img src={img} alt="" className='h-20 w-24 ' />

    </div>
    <div>  
        <div className='flex gap-4 my-10'>          
            <h1 className='text-3xl'>{name}</h1>
            <p>{description}</p>       
        </div>
       
    </div>
</div>
               
            
        </div>
    );
};

export default Service;