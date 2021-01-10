import React, { Component } from 'react'
import LeadService from '../services/LeadService';

export const UpdateForm = ({ onSubmit }) => {
    return (
        <div onSubmit={onSubmit} name="communication">
            <UpdateFormComponent />
        </div>
    )
}

class UpdateFormComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id,
            communication: ''
        }
        this.updateLead = this.updateLead.bind(this);
    }

    handleCommunicationChange = event => {
        this.setState({ 
            communication: event.target.value 
        });
    }

    updateLead = (e) => {
        let lead = {communication: this.state.communication};
        console.log('lead => ' + JSON.stringify(lead));
        console.log('id => ' + JSON.stringify(this.state.id));
        LeadService.updateLead(lead, this.state.id).then( res => {
            this.props.history.push('/leads');
        });
    }

    cancel(){
        this.props.history.push('/leads');
    }

    render() {
        return (
            <form className = "update_lead_form" name="communication">
                <div className="form-group" name="communication">
                    <label htmlFor="communication" name="communication">Communication</label>
                    <textarea name="communication"
                        className="form-control" 
                        id="communication"  
                        rows="4"
                        value={this.state.communication}
                        onChange={this.handleCommunicationChange}
                    >
                    </textarea>
                </div>
                <br></br>
                <div style={{float: "right"}}>
                <button className="close_btn"
                     style={{
                        height: "40px",
                        width: "80px",
                        fontSize: 16, 
                        borderRadius: 5, 
                        backgroundColor: "#ffffff", 
                        color: "#343a40"
                     }} 
                    >
                        Close
                    </button>
                    <button className="update_lead_btn" 
                     type="submit" 
                     style={{
                        marginLeft: "10px",
                        height: "40px",
                        width: "80px",
                        fontSize: 16, 
                        borderRadius: 5, 
                        backgroundColor: "#343a40", 
                        color: "#ffffff"
                    }} 
                        onClick={ () => this.updateLead()}>
                            Save
                    </button>
                </div>
            </form>
        )
    }
}