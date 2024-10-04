import { screen, waitFor, fireEvent } from '@testing-library/dom'
import path from 'src/constants/path'
import { renderWithRouter } from 'src/utils/testUtils'
import { beforeAll, describe, expect, it } from 'vitest'

describe('Login', () => {
  beforeAll(async () => {
    renderWithRouter({ route: path.login })
    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Email')).toBeInTheDocument()
    })
  })

  it('Hien thi loi required khi khong nhap gi', async () => {
    const submitButton = document.querySelector('form button[type="submit"]') as Element
    fireEvent.submit(submitButton)

    await waitFor(async () => {
      expect(await screen.findByText('Email là bắt buộc')).toBeTruthy()
      expect(await screen.findByText('Password là bắt buộc')).toBeTruthy()
    })

    // await logScreen()
  })

  it('Hien thi loi required khi khong nhap gi', async () => {
    const emailInput = document.querySelector('form input[type="email"]') as HTMLInputElement
    const passwordInput = document.querySelector('form input[type="password"]') as HTMLInputElement
    const submitButton = document.querySelector('form button[type="submit"]') as HTMLButtonElement

    fireEvent.change(emailInput, {
      target: {
        value: 'test@gmail'
      }
    })
    fireEvent.change(passwordInput, {
      target: {
        value: '123'
      }
    })
    fireEvent.submit(submitButton)

    expect(await screen.findByText('Email không đúng định dạng')).toBeTruthy()
    expect(await screen.findByText('Độ dài từ 6 - 160 ký tự')).toBeTruthy()

    // await logScreen()
  })
})
