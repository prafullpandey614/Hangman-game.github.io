/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import "./Hangman.css"
const Hangman = () => {

    const [structure, setStructure] = useState(0);
    const [word, setWord] = useState("crow");
    const [guess, setGuess] = useState("")
    const [showHook, setShowHook] = useState(false)
    const [showHead, setShowHead] = useState(false)
    const [showBody, setShowBody] = useState(false)
    const [showHand, setShowHand] = useState(false)
    const [showLeg1, setShowLeg1] = useState(false)
    const [showLeg2, setShowLeg2] = useState(false)

    let handleGuess = (e) =>{
        let chr = e.target.value
        if (word.includes(chr)){
            let nwGuess = guess.split('');
            for(let i=0 ; i < word.length; ++i){
                if(word[i]==chr){
                    nwGuess[i] = chr ;
                }
            }
            setGuess(nwGuess.join(''));
            
        }
        else{
            if(structure==0){
                setShowHook(true);
            }
            else if(structure==1){
                setShowHead(true)
            }
            else if(structure==2){
                setShowBody(true)
            }
            else if(structure==3){
                setShowHand(true)
            }
            else if(structure==4){
                setShowLeg1(true)
            }
            else if(structure==5){
                setShowLeg2(true)
            }
            setStructure(structure+1);
        }
        e.target.value = "";
        
    }

    const handleReset = () => {
        setShowHook(false);
        setShowHead(false);
        setShowBody(false);
        setShowHand(false);
        setShowLeg1(false);
        setShowLeg2(false);
        setGuess("")
    }

  return (
    <div>
        <div className="hangman-structure">

            <div className="stand">
            </div>
            <div className="horz">

            </div>
            <div className="person">
                {showHook &&  <div className="hook">
            </div>}
            {showHead && <div className='head'>
            </div>}
            
            {showBody && <div className="body">
                {showHand && <div className="hand"></div>}
            </div>}
            
            <div className="legs">
            {showLeg1 && <div className="leg1"></div>}
            {showLeg2 && <div className="leg2"></div>}
            
            </div>
            

            </div>
            

        </div>
        


        <div className="guess-word">
            {guess}
        </div>
        <input type="text" onChange={(e)=>{handleGuess(e)}}/>
        <div className="result">
            { word==guess? "YES !! You Saved" : structure >5 && "You Hanged !!"}
        </div>
        <button onClick={handleReset} >Reset game</button>
    </div>
  )
}

export default Hangman