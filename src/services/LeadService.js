import axios from 'axios';

const REACT_APP_API_URL = "https://607d3f12184368001769d3a0.mockapi.io/api";

class LeadService {

    getLeads(){
        return axios.get(REACT_APP_API_URL + '/leads/');
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
