const clock = document.querySelector('#CLOCK')

setInterval(function () {
       let date = new Date();
       clock.innerHTML = date.toLocaleTimeString()
    
}, 1000)



