import React from "react";
import styled from 'styled-components'

const StyleWrapper = styled.div `
    font-size: 30px;
    padding-bottom: 20px;
`

function Title (props) {
    return (
    <StyleWrapper>
        <div> {props.title} </div>
    </StyleWrapper>
    )
    }
export default Title;    
