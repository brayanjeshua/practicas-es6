// Documentation: https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true)
    xhttp.onreadystatechange = function (event) {
        // check status 1, 2, 3, 4
        if (xhttp = this.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ', + url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send()
}