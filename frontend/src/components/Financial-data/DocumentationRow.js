import React, { useState } from 'react'

export const DocumentationRow = (props) => {

  const [copyState, setCopyState] = useState(false);

  function copy(data){
    navigator.clipboard.writeText(data)
    setCopyState(true);
  }

  return (
    <div className='my-6 w-full container space-y-4' style={{height: '45px'}}>
      <div class="text-xl font-semibold text-grey_600">
        {props.data.title}
      </div>
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 right-0 flex items-center px-2">
          <button type="submit" onClick={() =>  copy(props.data.url)} className="p-1 text-white focus:outline-none focus:shadow-outline">
            {
              !copyState ? <svg style={{color: 'white'}} width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4H10C10.5523 4 11 3.55228 11 3C11 2.44772 10.5523 2 10 2H8Z" fill="white"></path> <path d="M3 5C3 3.89543 3.89543 3 5 3C5 4.65685 6.34315 6 8 6H10C11.6569 6 13 4.65685 13 3C14.1046 3 15 3.89543 15 5V11H10.4142L11.7071 9.70711C12.0976 9.31658 12.0976 8.68342 11.7071 8.29289C11.3166 7.90237 10.6834 7.90237 10.2929 8.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L10.2929 15.7071C10.6834 16.0976 11.3166 16.0976 11.7071 15.7071C12.0976 15.3166 12.0976 14.6834 11.7071 14.2929L10.4142 13H15V16C15 17.1046 14.1046 18 13 18H5C3.89543 18 3 17.1046 3 16V5Z" fill="white"></path> <path d="M15 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H15V11Z" fill="white"></path> </svg>
              : (<svg className="checkmark pb-2" style={{color: 'white', stroke:'white', width: '40px', height: '40px', strokeWidth: '2'}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40"><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>)
            }
              </button>
        </span>
        <input type="search" id={props.data} disabled value={props.data.url} name="q" style={{backgroundColor: '#262626', color: 'white'}} className="bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 p-2 w-full rounded-lg" autocomplete="off" />
      </div>
    </div>
  )
}