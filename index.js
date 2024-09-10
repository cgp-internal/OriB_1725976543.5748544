function obtainToken1(username, password) {
    url = "http://127.0.0.1:8000"
    fetch(url,
        {
            method: "GET",                    
        })

    .then((res)=>{
        res.json()
        .then((resJ)  => {
            console.log(resJ)
        })
    })
}

function obtainToken(username, password) {
    url = "http://127.0.0.1:8000/obtain-token"
    fetch(url,
        {
            method: "POST",        
            headers: {           
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })

    .then((res)=>{
        res.json()
        .then((resJ)  => {
            console.log(resJ)
        })
    })
}