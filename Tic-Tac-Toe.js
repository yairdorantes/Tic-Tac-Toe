const d = document
var x = false

var Gato = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']],
ids = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']],
tie = true,
tieValue = 0, 
finished = false,
PointsX = 0, 
PointsO = 0, 
ties=0;

d.querySelector('.tie').classList.add('almost-visible')
d.querySelector('.score-o').classList.add('almost-visible')
d.querySelector('.point-o').classList.add('almost-visible')



const ReadValues = (winner) => {
   

    var contX = 0, contO = 0 

    Gato[0].forEach(i => {
        if (i == 'o') {
            
            contO++
        }
        if (i == 'x'){ 
            contX++

        }
    })
    
    
    if (contO == 3 || contX == 3) {
        tieValue = 0
        console.log(0)

        Gato = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]
        
        ids[0].forEach(i => {
            d.querySelector(`.${i}`).classList.add('parpadeos')
        })
       
        contO = 0
        contX = 0
        finished = true
      
        if (winner=='x')d.querySelector('.point-x').textContent = PointsX+=1
        if(winner=='o')d.querySelector('.point-o').textContent = PointsO+=1
       
      

        if(finished==true) {
            function xd(){
            d.querySelectorAll('.square').forEach(el=>{
                el.removeAttribute('boolean')
                while(el.hasChildNodes()){
                    el.removeChild(el.firstChild)
                }
            })
            finished = false
          
            
            
        }

            const timeout = setTimeout(xd,1000)
        }

       

      
    } else {
        contO = 0
        contX = 0
        
    }
    Gato[1].forEach(i => {
        if (i === 'o') {

            contO++
        }
        if (i === 'x') {

            contX++
        }
    })
    if (contO == 3 || contX == 3) {
        console.log(1)

        tieValue=0
        Gato = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]
        ids[1].forEach(i => {
            d.querySelector(`.${i}`).classList.add('parpadeos')
        })
       
    
        contO = 0
        contX = 0
        finished = true
        if (winner=='x')d.querySelector('.point-x').textContent = PointsX+=1
        if(winner=='o')d.querySelector('.point-o').textContent = PointsO+=1

        if(finished==true) {
            function xd(){
            d.querySelectorAll('.square').forEach(el=>{
                el.removeAttribute('boolean')
                while(el.hasChildNodes()){
                    el.removeChild(el.firstChild)
                }
            })
            finished = false
          
            
            
        }

            const timeout = setTimeout(xd,1000)
        }

    } else {
        Squarelist = []
        contO = 0
        contX = 0
    }
    Gato[2].forEach(i => {
        if (i === 'o') contO++
        if (i === 'x') contX++
    })
    if (contO == 3 || contX == 3) {
        console.log(2)

        tieValue=0
        Gato = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]
        ids[2].forEach(i => {
            d.querySelector(`.${i}`).classList.add('parpadeos')
        })
       
        contO = 0
        contX = 0
        finished = true
        if (winner=='x')d.querySelector('.point-x').textContent = PointsX+=1
        if(winner=='o')d.querySelector('.point-o').textContent = PointsO+=1

        if(finished==true) {
            function xd(){
            d.querySelectorAll('.square').forEach(el=>{
                el.removeAttribute('boolean')
                while(el.hasChildNodes()){
                    el.removeChild(el.firstChild)
                }
            })
            finished = false
          
            
            
        }

            const timeout = setTimeout(xd,1000)
        }

    } else {
        contO = 0
        contX = 0
    }


    /************************** */
    for (var i = 0; i < 3; i++) {
        const posc = Gato[i][0]
        if (posc == 'x') contX++
        if (posc == 'o') contO++
    }
    if (contO == 3 || contX == 3) {
        console.log(3)

        tieValue=0
        Gato = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]
        for (var i = 0; i < 3; i++) {
            var places = ids[i][0]
            d.querySelector(`.${places}`).classList.add('parpadeos')
        }
    
        contO = 0
        contX = 0
        finished = true
        if (winner=='x')d.querySelector('.point-x').textContent = PointsX+=1
        if(winner=='o')d.querySelector('.point-o').textContent = PointsO+=1

        if(finished==true) {
            function xd(){
            d.querySelectorAll('.square').forEach(el=>{
                el.removeAttribute('boolean')
                while(el.hasChildNodes()){
                    el.removeChild(el.firstChild)
                }
            })
            finished = false
          
            
            
        }

            const timeout = setTimeout(xd,1000)
        }
    } else {
        contO = 0
        contX = 0
    }
    /***** */
    for (var i = 0; i < 3; i++) {
        const posc = Gato[i][1]
        if (posc == 'x') contX++
        if (posc == 'o') contO++
    }
    if (contO == 3 || contX == 3) {
        console.log(4)

        tieValue = 0
        Gato = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]
        
        contO = 0
        contX = 0
        for (var i = 0; i < 3; i++) {
            var places = ids[i][1]
            d.querySelector(`.${places}`).classList.add('parpadeos')
        }
        finished = true
        if (winner=='x')d.querySelector('.point-x').textContent = PointsX+=1
        if(winner=='o')d.querySelector('.point-o').textContent = PointsO+=1
        if(finished==true) {
            function xd(){
            d.querySelectorAll('.square').forEach(el=>{
                el.removeAttribute('boolean')
                while(el.hasChildNodes()){
                    el.removeChild(el.firstChild)
                }
            })
            finished = false
          
            
            
        }

            const timeout = setTimeout(xd,1000)
        }
    } else {
        contO = 0
        contX = 0
    }
    /********* */


    for (var i = 0; i < 3; i++) {
        const posc = Gato[i][2]
        if (posc == 'x') contX++
        if (posc == 'o') contO++
    }
    if (contO == 3 || contX == 3) {
        console.log(5)

        tieValue = 0
        Gato = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]
        
        contO = 0
        contX = 0
        
        for (var i = 0; i < 3; i++) {
            var places = ids[i][2]
            d.querySelector(`.${places}`).classList.add('parpadeos')
        }
        finished = true
        if (winner=='x')d.querySelector('.point-x').textContent = PointsX+=1
        if(winner=='o')d.querySelector('.point-o').textContent = PointsO+=1

        if(finished==true) {
            function xd(){
            d.querySelectorAll('.square').forEach(el=>{
                el.removeAttribute('boolean')
                while(el.hasChildNodes()){
                    el.removeChild(el.firstChild)
                }
            })}
            finished = false
            contO = 0
            contX=0
            const timeout = setTimeout(xd,3000)
        }
    } else {
        contO = 0
        contX = 0
    }


    /****** */
    for (var i = 0; i < 3; i++){
       
        if(Gato[i][i]=='x')contX++
        if (Gato[i][i]=='o')contO++
    }
    if (contO == 3 || contX == 3) {
        console.log(6)

        tieValue = 0
        Gato = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]
        contO = 0
        contX = 0
        for (var i = 0; i < 3; i++) {
            var places = ids[i][i]
            d.querySelector(`.${places}`).classList.add('parpadeos')
        }
        finished = true
        if (winner=='x')d.querySelector('.point-x').textContent = PointsX+=1
        if(winner=='o')d.querySelector('.point-o').textContent = PointsO+=1

        if(finished==true) {
            function xd(){
            d.querySelectorAll('.square').forEach(el=>{
                el.removeAttribute('boolean')
                while(el.hasChildNodes()){
                    el.removeChild(el.firstChild)
                }
            })
            finished = false
          
            
            
        }

            const timeout = setTimeout(xd,1000)
        }
    } else {
        contO = 0
        contX = 0
    }

    /***** */
    let invert  = 2
    let invertTwo = 2
    for (var i = 0; i < 3; i++){
       
        if(Gato[i][invert]=='x')contX++
        if (Gato[i][invert]=='o')contO++
        invert--

    }
    if (contO == 3 || contX == 3) {
        console.log(7)
        tieValue = 0

        Gato = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]
        for (var i = 0; i < 3; i++) {
            var places = ids[i][invertTwo]
            d.querySelector(`.${places}`).classList.add('parpadeos')
            invertTwo--
        }
        contO = 0
        contX = 0
        finished = true
        if (winner=='x')d.querySelector('.point-x').textContent = PointsX+=1
        if(winner=='o')d.querySelector('.point-o').textContent = PointsO+=1

        if(finished==true) {
            function xd(){
            d.querySelectorAll('.square').forEach(el=>{
                el.removeAttribute('boolean')
                while(el.hasChildNodes()){
                    el.removeChild(el.firstChild)
                }
            })
            finished = false
          
            
            
        }

            const timeout = setTimeout(xd,1000)
        }
    } else {
        contO = 0
        contX = 0
    }

    console.log(tieValue)
}


/******************************** */









    d.addEventListener('click', e => {

        if (e.target.matches(`.square`)) {
            if(!finished==true){
            if (x == false) {
                tieValue++
                d.querySelector('.score-o').classList.remove('almost-visible')
                    d.querySelector('.score-x').classList.add('almost-visible')

                    d.querySelector('.point-o').classList.remove('almost-visible')
                    d.querySelector('.point-x').classList.add('almost-visible')
                    
                if (!e.target.getAttribute('boolean')) {
    
                const equis = d.createElement('span')
                equis.textContent = 'x'
             
               
              
                e.target.insertAdjacentElement('beforeend', equis)
                    e.target.setAttribute('boolean','x')
                    x = true
                    let ArrayPlace = (Math.ceil((parseInt(e.target.id, 10)) / 3)) - 1
                    let place = e.target.id
                    equis.classList.add(`valor${place}`)
                    Gato.forEach(i => {
                        i.forEach(j => {
                            if (j == place) {
                                let num = Gato[ArrayPlace].indexOf(j)
                                Gato[ArrayPlace][num] = e.target.getAttribute('boolean')
                            }
                        })
    
                    })
                    ids.forEach(i => {
                        i.forEach(j => {
                            if (j == place) {
                                let num = ids[ArrayPlace].indexOf(j)
                                ids[ArrayPlace][num] = equis.className
                            }
                        })
    
                    })
    
                    ReadValues(e.target.getAttribute('boolean'))
                    
                    if(tieValue == 9 && tie==true){
                        
                        ties++
                        let tiess = d.querySelector('.tie')
                        tiess.textContent = ties
                        tiess.classList.add('parpadeos')
                        let  parpadeos=d.querySelectorAll('.square')
                        parpadeos.forEach(e=>{
                            e.classList.add('parpadeos')
                        })

                        function xd(){
                            tiess.classList.remove('parpadeos')
                            tiess.classList.add('almost-visible')


                        d.querySelectorAll('.square').forEach(el=>{
                            el.classList.remove('parpadeos')
                            el.removeAttribute('boolean')
                            while(el.hasChildNodes()){
                                el.removeChild(el.firstChild)
                            }
                        })
                        Gato = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]

                    }
                        finished==false
                        tieValue = 0
                        console.log('aqui1')
                        const activate = setTimeout(xd,2000)
                        
                    }

                
    
                }
            }
        
            if (!e.target.getAttribute('boolean')) {
                if (x == true) {
                    tieValue++
                    d.querySelector('.score-x').classList.remove('almost-visible')
                    d.querySelector('.score-o').classList.add('almost-visible')

                    d.querySelector('.point-x').classList.remove('almost-visible')
                    d.querySelector('.point-o').classList.add('almost-visible')
                    const circle = d.createElement('span')
                    circle.textContent = 'O'
                   
                    e.target.insertAdjacentElement('beforeend', circle)
                    e.target.setAttribute('boolean', 'o')
                    x = false
                    let ArrayPlace = (Math.ceil((parseInt(e.target.id, 10)) / 3)) - 1
                    let place = e.target.id
                    circle.classList.add(`valor${place}`)
    
                    Gato.forEach(i => {
                        i.forEach(j => {
                            if (j == place) {
                                let num = Gato[ArrayPlace].indexOf(j)
                                Gato[ArrayPlace][num] = e.target.getAttribute('boolean')
                            }
                        })
    
                    })
            
                    ids.forEach(i => {
                        i.forEach(j => {
                            if (j == place) {
                                let num = ids[ArrayPlace].indexOf(j)
                                ids[ArrayPlace][num] = circle.className
                            }
                        })
    
                    })
    
                    ReadValues(e.target.getAttribute('boolean'))
                   
                    if(tieValue == 9 && tie==true){
                        
                        ties++
                        let tiess = d.querySelector('.tie')
                        tiess.textContent = ties
                        tiess.classList.add('parpadeos')
                        let  parpadeos=d.querySelectorAll('.square')
                        parpadeos.forEach(e=>{
                            e.classList.add('parpadeos')
                        })

                        function xd(){
                            tiess.classList.remove('parpadeos')
                            tiess.classList.add('almost-visible')


                        d.querySelectorAll('.square').forEach(el=>{
                            el.classList.remove('parpadeos')
                            el.removeAttribute('boolean')
                            while(el.hasChildNodes()){
                                el.removeChild(el.firstChild)
                            }
                        })
                        Gato = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]

                    }
                        finished==false
                        tieValue = 0
                        console.log('aqui2')
                        const activate = setTimeout(xd,2000)
                        
                    }

                     
                }

            }
    
            
    
        }
        }
    })

