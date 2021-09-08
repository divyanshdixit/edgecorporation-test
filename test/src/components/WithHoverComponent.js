import React, {useState} from 'react';

const WithHoverComponent = (WrapperComponent) =>{
    const WithHover = () =>{
        const [hoverText, sethoverText] = useState(false);
        const [textColor, settextColor] = useState('blue');
        return <WrapperComponent textColor={textColor} hoverText={hoverText}
                onMouseOver = {() => {sethoverText(true)}}
                onMouseLeave = {() => {sethoverText(false)}}
                onClick={() => {settextColor('black')}} />

    }
    return WithHover;
}
export default WithHoverComponent; 