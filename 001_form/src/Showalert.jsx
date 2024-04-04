import {useState} from 'react'


function Showalert() {

    const [alert , setAlert] = useState(null);
    const showalert = (msg,type) =>{
      setAlert({
        message : msg,
        type : type
      })
      setTimeout(()=>{
        setAlert(null);
      }, 3000);
    }

  return (
    <div>AA</div>
  )
}

export default Showalert