import { beforeEach, describe, expect, it } from 'vitest'
import { Http } from '../http'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { setAccessTokenToLS, setRefreshTokenToLS } from '../auth'

describe('http axios', () => {
  let http = new Http().instance

  beforeEach(() => {
    localStorage.clear()
    http = new Http().instance
  })

  const access_token_1s =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDc5YTQzYTcxYTZjMDI5ZGVjMmYyMSIsImVtYWlsIjoiZHVjM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTAyVDEwOjMzOjAwLjMyM1oiLCJpYXQiOjE3Mjc4NjUxODAsImV4cCI6MTcyNzg2NTE4MX0.s6CUNKkMEi7UeEAkcp0EaeSm_J6vnUHjUVhhdMynlsE'

  const refresh_token_1000days =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDc5YTQzYTcxYTZjMDI5ZGVjMmYyMSIsImVtYWlsIjoiZHVjM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTAyVDEwOjMzOjAwLjMyM1oiLCJpYXQiOjE3Mjc4NjUxODAsImV4cCI6MTc0MTY4OTE4MH0.seP06UFnO8zrQJdZVnFVeVe4MjfLJNRtKCp_AaiCs5A'

  it('Goi API', async () => {
    const res = await http.get('products')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })

  it('Auth Request', async () => {
    await http.post('login', {
      email: 'duc3@gmail.com',
      password: '123123'
    })
    const res = await http.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })

  it('Refresh Token', async () => {
    setAccessTokenToLS(access_token_1s)
    setRefreshTokenToLS(refresh_token_1000days)
    const httpNew = new Http().instance
    const res = await httpNew.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })
})
