import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'
import config from 'src/constants/config'
import { URL_LOGIN, URL_REFRESH_TOKEN } from 'src/apis/auth.api'

export const access_token_1s =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDc5YTQzYTcxYTZjMDI5ZGVjMmYyMSIsImVtYWlsIjoiZHVjM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTAyVDEwOjMzOjAwLjMyM1oiLCJpYXQiOjE3Mjc4NjUxODAsImV4cCI6MTcyNzg2NTE4MX0.s6CUNKkMEi7UeEAkcp0EaeSm_J6vnUHjUVhhdMynlsE'

export const refresh_token_1000days =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDc5YTQzYTcxYTZjMDI5ZGVjMmYyMSIsImVtYWlsIjoiZHVjM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTAyVDEwOjMzOjAwLjMyM1oiLCJpYXQiOjE3Mjc4NjUxODAsImV4cCI6MTc0MTY4OTE4MH0.seP06UFnO8zrQJdZVnFVeVe4MjfLJNRtKCp_AaiCs5A'

export const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmY5MzVlNWZkYzVmMDM3ZTZmNjhkMyIsImVtYWlsIjoiZDNAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0xOVQxMzo1ODo0OC40ODlaIiwiaWF0IjoxNjcxNDU4MzI4LCJleHAiOjE2ODE0NTgzMjd9.00oi-93dF4Wz2Ngb6_G2dXO4VQXf2cRCft3W8DKgPdA'

const loginRes = {
  message: 'Đăng nhập thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmY5MzVlNWZkYzVmMDM3ZTZmNjhkMyIsImVtYWlsIjoiZDNAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0xOVQwNDoxODowMC4wNjRaIiwiaWF0IjoxNjcxNDIzNDgwLCJleHAiOjE2NzI0MjM0Nzl9.AxOvjaTErYwvOSdMWtZgefX8JJ3KaMCZWNCj72uqzYY',
    expires: 999999,
    refresh_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmY5MzVlNWZkYzVmMDM3ZTZmNjhkMyIsImVtYWlsIjoiZDNAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0xOVQwNDoxODowMC4wNjRaIiwiaWF0IjoxNjcxNDIzNDgwLCJleHAiOjE3NTc4MjM0ODB9.AvavrdIeU1xm2KrFeEKSiDJs260YU1uWxRzVw30MgoU',
    expires_refresh_token: 86400000,
    user: {
      _id: '636f935e5fdc5f037e6f68d3',
      roles: ['User'],
      email: 'd3@gmail.com',
      createdAt: '2022-11-12T12:36:46.282Z',
      updatedAt: '2022-12-02T07:57:45.069Z',
      __v: 0,
      avatar: 'a59b50bf-511c-4603-ae90-3ccc63d373a9.png',
      name: 'Dư Thanh Được'
    }
  }
}

const loginRequest = http.post(`${config.baseUrl}${URL_LOGIN}`, () => {
  return HttpResponse.json(loginRes)
})

const refreshTokenRes = {
  message: 'Refresh Token thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmY5MzVlNWZkYzVmMDM3ZTZmNjhkMyIsImVtYWlsIjoiZDNAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0xOVQwNzozMTowMC4yNTJaIiwiaWF0IjoxNjcxNDM1MDYwLCJleHAiOjE2NzIwMzk4NjB9.vTHglpuxad5h_CPpIaDCUpW0xJPYarJzLFeeul0W61E'
  }
}

const refreshToken = http.post(`${config.baseUrl}${URL_REFRESH_TOKEN}`, () => {
  return HttpResponse.json(refreshTokenRes)
})

const authRequest = [loginRequest, refreshToken]

export default authRequest
