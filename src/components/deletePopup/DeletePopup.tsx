import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../button/Button";
import "./DeletePopup.css";
import { useDeleteEmployeeMutation } from "../../api-service/employees/employees.api";
//import { EMPLOYEE_ACTION_TYPES } from "../../store/employee/employee.types";
//import { useDispatch } from "react-redux";
// import { useAppDispatch } from "../../store/store";
// import { deleteEmployee } from "../../store/employee/employeeReducer";

export const DeletePopup = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [deleteEmployee]=useDeleteEmployeeMutation();
  //const dispatch = useAppDispatch();
  function handleCancel() {
    navigate(-1);
  }

  function handleDelete() {
    deleteEmployee(id);
    //dispatch(deleteEmployee(id));
    console.log(`employee id:${id} deleted`);
    navigate(-1);
  }
  return (
    <div className="delete-popup-container">
      <div className="popup-content">
        <div className="close-button">
          <i
            className="fa fa-close"
            style={{ fontSize: "24px" }}
            onClick={handleCancel}
          ></i>
        </div>
        <div className="alert-and-buttons-container">
          <div className="alert">
            <p className="mainalert">Are You Sure?</p>
            <p className="subalert">Do You Really Want To Delete Employee</p>
          </div>
          <div className="button-layout">
            <Button
              title="Confirm"
              className="delete"
              variant="primary"
              type="button"
              onClick={handleDelete}
            />
            <Button
              title="Cancel"
              className="cancel"
              variant="primary"
              type="button"
              onClick={handleCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
