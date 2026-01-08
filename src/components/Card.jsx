

const Card = ({age, name, title, arr}) => {
    console.log("arr is: ",arr)
  return (
    <div className="border bg-gray-600  h-30 w-40 ">
             <h1>Name is: {name}</h1>
             <h1>age  is: {age }</h1>
             <h1>title is: {title}</h1>
             <h1>arr is Array: {Array.isArray(arr).toString()}</h1>
    </div>
  )
}

export default Card
