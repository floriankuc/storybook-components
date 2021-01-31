import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card } from '.'

const mockOnClick = jest.fn()
const mockCardTitle = 'Title'
const mockCardDesc = 'Description'
const mockLinkName = 'Github'
const mockLinkURL = 'http://test.com'

describe('Card', () => {
  test('Card props', () => {
    render(<Card onClick={mockOnClick} title={mockCardTitle} description={mockCardDesc} number={1} links={[{ displayName: mockLinkName, url: mockLinkURL }]} />)

    expect(screen.getByText(mockCardTitle)).toBeInTheDocument()
    expect(screen.getByText(mockCardDesc)).toBeInTheDocument()
    expect(screen.getByText(mockLinkName)).toBeInTheDocument()
    expect(screen.getByText(/01/)).toBeInTheDocument()
  })
})
