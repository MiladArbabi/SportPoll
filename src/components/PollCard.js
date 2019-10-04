import React from 'react'
import styled from 'styled-components';

const PollCard = ({ name, country, state, sport, homeName, draw, awayName, id }) => {
    return (
        <Card className="pollBody">
            <PollInfo name={name} country={country} state={state}sport={sport}key={id}/>
            <PollOptions homeName={homeName} draw={draw} awayName={awayName}key={id}/>
        </Card>    
    )
}

const PollInfo = ({name, country, state, sport}) => (
  <div className="pollInfo">
    <div className="name">{name}</div>
    <div className="country">{country}</div>
    <div className="sport">{sport}</div><br/>
    <div className="state">{state}</div><br/>
</div>      
)

const PollOptions = ({homeName, awayName, draw, change }) => {
  const handleSubmit = (e) => {
  }

  const handleSelect = (e) => {
  }

  return (
    <form className="options" onSubmit={handleSubmit} >
        <StyledBtn type="checkbox" className="homeName" onClick={() => handleSelect}> {homeName} </StyledBtn> 
        <StyledBtn type="checkbox" className="draw" onClick={handleSelect}>Draw </StyledBtn>
        <StyledBtn type="checkbox" className="awayName" onClick={handleSelect}>{awayName}</StyledBtn>
    </form>    
  )}

export default PollCard;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;
}
:hover {
  box-shadow: 1 8px 16px 5 rgba(0,0,0,0.2);
  padding: 2px 16px;
`;


const StyledBtn = styled.button`
  position: relative;
  font-size: 2.6vmin;
  cursor: pointer;
  margin: 5px;
  width: 75%;
  border-radius: 20%;
  background-color: grey;
  color: black;
  border-style: dotted;

  :hover {
    background-color: black;
    color: white;   
    } 
  }
`