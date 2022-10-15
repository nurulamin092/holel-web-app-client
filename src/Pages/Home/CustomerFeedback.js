import React from 'react';

const CustomerFeedback = () => {
    return (
        <section>
              <div className='flex justify-between  m-10'>
                <div>                   
                    <h2 className='text-3xl font-bold'> Our Customer Feedback</h2>
                    <span>Don’t take our word for it. Trust our customers</span>
                </div>
                <div className="btn-group grid grid-cols-2 bg-accent">
                    <button className="btn btn-outline">Previous page</button>
                    <button className="btn btn-outline">Next</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  m-5 gap-2'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="avatar">
                <div className="w-24 rounded">
                    <img src="https://placeimg.com/192/192/people" alt=''/>
                </div>
            </div>
         <div className="card-body">

         <h1 className='text-2xl'>Floyd Miles </h1>      
        <p>
           Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
           amet sint. Velit officia consequat duis enim velit mollit.
           Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
           non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
           consequat duis enim velit mollit. Exercitation veniam consequat sunt 
           nostrud amet
          </p>
    
            </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="avatar">
                <div className="w-24 rounded">
                <img src="https://placeimg.com/192/192/people" alt='' />
                </div>
            </div>
    <div className="card-body">

         <h1 className='text-2xl'>Ronald Richards </h1>      
        <p>
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet
          </p>
             
        </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="avatar">
                <div className="w-24 rounded">
                    <img src="https://placeimg.com/192/192/people" alt=''/>
                </div>
            </div>
        <div className="card-body">

         <h1 className='text-2xl'>Savannah Nguyen</h1>      
        <p>
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet
          </p>
    
             </div>
         </div>
        </div>

        </section>
    
        
    );
};

export default CustomerFeedback;