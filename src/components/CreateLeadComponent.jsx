import React, { Component } from 'react'
import LeadService from '../services/LeadService';

class CreateLeadComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            first_name: '',
            last_name: '',
            mobile: '',
            email: '',
            location_type: '',
            location_string: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateLead = this.saveOrUpdateLead.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            LeadService.getLeadById(this.state.id).then( (res) =>{
                let lead = res.data;
                this.setState({first_name: lead.first_name,
                    last_name: lead.last_name,
                    mobile: lead.mobile,
                    email: lead.email,
                    location_type: lead.location_type,
                    location_string: lead.location_string
                });
            });
        }        
    }
    saveOrUpdateLead = (e) => {
        e.preventDefault();
        let lead = {first_name: this.state.first_name, 
            last_name: this.state.last_name, 
            mobile: this.state.mobile, 
            email: this.state.email,
            location_type: this.state.location_type,
            location_string: this.state.location_string
        };
        console.log('lead => ' + JSON.stringify(lead));

        // step 5
        if(this.state.id === '_add'){
            LeadService.createLead(lead).then(res =>{
                this.props.history.push('/leads');
            });
        }else{
            LeadService.updateLead(lead, this.state.id).then( res => {
                this.props.history.push('/leads');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({first_name: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({last_name: event.target.value});
    }

    changeMobileHandler= (event) => {
        this.setState({mobile: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeLocationTypeHandler= (event) => {
        this.setState({location_type: event.target.value});
    }

    changeLocationStringHandler= (event) => {
        this.setState({location_string: event.target.value});
    }

    cancel(){
        this.props.history.push('/leads');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text">Add Lead</h3>
        }else{
            return <h3 className="text">Update Lead</h3>
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default CreateLeadComponent;