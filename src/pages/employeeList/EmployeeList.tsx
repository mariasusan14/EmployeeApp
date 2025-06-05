import { Link, useSearchParams } from "react-router-dom";
import { Card } from "../../components/card/card";
import Header from "../../components/header/header";
import { List } from "../../components/list/List";
import { Select } from "../../components/select/Select";
import "./EmployeeList.css";
import { useMemo } from "react";
import type { Employee,} from "../../api-service/employees/types"
//import { useAppSelector, type RootState } from "../../store/store";
import { useGetEmployeesQuery } from "../../api-service/employees/employees.api";

const EmployeeList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedStatus = searchParams.get("status");
  //const employeesArr:Employee[] = useAppSelector((state: RootState) => state.employee.employees);
  const {data:employeesArr}=useGetEmployeesQuery()
 


  const employees = useMemo(() => {
    if (selectedStatus == null) return employeesArr;
    return employeesArr?.filter((employee:Employee) => employee.status == selectedStatus);
  }, [employeesArr, selectedStatus]);


  function handleStausFilterSetting(status: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    if (status == "ALL") newSearchParams.delete("status");
    else {
      newSearchParams.set("status", status);
    }
    setSearchParams(newSearchParams);
  }

  

  return (
    <>
      <Card>
        <Header
          title="Employee List"
          className="createEmployee"
          endAdornment={
            <div className="endadornment">
              <div className="status-filter">
                <p>Filter By</p>
                <Select
                  options={[{option:"All",value:"ALL"},{option:"Active",value:"ACTIVE"},{option: "Inactive",value:"INACTIVE"},{option:"Probation",value:"PROBATION"}]}
                  placeholder="Status"
                  onChange={(event) =>
                    handleStausFilterSetting(event.target.value)
                  }
                />
              </div>
              <Link to="/employee/create">
                <div className="create-emp-nav">
                  <div className="emp-nav-btn">+</div>
                  <p>Create Employee</p>
                </div>
              </Link>
            </div>
          }
        />
        <List employees={employees??[]} />
      </Card>
    </>
  );
};
export default EmployeeList