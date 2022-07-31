const submitData = {
    method: "POST",
    headers :{
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name: "Carl Sagan",
        email: "Carlagan@yahoo.com",
    }),

}

fetch("http://localhost:3000/users", submitData)
    .then(function (response) {
        return response.json()
    })
    .then(function (object) {
        console.log(object)
    })
    .catch(function (error) {
        console.log(error.message)
    })