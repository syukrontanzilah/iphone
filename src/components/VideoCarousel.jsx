import React, { useRef, useState } from 'react'
import { hightlightsSlides } from '../constants'

const VideoCarousel = () => {
  const videoRef = useRef([])
  const videoSpanRef = useRef([])
  const videoDivRef = useRef([])

  const [video, setVideo] = useState({
    
  })

  return (
    <>
    <div className='flex items-center'>
 {hightlightsSlides.map((item)=>{
  return(
    <div key={item.id} id='slider' className='sm:pr-20 pr-10'>
      <div className='video-carousel_container'>
        {/* video container */}
        <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
          <video 
          autoPlay
          playsInline={true}
          preload='auto'
          muted
          id='video'
          >
            <source src={item.video} type='video/mp4'/>
          </video>
        </div>

        <div className='absolute top-12 left-[5%] z-10'>
          {item.textLists.map((text,i)=>{
            return(
              <p className='md:text-2xl text-xl font-medium' key={i}>{text}</p>
            )
          })}
        </div>

      </div>
    </div>
  )
 })}
    </div>
    </>
  )
}

export default VideoCarousel