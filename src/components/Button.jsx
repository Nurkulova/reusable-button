import React from 'react'
import{ styled } from 'styled-components'


const Button = ({children,bgColor = 'normal', color,size, ...rest}) => {
  return (
    <StyledButton
        color={color} 
        bgColor={bgColor}
        size={size}
        {...rest}>
        {children}
    </StyledButton>
  )
}
const COLOR_VARIANTS ={
    primary:'rgba(255, 255, 255, 1)',
    secondary:'rgba(31, 110, 212, 1)',
}

const BACKGROUND_VARIANTS ={
    outlined:{
        hover:'rgba(255, 255, 255, 1)',
        normal:'rgba(255, 255, 255, 1)',
        active:'rgba(0, 82, 188, 1)',
    },
    contained:{
        hover:'rgba(76, 148, 240, 1)',
        normal:'rgba(31, 110, 212, 1)',
        active:'rgba(0, 82, 188, 1)',
    },
    warning:{
        hover:'rgba(255, 145, 43, 1)',
        normal:'rgba(243, 119, 5, 1)',
        active:'rgba(207, 99, 0, 1)',
    },
    danger:{
        hover:'rgba(229, 67, 67, 1)',
        normal:'rgba(223, 45, 45, 1)',
        active:'rgba(194, 11, 11, 1)',
    },
}

const FONT_SIZES = {
    small:'12px',
    medium:'14px',
    default:'16px,',
    large:'18px',


}

const getColor = (props) => {
    return  COLOR_VARIANTS[props.color || 'primary']
}
    

const getBackgroundColor =(props) =>{
    const currentVariant = BACKGROUND_VARIANTS[props.bgColor]
    return `
        background-color:${currentVariant.normal};
        &:hover{
            background-color:${currentVariant.hover};
        }
        &:active{
            background-color:${currentVariant.active};
        }
    
    `
}

const StyledButton = styled('button')`
    height:50px;
    width:200px;
    border-radius:10px;
    border:1px;
    padding:16px 68px;
    color:${getColor};
    cursor: pointer;
    &:disabled{
        background-color:rgba(201, 201, 201, 1);
    }
    font-size:${({size})=>FONT_SIZES[size || 'default']};
    ${getBackgroundColor}
`




export default Button