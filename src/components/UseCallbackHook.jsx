import React, { useCallback, useState } from 'react'

// Refer chat: useCallback behaviour explained 
const UseCallbackHook = () => {
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);


    let handleTodos = useCallback(() => {

        //Arrays are objects
        // Objects are compared by reference
        // [...todos] always creates a new reference
        // So React does:
        // Object.is(prevTodos, nextTodos) // false
        // ➡️ React cannot bail out → re-render happens

        let newTodo = { id: 1 }
        setTodos([...todos, newTodo]); // always new array passed here on each click and this function is using the reference of todo from the initial render 

        // let todo=[]   // always new array created 
        // setTodos(todo)
    }, [])

    let handleCount = useCallback(() => {
        setCount(count + 1);  // will only work for first click because after this state is not getting update so therefore no re render 
        // state is not getting updated since this function is created only on the initial render so it will use the value of count from that render os that's why it always do setCount(0+1) so after first click count will always be 1 so that's why there is no re render 
    }, [])

    
    console.log("rendered ")
    console.log("todos are: ", todos)
    return (
        <div className='h-screen w-screen flex justify-center items-center gap-2'>
            <button onClick={handleTodos}> Add Todo </button>
            <button onClick={handleCount}> Add Count </button>
        </div>
    )
}

export default UseCallbackHook
