import React from 'react';
// import serviceImg from '../../images/icons/Rectangle13.png'
import serviceHImg from '../../images/clients/c1.png'
import c2Img from '../../images/clients/c2.png'
import c3Img from '../../images/clients/c3.png'
import Client from './Client';

const Clients = () => {
  const customers = [
    {
      
      name: "Floyd Miles",
      img: serviceHImg,
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.", 
    },
    {
      
      name: "Ronald Richards",
      img: c2Img,
      description: "ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.  Exercitation veniam consequat sunt nostrud amet. ",
      
      },
    {
     
      name: "Savannah Nguyen",
      img: c3Img,
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  duis enim velit mollit. Exercitation veniam consequat  sunt nostrud amet. Amet minim mollit non deserunt ullamco     est sit aliqua dolor do amet sint. Velit officia   consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      
    },
  ];
    return (
       
    <div>
          <div className='flex justify-between  m-10'>
                <div>                   
                    <h2 className='text-3xl font-bold'> Our Customer Feedback</h2>
                    <span>Don’t take our word for it. Trust our customers</span>
                </div>
                <div className="btn-group grid grid-cols-2 mr-10">
                    <button className="btn btn-outline">Previous page</button>
                    <button className="btn btn-outline">Next</button>
                </div>
            </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  m-5 gap-2'>
        {customers.map((customer, index) => (
          <Client key={index} customer={customer} />
        ))}
      </div>
     
    </div>
    );
};

export default Clients;