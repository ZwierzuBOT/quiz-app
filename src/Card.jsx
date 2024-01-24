import { useState } from "react";
import { data } from "./assets/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = () => {


  let [i, setI] = useState(0);
  let [question, setQuestion] = useState(data[i].question);
  let [answ, setAns] = useState(data[i].ans);


  let [n1, setN1] = useState("ans");
  let [n2, setN2] = useState("ans");
  let [n3, setN3] = useState("ans");
  let [n4, setN4] = useState("ans");


  let [op1,setOp1] = useState(data[i].option1);
  let [op2,setOp2] = useState(data[i].option2);
  let [op3,setOp3] = useState(data[i].option3);
  let [op4,setOp4] = useState(data[i].option4);


  let [select1, setSelect1] = useState(0);
  let [select2, setSelect2] = useState(0);
  let [select3, setSelect3] = useState(0);
  let [select4, setSelect4] = useState(0);
  let [select5, setSelect5] = useState(0);

  let [score, setScore] = useState(0);
  let [show1, setShow1] = useState("list");
  let [show2, setShow2] = useState("scoreInv");


  const handleClick = (d) => {
    if (d === "next") {
      if (i < data.length - 1) {
        setI((prevI) => prevI + 1);
  
        setQuestion(data[i + 1].question);
        setAns(data[i + 1].ans);
  
        setN1("ans");
        setN2("ans");
        setN3("ans");
        setN4("ans");
  
        setOp1(data[i + 1].option1);
        setOp2(data[i + 1].option2);
        setOp3(data[i + 1].option3);
        setOp4(data[i + 1].option4);

        
        setScore(select1 + select2 + select3 + select4 + select5)

      }
      else{
          // podliczni punktow tu zrobic
        setScore(select1 + select2 + select3 + select4 + select5)
        

        setI(0);
        setQuestion("");
        setAns(data[i].ans);
        setN1("ans");
        setN2("ans");
        setN3("ans");
        setN4("ans");
        
        setShow1("notList")
        setShow2("scoreVis")
        
          
      }
    }
  };

  const checkAns = (answer) => {
   
    if (answer === answ) {
      if(i === 0)
        setSelect1(1)
      else if(i === 1)
        setSelect2(1)
      else if(i === 2)
        setSelect3(1)
      else if(i === 3)
        setSelect4(1)
      else if(i === 4)
        setSelect5(1)
} else {
        if(i === 0)
          setSelect1(0)
        else if(i === 1)
          setSelect2(0)
        else if(i === 2)
          setSelect3(0)
        else if(i === 3)
          setSelect4(0)
        else if(i === 4)
          setSelect5(0)
      
    }

    if (answer === 1) {
      setN1("selected");
      setN2("ans");
      setN3("ans");
      setN4("ans");
    } else if (answer === 2) {
      setN2("selected");
      setN1("ans");
      setN3("ans");
      setN4("ans");
    } else if (answer === 3) {
      setN3("selected");
      setN1("ans");
      setN2("ans");
      setN4("ans");
    } else if (answer === 4) {
      setN4("selected");
      setN1("ans");
      setN2("ans");
      setN3("ans");
    }
  };
  return (
    <div className="card">
      <h1 className="question">{question}</h1>
      <ul className={show1}>
        <li className="num">{`${i + 1}/5`}</li>
        <li className={n1} onClick={() => checkAns(1)}>
          {op1}
        </li>
        <li className={n2} onClick={() => checkAns(2)}>
          {op2}
        </li>
        <li className={n3} onClick={() => checkAns(3)}>
          {op3}
        </li>
        <li className={n4} onClick={() => checkAns(4)}>
          {op4}
        </li>
      </ul>
      <div className="next" onClick={() => handleClick("next")}>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
        <div className={show2}>You score is {score}/5</div>      
    </div>
  );
};

export default Card;
