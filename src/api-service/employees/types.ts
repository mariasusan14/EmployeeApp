export interface Address {
  houseNo: string;
  line1: string;
  line2: string;
  pincode: string;
}

export interface Department {
 name:string;
}

export const EmployeeRole = {
  UI: "UI",
  UX: "UX",
  DEVELOPER: "DEVELOPER",
  HR: "HR",
} as const;

export type Role = (typeof EmployeeRole)[keyof typeof EmployeeRole];

export const EmployeeStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PROBATION: "PROBATION",
} as const;

export type Status = (typeof EmployeeStatus)[keyof typeof EmployeeStatus];

export interface Employee {
  id:number;
  emp_id: string;
  email: string;
  name: string;
  age: number;
  address: Address;
  password: string;
  role: Role;
  joiningDate: string;
  experience: number;
  status: Status;
  department: Department;
}