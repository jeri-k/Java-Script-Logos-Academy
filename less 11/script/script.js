const getS = selector => document.querySelector(selector)
setInterval(() => {
    let data = new Date()
    let dd = data.getDate()
    let mt = data.getMonth()+1
    let ye = data.getFullYear()
    let hh = data.getHours()
    let mm = data.getMinutes()
    let ss = data.getSeconds()
    if (dd < 10) dd = '0' + dd
    if (mt < 10) mt = '0' + mt
	if (ss < 10) ss = '0' + ss
    if (mm < 10) mm = '0' + mm
    if (hh < 10) hh = '0' + hh
    getS('.data').innerHTML = `${dd}.${mt}.${ye}`
    getS('.oclock').innerHTML = `${hh}:${mm}:${ss}`
})