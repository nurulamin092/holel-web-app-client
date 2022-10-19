import React from 'react';

const Subscribe = () => {
    return (
       
        <div>
            <div className="mx-20 py-12">
                <h2 className='text-[33px] font-bold text-center'>Subscribe to Our News letter <br /> <span className='text-sm'>Don’t miss this opportunity. Subscribe now</span></h2>

                {/* <div className='flex mt-10 justify-center'>
                    <input type="text"placeholder="Enter your email address" className="input input-bordered" />
                    <button className=' bg-primary'>Subscribe</button>
                   
                </div> */}
                <div className="">
        <form>
          <input
            type="email"
            placeholder='Enter your email address'
            className="border bg-secondary lg:w-[550px] px-6 py-3 outline-none rounded-l"
          />
          <input
            type="submit"
            value="SUBSCRIBE"
            className="bg-primary px-3 py-3 rounded-r"
          />
        </form>
      </div>
            </div>
        </div>
    
    );
};

export default Subscribe;