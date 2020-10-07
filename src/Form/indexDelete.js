import React, { Component } from 'react';
import LeadService from '../services/LeadService';

export const DeleteForm = ({ onSubmit }) => {
    return (
        <div onSubmit={onSubmit}>
            <DeleteFormComponent />
        </div>
    )
}

class DeleteFormComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                leads: []
        }
        this.deleteLead = this.deleteLead.bind(this);
    }

    deleteLead(id){
        LeadService.deleteLead(id).then( res => {
            this.setState({leads: this.state.leads.filter(lead => lead.id !== id)});
        });
    }

    render() {
        const remove = this.state.leads.map(
            lead => lead.id
        );
        return (
            <form className="delete_lead_form" style={{WebkitAlignContent: "center", textAlign: "center"}}>
                <button 
                    type="submit" 
                    className="delete_lead_btn"
                    style={{ 
                    marginLeft: 20,
                    height: "40px",
                    width: "80px",
                    fontSize: 16, 
                    borderRadius: 5, 
                    backgroundColor: "#dc3545", 
                    color: "#ffffff"
                    }}
                    
                    onClick={ () => this.deleteLead(remove)}
                >
                    Delete
                </button>
                <button 
                type="button" 
                className="cancel_btn"
                style={{
                    marginLeft: 36,
                    height: "40px",
                    width: "80px",
                    fontSize: 16, 
                    borderRadius: 5, 
                    backgroundColor: "#343a40", 
                    color: "#ffffff"
                    }}
                >
                    Cancel
                </button>    
            </form>
        )
    }
}