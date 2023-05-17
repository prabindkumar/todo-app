import React from 'react'

export default function SearchBar(props) {
    const handleSearchValue = (e) => {
        console.log(e.target.value);
        props.value(e.target.value)
      }
  return (

    <div className="relative">
                            <input required value="" type="text" name="Search" placeholder=" searchTodo...." onChange={(e) => handleSearchValue(e)} className="w-48 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 border border-gray-300 focus:bg-gray-50" />
                        </div>
  )
}
