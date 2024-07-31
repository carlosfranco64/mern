import React from 'react'

export const Loading = () => {
  return (
   
<div className="flex items-center justify-center h-screen">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full border-4 border-gray-300 border-t-gray-900 animate-spin" />
        <span className="text-gray-500 dark:text-gray-400">Cargando...</span>
      </div>
    </div>

  )
}
