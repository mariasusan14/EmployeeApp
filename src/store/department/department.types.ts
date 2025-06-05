import type { Employee } from "../employee/employee.types";

export interface Department {
 name:string
 departmentId: number | string;
 employees:Employee[];
}

export const DEPARTMENT_ACTION_TYPES = {
  DELETE: "department/DELETE",
  UPDATE: "department/UPDATE",
  ADD: "department/ADD"
} as const;


export type DepartmentActionTypes =
  (typeof DEPARTMENT_ACTION_TYPES)[keyof typeof DEPARTMENT_ACTION_TYPES];

export interface DepartmentState {
  departments: Department[];
}

export interface DeleteDepartmentAction {
  type: typeof DEPARTMENT_ACTION_TYPES.DELETE;
  payload: string; // employee id
}

export interface UpdateDepartmentAction {
  type: typeof DEPARTMENT_ACTION_TYPES.UPDATE;
  payload: Department;
}

export interface AddDepartmentAction{
    type: typeof DEPARTMENT_ACTION_TYPES.ADD
    payload:Department;
}

export type DepartmentAction = DeleteDepartmentAction | UpdateDepartmentAction | AddDepartmentAction;