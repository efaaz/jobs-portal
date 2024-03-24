import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
      <h1 className="text-center text-6xl text-blue-500">Hello World!</h1>
    <Outlet />
    </>
  )
}
