import React from 'react'

export const DocumentationRow = (props) => {

  function copy(){
    var copyText = document.getElementById(props.data);
    copyText.select();
    document.execCommand("copy");
  }

  return (
    <div className='w-full mt-6 mx-auto container' style={{height: '45px'}}>
      <div>
        API SERVICE
      </div>
      <div class="relative text-gray-600 focus-within:text-gray-400">
        <span class="absolute inset-y-0 right-0 flex items-center px-2">
          <button type="submit" onClick={()=>copy} class="p-1 text-white focus:outline-none focus:shadow-outline">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </span>
        <input type="search" id={props.data} disabled value={props.data} name="q" style={{fontFamily: 'DejaVu Sans Mono', backgroundColor: '#262626', color: 'white'}} class="bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 p-2 w-full rounded-lg" autocomplete="off" />
      </div>
    </div>
  )
}
