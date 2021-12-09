import React from "react";
import styled from "styled-components";

const ExplanationContainer = styled.div `
    padding-top: 30px;
    justify-content: center;
    font-size: 1.8em;
`
const TextDiv = styled.div `
    font-size: .7em;
    margin:10px 80px 15px 80px;
`

function Explanation (props) {
    return (
        <ExplanationContainer> More Info:
            <TextDiv>{props.explanation}</TextDiv>
        </ExplanationContainer>
    )
    }

export default Explanation;    
