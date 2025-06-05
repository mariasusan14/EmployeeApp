import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const employeeBaseApi=createApi({
    reducerPath:"employeeBaseApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000",
        prepareHeaders:(headers)=>{
            const token=localStorage.getItem("token");
            if(token){
                headers.set("Authorization",`Bearer ${token}`)
            }
            return headers;
        },
    }),
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true,
    endpoints:()=>({}),
    tagTypes:['EMPLOYEES','EMPLOYEE_DETAILS','DEPARTMENTS']
})

export default employeeBaseApi;