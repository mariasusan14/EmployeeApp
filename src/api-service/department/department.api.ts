import employeeBaseApi from "../api"

export const departmentApi=employeeBaseApi.injectEndpoints({
endpoints: (builder) => ({
    getDepartments: builder.query({
      query: () => ({
        url: "/department",
        method: "GET"
          }),
          providesTags:['DEPARTMENTS']
    }),
}),
})

export const {useGetDepartmentsQuery}=departmentApi;