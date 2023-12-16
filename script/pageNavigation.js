export function pageNavigation() {

    const playTitle = document.querySelector('#playTitle')
    const toolboxTitle = document.querySelector('#toolboxTitle')
    const playDiv = document.querySelector('#playDiv')
    const toolboxDiv = document.querySelector('#toolboxDiv')
    const playButton = document.querySelector('#playButton')
    const toolboxButton = document.querySelector('#toolboxButton')

    let widthOffset = window.innerWidth
    let playDivInitialLetf = playDiv.getBoundingClientRect().left

    function toToolbox() {
        playTitle.style.opacity='0'
        setTimeout(()=>toolboxTitle.style.opacity = '1', 500)

        playDiv.style.left = `${playDivInitialLetf-widthOffset}px`
        toolboxDiv.style.left = '10vw'


    }

    function toPlay() {
        toolboxTitle.style.opacity='0'
        setTimeout(()=>playTitle.style.opacity = '1', 500)

        playDiv.style.left = `${playDivInitialLetf}px`
        toolboxDiv.style.left = '110vw'
    }

    playButton.addEventListener('click', toPlay)
    toolboxButton.addEventListener('click', toToolbox)
    
}