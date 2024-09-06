import { useState } from "react";
import BtnCircle from "./components/BtnCircle";
import { handleClick, handleClear, handleCalculate, handlePlusMinus, handlePercent } from './utils/helpers';

export function App() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  return (
    <div className="bg-black text-white h-screen flex items-center justify-center">
      <div className="border-[.5px] border-gray-500 rounded-2xl flex flex-col px-5 py-10 w-[20rem]">
        <div className="text-4xl mb-5 text-right truncate overflow-hidden whitespace-nowrap">
          {result !== null ? result : input || "0"}
        </div>

        <div className="grid grid-cols-4 gap-2">
          <BtnCircle onClick={() => handleClear(setInput, setResult)} value={'C'} color="bg-grayLight"/>
          <BtnCircle onClick={() => handlePlusMinus(input, setInput)} value={'+/-'} color="bg-grayLight"/>
          <BtnCircle onClick={() => handlePercent(input, setInput)} value={'%'} color="bg-grayLight"/>
          <BtnCircle onClick={() => handleClick('/', input, setInput)} value={'÷'} color="bg-orange"/>

          <BtnCircle onClick={() => handleClick('7', input, setInput)} value={'7'} color="bg-grayDark"/>
          <BtnCircle onClick={() => handleClick('8', input, setInput)} value={'8'} color="bg-grayDark"/>
          <BtnCircle onClick={() => handleClick('9', input, setInput)} value={'9'} color="bg-grayDark"/>
          <BtnCircle onClick={() => handleClick('*', input, setInput)} value={'*'} color="bg-orange"/>

          <BtnCircle onClick={() => handleClick('4', input, setInput)} value={'4'} color="bg-grayDark"/>
          <BtnCircle onClick={() => handleClick('5', input, setInput)} value={'5'} color="bg-grayDark"/>
          <BtnCircle onClick={() => handleClick('6', input, setInput)} value={'6'} color="bg-grayDark"/>
          <BtnCircle onClick={() => handleClick('-', input, setInput)} value={'-'} color="bg-orange"/>

          <BtnCircle onClick={() => handleClick('1', input, setInput)} value={'1'} color="bg-grayDark"/>
          <BtnCircle onClick={() => handleClick('2', input, setInput)} value={'2'} color="bg-grayDark"/>
          <BtnCircle onClick={() => handleClick('3', input, setInput)} value={'3'} color="bg-grayDark"/>
          <BtnCircle onClick={() => handleClick('+', input, setInput)} value={'+'} color="bg-orange"/>

          <BtnCircle onClick={() => handleClick('0', input, setInput)} value={'0'} color="bg-grayDark" spanTwoCols/>
          <BtnCircle onClick={() => handleClick('.', input, setInput)} value={'.'} color="bg-grayDark"/>
          <BtnCircle onClick={() => handleCalculate(input, setResult)} value={'='} color="bg-orange"/>
        </div>
      </div>
    </div>
  );
}
