import React, {Component} from 'react';
import './App.css';
import {AddRace, DeleteRace, GetRaces} from "./utils/rest-calls";
import RaceForm from "./RaceForm";
import RaceTable from "./Race";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            races: [{"capCilindrica": "125cmc", "numarParticipanti": "10", "id": "1"}],
            deleteFunc: this.deleteFunc.bind(this),
            addFunc: this.addFunc.bind(this),
        }
    }

    addFunc(race){
        console.log('inside add Func '+race);
        AddRace(race)
            .then(res=> GetRaces())
            .then(races=>this.setState({races}))
            .catch(error=>console.log('eroare add ',error));
    }


    deleteFunc(id){
        console.log('inside deleteFunc '+id);
        DeleteRace(id)
            .then(res=> GetRaces())
            .then(races=>this.setState({races}))
            .catch(error=>console.log('eroare delete', error));
    }


    componentDidMount(){
        console.log('inside componentDidMount')
        GetRaces().then(races=>this.setState({races}));
    }

    render(){
        return(
            <div className="body">
                <h1>Race Management</h1>
                <RaceForm addFunc={this.state.addFunc}/>
                <br/>
                <br/>
                <RaceTable races={this.state.races} deleteFunc={this.state.deleteFunc}/>
            </div>
        );
    }
}


export default App;
