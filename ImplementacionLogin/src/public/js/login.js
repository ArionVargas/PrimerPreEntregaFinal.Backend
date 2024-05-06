const form = document.getElementById('loginForm')

form.addEventListener('submit', e => {
    e.preventDefault()
    console.log('en login form');
    const data = new FormData(form)

    const obj = {}

    data.forEach((value, key) => obj[key] = value)
    console.log('en login form');
    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.status === 200) {
            return response.json()
                .then(data => {
                    console.log('Cookies generadas en login public')
                    console.log(document.cookie)

                    console.log(data)
                    if (data.status === 'success') {
                       console.log(data);
                        window.location.replace('/api/products', data.user)
                    } else {
                       
                        window.location.replace('/login')
                    }
                })
        } else if (response.status === 401) {
            console.log(response)
            /* window.location.replace('/login') */
        }
    })
})
