// Documentation: https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', url_api, true)
        xhttp.onreadystatechange = () => {
            // check status 1, 2, 3, 4
            if (xhttp.readyState === 4) {

                (xhttp.status === 200)
                  ? resolve(JSON.parse(xhttp.responseText))
                  : reject(new Error('Error ',url_api))

            }
        }
        xhttp.send()
    })

}

module.exports = fetchData