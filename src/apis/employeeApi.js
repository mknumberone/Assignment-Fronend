/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

export default {
  fetchemployee: () =>
    axios.get("http://localhost:5000/employee", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),
  addemployee: (data) =>
    axios.post("http://localhost:5000/employee", data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),
  delete_employee: (id) =>
    axios.delete(`http://localhost:5000/employee/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),
  updateemployee: (id, data) =>
    axios.put(`http://localhost:5000/employee/${id}`,{
       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),
};