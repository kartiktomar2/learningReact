import { useEffect, useState } from "react"


function useCurrencyInfo(currency="usd") {
    let [data, setData] = useState({});
     console.log("useCurrencyInfo rendered")
    useEffect(() => {
        console.log("use Effect of useCurrencyInfo")
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

        fetch(url)
            .then(res => res.json())
            .then(info => setData(info[currency]));
    }, [currency])

    return data;


}

export default useCurrencyInfo