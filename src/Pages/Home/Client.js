import React from 'react';

const Client = ({customer}) => {
    const {name,img,description} = customer;
    return (
        <div className='shadow-2xl max-w-52 my-3'>   
        <div className='avatar my-5'>
            <div className="w-24 rounded">
                <img className="w-24 rounded" src={img} alt='' />
            </div>
        </div>     
        <h2 className='mx-10 text-start text-2xl'>{name}</h2>  
        <p className='mx-10 text-start text-sm'>{description}</p>
    </div>           
    
    );
};

export default Client;