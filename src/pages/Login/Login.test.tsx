import { screen, waitFor } from '@testing-library/dom'
import path from 'src/constants/path'
import { logScreen, renderWithRouter } from 'src/utils/testUtils'
import { describe, expect, it } from 'vitest'

describe('Login', () => {
  it('Hien thi loi required khi khong nhap gi', async () => {
    const { user } = renderWithRouter({ route: path.login })
    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Email')).toBeInTheDocument()
    })
    const submitButton = document.querySelector('form button[type="submit"]') as Element
    user.click(submitButton)

    expect(await screen.findByText('Email là bắt buộc')).toBeTruthy()
    expect(await screen.findByText('Password là bắt buộc')).toBeTruthy()

    // await logScreen()
  })
})
