import React, {useState, useRef} from 'react';
import './index.scss';

function IndexPage(){
    const [currentText, setCurrentText] = useState("");

    const textBox1 = useRef(null);
    const textBox2 = useRef(null);

    const handleScroll = index => {
        switch(index){
            case 1:
                textBox2.current.scrollTop = textBox1.current.scrollTop;
                break;
            case 2:
                textBox1.current.scrollTop = textBox2.current.scrollTop;
                break;
            default:
                return;
        }
    }
    return(
        <div>
            <div className="text-box-container">
                <textarea ref={textBox1} className="text-box" minLength="100" onScroll={() => handleScroll(1)} value={currentText} onChange={e => setCurrentText(e.target.value)}></textarea>
                <div ref={textBox2} onScroll={() => handleScroll(2)} className="text-box">{currentText}</div>
            </div>
        </div>
    )
}

export default IndexPage;