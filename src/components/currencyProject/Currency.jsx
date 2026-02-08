import { useEffect, useState } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "./useCurrencyInfo"

// refer chat : Currency Project, start from the third chat 

const Currency = () => {
    let [amount, setAmount]= useState(0);
    let [from, setFrom] =useState("usd");   
    let [to, setTO]= useState("inr");
    let [convertedAmount, setConvertedAmount]= useState(0);
   console.log("rendered")
     
    let data= useCurrencyInfo(from)
    let options=Object.keys(data);
   
    useEffect(()=>{
        console.log("use Effect runs ")
       if(data[to])
       { 
        console.log("data[to] is: ",data[to])
        console.log("amount in useEffect  is: ",amount)
         setConvertedAmount(Number(data[to]*amount))
       }
    },[amount,to,data])

    function handleSwap()
    {
          setTO(from)
          setFrom(to)
        //   setAmount(convertedAmount)
         
    }
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/35823491/pexels-photo-35823491.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                setAmountChange={setAmount}
                                setAmountDisable={false}
                                currencies={options}
                                setCurrenciesChange={setFrom}
                                currency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                 onClick={handleSwap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                setAmountDisable={true}
                                currencies={options}
                                setCurrenciesChange={setTO}
                                currency={to}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Currency
