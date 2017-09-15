// var encodedData = window.btoa('Hello, world'); // encode a string
// console.log(encodedData)
// var decodedData = window.atob(encodedData); // decode the string
// console.log(decodedData)

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}


console.log(getMobileOperatingSystem())

var url_string = window.location.href
var url = new URL(url_string)
var data = url.searchParams.get("data")
var re = new RegExp(';')
encodedData = data.split(re)

function getDecodedData(item, index) {
    return window.atob(item)
}

var decodedData = encodedData.map(getDecodedData);

// QR
var qr = new QRious({
            element: document.getElementById('qr'),
            value: url_string
        })

// name company
document.getElementById('company_name').innerHTML = decodedData[0]

// phone
var phone = document.createElement("a")
phone.setAttribute('href',`callto:${decodedData[1]}`)
phone.textContent = decodedData[1]
document.getElementById('phone').appendChild(phone)

// url
var url = document.createElement("a")
url.setAttribute('href',decodedData[2])
url.textContent = decodedData[2]
document.getElementById('url').appendChild(url)

// email
var email = document.createElement("a")
email.setAttribute('href',`mailto:${decodedData[3]}`)
email.textContent = decodedData[3]
document.getElementById('email').appendChild(email)

document.getElementById('btn').addEventListener('click', function() {
    location.reload()
})
