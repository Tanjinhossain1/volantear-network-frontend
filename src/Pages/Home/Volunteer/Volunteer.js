import React, { useState } from 'react';

const Volunteer = ({ volunteer }) => {
  const [setlect,setSelectedColor] = useState('')
     const { name, img } = volunteer;
    const bgColor = ['#ED7359', '#F6C341 ', '#5321F2','#23B5A8','#E910DA', '#1799DD','#DF2953']

        const item = bgColor[Math.floor(Math.random()*bgColor.length)];
      
    return (
        <div className='m-5  position-relative '>
            <img className='w-100 ' src={img} alt="" />
            <h5 style={{backgroundColor: `${item}`}} className='bottom-left text-center text-white'>{name}</h5>

        </div>
    );
};


export default Volunteer;