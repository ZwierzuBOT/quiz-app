import { useState } from "react";
import { data } from "./assets/data";

const Card = () => {
    let [i, setI]=useState(0)
    let [question, setQuestion] = useState(data[i])
    let [ans, setAns] = useState(question.ans)








    const checkAns = (answer) => {

        if(answer === ans){
            console.log("good");
        }
        else{
            console.log("wrong");
        }
    }
    return ( 
        <div className="card">
            <h1 className="question">{question.question}</h1>
            <ul className="list">
                <li className="ans" onClick={() => checkAns(1)}>{question.option1}</li>
                <li className="ans" onClick={() => checkAns(2)}>{question.option2}</li>
                <li className="ans" onClick={() => checkAns(3)}>{question.option3}</li>
                <li className="ans" onClick={() => checkAns(4)}>{question.option4}</li>
            </ul>
            <div className="back"></div>
            <div className="next"></div>
        </div>

     );
}
 
export default Card;