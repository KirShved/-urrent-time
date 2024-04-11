let clock=document.querySelector('.time')

function updateTime(){

    const now=new Date();

    let hours=now.getHours().toString().padStart(2,'0')
    let min=now.getMinutes().toString().padStart(2,'0')
    let sec=now.getSeconds().toString().padStart(2,'0')

    let time=`${hours}:${min}:${sec}`

    clock.innerHTML=time
}

updateTime()

setInterval(updateTime,1000)
