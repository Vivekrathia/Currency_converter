import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data 
}

export default useCurrencyInfo;

// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//     const [data, setData] = useState({});

//     useEffect(() => {
//         const fetchCurrencyInfo = async () => {
//             try {
//                 const response = await fetch(
//                     `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
//                 );
//                 if (!response.ok) {
//                     throw new Error(`Error fetching data: ${response.status}`);
//                 }
//                 const result = await response.json();
//                 setData(result[currency]);
//             } catch (error) {
//                 console.error("Error fetching currency data:", error);
//             }
//         };

//         fetchCurrencyInfo();
//     }, [currency]);

//     return data;
// }

// export default useCurrencyInfo;
