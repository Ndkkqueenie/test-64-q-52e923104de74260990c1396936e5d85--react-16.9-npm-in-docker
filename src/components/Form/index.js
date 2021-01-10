import React, { Component } from 'react';
import LeadService from '../services/LeadService';

export const Form = ({ onSubmit }) => {
    return (
        <div onSubmit={onSubmit}>
            <ModalForm />
        </div>
    )
}

class ModalForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            mobile: '',
            email: '',
            location_type: '',
            location_string: ''
        }
        this.addLead = this.addLead.bind(this);
    } 
    
    handleFirstNameChange = event => {
        this.setState({ 
            first_name: event.target.value 
        });
    }
    handleLastNameChange = event => {
        this.setState({
            last_name: event.target.value
        });
    }
    handleMobileChange = event => {
        this.setState({
            mobile: event.target.value
        });
    }
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    }
    handleLocationTypeChange = event => {
        this.setState({
            location_type: event.target.value
        });
    }
    handleLocationStringChange = event => {
        this.setState({
            location_string: event.target.value
        });
    }

    addLead = event => {
        let lead = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            mobile: this.state.mobile,
            email: this.state.email,
            location_type: this.state.location_type,
            location_string: this.state.location_string
        };
        console.log('lead => ' + JSON.stringify(lead));
        LeadService.createLead(lead).then(res =>{
        });
    }
    render() {
        return (
            <form className = "add_lead_form">
                <div className = "row">
                    <div className = "form-group col-md-6" >
                        <label> First Name<b style ={{color: 'red'}}>*</b> </label>
                        <input placeholder="" name="first_name" className="form-control"
                        value={this.state.first_name} onChange={this.handleFirstNameChange} 
                        />
                    </div>
                    <div className = "form-group col-md-6">
                        <label> Last Name<b style ={{color: 'red'}}>*</b> </label>
                        <input placeholder="" name="last_name" className="form-control"
                        value={this.state.last_name} onChange={this.handleLastNameChange} 
                        />
                    </div>
                    <div className = "form-group col-md-6">
                        <label> Email Address<b style ={{color: 'red'}}>*</b> </label>
                        <input placeholder="" name="email" className="form-control"
                        value={this.state.email} onChange={this.handleEmailChange} 
                        />
                    </div>
                    <div className = "form-group col-md-6">
                        <label> Mobile<b style ={{color: 'red'}}>*</b> </label>
                        <input placeholder="" name="mobile" className="form-control"
                        value={this.state.mobile} onChange={this.handleMobileChange} 
                        />
                    </div>
                    <div className = "form-group col-md-6">
                        <label> Location Type<b style ={{color: 'red'}}>*</b> </label>
                        <select id="location_type" 
                        name="location_type" 
                        className="form-control"
                        value={this.state.location_type} onChange={this.handleLocationTypeChange}
                        >
                            <option>City</option>
                            <option>State</option>
                            <option>Country</option>
                        </select>
                    </div>
                    <div className = "form-group col-md-6">
                        <label> Location String<b style ={{color: 'red'}}>*</b> </label>
                        <input placeholder="" name="location_string" className="form-control"
                        value={this.state.location_string} onChange={this.handleLocationStringChange} 
                        />
                    </div>
                </div>
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
                    <button 
                     disabled={
                        this.state.location_string<1
                     }
                     className="add_lead_btn" 
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
                     onClick={ () => this.addLead()}
                    >
                        Save
                    </button>
                </div>
            </form>
        )
    }
}