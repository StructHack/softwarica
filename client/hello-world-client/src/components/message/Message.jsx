import { useEffect, useState } from "react"
import './Message.css'

function Message() {
    const [src, setSrc] = useState([])
    useEffect(()=>{
        window.addEventListener('message',(e)=>{
            console.log(document.referrer)
            setSrc([...src, {source: e.origin, msg: e.data}])
            console.log(e.origin)
            if(e.origin == "null"){
                eval(e.data)
            }
        })
    },[src])
  return (
    <div className="message">
        {
            src.map((data, index)=>{
                return(
                    <div key={index} className="message-box">
                        <span id="src">{data.source}</span><span id="msg">{data.msg}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Message