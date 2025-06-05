import employeeBaseApi from "../api"
import type { LoginPayload, LoginResponse } from "./type"
export const loginApi=employeeBaseApi.injectEndpoints({
endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginPayload>({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload
      }),
    }),
  }),
});

export const {useLoginMutation}=loginApi;