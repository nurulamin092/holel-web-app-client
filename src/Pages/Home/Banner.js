import React from 'react';
import bgImg from '../../images/bg1.png'
import { FaChevronDown } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
<div className="hero max-w-96 min-h-screen mt-[-100px]"  style={{ background: `url(${bgImg})`, backgroundSize: 'cover' }}>
  <div className="hero-content flex-col lg:flex-row justify-evenly">
    <div className="text-center lg:text-left">
      <h1 className="text-white lg:text-6xl flex items-end justify-between">
        <span>
              Find Most <br /> Luxurious Hotels <br /> Across the Globe
        </span>
        <span className="text-black">
            <FaChevronDown />
          </span>
      </h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Where you go?</span>
          </label>

          <input type="text" placeholder="try 'pakistan'"  className="input input-bordered" />
          
        </div>
        <div className='flex gap-4'>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Check In</span>
          </label>

          <input type="text" placeholder="10 May" className="input input-bordered max-w-sm " />
                 
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Check Out</span>
          </label>

          <input type="text" placeholder="10 May" className="input input-bordered max-w-sm" />
          
        </div>

        </div>
        <div className="form-control w-full max-w-xs">
  <label className="label ">
    <span className="label-text text-white font-semibold">Guest </span>
  </label>
  <select className="select select-bordered">
    <option disabled selected>Pick one</option>
    
  </select>
  <div className="form-control">
  <label className="label cursor-pointer ">
  <input type="checkbox" checked className="checkbox checkbox-neutral" />
    <span className="label-text text-white">Pay when checking in?</span> 
   
  </label>
</div>
  
</div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Search   Hotel</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;