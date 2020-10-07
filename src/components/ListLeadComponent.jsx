import React, { Component } from 'react';
import LeadService from '../services/LeadService';
import { UpdateContainer } from '../Container/indexUpdate';
import { DeleteContainer } from '../Container/indexDelete';

  const triggerText = 'Mark Update';
  const triggerDelete = 'Delete';
  const onSubmit = (event) => {
    event.preventDefault(event);
    setTimeout(() => {
        window.location.reload(false);
    }, 2000);
  };
  const handleSubmit = (event) => {
    event.preventDefault(event);
  }

class ListLeadComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                leads: []
        }
        this.addLead = this.addLead.bind(this);
    }

    componentDidMount(){
        LeadService.getLeads().then((res) => {
            this.setState({ leads: res.data});
        });
    }

    addLead(){
        this.props.history.push('/add-lead/_add');
    }

    render() {
        return (
            <div className = "row">
                <table className = "leads_table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th>   Name</th>
                            <th> Email</th>
                            <th> Mobile Num</th>
                            <th> Location Type</th>
                            <th> Location String</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.leads.map(
                                lead => 
                                <tr key = {lead.id}>
                                    <td> { lead.first_name}   {lead.last_name}</td>   
                                    <td> {lead.email}</td>
                                    <td> {lead.mobile}</td>
                                    <td> {lead.location_type}</td>
                                    <td> {lead.location_string}</td>
                                    <td >
                                        <UpdateContainer triggerText={triggerText} onSubmit={handleSubmit} className="update_lead_modal_btn"/>
                                        <DeleteContainer triggerDelete={triggerDelete} onSubmit={onSubmit} className="delete_lead_modal_btn"/>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

export default ListLeadComponent;