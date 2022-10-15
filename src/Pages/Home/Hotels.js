import React from 'react';
import delightHotelImg from '../../images/h2.png'
import royalHotelsImg from '../../images/h3.png'
import airBlueHotelsImg from '../../images/h4.png'

const Hotels = () => {
    return (
        
        // <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        //     <div className="card-body">

        //         <div className='flex items-center'>
        //             <div className="avatar">
        //                 <div className="w-335 h-427 rounded-full ring ring-primary ring-offset-base-100 mr-5">
        //                     <img src={delightHotelImg} alt='' />
        //                 </div>
        //             </div>
        //             <div className=''>
        //                 <h4 className='text-xl'> Customer Name: </h4>
        //                 <h4 className='text-xl'> Customer Email </h4>
        //                 <p> Review:</p>
        //                 <div className="rating rating-xs">
        //                     <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        //                     <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        //                     <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        //                     <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        //                 </div>

        //             </div>
        //         </div>
        //     </div>

        // </div>
    //     <div className='my-10 '>
    //         <div className="avatar">
    //             <div className=" rounded">
    //                   <img src={delightHotelImg} alt=""/>
    //              </div>
    //         </div>
    //     <div className="avatar">
    //          <div className=" rounded">
    //            <img src={royalHotelsImg} alt="Tailwind-CSS-Avatar-component" />
    //          </div>
    //    </div>
    // <div className="avatar">
    //   <div className=" rounded">
    //     <img src={airBlueHotelsImg} alt="Tailwind-CSS-Avatar-component" />
    //   </div>
    // </div>

    <div className='flex row-span-3 gap-5 m-10'>

    <div className="card w-685 h-489  shadow-xl">
        <figure><img src={delightHotelImg} alt="Shoes" /></figure>
    <div className="card-body">
     <div className='flex justify-between gap-40'>
     <h2 className="card-title">Delight Hotels</h2>
     <p className="card-title"> Singapore</p>
     </div>
     <div className="rating rating-xs mt-2">
     <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
     <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
     <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
     <div className='flex gap-52'>
     <span>(200)</span>
     <a href=""> Learn more</a>
     </div>
    </div>
        
   
    </div>
    </div>
    <div className="card w-379 h-427  shadow-xl">
        <figure><img src={royalHotelsImg} alt="Shoes" /></figure>
    <div className="card-body">
     <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
    </div>
    </div>
    
    <div className="card w-335 h-427  shadow-xl">
        <figure><img src={airBlueHotelsImg} alt="Shoes" /></figure>
    <div className="card-body">
     <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
    </div>
    </div>
    
    
    

 </div>
    );
};

export default Hotels;