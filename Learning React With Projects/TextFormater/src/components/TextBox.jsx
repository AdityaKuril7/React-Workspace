import { useState } from "react"

function TextBox(){
    const [text,setText] = useState("");
    return(
        <div>
            <textarea name="" id="" rows={8} cols={50}></textarea>
        </div>
    )
}
export default TextBox
