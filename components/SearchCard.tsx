import React from 'react'


const SearchCard = ({entities}: any) => {
  return (
    <div>
        {entities.map((item: any) => (
            <div className='flex'>
                <span className='p-2 hover:text-red-500 w-fit cursor-pointer'>{item.name}</span>
            </div>
        ))}
    </div>
  )
}

export default SearchCard