// const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurrency = document.querySelector(".from select");
// const toCurrency = document.querySelector(".to select");
// const message = document.querySelector(".message");

// window.addEventListener("load", () =>
// {
//     updateExchangeRate();
// });

// for(let select of dropdowns)
// {
//     for(currencyCode in countryList)
//     {
//         let newOption = document.createElement("option");
//         newOption.innerText = currencyCode;
//         newOption.value = currencyCode;
//         if(select.name === "from" && currencyCode === "USD")
//         {
//             newOption.selected = "selected";
//         }
//         else if(select.name === "to" && currencyCode === "PKR")
//         {
//             newOption.selected = "selected";
//         }
//         select.append(newOption);
//     }

//     select.addEventListener("change", (evt) =>
//     {
//         updateFlag(evt.target);
//     })
// }

// const updateFlag = (element) =>
// {
//     let currencyCode = element.value;
//     let countryCode = countryList[currencyCode];
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;
// };

// btn.addEventListener("click", async (evt) =>
// {
//     evt.preventDefault();
//     updateExchangeRate();
// })

// const updateExchangeRate = async () =>
// {
//     let amount = document.querySelector(".amount input");
//     let amountValue = amount.value;
//     if(amountValue === "" || amountValue < 1)
//     {
//         amountValue = 1;
//         amount.value = "1";
//     }

//     // console.log(fromCurrency.value, toCurrency.value);
//     const URL = `${BASE_URL}/${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json`;
//     let response = await fetch(URL);
//     let data = await response.json();
//     let rate = data[toCurrency.value.toLowerCase()];
    
//     let finalAmount = amountValue * rate;
//     message.innerText = `${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`;
// }