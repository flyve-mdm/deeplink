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
function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2)
        n = decodeURIComponent(nv[0])
        v = decodeURIComponent(nv[1])

        if (!parms.hasOwnProperty(n)) parms[n] = []
        parms[n].push(nv.length === 2 ? v : null)
    }
    return parms
}

var urlString = window.location.href
var urlParams = parseURLParams(urlString)
var data = urlParams.data

var deeplink = `flyve://register?data=${data}`
data = window.atob(data)
var myRe = /\\;/g
var decodedData = data.split(myRe)

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
        var cont = 0
        var timer = setInterval( function()  { 
            cont ++
            if (document.hidden) clearInterval(timer)
            else if (!document.hidden && cont > 3 ) {
                if ( OS == 'Android') window.location.href = "market://details?id=org.flyve.mdm.agent"
                else if (OS == 'iOS') window.location.href = "https://itunes.apple.com/us/app/flyve-mdm-agent"
            } 
            console.log(cont)
        }, 1000)
        window.setTimeout(function() {
            clearInterval(timer)
        }, 4000)
    })
    document.getElementById('email').appendChild(btn)
} 
