import React from 'react'
import styled from 'styled-components';
import propTypes from 'prop-types';

const PollOptions = ({homeName, awayName, draw }) => {
  const handleSubmit = (e) => {
    console.log('IM CLICKED IN HANDLESUBMIT');
  }

  return (
    <form className="options" onSubmit={handleSubmit} >
        <StyledBtn className="homeName" value={homeName} onClick={e => console.log({homeName})}> {homeName} </StyledBtn> 
        <StyledBtn className="draw" value={draw} onClick={e => console.log({draw})}> Draw </StyledBtn>
        <StyledBtn className="awayName" value={awayName}  onClick={e => console.log({awayName})}>{awayName}</StyledBtn>
    </form>    
  )}

export default PollOptions;

const StyledBtn = styled.button`
  position: relative;
  font-size: 2.6vmin;
  cursor: pointer;
  margin: 5px;
  width: 50%;
  border-radius: 20%;
  background-color: #232020;
  color: white;
  border-style: dotted;

  :hover {
    background-color: #778472;
    color: white; 
    width: 70%;  
    } 
  }
`


// localStorage.setItem('user', rememberMe ? user : '');