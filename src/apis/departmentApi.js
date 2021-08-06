/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

export default {
  fetchDepartment: (data) =>
    axios.get("http://localhost:5000/department", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),
  deleteDepartment: (id) =>
    axios.delete(`http://localhost:5000/department/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),
};