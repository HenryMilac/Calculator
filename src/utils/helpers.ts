export const handleClick = (value: string, input: string, setInput: (input: string) => void) => {
    if (value === ',') {
        value = '.';
    }
    const operators = ['+', '-', '*', '/'];
    const lastChar = input.slice(-1);
  
    if (value === "0" && (input === "" || operators.includes(lastChar))) {
        return;
    }
  
    setInput((prev) => prev + value);
};
  
export const handleClear = (setInput: (input: string) => void, setResult: (result: number | null) => void) => {
    setInput("");
    setResult(null);
};
  
export const handleCalculate = (input: string, setResult: (result: number | null) => void) => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult(null);
      alert("Invalid expression");
    }
};
  
export const handlePlusMinus = (input: string, setInput: (input: string) => void) => {
    if (input) {
      setInput((prev) => (parseFloat(prev) * -1).toString());
    }
};
  
export const handlePercent = (input: string, setInput: (input: string) => void) => {
    if (input) {
      setInput((prev) => (parseFloat(prev) / 100).toString());
    }
};  