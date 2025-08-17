import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import slider1 from '@/assets/hero/slider_1.jpg'
import slider2 from '@/assets/hero/slider_2.jpg'
import slider3 from '@/assets/hero/slider_4.jpg'
import slider4 from '@/assets/hero/slider_5.jpg'

import slideri1 from '@/assets/hero/atten2.webp'
import slideri2 from '@/assets/hero/event2.png'
import slideri3 from '@/assets/hero/kiz2.png'
import slideri4 from '@/assets/hero/news2.webp'
import slideri5 from '@/assets/hero/study2.png'
import slideri6 from '@/assets/hero/sop2.png'





const slides = [
  {
    id: 1,
    title: 'Smart Attendance Management',
    description: "Our smart Attendance Management system enables employees to check whether their attendance is marked—anytime, anywhere. With a simple interface and AI-powered search, they can easily view or verify daily and past attendance records. Designed for speed and transparency, it provides real-time insights for both employees and HR teams.",
    image: slider1,
   sideImage: slideri1 ,
  },
  {
    id: 2,
    title: 'Company News',
    description: "Stay informed with the latest updates, achievements, and announcements from our company. From new projects and partnerships to employee highlights and innovations — explore what's happening behind the scenes.",
    image: slider2,
    sideImage: slideri4,
  },
  {
    id: 3,
    title: 'Event',
    description: "Discover upcoming events, workshops, and company gatherings designed to engage, inspire, and connect. Stay updated and never miss a moment.",
    image: slider4,
    sideImage: slideri2,
  },
  {
    id: 4,
    title: 'Kaizen',
    description: "Our Kaizen system empowers employees to submit their own improvement ideas directly. Whether it's a small process enhancement or a new suggestion, every idea counts. Submissions are reviewed by the management team, encouraging a culture of innovation and continuous development.",
    image:slider3,
    sideImage: slideri3,
  },
   {
    id: 5,
    title: 'Self-Study',
    description: "Self-Study empowers employees to independently learn and upskill themselves whenever they encounter unfamiliar tasks or knowledge gaps during their work. With access to learning resources and documentation, team members can grow continuously without waiting for formal training. This encourages ownership, curiosity, and a culture of lifelong learning.",
    image:slider3,
    sideImage: slideri5,
  },
   {
    id: 6,
    title: 'SOP and STW Learning',
    description: " The SOP and STW Learning system is an effective platform that provides employees with the necessary knowledge to learn correct procedures and work efficiently and consistently",
    image:slider3,
    sideImage:slideri6,
  }
  
];


export default function HeroSlider({ height = 'h-[500px]', interval = 5000 }) {

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((current + 1) % slides.length);
      setFade(true);
    }, 400); // fade out duration
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((current - 1 + slides.length) % slides.length);
      setFade(true);
    }, 400);
  };

  useEffect(() => {
    const auto = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(auto);
  }, [current, interval]);

  const slide = slides[current];

  return (
    <div className={`relative w-full overflow-hidden ${height} bg-gray-900 text-white`}>
      {/* Background Image with Fade */}
      <div
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          fade ? 'opacity-50' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Slide Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between h-full">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">{slide.title}</h2>
          <p className="text-lg text-gray-200">{slide.description}</p>
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src={slide.sideImage}
            alt="Slide visual"
            className={`max-w-full h-auto rounded-lg transition-all duration-500 ${
              fade ? 'opacity-100' : 'opacity-0 scale-95'
            }`}
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full z-20"
      >
        ◀
      </Button>
      <Button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full z-20"
      >
        ▶
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <Button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full border border-white transition-all duration-300 ${
              index === current ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
