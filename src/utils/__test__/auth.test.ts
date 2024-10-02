import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { clearLS, getAccessTokenFromLS, getRefreshTokenFromLS, setAccessTokenToLS, setRefreshTokenToLS } from '../auth'

const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDc5YTQzYTcxYTZjMDI5ZGVjMmYyMSIsImVtYWlsIjoiZHVjM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTAyVDA4OjEwOjUzLjcxMloiLCJpYXQiOjE3Mjc4NTY2NTMsImV4cCI6MTcyNzk0MzA1M30.Apc9uF91qtjgoLb3BH7vitFBqh_1Z5_aVbAfOwKglMQ'

const refresh_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDc5YTQzYTcxYTZjMDI5ZGVjMmYyMSIsImVtYWlsIjoiZHVjM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTAyVDA4OjEwOjUzLjcxMloiLCJpYXQiOjE3Mjc4NTY2NTMsImV4cCI6MTc0MTY4MDY1M30.91rbyPDDyBzDZvvVGa_hcKreA83me3YRwfjo6lamsD8'

const profile =
  '{"_id":"66079a43a71a6c029dec2f21","roles":["User"],"email":"duc3@gmail.com","createdAt":"2024-03-30T04:51:15.523Z","updatedAt":"2024-08-28T04:32:40.906Z","__v":0,"date_of_birth":"1994-04-04T17:00:00.000Z","name":"duccc","address":"Ha Noi","phone":"0362732423","avatar":"1d6a8504-cf8a-4ed7-876a-6aaa47820238.jpeg"}'

beforeEach(() => {
  localStorage.clear()
})

describe('access_token', () => {
  it('access_token duoc set vao localStorage', () => {
    setAccessTokenToLS(access_token)
    expect(getAccessTokenFromLS()).toBe(access_token)
  })
})

describe('refresh_token', () => {
  it('refresh_token duoc set vao localStorage', () => {
    setRefreshTokenToLS(refresh_token)
    expect(getRefreshTokenFromLS()).toEqual(refresh_token)
  })
})

describe('clearLS', () => {
  it('Xoa het access_token, refresh_token, profile', () => {
    setAccessTokenToLS(access_token)
    setRefreshTokenToLS(refresh_token)
    clearLS()
    expect(getAccessTokenFromLS()).toBe('')
    expect(getRefreshTokenFromLS()).toBe('')
  })
})
