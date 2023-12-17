export function startAnim () {
    const left = document.querySelector('#left')
    const right = document.querySelector('#right')
    const logo = document.querySelector('#startLogo')
    const title = document.querySelector('#startTitle')

    setTimeout(()=>{

        const timestep = 25
        //apparition du logo
        logo.style.opacity = '1'

        //chute du titre
        setTimeout(()=>{
            let titleStartTop = title.getBoundingClientRect().top           

           
            for(let j = 1; j<25; j++) {
                setTimeout(()=>{
                    title.style.top = `${titleStartTop + j*j}px`
                    
                },timestep*j)
                
            }            
        },1400)


        //chute du logo
        setTimeout(()=>{
            
            let logoStartTop = logo.getBoundingClientRect().top
            for(let i=1; i<=50; i++) {
                setTimeout(()=>logo.style.top = `${logoStartTop + (i*i)/2}px`,timestep*i)
            }
            },1500)
        }, 500)    

    setTimeout(()=>{
        title.style.opacity = 0;
        left.style.left = '-50vw'
        right.style.left = '100vw'
    }, 3500)

    setTimeout(()=>{
        left.remove()
        right.remove()
        logo.remove()
        title.remove()
    }, 5000)
}


