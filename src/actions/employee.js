import axios from "axios";
import { toast } from "react-toastify";
import { employeeApi } from "../apis";
import * as type from "../const/ActionTypes";

export const getData = (payload) => {
  return {
    type: type.GET_EMPLOYEE,
    payload,
  };
};

export const addData = (payload) => {
  return {
    type: type.POST_EMPLOYEE,
    payload,
  };
};

export const update = (id, dataUpdate) => {
  return {
    type: type.UPDATE_EMPLOYEE,
    payload: { id, ...dataUpdate },
  };
};

export const deleteData = (payload) => {
  return {
    type: type.DELETE_EMPLOYEE,
    payload,
  };
};

export const loadingTrue = () => {
  return {
    type: type.LOADING_TRUE,
  };
};

export const loadingFail = () => {
  return {
    type: type.LOADING_FALSE,
  };
};

export const getEmployee = (data) => {
  return (dispatch) => {
    dispatch(loadingTrue());
    if (data) {
      return;
    } else {
      employeeApi
        .fetchemployee()
        .then((res) => {
          dispatch(getData(res.data));
          dispatch(loadingFail());
        })
        .catch((err) => console.log(err));
    }
  };
};

export const addEmployee = (
  employeename,
  photo,
  jobtitle,
  cellphone,
  email,
  departmentId
) => {
  return (dispatch) => {
    dispatch(loadingTrue());
    const formData = new FormData();
    formData.append("employeename", employeename);
    formData.append("photo", photo);
    formData.append("jobtitle", jobtitle);
    formData.append("cellphone", cellphone);
    formData.append("email", email);
    formData.append("department", departmentId);

    console.log(...formData);
    axios
      .post("http://localhost:5000/employee", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        if (res.data.statusCode === 201) {
          dispatch(addData(res.data.dataSave));
          toast.success("Thêm nhân viên thành công !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          dispatch(loadingTrue());
        } else {
          toast.error("Thêm nhân viên thất bại !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteEmployee = (id) => {
  return (dispatch) => {
   employeeApi.delete_employee(id)
      .then((res) => {
        if (res.data.statusCode === 200) {
          dispatch(deleteData(id));
          toast.success("Xóa nhân viên thành công !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.error("Xóa nhân viên thất bại !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Xóa nhân viên thất bại !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};
//Ddaay anh
export const updateEmployee = (
  id,
  employeename,
  photo,
  jobtitle,
  cellphone,
  email,
  departmentId
) => {
  return (dispatch) => {
    dispatch(loadingTrue());
    const formData = new FormData();
    formData.append("employeename", employeename);
    formData.append("photo", photo);
    formData.append("jobtitle", jobtitle);
    formData.append("cellphone", cellphone);
    formData.append("email", email);
    formData.append("department", departmentId);
    console.log(...formData,'formData');
    axios
      .put(
        `http://localhost:5000/employee/${id}`, formData, {headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }},
      )
      .then((res) => {
        if (res.data.statusCode === 200) {
          dispatch(loadingFail());
          dispatch(update(id, formData)); 
      
          toast.success("Sửa thông tin nhân viên thành công !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.error("Sửa thông tin nhân viên thất bại !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Sửa nhân viên thất bại !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};
