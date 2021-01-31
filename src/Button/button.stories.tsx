import React from 'react'
import { Button } from './'

export const Primary = (): React.ReactElement => <Button onClick={(): void => console.log('click')}>Button</Button>

export default {
  title: 'Button',
  component: Button
}
