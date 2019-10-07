import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import pollService from './pollService'
import PollCard from './components/PollCard';
import styled from 'styled-components';

class PollSport extends Component {

    state = {
        pollBank: [],
    };
    
    
    getPoll = () => {
        pollService().then(poll => {
            this.setState({
                pollBank: poll,
            });
        });
    };

    componentDidMount() {
        this.getPoll();
        this.setState((prevState, props) => {
            return {pollBank: prevState.pollBank}
        })
    }

    render() {
        return ( 
            <div className="container">
                <div className="title"><center>PollSport</center></div>
                {this.state.pollBank.length > 0 &&
                this.state.pollBank.map(({name, country, state, sport, homeName, awayName, draw, id}) => 
                <PollWrapper key={id}>
                    <PollCard name={name} country={country} state={state} sport={sport} 
                    homeName={homeName} draw={draw} awayName={awayName} key={id}
                    onClick={this.handleClick} src={""}
                    />
                    <Logger />
                </PollWrapper>
                )}
            </div>
        );
    }
}

ReactDOM.render(<PollSport />, document.getElementById("root"));

class Logger extends Component{
    componentWillReceiveProps(newProps){
      console.log("componentWillReceiveProps() is triggered");    
    }
    render(){
      return <div/>
    }
  }

    const PollWrapper = styled.a`
        padding: 0.5rem 0;
        margin: 0.5rem 1rem;
        width: 100rem;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        text-align: center;
        `