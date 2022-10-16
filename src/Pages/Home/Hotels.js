import React from 'react';
import { Link } from 'react-router-dom';
import delightHotelImg from '../../images/h2.png'
import royalHotelsImg from '../../images/h3.png'
import airBlueHotelsImg from '../../images/h4.png'

const Hotels = () => {
    return (
        
        
  <div>
  <div className='text-start ml-10 my-20'>
  <h1 className=' text-3xl  '>Recommended Hotels</h1>
    <p>Book hotels as based upon experienced the <br /> best booking ever. Highly recommended</p>
  </div>
 <div className='flex row-span-3 gap-5 m-10'>

<div className="card mt-[-70px] shadow-xl">
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
 <Link href=""> Learn more</Link>
 </div>
</div>        
</div>
</div>
<div className="card mt-[-40px]  shadow-xl">
    <figure><img src={royalHotelsImg} alt="Shoes" /></figure>
    <div className="card-body">
 <div className='flex justify-between gap-40'>
 <h2 className="card-title">Royal Hotels</h2>
 <p className="card-title"> Singapore</p>
 </div>
 <div className="rating rating-xs mt-2">
 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
 <div className='flex gap-52'>
 <span>(300)</span>
 <Link href=""> Learn more</Link>
 </div>
</div>        
</div>
</div>

<div className="card   shadow-xl">
    <figure><img src={airBlueHotelsImg} alt="Shoes" /></figure>
    <div className="card-body">
 <div className='flex justify-between gap-40'>
 <h2 className="card-title">Air Blue Hotels</h2>
 <p className="card-title"> Singapore</p>
 </div>
 <div className="rating rating-xs mt-2">
 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
 <div className='flex gap-52'>
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