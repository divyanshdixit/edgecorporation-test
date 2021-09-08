import React from 'react';
import WithHoverComponent from "./WithHoverComponent";

function HoverComponent(props){
    // destructuring the props:
    const {textColor, hoverText, ...restProps} = props;
    return (
        <>
            <h2 {...restProps} style={{color:textColor}} > Mouse {hoverText ? 'Hover' : "Out"}</h2>
        </>
    )
}

export default WithHoverComponent(HoverComponent)