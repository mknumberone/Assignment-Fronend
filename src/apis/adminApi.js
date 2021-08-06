/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import axios from 'axios'

export default {
    login:(data) => axios.post('http://localhost:5000/administrators/auth/login', data),
    fetchAdmins:() =>axios.get('http://localhost:5000/administrators',{ headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}}),
    addadmin: (data) => axios.post('http://localhost:5000/administrators', data, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }),
    getadminid: (id) => axios.get(`http://localhost:5000/administrators/:${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }),
    deleteadmin: (id) => axios.delete(`http://localhost:5000/administrators/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }),
    changepassword: (id) => axios.patch(`http://localhost:5000/administrators/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }),
}
