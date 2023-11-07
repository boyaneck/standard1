import './App.css';
import { useState } from 'react';
import Working from './components/working';
function App() {
   
let [list,setList]=useState([{id:1,title:'s',content:'s',isDone:false}]);
let [title,setTitle] = useState('');
let [content,setContent]=useState('');


let addTitle= E =>setTitle(E.target.value);
let addContent= E=>setContent(E.target.value);

//추가버튼
let addList=()=>{
  console.log('sss')
let newList={id:list.length,title,content,isDone:false};
setList([...list,newList]);
setTitle('');
setContent('');
};

//삭제하기
let deleteList =ID=>{
 let newList= list.filter((E) => E.id !== ID);
 setList(newList);
};
//완료하기
let doneList=ID=>{
let newList=list.filter((E)=>E.isDone ===true);
setList(newList);
};

  return (
    <div className="App">
      <header className="header">헤더입니다 </header>


      <main>
    <div className="inputBox">
     제목 <input className="inputTitle" value={title} onChange={addTitle}/>
     내용 <input className='inputContent' value={content} onChange={addContent}/>
     <button onClick={addList} >추가하기</button>
      </div> 
   <div className='TodoListLayOut'>
    {/* working */}
    {list.map((E)=>{ if(E.isDone ===false){
    return(
       <Working key={E.id} E={E} doneList={doneList} deleteList={deleteList}/>
          )
    }
  
    })}
 
      {/* done */}
      {list.map((E)=>{ if(E.isDone ===true){
    return (
      <div key={E.id} className='TodoList'>
      <div> 타이틀 </div>
      <div>  제목 </div>
      <button onClick={deleteList}>삭제하기</button>
      <button>취소</button>
       </div>
      )
      }
    
      })}

      
    
     

    </div>
         
      </main>
      <footer>푸터입니다</footer>
    </div>
  );
}

export default App;
