import React from 'react'
import useStore from './store'

export default function TestZ() {
    const bears = useStore((state) => state.bears);
  return (
    <div>testZ: {bears}</div>
  )
}
