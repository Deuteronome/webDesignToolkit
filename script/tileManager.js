import { tileList } from "./tileList.js";

export function tileManager(isOnPhone) {

    
    const toolboxDiv = document.querySelector('#toolboxDiv')
   

    let reverseFunctions = []
    let backFunctions = []

    

    function tileReverse(i) {
        let onZone = true
        let container = this.parentNode
            
        function mouseDetect(event) {
            if(event.type=='mouseover') {
                onZone = true
            } else if(event.type=='mouseleave') {
                onZone =false
            }
        }        

        if(!isOnPhone){
            this.removeEventListener('mouseover', reverseFunctions[i])              

            //Detection de la position du pointeur pendant l'animation      

            container.addEventListener('mouseleave', event => mouseDetect(event))
            container.addEventListener('mouseover', event => mouseDetect(event))
        }       

        //animation
       
        this.style.width = '0'
    
        setTimeout(()=>{
            this.style.backgroundImage = `url("${tileList[i].ver}")`
            this.style.width = '26vh'
            if(!isOnPhone){
                setTimeout(()=>{
                    this.addEventListener('mouseleave', backFunctions[i])
                    if(!onZone) {
                        backFunctions[i]()
                    }
                    container.removeEventListener('mouseleave', event => mouseDetect(event))
                    container.removeEventListener('mouseover', event => mouseDetect(event))
                },500)
            }            
        }, 500)
    }
    
    function tileBack(i) {

        if(!isOnPhone){
        this.removeEventListener('mouseleave', backFunctions[i])
        }
        this.style.width = '0'
    
        setTimeout(()=>{
            this.style.backgroundImage = `url("${tileList[i].rec}")`
            this.style.width = '26vh'
            if(!isOnPhone){
                setTimeout(()=>{
                    this.addEventListener('mouseover', reverseFunctions[i])
                },500)
            }
        }, 500)
    }

    function phoneAnim() {
        let tilesNumber = tileList.length

        setTimeout(()=>{
            for(let i=0; i<tilesNumber; i++){
                setTimeout(()=>reverseFunctions[i](), i*300)
            } 
        }, 6000)

        setTimeout(()=>{
            for(let i=0; i<tilesNumber; i++){
                setTimeout(()=>backFunctions[i](), i*300)
            } 
        }, 8000+tilesNumber*300)

        setTimeout(()=>phoneAnim(), 4000+tilesNumber*600)
    }

    for(let i=0; i<tileList.length; i++) {

        let tileContainer = document.createElement('div')
        tileContainer.classList.add(isOnPhone?'tileContainerPhone':'tileContainer')
        let tile = document.createElement('a')
        tile.classList.add(isOnPhone?'tilePhone':'tile')
        tile.style.backgroundImage=`url('${tileList[i].rec}')`
        tile.setAttribute('href', `${tileList[i].url}`)
        tile.setAttribute('target', '_blank')
        
        reverseFunctions.push(tileReverse.bind(tile, i))
        backFunctions.push(tileBack.bind(tile, i))
        if(!isOnPhone){
            tile.addEventListener('mouseover', reverseFunctions[i])
        }
        tileContainer.appendChild(tile)
        toolboxDiv.appendChild(tileContainer)
    }

    if(isOnPhone) {
        phoneAnim()
    }

    
}