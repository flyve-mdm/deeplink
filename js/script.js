// detect OS
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera

    if (/android/i.test(userAgent)) {
        return "Android"
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS"
    }

    return "unknown"
}

var OS = getMobileOperatingSystem()

// get data of the url
var url_string = window.location.href
var url = new URL(url_string)
var data = url.searchParams.get("data")
var deeplink = `flyve://register?data=${data}`
data = window.atob(data)
var myRe = /\\;/g
var decodedData = data.split(myRe)


console.log(deeplink)

// QR
var qr = new QRious({
            element: document.getElementById('qr'),
            size: 200,
            value: deeplink
        })

// name company
document.getElementById('company_name').innerHTML = decodedData[3]

// phone
var phone = document.createElement("a")
phone.setAttribute('href',`callto:${decodedData[4]}`)
phone.textContent = decodedData[4]
document.getElementById('phone').appendChild(phone)

// url
var url = document.createElement("a")
url.setAttribute('href',decodedData[5])
url.textContent = decodedData[5]
document.getElementById('url').appendChild(url)

// email
var email = document.createElement("a")
email.setAttribute('href',`mailto:${decodedData[6]}`)
email.textContent = decodedData[6]
document.getElementById('email').appendChild(email)

// button "Enroll Device"
if ( OS == 'Android' || OS == 'iOS' ) {
    var btn = document.createElement("button")
    btn.textContent = "Enroll Device"
    btn.addEventListener('click', function() {
        window.location.replace(deeplink)
        setTimeout( function()  { 
            if (!document.hidden) {
                if ( OS == 'Android') {
                    window.location = "https://play.google.com/store/apps/details?id=org.flyve.mdm.agent";
                } else if (OS == 'iOS') {
                    window.location = "https://itunes.apple.com/us/app/flyve-mdm-agent";
                }
            }
        }, 3000)
    })
    document.getElementById('email').appendChild(btn)
} 
