// function getData(dataId, getNextData)
// {
//     return new Promise((resolve, reject) =>
//     {
//         setTimeout(() => {
//             // console.log("data",dataId);
//             // resolve("success");
//             reject("error");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
    
// }

// const getPromise = () =>
// {
//     return new Promise((resolve, reject) =>
//     {
//         // console.log("I am a Promise");
//         // resolve("success");
//         reject("network error");
//     });
// };

// let promise = getPromise();

// promise.then((res) =>
// {
//         console.log("Promise fulfilled", res);
// });

// promise.catch((err) =>
// {
//     console.log("rejected", err);
// });

//PROMISE CHAINING
// function asyncFunc1()
// {
//     return new Promise((resolve, reject) =>
//     {
//         setTimeout(() =>
//         {
//             console.log("data1");
//             resolve("success");
//         } ,4000);
//     });
// }

// function asyncFunc2()
// {
//     return new Promise((resolve, reject) =>
//     {
//         setTimeout(() =>
//         {
//             console.log("data2");
//             resolve("success");
//         } ,4000);
//     });
// }

// console.log("fetching data1....");
// asyncFunc1().then((res) =>
// {
//     console.log("fetching data2....");
//     asyncFunc2().then((res) =>
//     {});
// })

// console.log("fetching data1....");
// let p1 = asyncFunc1();
// p1.then((res) =>
// {
//     // console.log(res);
//     console.log("fetching data2....");
//     let p2 = asyncFunc2();
//     p2.then((res) =>
//     {
//         // console.log(res);
//     });
// })

// console.log("fetching data2....");
// let p2 = asyncFunc2();
// p2.then((res) =>
// {
//     console.log(res);
// })

function getData(dataId)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
            // reject("error");
        }, 2000);
    });
}

// getData(1).then((res) =>
// {
//     console.log(res);
//     getData(2).then((res) =>
//     {
//         console.log(res);
//     })
// })

// let p1 = getData(1);
// p1.then((res) =>
// {
//     console.log(res);
// })

// console.log("getting data1...");
// getData(1).then((res) =>
// {
//     console.log("getting data2...");
//     return getData(2);
// })
// .then((res) =>
// {
//     console.log("getting data3...");
//     return getData(3);
// })
// .then((res) =>
// {
//     console.log(res);
// })