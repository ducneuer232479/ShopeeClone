import { describe, expect, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'

import userEvent from '@testing-library/user-event'

import App from './App'
import { BrowserRouter } from 'react-router-dom'

describe('App', () => {
  test('App render va chuyen trang', async () => {
    render(<App />, {
      wrapper: BrowserRouter
    })
    const user = userEvent.setup()

    /*
     * waitFor se run callback 1 vai lan
     * cho den khi het timeout
     * so lan run phu thuoc vao timeout va interval
     * mac dinh: timeout 1000ms va interval 50ms
     */

    // Verify vao dung trang chu
    await waitFor(() => {
      expect(document.querySelector('title')?.textContent).toBe('Trang chủ | Shopee Clone')
    })

    // Verify vao trang login
    await user.click(screen.getByText(/Đăng nhập/i))
    await waitFor(() => {
      expect(screen.queryByText('Bạn chưa có tài khoản?')).toBeInTheDocument()
      expect(document.querySelector('title')?.textContent).toBe('Đăng nhập | Shopee Clone')
    })

    screen.debug(document.body.parentElement as HTMLElement, 99999999)
  })
})
