import React from 'react';
import { Link } from 'react-router-dom';
import delightHotelImg from '../../images/rH1.png'
import royalHotelsImg from '../../images/rH2.png'
import airBlueHotelsImg from '../../images/rH3.png'

const Hotels = () => {
    return (
        
        
  <div className='my-10'>
  <div className='text-start ml-10 my-20'>
  <h1 className=' text-3xl'>Recommended Hotels</h1>
    <p className='mb-20'>Book hotels as based upon experienced the <br /> best booking ever. Highly recommended</p>
  </div>
 <div className='flex row-span-3 gap-20  m-10'>

<div className=" mt-[-70px] shadow-xl">
    <figure><img src={delightHotelImg} alt="Shoes" /></figure>
<div className="">
 <div className='flex justify-between gap-20 mt-5'>
 <h2 className="text-2xl">Delight Hotels</h2>
 <p className="text-xl"> Singapore</p>
 </div>
 <div className="rating rating-xs mt-2">
 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
 <div className='flex gap-10'>
 <span>(200)</span>
 <Link href=""> Learn more</Link>
 </div>
</div>        
</div>
</div>
<div className=" max-h-96 mt-[-35px] max-w-4xl  shadow-2xl">
    <figure><img src={royalHotelsImg} alt="Shoes" /></figure>
    <div className="d">
 <div className='flex justify-between gap-10 mt-5'>
 <h2 className="text-xl">Royal Hotels</h2>
 <p className="text-md"> Singapore</p>
 </div>
 <div className="rating rating-xs mt-2">
 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
 <div className='flex gap-10'>
 <span>(300)</span>
 <Link href=""> Learn more</Link>
 </div>
</div>        
</div>
</div>

<div className="  max-h-96 mt-[-30px] max-w-4xl  shadow-2xl">
    <figure><img src={airBlueHotelsImg} alt="" /></figure>
    <div className="">
 <div className='flex justify-between gap-5 mt-5'>
 <h2 className="text-md">Air Blue  Hotels</h2>
 <p className="text-sm"> Singapore</p>
 </div>
 <div className="rating rating-xs mt-2">
 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
 <div className='flex gap-4'>
 <span>(100)</span>
 <Link href=""> Learn more</Link>
 </div>
</div>        
</div>
</div>




</div>
  </div>
    );
};

export default Hotels;
