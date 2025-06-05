import type { Employee } from "../../api-service/employees/types";
import { Status } from "../status/Status";
import "./DetailsCard.css";

export const DetailsCard = ({ employee }: { employee: Employee }) => {
  return (
    <div className="details-card">
      <div className="ele name">
        <p className="heading">Employee Name</p>
        <p className="data">{employee.name}</p>
      </div>
      <div className="ele email">
        <p className="heading">Email</p>
        <p className="data">{employee.email}</p>
      </div>
      <div className="ele age">
        <p className="heading">Age</p>
        <p className="data">{employee.age}</p>
      </div>
      <div className="ele joining-date">
        <p className="heading">Joining Date</p>
        <p>{employee.joiningDate.slice(0, 10)}</p>
      </div>
      <div className="ele experience">
        <p className="heading">Experience</p>
        <p>{employee.experience}</p>
      </div>
      <div className="ele status-details">
        <p className="heading">Status</p>
        <p>
          <Status status={employee.status} />
        </p>
      </div>
      <div className="ele role">
        <p className="heading">Role</p>
        <p>{employee.role}</p>
      </div>
      <div className="ele empid">
        <p className="heading">Employee Id</p>
        <p>{employee.emp_id}</p>
      </div>
      <div className="ele department">
        <p className="heading">Department</p>
        <p>{employee.department.name}</p>
      </div>
      <div className="ele address">
        <p className="heading">Address</p>
        <p>
          {employee.address.houseNo}, {employee.address.line1},{" "}
          {employee.address.line2} {employee.address.pincode}
        </p>
      </div>

      <div className="break-line-cover"></div>
    </div>
  );
};
