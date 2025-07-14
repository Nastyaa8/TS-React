import React from "react";
import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const Calculator: React.FC = () =>{
    const [display, setDisplay] = useState<string>("")

    const clickButtonHandler = (val:string) =>{
        setDisplay(p => p + val)
    };

    const inpClear = () =>{
        setDisplay('')
    };

    const clearLastSymbol = () =>{
        if(display.length === 1 || display.length === 0){
            setDisplay('');
            return;
        }
        setDisplay(p => p.slice(0, p.length - 1));
    };

    const calculate = () =>{
        if(display.includes('/0') || display.includes('/ 0')){
            alert('Ошибка: деление на ноль')
            setDisplay('0');
            return;
        }
        let res:any = 0;
        try{
            res = eval(display);
            if(res == undefined){
                setDisplay('0')
                return
            }
            
        }
        catch{
            alert("Ошибка")
            setDisplay('0')
            return;
        }
        const buf = localStorage.getItem('history');
        if(buf != null){
            localStorage.setItem('history', `${buf}\n${display} = ${res}`);
        }
        else{
            localStorage.setItem('history', `${display} = ${res}`);
        }
        setDisplay(String(res));
    };
    const temToggle = () =>{
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }

    const openHistory = () =>{
        const d = document.getElementById('back')
        d?.classList.toggle('hidden');
        const b = document.getElementById('goback')
        b?.classList.toggle('hidden');
        const buf = localStorage.getItem('history');
        if(buf != null){
            setDisplay(buf);
        }
        const dis = document.getElementById('disp')
        dis?.classList.toggle('overflow-auto')
        dis?.classList.remove('h-16')
        dis?.classList.add('h-28')
    }
    const closeHistory = () =>{
        const d = document.getElementById('back')
        d?.classList.toggle('hidden');
        const b = document.getElementById('goback')
        b?.classList.toggle('hidden');
        setDisplay('0');
        const dis = document.getElementById('disp')
        dis?.classList.toggle('overflow-auto')
        dis?.classList.remove('h-28')
        dis?.classList.add('h-16')
    }

    return(
        <div className=" relative dark:bg-rose-950 bg-rose-50  border-2 flex sssm:w-full ssm:w-full sm:w-full md:w-full lg:w-full h-full flex-col items-center justify-center align-middle align rounded-3xl" >
            <Display id={'disp'} fun={calculate} text={[display, setDisplay]} className="resize-none w-1/2  border-2 outline-none h-16 mb-2 text-3xl"></Display>
            <button id="goback" onClick={closeHistory} className="dark:bg-rose-800  bg-rose-300 text-white rounded lg:text-3xl sm:text-2xl font-normal w-3/5 h-1/4 m-1 dark hidden">back</button>
            <div id='back' className="grid grid-cols-4 items-center justify-items-center justify-center gap-1 w-5/6 h-3/5">
            <button id="history" onClick={openHistory} className="dark:bg-rose-800  bg-rose-300 text-white rounded lg:text-3xl sm:text-2xl font-normal w-3/5 h-3/5 m-1 dark">&#128174;</button>
                <Button title={'C'} func={()=> inpClear()} disable={false} className="dark:bg-rose-800 bg-rose-300 text-white py-0.1 px-1 rounded text-lg font-normal w-4/5 h-5/6 m-1 lg:text-3xl"/>
                <Button title={'⌫'} func={()=> clearLastSymbol()} disable={false} className="dark:bg-rose-800  bg-rose-300 text-white py-0.1 px-1 rounded text-lg font-normal w-4/5 h-5/6 m-1 lg:text-3xl sm:text-2xl"/>
                <Button title={'/'} func={()=> clickButtonHandler('/')} disable={false} className="dark:bg-rose-800  bg-rose-300 text-white py-0.1 px-1 rounded text-lg font-normal w-4/5 h-5/6 m-1 lg:text-3xl sm:text-2xl"/>
                <Button title={'1'} func={()=> clickButtonHandler('1')} disable={false} className="dark:bg-rose-800  bg-rose-300 text-white py-0.1 px-1 rounded text-lg font-normal w-4/5 h-5/6 m-1 lg:text-3xl sm:text-2xl"/>
                <Button title={'2'} func={()=> clickButtonHandler('2')} disable={false} className="dark:bg-rose-800  bg-rose-300 text-white py-0.1 px-1 rounded text-lg font-normal w-4/5 h-5/6 m-1 lg:text-3xl sm:text-2xl"/>
                <Button title={'3'} func={()=> clickButtonHandler('3')} disable={false} className="dark:bg-rose-800  bg-rose-300 text-white py-0.1 px-1 rounded text-lg font-normal w-4/5 h-5/6 m-1 lg:text-3xl sm:text-2xl"/>
                <Button title={'*'} func={()=> clickButtonHandler('*')} disable={false} className="dark:bg-rose-800  bg-rose-300 text-white py-0.1 px-1 rounded text-lg font-normal w-4/5 h-5/6 m-1 lg:text-3xl sm:text-2xl"/>
                <Button title={'4'} func={()=> clickButtonHandler('4')} disable={false} className="dark:bg-rose-800  bg-rose-300 text-white py-0.1 px-1 rounded text-lg font-normal w-4/5 h-5/6 m-1 lg:text-3xl sm:text-2xl"/>
                <Button title={'5'} func={()=> clickButtonHandler('5')} disable={false} className="dark:bg-rose-800  bg-rose-300 text-white py-0.1 px-1 rounded text-lg font-normal w-4/5 h-5/6 m-1 lg:text-3xl sm:text-2xl"/>
                <Button title={'6'} func={()=> clickButtonHandler('6')} disable={false} className="dark:bg-rose-800  bg-rose-300 text-white py-0.1 px-1 rounded text-lg font-normal w-4/5 h-5/6 m-1 lg:text-3xl sm:text-2xl"/>
                <Button title={'-'} func={()=> clickButtonHandler('-')} disable={false} className="dark:bg-rose-800  bg-rose-300 text-white py-0.1 px-1 rounded text-lg font-normal w-4/5 h-5/6 m-1 lg:text-3xl sm:text-2xl"/>
                <Button title={'7'} func={()=> clickButtonHandler('7')} disable={false} className="dark:bg-rose-800  bg-rose-300 text-white py-0.1 px-1 rounded text-lg font-normal w-4/5 h-5/6 m-1 lg:text-3xl sm:text-2xl"/>
                <Button title={'8'} func={()=> clickButtonHandler('8')} disable={false} className="dark:bg-rose-800  bg-rose-300 text-white py-0.1 px-1 rounded text-lg font-normal w-4/5 h-5/6 m-1 lg:text-3xl sm:text-2xl"/>
                <Button title={'9'} func={()=> clickButtonHandler('9')} disable={false} className="dark:bg-rose-800  bg-rose-300 text-white py-0.1 px-1 rounded text-lg font-normal w-4/5 h-5/6 m-1 lg:text-3xl sm:text-2xl"/>
                <Button title={'+'} func={()=> clickButtonHandler('+')} disable={false} className="dark:bg-rose-800  bg-rose-300 text-white py-0.1 px-1 rounded text-lg font-normal w-4/5 h-5/6 m-1 lg:text-3xl sm:text-2xl"/>
                <Button title={'0'} func={()=> clickButtonHandler('0')} disable={false} className="dark:bg-rose-800  bg-rose-300 text-white py-0.1 px-1 rounded text-lg font-normal w-4/5 h-5/6 m-1 col-start-2 lg:text-3xl sm:text-2xl"/>
                <Button title={'='} func={()=> calculate()} disable={false} className="dark:bg-rose-800  bg-rose-300 text-white py-0.1 px-1 rounded text-lg font-normal w-4/5 h-5/6 m-1 col-start-4 lg:text-3xl sm:text-2xl"/>
                <button onClick={temToggle} className="absolute top-4 left-4 dark:bg-rose-800 bg-rose-300 text-white rounded-lg px-4 py-2 lg:text-2xl sm:text-xl font-normal dark">переключить тему</button>
            </div>
        </div>
    );
}

export default Calculator;