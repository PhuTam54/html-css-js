window.onload = function(){
    init()
    alert('Hello')
}

function init(){
    document.getElementById('magic').onmouseover = function(){
        this.className = 'highlight'
    }
    document.getElementById('magic').onmouseout = function(){
        this.className = ''
    }
}