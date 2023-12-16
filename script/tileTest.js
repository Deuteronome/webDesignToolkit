let tile = document.querySelector('.tile')



function tileReverse() {
    this.removeEventListener('mouseover', reverseFunction)
    let height = this.clientHeight + 2    
    this.style.height = `${height}px`
    this.style.width = '0'

    setTimeout(()=>{
        this.style.backgroundImage = 'url("../assets/tileBkgd/canva1.png")'
        this.style.width = `${height}px`
        setTimeout(()=>this.addEventListener('mouseleave', backFunction),500)
        }, 500)
}

function tileBack() {
    this.removeEventListener('mouseleave', backFunction)
    let height = this.clientHeight + 2    
    this.style.height = `${height}px`
    this.style.width = '0'

    setTimeout(()=>{
        this.style.backgroundImage = 'url("../assets/tileBkgd/canva2.png")'
        this.style.width = `${height}px`
        setTimeout(()=>this.addEventListener('mouseover', reverseFunction),500)
        }, 500)
}

let reverseFunction = tileReverse.bind(tile)
let backFunction = tileBack.bind(tile)
tile.addEventListener('mouseover', reverseFunction)