import React from 'react'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'
import { fireworks,christmas } from '../assets';

function Closing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-black/20 flex flex-col items-center justify-center">
      <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Fireworks background */}
        <div
          className="absolute inset-0 z-100 opacity-50"
          style={{
            backgroundImage: `url(${fireworks})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Christmas tree */}
        <div className="z-10 mb-8">
          <img
            src={christmas}
            alt="Animated Christmas Tree"
            className="w-64 h-64 object-contain"
          />
        </div>

        {/* Greeting text */}
        <div className='w-[90%] max-w-[400px]'>
          <p className="z-10 text-white text-center text-xl font-semibold px-4 drop-shadow-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, delectus? Ut delectus voluptatibus consequatur ex.
          </p>

        {/* Button */}
          <div className="flex justify-center w-full mt-12 z-10">
            <button
              className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
              onClick={() => navigate('/letter')}
            >
              <ArrowLeft /> Previous page
            </button>
          </div>   
        </div>
      </div>
    </div>

  )
}

export default Closing