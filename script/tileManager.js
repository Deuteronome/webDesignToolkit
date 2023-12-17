import { tileList } from "./tileList.js";

export function tileManager() {

    
    const toolboxDiv = document.querySelector('#toolboxDiv')
   

    let reverseFunctions = []
    let backFunctions = []

    

    function tileReverse(i) {
        this.removeEventListener('mouseover', reverseFunctions[i])

        //Detection de la position du pointeur pendant l'animation
        let onZone = true
        
        function mouseDetect(event) {
            if(event.type=='mouseover') {
                onZone = true
            } else if(event.type=='mouseleave') {
                onZone =false
            }
        }
        
        let container = this.parentNode

        container.addEventListener('mouseleave', event => mouseDetect(event))
        container.addEventListener('mouseover', event => mouseDetect(event))

        //animation
       
        this.style.width = '0'
    
        setTimeout(()=>{
            this.style.backgroundImage = `url("${tileList[i].ver}")`
            this.style.width = '26vh'
            setTimeout(()=>{
                this.addEventListener('mouseleave', backFunctions[i])
                if(!onZone) {
                    backFunctions[i]()
                }
                container.removeEventListener('mouseleave', event => mouseDetect(event))
                container.removeEventListener('mouseover', event => mouseDetect(event))
                },500)
            }, 500)
    }
    
    function tileBack(i) {
        this.removeEventListener('mouseleave', backFunctions[i])
        
        this.style.width = '0'
    
        setTimeout(()=>{
            this.style.backgroundImage = `url("${tileList[i].rec}")`
            this.style.width = '26vh'
            setTimeout(()=>{
                this.addEventListener('mouseover', reverseFunctions[i])
                },500)
            }, 500)
    }

    for(let i=0; i<tileList.length; i++) {

        let tileContainer = document.createElement('div')
        tileContainer.classList.add('tileContainer')
        let tile = document.createElement('a')
        tile.classList.add('tile')
        tile.style.backgroundImage=`url('${tileList[i].rec}')`
        tile.setAttribute('href', `${tileList[i].url}`)
        tile.setAttribute('target', '_blank')

        reverseFunctions.push(tileReverse.bind(tile, i))
        backFunctions.push(tileBack.bind(tile, i))
        tile.addEventListener('mouseover', reverseFunctions[i])

        tileContainer.appendChild(tile)
        toolboxDiv.appendChild(tileContainer)
    }

    
}