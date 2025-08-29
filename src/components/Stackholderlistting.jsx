import React from 'react'
import { Button } from './ui/button'
import event from '@/assets/hero/event1.avif'
import news from '@/assets/hero/news1.png'
import attendance from '@/assets/hero/atencheck.png'
import self_s from '@/assets/hero/study1.jpg'
import kizaen from '@/assets/hero/kizan1.png'
import sop from '@/assets/hero/sop1.webp'
import { Link } from "react-router";

export default function Stackholderlistting() {
  return (

   <div className="flex flex-wrap justify-center gap-16 p-6 bg-blue-950">

  {/* Card 1 */}
  <div className=" group w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
    <div className="relative h-56 overflow-hidden rounded-2xl ">
    <img
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 "
      src={attendance}
      alt="Hotel"
    />
  </div>
    <div className="p-5">
      <h3 className="text-2xl font-bold text-gray-800">Attendance </h3>
<Link to="/attendance" className="text-blue-500 hover:underline mt-2 block">
       <Button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700 transition">
       Check your Attendance
      </Button>  
      </Link>
    </div>
  </div>

  {/* Card 2 */}
  <div className="group w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
   <div className="relative h-56 overflow-hidden">
    <img
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      src={news}
      alt="Hotel"
    />
  </div>
    <div className="p-5">
      <h3 className="text-2xl font-bold text-gray-800">Company News</h3>
      <Link to="/news" className="text-blue-500 hover:underline mt-2 block">

       <Button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700 transition">
        Read More
      </Button>
      </Link>
    </div>
    </div>
  

  {/* Card 3 */}
  <div className="group w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
    <div className="relative h-56 overflow-hidden">
    <img
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      src={self_s}
      alt="Hotel"
    />
  </div>
    <div className="p-5">
      <h3 className="text-2xl font-bold text-gray-800">Self-Study</h3>
            <Link to="/selfstudy" className="text-blue-500 hover:underline mt-2 block">

       <Button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700 transition">
        Learn More
      </Button>
      </Link>
    </div>
  </div>

    <div className="group w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
  <div className="relative h-56 overflow-hidden">
    <img
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      src={kizaen}
      alt="kizanen"
    />
  </div>
  <div className="p-5">
    <h3 className="text-2xl font-bold text-gray-800">Kaizen</h3>
                <Link to="/Kaizan" className="text-blue-500 hover:underline mt-2 block">

  <Button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700 transition">
       Uplode Your Kaizen
      </Button>
      </Link>
    </div>
</div>


<div className="group w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
  <div className="relative h-56 overflow-hidden">
    <img
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      src={sop}
      alt="Hotel"
    />
  </div>
  <div className="p-5">
    <h3 className="text-2xl font-bold text-gray-800">SOP and STW Learning</h3>
    <Link to="/Sop" className="text-blue-500 hover:underline mt-2 block">
    <Button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700 transition">
        Understading SOP
      </Button>
      </Link>
    </div>
</div>

<div className="group w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
  <div className="relative h-56 overflow-hidden">
    <img
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      src={event}
      alt="Hotel"
    />
  </div>
  <div className="p-5">
    <h3 className="text-2xl font-bold text-gray-800">Event</h3>
    <Link to="/Event" className="text-blue-500 hover:underline mt-2 block">
    <Button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700 transition">
        View Events
      </Button></Link>
   
    </div>
</div>






</div>

  );
};
