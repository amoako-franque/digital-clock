const clock = document.querySelector(".clock")
const time = ()=>{
	const now = new Date()
	const h = now.getHours()
	const m = now.getMinutes()
	const s = now.getSeconds()
	const timedata = `
		<span>${h}</span> : 
		<span>${m}</span> : 
		<span>${s}</span>
	`
	clock.innerHTML = timedata
	
} 

setInterval(time, 1000)