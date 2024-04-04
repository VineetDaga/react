import React, {useState} from 'react'

function Temp({showalert}) {

    const  handleChange = (event) =>{
        const newtext = event.target.value;
        setText(newtext);
      }
      
      const toupper = ()=>{
        let temp = text.toUpperCase();
        setText(temp);
        showalert("Every thing is Uppercased!" , "Success")
      }
      const tolower = ()=>{
        let temp = text.toLowerCase();
        setText(temp);
        showalert("Everything is Lowercased!" , "Success")
      }
      const toclr = ()=>{
        setText("");
        showalert("Text Area is Cleared!" , "Success")
      }
      const tocopy = ()=>{
        alert("copied to clipboard");
        window.navigator.clipboard.writeText(text)
        showalert("Copied to Clipboad!" , "Success")
      }

      const removespace = () =>{
        const newtxt = text.split(/[ ] +/)
        setText(newtxt.join(" "));
        showalert("Extra Space is Removed" , "Success")
      }
      
      const [text, setText] = useState("");
  return (
    <div className='dark:bg-yellow-300 p-4'>
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md  dark:bg-lime-300 dark:text-red-600">
      <h2 className="text-xl font-semibold mb-4">Textarea Component</h2>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white"
        value={text}
        onChange={handleChange}
        rows={4} // Adjust the number of rows as needed
        placeholder="Type something here..."
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1 dark:bg-purple-500 dark:hover:bg-purple-700 dark:text-black"
              onClick={toupper}>
         To Upper Case
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1 dark:bg-purple-500 dark:hover:bg-purple-700 dark:text-black"
              onClick={tolower}>
         To Lower Case
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1 dark:bg-purple-500 dark:hover:bg-purple-700 dark:text-black"
              onClick={toclr}>
         Clear
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1 dark:bg-purple-500 dark:hover:bg-purple-700 dark:text-black"
              onClick={tocopy}>
         Copy
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1 dark:bg-purple-500 dark:hover:bg-purple-700 dark:text-black"
              onClick={removespace}>
         remove extra space
      </button>
      <h1 className="text-xl font-semibold mb-4"> My Summary</h1>
      <p className="text-gray-600 dark:text-blue-700 text-sm mt-2">word : {text.split(" ").length}  and character : {text.length}</p>
      <p className="text-gray-600 dark:text-blue-700 text-sm mt-2">Time to read : {text.split(" ").length * 0.008} minutes</p>
      <h1 className="text-xl font-semibold mb-4"> Preview</h1>
      <p className="text-gray-600 dark:text-blue-700 text-sm mt-2">You typed: {text}</p>
    </div>
    </div>
  )
}

export default Temp
