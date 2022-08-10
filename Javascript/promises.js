newPromise((resolve, reject) => {
    setTimeout(() => resolve("Result"), 1000)
})
.finally(() => console.log("Ready"))
.then(result => console.log(result));
