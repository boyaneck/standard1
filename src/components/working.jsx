import React from 'react'

function working({E,deleteList,doneList}) {
  return (
    <div key={E.id} className='TodoList'>
      <div> {E.title} </div>
      <div>  {E.content} </div>
      <button onClick={deleteList}>삭제하기</button>
      <button onClick={doneList}>완료</button>
       </div>
  )
}

export default working;