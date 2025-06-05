import { Input } from "../input/input";
import { Select } from "../select/Select";
import "./Form.css";
import { Button } from "../button/Button";
import { useNavigate } from "react-router-dom";

import { type Role, type Status } from "../../store/employee/employee.types";
//import { useAppDispatch } from "../../store/store";
//import { addEmployee, updateEmployee } from "../../store/employee/employeeReducer";
import {
  useCreateEmployeeMutation,
  useUpdateEmployeesMutation,
} from "../../api-service/employees/employees.api";
import { useGetDepartmentsQuery } from "../../api-service/department/department.api";
import type { Department } from "../../api-service/department/types";

export const Form = ({
  buttonTitle1 = "Create",
  buttonTitle2 = "Cancel",
  values,
  empIdButtonDisable = false,
  isEdit = false,
  onChange,
}: {
  buttonTitle1?: string;
  buttonTitle2?: string;
  empIdButtonDisable?: boolean;
  isEdit?: boolean;
  values: {
    id?: number;
    name: string;
    experience: string;
    joiningDate: string;
    role: string;
    status: string;
    empId: string;
    department: string;
    age: string;
    password?: string;
    email: string;
    address: {
      line1: string;
      line2: string;
      houseNo: string;
      pincode: string;
    };
  };
  onChange: (field: string, value: string) => void;
}) => {
  const navigate = useNavigate();
  //const dispatch=useAppDispatch()
  const {data : departments} = useGetDepartmentsQuery(undefined);
  const [updateEmployee] = useUpdateEmployeesMutation();
  const [createEmployee] = useCreateEmployeeMutation();

  

  function handleFormCancelBtnClick() {
    navigate(-1);
  }

  function handleFormSubmitClick() {
    createEmployee({
      emp_id: values.empId,
      name: values.name,
      experience: parseInt(values.experience),
      joiningDate: new Date(values.joiningDate),
      role: values.role as Role,
      email: values.email,
      status: values.status as Status,
      department_id: parseInt(values.department),
      age: parseInt(values.age),
      password: values.password,
      address: {
        line1: values.address.line1,
        line2: values.address.line2,
        houseNo: values.address.houseNo,
        pincode: parseInt(values.address.pincode),
      },
    });
    navigate(-1);
    //   dispatch(addEmployee({name:values.name,
    //   experience:parseInt(values.experience),
    //   joiningDate:values.joiningDate,
    //   role:values.role as Role,
    //   email:values.email,
    //   status:values.status as Status,
    //   emp_id:values.empId,
    //   departmentId:values.department,
    //   age:45,
    //   password:"password",
    //   address:{
    //     line1:values.address.line1,
    //     line2:values.address.line2,
    //     houseNo:values.address.houseNo,
    //     pincode:values.address.pincode
    // }}));
  }

  async function handleFormEditClick() {
    console.log("create");
    await updateEmployee({
      id: values.id,
      emp_id: values.empId,
      name: values.name,
      experience: parseInt(values.experience),
      joiningDate: new Date(values.joiningDate),
      role: values.role as Role,
      email: values.email,
      status: values.status as Status,
      department_id: parseInt(values.department),
      age: parseInt(values.age),
      address: {
        line1: values.address.line1,
        line2: values.address.line2,
        houseNo: values.address.houseNo,
        pincode: parseInt(values.address.pincode),
      },
    });
    console.log(values.status);
    navigate(-1);
    //   dispatch(updateEmployee(  {name:values.name,
    //   experience:parseInt(values.experience),
    //   joiningDate:values.joiningDate,
    //   role:values.role as Role,
    //   email:values.email,
    //   status:values.status as Status,
    //   employeeId:values.empId,
    //   age:19,
    //   password:"password",
    //   departmentId:values.department,
    //   address:{
    //     line1:values.address.line1,
    //     line2:values.address.line2,
    //     houseNo:values.address.houseNo,
    //     pincode:values.address.pincode
    // }}));
  }

  return (
    <form className="form">
      <div className="formel">
        <div className="inncont">
          <Input
            tag="Employee Name"
            type="text"
            name="employeeName"
            placeholder="Employee Name"
            value={values.name}
            onChange={(event) => onChange("name", event.target.value)}
          />
          <Select
            tag="Role"
            options={[
              { option: "UI", value: "UI" },
              { option: "UX", value: "UX" },
              { option: "DEVELOPER", value: "DEVELOPER" },
              { option: "HR", value: "HR" },
            ]}
            placeholder="Choose Role"
            value={values.role}
            onChange={(event) => onChange("role", event.target.value)}
          />
          <Input
            tag="Address"
            type="text"
            name="Address"
            placeholder="House No."
            value={values.address.houseNo}
            onChange={(event) => onChange("houseNo", event.target.value)}
          />
          <Input
            type="text"
            name="Address"
            placeholder="Line1"
            value={values.address.line1}
            onChange={(event) => onChange("line1", event.target.value)}
          />
          <Input
            type="text"
            name="Address"
            placeholder="Line 2"
            value={values.address.line2}
            onChange={(event) => onChange("line2", event.target.value)}
          />
          <Input
            type="text"
            name="Address"
            placeholder="Pincode"
            value={values.address.pincode}
            onChange={(event) => onChange("pincode", event.target.value)}
          />
        </div>
        <div className="inncont">
          <Input
            tag="Employee Id"
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            disabled={empIdButtonDisable}
            value={values.empId}
            onChange={(event) => onChange("empId", event.target.value)}
          />
          <Select
            tag="Status"
            options={[
              { option: "ACTIVE", value: "ACTIVE" },
              { option: "INACTIVE", value: "INACTIVE" },
              { option: "PROBATION", value: "PROBATION" },
            ]}
            placeholder="Choose Status"
            value={values.status}
            onChange={(event) => onChange("status", event.target.value)}
          />
          
            <Select
            tag="Department"
            options={departments?departments.map((department:Department)=>({option:department.name,value:department.id.toString()})):[{option:"department",value:"department"}]}
            placeholder="Choose Department"
            value={values.department}
            onChange={(event) => onChange("department", event.target.value)}
          />

          <Input
            tag="Age"
            type="number"
            name="age"
            placeholder="Age"
            value={values.age}
            onChange={(event) => onChange("age", event.target.value)}
          />
        </div>
        <div className="inncont">
          <Input
            tag="Joining Date"
            type="date"
            name="joiningDate"
            placeholder="Joining Date"
            value={values.joiningDate}
            onChange={(event) => onChange("joiningDate", event.target.value)}
          />
          <Input
            tag="Experience"
            type="number"
            name="Experience"
            placeholder="Experience"
            value={values.experience}
            onChange={(event) => onChange("experience", event.target.value)}
          />
          <Input
            tag="Email"
            type="text"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={(event) => onChange("email", event.target.value)}
          />
          {!isEdit && (
            <Input
              tag="Password"
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={(event) => onChange("password", event.target.value)}
            />
          )}
        </div>
      </div>

      <div className="buttons">
        <Button
          type="button"
          title={buttonTitle1}
          variant=""
          className="create"
          onClick={isEdit ? handleFormEditClick : handleFormSubmitClick}
        />
        <Button
          type="button"
          title={buttonTitle2}
          variant=""
          className="cancel"
          onClick={handleFormCancelBtnClick}
        />
      </div>
    </form>
  );
};
