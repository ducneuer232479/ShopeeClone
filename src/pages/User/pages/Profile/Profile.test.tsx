import path from 'src/constants/path'
import { logScreen, renderWithRouter } from 'src/utils/testUtils'
import { describe, it } from 'vitest'

describe('Profile', () => {
  it('Hien thi trang profile', async () => {
    renderWithRouter({ route: path.profile })
    await logScreen()
  })
})
