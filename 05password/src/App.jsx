import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length,setLength] = useState(8);
  const [ numallowed, setNumallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
  // useref hook
  const passref = useRef(null);
  const [ password,setPassword] = useState("");
  const passwordgenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numallowed) str+="0123456789";
    if(charallowed) str+="!@#$%^&*()_+-=[]{}`~?/><,.";
    const x = str.length;
    for(let i = 0;i<length;i++){
      let index = Math.floor(Math.random()*x);
      pass += str[index];
    }
    setPassword(pass);

  },[length,numallowed,charallowed,setPassword])
  
  useEffect(() =>{
    passwordgenerator();
  },[length,numallowed,charallowed,passwordgenerator])

  const copypass = useCallback(() =>{
    passref.current?.select()
    passref.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-10 py-1 text-orange-500 bg-gray-700 text-center'>
        <h1 className='text-white text-center py-1 my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passref}
        />
        <button
        onClick={copypass}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
             />
             <label>Length :{length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={numallowed}
            id="numberInput"
            onChange={() => {
                 setNumallowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charallowed}
                id="characterInput"
                onChange={() => {
                  setCharallowed((prev) => !prev )
                }}
              />
              <label    htmlFor="characterInput">Characters</label>
          </div>
        </div>
          <div className='flex text-sm gap-x-2 justify-center items-center'>
          <button
            onClick={passwordgenerator}
            className='outline-none bg-blue-700   text-white px-3 py-0.5 shrink-0 rounded-lg m-1 '
            >Refresh</button>
        </div>
      </div>
  )
}

export default App

// import { useState, useCallback, useEffect, useRef } from 'react'



// function App() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false)
//   const [password, setPassword] = useState("")

//   //useRef hook
//   const passwordRef = useRef(null)

//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if (numberAllowed) str += "0123456789"
//     if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1)
//       pass += str.charAt(char)
      
//     }

//     setPassword(pass)


//   }, [length, numberAllowed, charAllowed, setPassword])

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 999);
//     window.navigator.clipboard.writeText(password)
//   }, [password])

//   useEffect(() => {
//     passwordGenerator()
//   }, [length, numberAllowed, charAllowed, passwordGenerator])
//   return (
    
//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
//       <h1 className='text-white text-center my-3'>Password generator</h1>
//     <div className="flex shadow rounded-lg overflow-hidden mb-4">
//         <input
//             type="text"
//             value={password}
//             className="outline-none w-full py-1 px-3"
//             placeholder="Password"
//             readOnly
//             ref={passwordRef}
//         />
//         <button
//         onClick={copyPasswordToClipboard}
//         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
//         >copy</button>
        
//     </div>
//     <div className='flex text-sm gap-x-2'>
//       <div className='flex items-center gap-x-1'>
//         <input 
//         type="range"
//         min={6}
//         max={100}
//         value={length}
//          className='cursor-pointer'
//          onChange={(e) => {setLength(e.target.value)}}
//           />
//           <label>Length: {length}</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//       <input
//           type="checkbox"
//           defaultChecked={numberAllowed}
//           id="numberInput"
//           onChange={() => {
//               setNumberAllowed((prev) => !prev);
//           }}
//       />
//       <label htmlFor="numberInput">Numbers</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//           <input
//               type="checkbox"
//               defaultChecked={charAllowed}
//               id="characterInput"
//               onChange={() => {
//                   setCharAllowed((prev) => !prev )
//               }}
//           />
//           <label htmlFor="characterInput">Characters</label>
//       </div>
//     </div>
// </div>
    
//   )
// }

// export default App