import React from 'react';

const Button = ({text,size,textColor="white",bgColor="black",padding="1rem 3rem",brr="1rem"}) => {
    const buttonStyle = {
        color: textColor,
        fontSize:size,
        backgroundColor: bgColor,
        padding,
        borderRadius: brr,
        border:"none",
      };
  return (
    <>
    <button style={buttonStyle}>{text}</button>
    </>
  );
};

export default Button;