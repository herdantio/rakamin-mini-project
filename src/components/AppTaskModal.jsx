import { Fragment, useContext, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { store } from '../store'
import axios from '../axios'

export default function AppTaskModal() {

    const {state, dispatch} = useContext(store)
    const [name, setName] = useState('')
    const [progress, setProgress] = useState(0)
    
    const createTask = async function(todoId){
        try {
            await axios.post(`/todos/${todoId}/items`, {
                name: name,
                progress_percentage: progress
            })
            dispatch({type: 'setFlagTodoId', payload: 1})
            dispatch({type: 'hideTaskModal'})
        } catch (error) {
            console.warn(error)
        }
    }

    const editTask = async function(){
        try {
            await axios.patch(`/todos/${state.todoId}/items/${state.id}`, {
                progress_percentage: progress
            })
            
            dispatch({type: 'setTaskNameProgress', payload: {name: '', progress: 0}})
            dispatch({type: 'setFlagTodoId', payload: 1})
            dispatch({type: 'hideTaskModal'})
        } catch (error) {
            console.warn(error)
        }
    }


  return (
    <Transition.Root show={state.isTaskModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {
        dispatch({type: 'setTaskNameProgress', payload: {name: '', progress: 0}})
        dispatch({type: 'hideTaskModal'})
      }}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => {
                        dispatch({type: 'setTaskNameProgress', payload: {name: '', progress: 0}})
                        dispatch({type: 'hideTaskModal'})
                      }}
                  >
                    <span className="sr-only">Close</span>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>

                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title className="text-lg font-bold leading-6 text-gray-900">
                      {state.taskModalMode == 'create' ? 'Create' : 'Edit'} Task
                    </Dialog.Title>
                    <div className="mt-2">
                      <div className='space-y-2'>
                        <div className='text-xs font-bold'>Task Name</div>
                        <input className='border-2 border-solid rounded-lg w-[372px] h-10' placeholder='Type your task' type={'text'} onChange={e=>setName(e.target.value)}/>
                      </div>
                      <div className='space-y-2 mt-5'>
                        <div className='text-xs font-bold'>Progress</div>
                        <input className='border-2 border-solid rounded-lg h-10' placeholder='70%' type={'text'} onChange={e=>setProgress(e.target.value)}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-rk-green px-4 py-2 text-base font-medium text-white shadow-sm sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                        if(state.taskModalMode == 'create'){
                            createTask(state.todoId)
                        }else{
                            editTask()
                        }
                    }}
                  >
                    Save Task
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => {
                        dispatch({type: 'setTaskNameProgress', payload: {name: '', progress: 0}})
                        dispatch({type: 'hideTaskModal'})
                      }}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
