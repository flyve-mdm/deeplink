// detect OS
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

// get data of the url
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

// button "Go to Flyve MDM"
document.getElementById('btn').addEventListener('click', function() {
    location.reload()
})

// redirect to the store in case of not opening the application
var openFlyve = function () { 
    var open = confirm("Open flyve MDM?")
    if (open) {
        setTimeout( function()  { 
            if (!document.hidden) {
                var OS = getMobileOperatingSystem()
                if ( OS == 'Android') {
                    window.location = "https://play.google.com/store/apps/details?id=org.flyve.mdm.agent";
                } else if (OS == iOS) {
                    window.location = "https://itunes.apple.com/us/app/flyve-mdm-agent";
                }
            }
        }, 2000)
    }
}
window.onload = openFlyve()




