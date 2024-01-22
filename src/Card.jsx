import { useState } from "react";
import { data } from "./assets/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
    let [i, setI]=useState(0)
    let [question, setQuestion] = useState(data[i])
    let [ans, setAns] = useState(question.ans)
    let [n1,setN1] = useState("ans")
    let [n2,setN2] = useState("ans")
    let [n3,setN3] = useState("ans")
    let [n4,setN4] = useState("ans")


    const handleClick = (answer) => {

    

    }

    const checkAns = (answer) => {

        if(answer === ans){
            console.log("good");
        }
        else{
            console.log("wrong");
        }


        if(answer === 1)
            setN1("selected")
        else
            setN1("ans")

        
    }
    return ( 
        <div className="card">
            <h1 className="question">{question.question}</h1>
            <ul className="list">
                <li className="num">{`${i+1}/5`}</li>
                <li className={n1} onClick={() => checkAns(1)}>{question.option1}</li>
                <li className={n2} onClick={() => checkAns(2)}>{question.option2}</li>
                <li className={n3} onClick={() => checkAns(3)}>{question.option3}</li>
                <li className={n4} onClick={() => checkAns(4)}>{question.option4}</li>
            </ul>
            <div className="back" onClick={handleClick}><FontAwesomeIcon icon={faArrowLeft}/></div>
            <div className="next"><FontAwesomeIcon icon={faArrowRight}/></div>
        </div>

     );
}
 
export default Card;