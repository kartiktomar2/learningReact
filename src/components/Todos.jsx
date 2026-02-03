import React, { useState } from 'react'

const Todos = () => {
    let [todos, setTodos] = useState([]);

    let [todoInput, setTodoInput] = useState("");
    // add todo 
    // remove
    // edit (try using ref)
    let [editTodoId, setEditTodoId] = useState(null);
    let [editTodoData, setEditTodoData] = useState("");

    function handleAddTodo() {
        if (editTodoId) {
            setTodos(prev => {


                // find the id then update then todo 
                return prev.map((prevTodo) => {
                    if (prevTodo.id === editTodoId) {

                        return { ...prevTodo, text: editTodoData }
                    }

                    return prevTodo;
                })

            }
            )

            // setEditTodoId ko null krna jruri h kyuki vrna vo edited todo hmesha write only rahega 
            setEditTodoId(null)
            return;
        }
        setTodos(prev => [...prev, { id: Date.now(), text: todoInput.trim(), isCompleted: false }])
        setTodoInput("")
        setEditTodoId(null)
    };

    function handleDeleteTodo(id) {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    function handleEdit(todo) {

        setEditTodoId(todo.id)
        setEditTodoData(todo.text)

    }

    function handleComplete(id) {
     
        setTodos(prev => {
            return prev.map(todo => {
                if (todo.id === id) {
                    return { ...todo, isCompleted: !todo.isCompleted };
                }
                return todo;
            })
        })
    }

    return (
        <div className='flex  w-screen h-screen justify-center items-center'>
            <div className='flex flex-col gap-2 p-2 border h-96 w-100 ' >
                {/* input + add option */}
                <div className='flex  gap-2  w-full  '>
                    <input
                        type="text"
                        value={todoInput}
                        onKeyUp={(e) => {
                            if (e.code === "Enter") {
                                handleAddTodo()
                            }
                        }}
                        onChange={(e) => {
                            setTodoInput(e.target.value)
                        }}
                        className='border flex-1 outline-none p-1 ' />
                    <button className='border  '
                        onClick={handleAddTodo}
                    >Add Todo </button>
                </div>


                {/* todo display */}
                <div className='border h-full overflow-y-auto p-2 text-center flex flex-col gap-3 '>
                    {
                        todos.length > 0 ? todos.map(todo => {
                            return <div className='border  flex  p-1 gap-2 ' key={todo.id}>
                                {/* checkbox */}
                                <input
                                    type="checkbox"
                                    checked={todo.isCompleted}
                                    onChange={() => {
                                        handleComplete(todo.id)
                                    }} />
                                {/* input + delete button  */}
                                <div className='w-full flex gap-1 '>
                                    <input
                                        type="text"
                                        value={todo.id === editTodoId ? editTodoData : todo.text}
                                        readOnly={todo.id !== editTodoId}
                                        onChange={(e) => {
                                            setEditTodoData(e.target.value);
                                        }}
                                        className={`flex-1 outline-none ${todo.id === editTodoId && 'border '} ${todo.isCompleted && "line-through"}`}
                                    />

                                    <button
                                        className='border px-1'
                                        onClick={() => {
                                            if (todo.id === editTodoId) {
                                                // only the currently edited todo's edit button  should have the power to save the edited changes  

                                                handleAddTodo()
                                            }
                                            else {
                                                handleEdit(todo)

                                            }
                                        }}
                                    >{todo.id === editTodoId ? "Save" : "Edit"}</button>


                                    <button
                                        className='border px-1'
                                        onClick={() => {
                                            handleDeleteTodo(todo.id)
                                        }}
                                    >Delete</button>
                                </div>
                            </div>
                        }) : <div>No todos to be displayed</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Todos
