import React from 'react'
import styled from 'styled-components';
import propTypes from 'prop-types';

// import football from './images/football.jpg';
// import handball from './images/handball.jpg';
// import iceHockey from './images/iceHockey.jpg';
// import tennis from './images/tennis.jpg';

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

export default PollCard;

PollCard.propTypes = {
  name: propTypes.string,
  country: propTypes.string,
  state: propTypes.string,
  sport: propTypes.string,
  homeName: propTypes.string,
  awayName: propTypes.string,
}

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(2,2,2,0.2);
  transition: 0.3s;
  width: 100%;
  background-color: #6279B8;
  border-radius: 10%;
}
:hover {
  box-shadow: 1 6px 10px 5 rgba(0,0,0,0.2);
  padding: 2px 16px;
  border-radius: 30%;
`;


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