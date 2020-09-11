import React from "react";
import "./App.css"

class RaceRow extends React.Component{

    handleClick=(event)=>{
        console.log('delete button pentru '+this.props.race.id);
        this.props.deleteFunc(this.props.race.id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.race.id}</td>
                <td>{this.props.race.capCilindrica}</td>
                <td>{this.props.race.numarParticipanti}</td>
                <td><button  onClick={this.handleClick}>Delete</button></td>
            </tr>
        );
    }
}

class RaceTable extends React.Component {
    render() {
        var rows = [];
        var functieStergere=this.props.deleteFunc;
        this.props.races.forEach(function(race){
            rows.push(<RaceRow race={race} key={race.id} deleteFunc={functieStergere}></RaceRow>)
        });
        return (<div className="RaceTable">

                <table className="center">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Cap. Cilindrica</th>
                        <th>Nr. Part.</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>{/*body-ul tabelului primeste variabila rows, care a preluat mai sus toti
                    userii din proprietati, si care mai departe a creat pentru fiecare user un UserRow*/}
                </table>
            </div>
        );
    }
}

export default RaceTable;