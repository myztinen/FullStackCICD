import { render, screen } from '@testing-library/react'
import Persons from '../src/components/Persons'

const personsList = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: '1'
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: '2'
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: '3'
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: '4'
  }
]

describe('<Persons />', () => {
  it('should render items', () => {
    render(
      <Persons persons={personsList} nameFilter="" removeHandler={() => { }} />
    )

    expect(screen.getByText('Arto Hellas 040-123456')).toBeVisible()
    expect(screen.getByText('Ada Lovelace 39-44-5323523')).toBeVisible()
  })
})
