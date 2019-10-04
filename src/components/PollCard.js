import React from 'react'
import styled from 'styled-components';

const PollCard = ({ name, country, state, sport, homeName, awayName }) => {
    return (
        <PollWrapper className="pollCard">
            <div className="name">{name}</div>
            <div className="country">{country}</div>
            <div className="sport">{sport}</div><br/>
            <div className="state">{state}</div><br/>

            <StyledButton className="homeName">{homeName}</StyledButton><br/>
            <StyledButton className="draw">Draw</StyledButton><br/>
            <StyledButton className="awayName">{awayName}</StyledButton> 
        </PollWrapper>
    )
}
      
export default PollCard;

const PollWrapper = styled.a`
position: absolute;
width: 90%;
font-size: 2.6vmin;
margin-bottom: 10px;
background-color: grey;
color: white;
`

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
