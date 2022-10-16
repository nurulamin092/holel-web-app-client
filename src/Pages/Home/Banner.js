import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../../images/h1.png'
const Banner = () => {
    return (
        <div>
<div className="hero max-w-full min-h-screen"  style={{ background: `url(${bgImg})`, backgroundSize: 'cover' }}>
  <div className="hero-content flex-col lg:flex-row justify-evenly">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-white font-bold">Find Most <br /> Luxurious Hotels <br /> Across the Globe</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Where you go?</span>
          </label>

          <input type="text" placeholder="try 'pakistan'"  className="input input-bordered" />
          
        </div>
        <div className="form-control w-full max-w-xs">
  <label className="label ">
    <span className="label-text text-white font-semibold">Guest </span>
  </label>
  <select className="select select-bordered">
    <option disabled selected>Pick one</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
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