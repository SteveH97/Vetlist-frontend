import http from '../http-common'

class PatientDataService{

    getAll(page=0){
        return http.get(`?page=${page}`)
    }

    createPatient(data){
        return http.post('', data);
    }

    updatePatient(data){
        return http.put('/', data);
    }

    //for the delete method, must pass info within a 'data-key' else whatever parameter you 
    //try to pass will be undefined
    deletePatient(_id){
        return http.delete('/', {data:{id : _id}});
    }

}

export default new PatientDataService();