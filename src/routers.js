/* eslint-disable no-undef */
import {
    TeamOutlined,
    MenuFoldOutlined,
    QqOutlined
} from "@ant-design/icons";
import ListAdmin from "./views/components/admin/ListAdmin";
import ChangePass from "./views/components/admin/ChangePass"
import ListDepartMent from "./views/components/departments/ListDepartMent";
import ListEmployee from "./views/components/employees/ListEmployee"

const routers = [
  {
    name: "Administrators",
    path: "/administrators",
    icon: <QqOutlined />,
    children: [
      {
        name: "List Admin",
        path: "/administrators/list",
        icon: "",
        component: <ListAdmin />,
      },
      {
        name: "ChangPass",
        path: "/administrators/changepass",
        icon: "",
        component: <ChangePass />,
      },
    ],
  },
  {
    name: "Employee",
    path: "/employee",
    icon: <TeamOutlined />,
    component: <ListEmployee></ListEmployee>,
  },
  {
    name: "Department",
    path: "/department",
    icon: "",
    children: [
      {
        name: "List Department",
        path: "/department/list-department",
        icon: <MenuFoldOutlined />,
        component: <ListDepartMent />,
      },
    ],
  },
];

export default routers