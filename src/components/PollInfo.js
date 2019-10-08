import React from 'react'

const PollInfo = ({name, country, state, sport}) => (
<div className="pollInfo">
  <div className="name">{name}</div>
  <div className="country">{country}</div>
  <div className="sport">{sport}</div><br/>
  <div className="state">{state}</div><br/>
</div>      
)

export default PollInfo;

