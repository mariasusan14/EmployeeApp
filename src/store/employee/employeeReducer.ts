import {
  //EMPLOYEE_ACTION_TYPES,
  //type EmployeeAction,
  type EmployeeState,type Employee
} from "./employee.types";
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: EmployeeState = { employees: [] };

export const employeeSlice=createSlice({
  name:'employee',
  initialState,
  reducers:{
  addEmployee:(state,action:PayloadAction<Employee>)=>{
    state.employees.push(action.payload)
  },
  deleteEmployee:(state,action:PayloadAction<string|undefined>)=>{
    state.employees=state.employees.filter((employee)=>employee.emp_id!==action.payload)
  },
  updateEmployee:(state,action:PayloadAction<Employee>)=>{
    state.employees=state.employees.map((employee)=> employee.emp_id===action.payload.emp_id?action.payload:employee
    )
  }
}
})


export const {addEmployee,deleteEmployee,updateEmployee}=employeeSlice.actions
export default employeeSlice.reducer;


// function employeeReducer(
//   state: EmployeeState = initialState,
//   action: EmployeeAction
// ) {
//   switch (action.type) {
//     case EMPLOYEE_ACTION_TYPES.DELETE:
//       return {
//           ...state,
//           employees:state.employees.filter((employee)=>employee.employeeId!==action.payload)
//       }

//     case EMPLOYEE_ACTION_TYPES.UPDATE:
//       return {
//          ...state,
//          employees:state.employees.map((employee)=>{
//             if(employee.employeeId===action.payload.employeeId){
//                 return action.payload
//             }
//             else{
//                 return employee;
//             }
//          })
//       };
//     case EMPLOYEE_ACTION_TYPES.ADD:
//         console.log({
//             ...state,
//             employees:[...state.employees,action.payload]
//         });
        
//         return{
//             ...state,
//             employees:[...state.employees,action.payload]
//         }
//     default:
//       return state;
//   }
// }

// export { employeeReducer };



