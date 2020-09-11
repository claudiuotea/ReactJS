import React from  'react';
class RaceForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {capCilindrica: '',numarParticipanti:''};

        //  this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCapacitateChange=(event) =>{
        this.setState({capCilindrica: event.target.value});
    }

    handleParticipantiChange=(event) =>{
        this.setState({numarParticipanti: event.target.value});
    }//cand scriu ceva updatez campurile vizual

    handleSubmit =(event) =>{

        var race={capCilindrica:this.state.capCilindrica,
            numarParticipanti:this.state.numarParticipanti
        }
        console.log('A race was submitted: ');
        console.log(race);
        this.props.addFunc(race);
        event.preventDefault();
    }//cand apas submit doar preiau din campuri ce-mi trebuie,creez cursa si apelez functia addFunc

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Capacitate Cilindrica:
                    <input type="text" value={this.state.capCilindrica} onChange={this.handleCapacitateChange} />
                </label><br/>
                <label>
                    Nr. Participanti:
                    <input type="text" value={this.state.numarParticipanti} onChange={this.handleParticipantiChange} />
                </label><br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default RaceForm;