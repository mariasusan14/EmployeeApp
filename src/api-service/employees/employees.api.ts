import employeeBaseApi from "../api";
import type { Employee } from "./types";
export const employeeApi = employeeBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], void>({
      query: () => ({
        url: "/employee",
        method: "GET",
      }),
      providesTags: ["EMPLOYEES"],
    }),
    getEmployeeById: builder.query({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "GET",
      }),
      providesTags: ["EMPLOYEE_DETAILS"],
    }),
    updateEmployees: builder.mutation({
      query: (employee) => ({
        url: `/employee/${employee.id}`,
        method: "PUT",
        body: employee,
      }),
      invalidatesTags: ["EMPLOYEES", "EMPLOYEE_DETAILS"],
    }),
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EMPLOYEES", "EMPLOYEE_DETAILS"],
    }),
    createEmployee: builder.mutation({
      query: (employee) => ({
        url: "/employee",
        method: "POST",
        body: employee,
      }),
      invalidatesTags: ["EMPLOYEES", "EMPLOYEE_DETAILS"],
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
  useUpdateEmployeesMutation,
  useDeleteEmployeeMutation,
  useCreateEmployeeMutation,
} = employeeApi;
