import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { Navbar } from '../components/Navbar'
import { Tasks } from './Tasks'
import { TaskStarted } from './TaskStarted'
import { TasksFinish } from './TasksFinish'

export const TaskRoute = () => {


  return (
    <div className='flex'>

<Navbar/>
       
<Routes>

<Route path='/' element={<Tasks/>}/>
<Route path='/tasksStarted' element={<TaskStarted/>}/>
<Route path='/TasksFinish' element={<TasksFinish/>}/>

</Routes>

    </div>
  )
}
