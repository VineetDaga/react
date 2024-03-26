import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    //this data is used to hold the information about the currency conversion rate in the form of objet 
    const [data, setData] = useState({})
    // useeffect is used to do execute the function if their is an change in the depenedencies giev 
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/391a0c4040283eff1559e719/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res["conversion_rates"]))
    }, [currency])
    return data
}

//we ftech the API converth the API into Json form and then select the data thet we needed form that api

export default useCurrencyInfo;