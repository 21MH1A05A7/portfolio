import React , {useEffect} from 'react'
import github from '../github.png';
import garage from '../Garage.jpg';
import react from '../react.png';
import tailwind from '../tailwind.png';
import node from '../node.png';
import monogo from '../mongodb.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState } from 'react';
import graph from '../graphql.png';
import spring from '../spring.png';

const Skills = () => {

  const data=[
    {
        "image": react,
        "name": "React Js",
        "about": "The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application, corresponding with the view in the MVC template."
    },
    {
        "image": node,
        "name": "Node Js",
        "about": "Node.js is known for its non-blocking, event-driven architecture, making it efficient and suitable for real-time applications."
    },
    {
        "image": tailwind,
        "name": "Tailwind CSS",
        "about": "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. Tailwind provides low-level utility classes that let you build completely custom designs"
    },
    {
        "image": monogo,
        "name": "MongoDB",
        "about": "It is known for its flexibility, scalability, and performance. MongoDB is often used for applications that require large-scale data storage, real-time analytics, and high availability."
    },
    {
      "image": spring,
      "name": "Spring Boot",
      "about": "Spring Boot is an open-source Java-based framework used to create standalone, production-grade Spring-based applications with minimal effort."
  },
  {
    "image": graph,
    "name": "GraphQL",
    "about": "GraphQL is a query language for APIs and a runtime for executing those queries by providing a complete and understandable description of the data in your API."
}
]


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#31363F" ,width:"50px" , height:"50px" , borderRadius:"50px" ,alignItems:'center' , paddingTop:"15px", paddingLeft:"15px",paddingRight:"15px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#31363F" ,width:"50px" , height:"50px" , borderRadius:"50px" ,alignItems:'center' , paddingTop:"15px", paddingLeft:"15px",paddingRight:"15px"}}
      onClick={onClick}
    />
  );
}


const [sliderSettings, setSliderSettings] = useState({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
});

useEffect(() => {
  const handleResize = () => {
      if (window.innerWidth < 768) {
          setSliderSettings({
              ...sliderSettings,
              slidesToShow: 1,
              slidesToScroll: 1
          });
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
          setSliderSettings({
              ...sliderSettings,
              slidesToShow: 2,
              slidesToScroll: 2
          });
      } else {
          setSliderSettings({
              ...sliderSettings,
              slidesToShow: 3,
              slidesToScroll: 2
          });
      }
  };

  handleResize();
  window.addEventListener('resize',handleResize);
  return ()=>{
      window.removeEventListener('resize',handleResize);
  }
}, []);

  return (
    <div className='align-items'>
      <div className='text-center mx-auto max-w-7xl w-screen h-fit mt-28 p-6 rounded-lg'>
        <h1 className='text-4xl font-medium'>Skills</h1>
        <Slider {...sliderSettings} className='sm:grid sm:grid-cols-3 h-[300px] px-4 mt-6'>
          {data.map((item)=>{
            return (
              <div className='content-center w-[300px] space-y-4'>
                <div className={`w-fit rounded-full mx-auto shadow-lg`}>
                  <img src={item.image} alt="" className={`w-20 h-20 ${item.image===monogo ? 'p-3' :'p-2' }`}/>
                </div>
                <div className='space-y-3'>
                  <h1 className='text-lg font-semibold'>{item.name}</h1>
                  <p className='text-gray-500'>{item.about}</p>
                </div>
              </div>
        )})}
       
        </Slider>
      </div>
    </div>
  )
}

export default Skills
