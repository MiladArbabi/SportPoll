import React from 'react'
import styled from 'styled-components';


const Options = ({ homeName, awayName }) => (
        <div>
          <StyledButton className="homeName">{homeName}</StyledButton><br/>
            <StyledButton className="draw">Draw</StyledButton><br/>
            <StyledButton className="awayName">{awayName}</StyledButton> 
        </div>
)

export default Options;


const StyledButton = styled.button`
  position: relative;
  font-size: 2.6vmin;
  cursor: pointer;
  margin-bottom: 10px;
  width: 350px;
  height: 30px;
  box-shadow: rgba(255, 255, 255, 0.05) 0px 3px 20px;
  border-radius: 10%;
  background-color: black;
  color: white;
  border-style: ridge;
  &:hover {
        background-color: white;
        color: black;
    }
`