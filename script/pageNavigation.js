export function pageNavigation(isOnPhone) {

    const playTitle = document.querySelector('#playTitle')
    const toolboxTitle = document.querySelector('#toolboxTitle')
    const playDiv = document.querySelector('#playDiv')
    const toolboxDiv = document.querySelector('#toolboxDiv')
    const playButton = document.querySelector('#playButton')
    const toolboxButton = document.querySelector('#toolboxButton')

    if(isOnPhone) {
        playDiv.style.width = "90vw"
        playDiv.style.height = "90vw"
        playDiv.style.left = "5vw"
        playDiv.style.top = `${(window.innerHeight-playDiv.offsetHeight)/2}px`

        toolboxDiv.style.width = "90vw"

    }

    let widthOffset = window.innerWidth
    let playDivInitialLetf = playDiv.getBoundingClientRect().left
    

    function toToolbox() {
        playTitle.style.opacity='0'
        setTimeout(()=>toolboxTitle.style.opacity = '1', 500)

        playDiv.style.left = `${playDivInitialLetf-widthOffset}px`

        toolboxDiv.style.left = isOnPhone?'5vw':'10vw'
        playButton.classList.remove('navActive')
        toolboxButton.classList.add('navActive')

    }

    function toPlay() {
        toolboxTitle.style.opacity='0'
        setTimeout(()=>playTitle.style.opacity = '1', 500)
        playDiv.style.left = isOnPhone?`5vw`:`${playDivInitialLetf}px`        
        toolboxDiv.style.left = '110vw'
        toolboxButton.classList.remove('navActive')
        playButton.classList.add('navActive')
    }

    playButton.addEventListener('click', toPlay)
    toolboxButton.addEventListener('click', toToolbox)
    
}