import React, { useRef, useState } from 'react'

const BentoTilt = ({children , className = ""}) => {
    const [transformStyle, setTransformStyle] = useState("")

    const itemRef = useRef()

    const handleMouseMove =(e)=>{

        const {top , left , height , width} = itemRef.current.getBoundingClientRect()

        const relativeX = (e.clientX - left) / width
        const relativeY = (e.clientY - top) / height

        const titleX = (relativeX - 0.5) * 50
        const titleY = (relativeY - 0.5) * -5

        const newTransform = `perspective(700px) rotateX(${titleX}deg) rotateY(${titleY}deg) scale3d(0.95 , 0.95 , 0.95) `

        setTransformStyle(newTransform)
    }
    const handleMouseLeave =()=>{
        setTransformStyle("")
    }
  return <>
  <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
  style={{transform : transformStyle}} >
    {children}
  </div>
  </>
}

export default BentoTilt
