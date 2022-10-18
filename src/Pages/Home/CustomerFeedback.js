import React from 'react';
import customerImg1 from '../../images/clients/c1.png'
import customerImg2 from '../../images/clients/c2.png'
import customerImg3 from '../../images/clients/c3.png'
const CustomerFeedback = () => {
    return (
        <section>
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
          <div className='shadow-2xl max-w-52 my-3'>   
                <div className='avatar my-5'>
                    <div className="w-24 rounded">
                        <img className="w-24 rounded" src={customerImg1} alt='' />
                    </div>
                </div>     
                <h2 className='mx-10 text-start text-2xl'>Floyd Miles</h2>  
                <p className='mx-10 text-start text-sm'>Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint. Velit officia <br /> consequat duis enim velit mollit.</p>
          </div>
          <div className='shadow-2xl max-w-52 my-3'>   
                <div className='avatar my-5'>
                    <div className="w-24 rounded">
                        <img className="w-24 rounded" src={customerImg2} alt='' />
                    </div>
                </div>     
                <h2 className='mx-10 text-start text-2xl'>Ronald Richards</h2>  
                <p className='mx-10 text-start text-sm'>
                    ullamco est sit aliqua dolor do amet sint. <br />
                    Velit officia consequat duis enim velit mollit. <br />
                     Exercitation veniam consequat sunt nostrud amet.
                </p>
          </div>
          <div className='shadow-2xl max-w-52 my-3'>   
                <div className='avatar my-10'>
                    <div className="w-24 rounded">
                        <img className="w-24 rounded" src={customerImg3} alt='' />
                    </div>
                </div>     
                <h2 className='mx-10 text-start text-2xl'>Savannah Nguyen</h2>  
                <p className='mx-10 text-start text-sm'>
                Amet minim mollit non deserunt ullamco est sit <br />
                 aliqua dolor do amet sint. Velit officia consequat <br />
                  duis enim velit mollit. Exercitation veniam consequat <br />
                   sunt nostrud amet. Amet minim mollit non deserunt ullamco 
                    est sit aliqua dolor do amet sint. Velit officia <br />
                     consequat duis enim velit mollit. Exercitation veniam <br />
                      consequat sunt nostrud amet.
                </p>
          </div>
    
        </div>

        </section>
    
        
    );
};

export default CustomerFeedback;