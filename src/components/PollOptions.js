import React, { useState } from 'react'
import styled from 'styled-components';

const PollOptions = ({homeName, awayName, draw }) => {
  const [homeWin, setHomeWin] = useState('');
  const [itsDraw, setDraw] = useState('');
  const [awayWin, setAwayWin] = useState('');

  
  const handleSubmit = (e) => {
    console.log('IM CLICKED IN HANDLESUBMIT');
  }

  return (
    <form className="options" onSubmit={handleSubmit} >
        <StyledBtn className="homeName" value={homeWin} 
            onClick={e => setHomeWin(e.target.value)}> {homeName} </StyledBtn> 
        <StyledBtn className="draw" value={itsDraw} 
            onClick={e => setDraw(e.target.value)}> {draw} Draw </StyledBtn>
        <StyledBtn className="awayName" value={awayWin} 
            onClick={e => setAwayWin(e.target.value)}> {awayName} </StyledBtn>
    </form>    
  )}

export default PollOptions;

const StyledBtn = styled.button`
  position: static;
  font-size: 2.6vmin;
  cursor: pointer;
  margin: 10px;
  width: 50%;
  border: ${props =>
    props.primary ? '2px solid violet' : '2px solid palevioletred'};
  border-radius: 20%;
  background-color: #232020;
  color: white;
  border-style: dotted;

  :hover {
    background-color: ${props =>
        props.primary ? 'violet' : 'palevioletred'};
    color: white; 
    width: 70%;  
    } 
  }
`


// localStorage.setItem('user', rememberMe ? user : '');