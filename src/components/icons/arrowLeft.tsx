import React from 'react';



type ArrowLeftProps = {
    width?: number,
    height?: number,
    color?: string
}


const ArrowLeft = ({ width = 64, height = 64, color = 'gray' }: ArrowLeftProps) => {
    return (
        <svg version="1.1" id="Layer" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512" 
        height={`${height}`} width={`${width}`}
        fill={color}
            >
            <path  d="M213,411.6c6.4,6.1,16.5,5.8,22.6-0.6c6.1-6.4,5.8-16.5-0.6-22.6L112.3,272H432c8.8,0,16-7.2,16-16
            c0-8.8-7.2-16-16-16H112.8L235,123.6c6.4-6.1,6.6-16.2,0.6-22.6c-3.1-3.3-7.4-5-11.6-5c-4,0-7.9,1.5-11,4.4l-139.6,133
            c-6,6-9.4,14.1-9.4,22.6c0,8.6,3.3,16.6,9.7,22.9L213,411.6z"/>
        </svg>
    )
}

export default ArrowLeft;