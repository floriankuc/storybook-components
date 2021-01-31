import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '.'

const mockOnClick = jest.fn()
const buttonText = 'Button'

describe('Button', () => {
  test('Button props', () => {
    render(<Button onClick={mockOnClick}>{buttonText}</Button>)

    expect(screen.getByText(buttonText)).toBeInTheDocument()
  })

  test('Button click', () => {
    render(<Button onClick={mockOnClick}>{buttonText}</Button>)

    fireEvent.click(screen.getByText(buttonText))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
