import { departmentApi } from "../apis"
import * as type from "../const/ActionTypes";
import axios from "axios";
import { toast } from "react-toastify";

export const getData = (payload) => {
  return {
    type: type.GET_DEPARTMENT,
    payload,
  };
};
export const getAllData = (payload) => {
  return {
    type: type.GET_ALL_DEPARTMENT,
    payload,
  };
};

export const addData = (payload) => {
  return {
    type: type.POST_DEPARTMENT,
    payload,
  };
};

export const updateData = (id, dataUpdate) => {
  return {
    type: type.UPDATE_DEPARTMENT,
    payload: { id, ...dataUpdate },
  };
};

export const deleteData = (payload) => {
  return {
    type: type.DELETE_DEPARTMENT,
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
export const loadingEmployeeTrue = () => {
  return {
    type: type.LOADING_EMPLOYEE_TRUE,
  };
};

export const loadingEmployeeFail = () => {
  return {
    type: type.LOADING_EMPLOYEE_FALSE,
  };
};

// export const getDepartment = (page, limit) => {
//   return (dispatch) => {
//     dispatch(loadingTrue());
//    departmentApi.fetchDepartment()
//       .then((res) => {
//         dispatch(totalPage(res.data.meta.totalPages));
//         dispatch(getPage(res.data.meta.currentPage));
//         dispatch(getPerPage(res.data.meta.itemsPerPage));
//         dispatch(getData(res.data.items));
//         dispatch(loadingFail());
//       })
//       .catch((err) => console.log(err));
//   };
// };
export const getAllDepartment = () => {
  return (dispatch) => {
   departmentApi.fetchDepartment()
      .then((res) => {
        dispatch(getAllData(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const addDepartment = (namedepartment, officephone, manager) => {
  return (dispatch) => {
    dispatch(loadingTrue());
    const dataDepartment = {
      namedepartment,
      officephone,
      manager,
    };
    axios
      .post("http://localhost:5000/department", dataDepartment, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        if (res.data.statusCode === 201) {
          dispatch(loadingFail());
          dispatch(addData(res.data.dataSave));
          toast.success("Thêm phòng ban thành công !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.error("Thêm phòng ban thất bại !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Thêm phòng ban thất bại !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const deleteDepartment = (id) => {
  return (dispatch) => {
  departmentApi.deleteDepartment(id)
      .then((res) => {
        if (res.data.statusCode === 200) {
          dispatch(deleteData(id));
          toast.success("Xóa phòng ban thành công !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.error("Xóa phòng ban thất bại !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Xóa phòng ban thất bại !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const updateDepartment = (id, namedepartment, officephone, manager) => {
  return (dispatch) => {
    dispatch(loadingTrue());
    const dataDepartment = {
      namedepartment,
      officephone,
      manager,
    };
    console.log(dataDepartment, "dataDepartment");
    axios
      .put(`http://localhost:5000/department/${id}`, dataDepartment, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        // console.log(res.data)
        if (res.data.statusCode === 200) {
          dispatch(loadingFail());
          dispatch(updateData(id, dataDepartment));
          toast.success("Sửa thông tin phòng ban thành công !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.error("Sửa thông tin phòng ban thất bại !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Xóa phòng ban thất bại !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};