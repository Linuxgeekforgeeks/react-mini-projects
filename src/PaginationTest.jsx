import React from 'react'
import Pagination from './mini-projects/pagination'

function PaginationTest() {

    const dummyData=Array.from({length:100},(_,index)=>({
        id:index+1,
        name:`Product ${index+1}`
    }))


    console.log(dummyData)
  return (
    <div>

        <Pagination/>
    </div>
  )
}

export default PaginationTest