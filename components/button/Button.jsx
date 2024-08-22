import React from 'react';

const Button = ({text,size,textColor="white",bgColor="black",padding="1rem 3rem",brr="1rem",gradient="transparent",shadow="black"}) => {
    const buttonStyle = {
        color: textColor,
        backgroundColor:bgColor,
        fontSize:size,
        padding,
        borderRadius: brr,
        border:"none",
        background:gradient,
        boxShadow: `0 4px 15px ${shadow}`
      };
  return (
    <>
    <button style={buttonStyle}>{text}</button>
    </>
  );
};

export default Button;