import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addAdmin } from "../../../actions/admin";
import { useForm } from "react-hook-form";
import { checkChangePass } from "../../../actions/auth";
import { getToken } from "../../../utils/localStorageHandler";
import jwt from "jsonwebtoken";
import axios from "axios";

// Modals add Admin
const ChangePass = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const token = getToken();
  const dataLogin = jwt.decode(token);
  console.log(dataLogin, "dataLogin");
  const onSubmit = async (data) => {
    console.log(data, "data");
    const dataChangePass = {
      username: dataLogin.username,
      oldPass: data.oldPass,
      newPass: data.newPass,
      confirmPass: data.confirm,
    };
    console.log(dataChangePass, "dataChangePass");
    await axios
      .put(
        `http://localhost:5000/administrators/change-password`,
        dataChangePass,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        alert("Change password success!")
        if (res.data.statusCode === 200) {
          dispatch(checkChangePass(true));
          alert("Vui lòng đăng nhập lại !");
          localStorage.clear("token");
          window.location.reload();
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <h1>Hello :{dataLogin.username}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div >
          <div
            style={{
              color: "rgb(109, 109, 109)",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            Old Password *
          </div>
          <div  style={{ display: "flex" }}>
            <input
              type={show ? "text" : "password"}
              name="oldPass"
              className="w-100 form-control focus-remove-shadow"
              {...register("oldPass", {
                required: true,
                maxLength: 20,
              })}
            />
            <span onClick={() => setShow(!show)}></span>
          </div>
          <div
            style={{
              width: "100%",
              height: 20,
              paddingLeft: 10,
              paddingTop: 5,
            }}
          >
            {errors.oldPass && (
              <p style={{ color: "red" }}>Tối thiểu 6 ký tự !!!</p>
            )}
          </div>
        </div>

        <div >
          <div
            style={{
              color: "rgb(109, 109, 109)",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            New Password*
          </div>
          <div  style={{ display: "flex" }}>
            <input
              type={show1 ? "text" : "password"}
              name="newPass"
          
              {...register("newPass", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
            />
            <span onClick={() => setShow1(!show1)}></span>
          </div>
          <div
            style={{
              width: "100%",
              height: 20,
              paddingLeft: 10,
              paddingTop: 5,
            }}
          >
            {errors.newPass && (
              <p style={{ color: "red" }}>Tối thiểu 6 ký tự !!!</p>
            )}
          </div>
        </div>

        <div>
          <div
            style={{
              color: "rgb(109, 109, 109)",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            Comfirm New Pass *
          </div>
          <div  style={{ display: "flex" }}>
            <input
              type={show2 ? "text" : "password"}
              name="confirm"
              className="w-100 form-control focus-remove-shadow"
              {...register("confirm", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
            />
            <span onClick={() => setShow2(!show2)}></span>
          </div>
          <div
            style={{
              width: "100%",
              height: 20,
              paddingLeft: 10,
              paddingTop: 5,
            }}
          >
            {errors.confirm && (
              <p style={{ color: "red" }}>Tối thiểu 6 ký tự !!!</p>
            )}
          </div>
        </div>

        <div  style={{ display: "flex" }}>
          <div
            className="col-12 "
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button type="submit" >
              Thay đổi mật khẩu
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    addAdminState: state.admin.addAdmin,
  };
};

export default connect(mapStateToProps, { addAdmin })(ChangePass);
