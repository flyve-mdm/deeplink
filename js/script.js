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
var data = getData("data")

var deeplink = `flyve://register?data=${data}`
console.log(deeplink)
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

var clickEvent = ((document.ontouchstart!==null)?'click':'touchstart')

// button "Enroll Device"
if ( OS == 'Android' || OS == 'iOS' ) {
    var btn = document.createElement("button")
    btn.textContent = "Enroll Device"
    btn.addEventListener(clickEvent, function() {
        window.location.replace(deeplink)
        var timer = setTimeout( function()  { 
            if (!document.hidden) {
                if ( OS == 'Android') window.location.replace("market://details?id=org.flyve.mdm.agent")
                else if (OS == 'iOS') window.location.replace("https://itunes.apple.com/us/app/flyve-mdm-agent")
            } 
        }, 4000)
        document.addEventListener("visibilitychange", function() {
            clearInterval(timer)
        })
    })
    document.getElementById('btn').appendChild(btn)
} 

// button show
if ( OS == 'Android' || OS == 'iOS' ) { 
    document.getElementById('qr').className = "hidden" 
    var btn_show = document.createElement("button")
    var hr = document.createElement("hr")
    btn_show.textContent = "Show QR to enroll another device"
    btn_show.addEventListener(clickEvent, function() {
        document.getElementById('qr').className = ""
        document.getElementById('btn-show').className = "hidden"
    })
    document.getElementById('email').appendChild(hr)    
    document.getElementById('btn-show').appendChild(btn_show)    
}