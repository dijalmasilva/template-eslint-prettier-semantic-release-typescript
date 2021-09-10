import { render, screen } from '@testing-library/react'
import App from 'App'

test('renders first screen', () => {
  render(<App />)
  const linkElement = screen.getByText(/Template works/i)
  expect(linkElement).toBeInTheDocument()
})
