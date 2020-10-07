import axios from 'axios';

const REACT_APP_API_URL = "http://35.173.231.204:4006/api";

class LeadService {

    getLeads(){
        return axios.get(REACT_APP_API_URL + '/leads/?location_string=India');
    }

    createLead(lead){
        return axios.post(REACT_APP_API_URL + '/leads/', lead);
    }

    getLeadById(leadId){
        return axios.get(REACT_APP_API_URL + '/leads/' + leadId);
    }

    updateLead(leadId){
        return axios.put(REACT_APP_API_URL + '/mark_lead/', leadId);
    }

    deleteLead(){
        return axios.delete(REACT_APP_API_URL + '/leads/1');
    }
}

export default new LeadService();