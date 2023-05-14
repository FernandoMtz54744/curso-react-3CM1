import React, { useEffect, useState } from 'react'
import RFC from '../pages/RFC'
import censoredTxt from "../res/CensoredWords.txt"

export default function RFCContainer() {
    const [rfc, setRFC] = useState("**********-###"); //PPMNAAMMDD-###
    const [form, setForm] = useState({nombre:"", paterno:"", materno:"", fechaNacimiento:""});
    const [censored, setCensored] = useState([])

    useEffect(() => {
      async function loadCensoredWords() {
        let words = await fetch(censoredTxt)
          .then((r) => r.text())
          .then((text) => text.toString().replaceAll("\r", "-").replaceAll("\n","-"));

        setCensored(words.split("-"))
      }
      loadCensoredWords();
    }, []);

    const onChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        const rfcArray = rfc.split("");
        setForm({...form, [name]: value});

        if(name === "nombre"){
            if(value.length >= 1){
                rfcArray[3] = value[0];
            }else{
                rfcArray[3] = "*";
            }
        }else if(name === "paterno"){
            if(value.length >= 2){
                rfcArray[0] = value[0];
                rfcArray[1] = value[1];
            }else{
                rfcArray[0] = "*";
                rfcArray[1] = "*";
            }
        }else if(name === "materno"){
            if(value.length >= 1){
                rfcArray[2] = value[0];
            }else{
                rfcArray[2] = "*";
            }
        }else{
            const date = value.replaceAll('-', '').substring(2);
            if(date.length === 6){
                console.log("true")
                for(let i=0; i<6; i++){
                    rfcArray.splice(i+4,1,date[i]);
                }
            }else{
                for(let i=0; i<6; i++){
                    rfcArray.splice(i+4,1,"*");
                }
            }
        }

        setRFC(rfcArray.join('').toUpperCase()); 
    }

    const checkCensored = (text)=>{
        const wordRfc = text.substring(0, 4); 
        if(censored.includes(wordRfc)){ 
            return text.substring(0,3)+"X"+text.substring(4) 
        }else{
            return text 
        }
    }

    return (
        <RFC rfc={rfc} form={form} onChange={onChange} checkCensored={checkCensored}/>
    )
}
