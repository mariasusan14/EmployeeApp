import { useNavigate } from "react-router-dom";
import { Status } from "../status/Status";
import "./List.css";
import "font-awesome/css/font-awesome.min.css";
import { type Employee } from "../../api-service/employees/types";
export const List = ({ employees }: { employees: Employee[] }) => {
  const navigate = useNavigate();

  function handleEditIconClick(e: React.MouseEvent, empId: number) {
    e.stopPropagation();
    navigate(`/employee/edit/${empId}`);
  }

  function handleDeleteIconClick(e: React.MouseEvent, empId: number) {
    e.stopPropagation();
    navigate(`/employee/delete/${empId}`);
  }

  function handleNavigationToEmployeeDetails(empId: number) {
    navigate(`/employee/details/${empId}`);
  }
  return (
    <table className="list">
      <thead>
        <tr>
          <th className="startcol">Name</th>
          <th>Employee Id</th>
          <th>Joining Date</th>
          <th>Role</th>
          <th>Status</th>
          <th>Experience</th>
          <th className="endcol">Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => {
          return (
            <tr onClick={() => handleNavigationToEmployeeDetails(employee.id)}>
              <td className="startcol">{employee.name}</td>
              <td>{employee.emp_id}</td>
              <td>{employee.joiningDate.slice(0, 10)}</td>
              <td>{employee.role}</td>

              <td>
                <div className="status-container">
                <Status status={employee.status} />
                </div>
              </td>

              <td>{employee.experience}</td>
              <td className="endcol">
                <i
                  className="fa fa-trash-o"
                  style={{ fontSize: "25px", color: "red" }}
                  onClick={(e) => handleDeleteIconClick(e, employee.id)}
                ></i>
                <i
                  className="fa fa-pencil"
                  style={{ fontSize: "25px" }}
                  onClick={(e) => {
                    handleEditIconClick(e, employee.id);
                  }}
                ></i>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
