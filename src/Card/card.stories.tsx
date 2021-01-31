import React from 'react'
import { Card } from './'

const mockTitle = 'Title of card'
const mockDescription = 'Description of card lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'

export const Primary = (): React.ReactElement => (
  <Card
    onClick={(): void => console.log('click')}
    title={mockTitle}
    description={mockDescription}
    number={1}
    links={[
      { displayName: 'GitHub', url: 'testurl' },
      { displayName: 'Live', url: 'test' }
    ]}
  />
)

export default {
  title: 'Card',
  component: Card
}
