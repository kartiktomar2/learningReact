import React from 'react'

const InputBox = ({
    label,
    amount,
    setAmountChange,
    setAmountDisable,
    currencies = [],
    setCurrenciesChange,
    currency,


}) => {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input

                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={setAmountDisable}
                    value={amount}
                    onChange={(e) => {
                        setAmountChange(Number(e.target.value))

                    }}

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={currency}
                    onChange={(e) => {
                        setCurrenciesChange(e.target.value)
                    }}
                >

                    {
                        currencies.map(currency => {
                            return <option
                                key={currency}
                                value={currency}

                            >
                                {currency}
                            </option>
                        })
                    }

                </select>
            </div>
        </div>
    );
}

export default InputBox
