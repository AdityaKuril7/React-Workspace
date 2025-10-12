import React, { useState } from 'react'

function Home() {
    const [text, setText] = useState("");
    const [bold, isBold] = useState(true);
    const [underline, isUnderline] = useState(true);
    const [italic, isItalic] = useState(true);
    const [strike, isStrike] = useState(true);
    const [charCount, setCharCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);


    let x = document.getElementById('textbox')
    function handleUpperCase() {
        setText(text.toUpperCase())
    }
    function handleLowerCase() {
        setText(text.toLowerCase())
    }
    function handleBold() {
        if (bold) {
            x.style.fontWeight = "bold"
            isBold(!bold)
        } else {
            x.style.fontWeight = "lighter"
            isBold(!bold)
        }
    }
    function handleExtraBold() {
        if (bold) {
            x.style.fontWeight = "bold"
            isBold(!bold)
        } else {
            x.style.fontWeight = "lighter"
            isBold(!bold)
        }
    }
    function handleSemiBold() {
        if (bold) {
            x.style.fontWeight = "bold"
            isBold(!bold)
        } else {
            x.style.fontWeight = "lighter"
            isBold(!bold)
        }
    }
    function handleUnderline() {
        if (underline) {
            x.style.textDecoration = 'underline'
            isUnderline(!underline)
        } else {
            x.style.textDecoration = 'none'
            isUnderline(!underline)
        }
    }
    function handleColor() {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        x.style.color = `rgb(${r},${g},${b})`

    }
    function handleItalic() {
        if (italic) {
            x.style.fontStyle = 'italic'
            isItalic(!italic)
        } else {
            x.style.fontStyle = 'normal'
            isItalic(!italic)
        }
    }
    function handleStrikeThrough() {
        if (strike) {
            x.style.textDecoration = 'line-through'
            isStrike(!strike)
        } else {
            x.style.textDecoration = 'none'
            isStrike(!strike)
        }
    }
    function handleClear() {
        setCharCount(0);
        setWordCount(0);
        setText('')
    }
    const handleChange = (e) => {
        const value = e.target.value;
        setText(value);
        setCharCount(value.length);
        setWordCount(value.trim() === "" ? 0 : value.trim().split(/\s+/).length);
    };

    return (
        <div className="Home flex flex-col justify-center items-center h-[100vh] ">
            <div className='w-100'>
                <textarea
                    className='w-100 rounded-2xl shadow-md shadow-black h-50 text-2xl p-5 font-light selection:bg-red-600 selection:text-white'
                    name=""
                    value={text}
                    onChange={handleChange}
                    id="textbox"
                    tabIndex={0}
                >

                </textarea>

                <p
                    className='text-3xl mt-10 font-semibold'
                >Characters count = {charCount}</p>
                <p
                    className='text-3xl mb-10 font-semibold'
                >Word count = {wordCount}</p>

            </div>
            <div className='buttons grid grid-cols-3'>
                <button onClick={handleUpperCase} className='btns'>Upper Case</button>
                <button onClick={handleLowerCase} className='btns'>Lower Case</button>
                <button onClick={handleColor} className='btns'>Random Color</button>
                <button onClick={handleBold} className='btns'>Bold</button>
                <button onClick={handleSemiBold} className='btns'>Semi-Bold</button>
                <button onClick={handleExtraBold} className='btns'>Extra-Bold</button>
                <button onClick={handleItalic} className='btns'>Italic</button>
                <button onClick={handleUnderline} className='btns'>Underline</button>
                <button onClick={handleStrikeThrough} className='btns'>Strike Through</button>
                <button onClick={handleClear} className='btns col-span-3'>Clear</button>
            </div>
        </div>
    )
}

export default Home