import { http, HttpResponse } from 'msw'
import config from 'src/constants/config'
import { URL_LOGIN, URL_REFRESH_TOKEN } from 'src/apis/auth.api'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

export const access_token_1s =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDc5YTQzYTcxYTZjMDI5ZGVjMmYyMSIsImVtYWlsIjoiZHVjM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTA4VDA2OjUzOjI4LjYwN1oiLCJpYXQiOjE3MjgzNzA0MDgsImV4cCI6MTcyODM3MDQwOX0.hMxD7Zq0wdg63gfZnNQyL--IpjWMweRbF6BBILYMCB8'

export const refresh_token_1000days =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDc5YTQzYTcxYTZjMDI5ZGVjMmYyMSIsImVtYWlsIjoiZHVjM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTA4VDA2OjUzOjI4LjYwN1oiLCJpYXQiOjE3MjgzNzA0MDgsImV4cCI6MTgyODM3MDQwN30.metxUfV-Y1Vd_10yWZlquJ_YWxES8W_Yeu5Fdxidh2A'

const loginRes = {
  message: 'Đăng nhập thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDc5YTQzYTcxYTZjMDI5ZGVjMmYyMSIsImVtYWlsIjoiZHVjM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTA4VDA2OjUzOjI4LjYwN1oiLCJpYXQiOjE3MjgzNzA0MDgsImV4cCI6MTcyODM3MDQwOX0.hMxD7Zq0wdg63gfZnNQyL--IpjWMweRbF6BBILYMCB8',
    expires: 1,
    refresh_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDc5YTQzYTcxYTZjMDI5ZGVjMmYyMSIsImVtYWlsIjoiZHVjM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTA4VDA2OjUzOjI4LjYwN1oiLCJpYXQiOjE3MjgzNzA0MDgsImV4cCI6MTgyODM3MDQwN30.metxUfV-Y1Vd_10yWZlquJ_YWxES8W_Yeu5Fdxidh2A',
    expires_refresh_token: 99999999,
    user: {
      _id: '66079a43a71a6c029dec2f21',
      roles: ['User'],
      email: 'duc3@gmail.com',
      createdAt: '2024-03-30T04:51:15.523Z',
      updatedAt: '2024-08-28T04:32:40.906Z',
      __v: 0,
      date_of_birth: '1994-04-04T17:00:00.000Z',
      name: 'duccc',
      address: 'Ha Noi',
      phone: '0362732423',
      avatar: '1d6a8504-cf8a-4ed7-876a-6aaa47820238.jpeg'
    }
  }
}

const loginRequest = http.post(`${config.baseUrl}${URL_LOGIN}`, () => {
  return HttpResponse.json(loginRes, { status: HttpStatusCode.Ok })
})

const refreshTokenRes = {
  message: 'Refresh Token thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDc5YTQzYTcxYTZjMDI5ZGVjMmYyMSIsImVtYWlsIjoiZHVjM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTA4VDA2OjU4OjI5LjI4M1oiLCJpYXQiOjE3MjgzNzA3MDksImV4cCI6MTcyODk3NTUwOX0.JCPj0MfS2XcHnpWFy5O33U9zHRrkTTMe3QIOYsQCO8s'
  }
}

const refreshToken = http.post(`${config.baseUrl}${URL_REFRESH_TOKEN}`, () => {
  return HttpResponse.json(refreshTokenRes, { status: HttpStatusCode.Ok })
})

const authRequest = [loginRequest, refreshToken]

export default authRequest
