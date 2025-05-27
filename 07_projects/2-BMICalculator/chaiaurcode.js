const form = document.querySelector('form')

// this use case will give you empty value 
// const height = parseInt(document.querySelector('#height').value)


// form pe submit event hota hai 

form.addEventListener('submit', function(e){
    e.preventDefault();     // jab form submit hota hai to get ya post se value jati hai , to usko prevent karna hai pahle aur un value pe operation karna hai 

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`

    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`

    }else{
        const bmi = (weight / ((height * height)/10000).toFixed(2))
        // show the result 
        results.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.6){
            const p = document.createElement('p')
            p.appendChild(document.createTextNode('Under Weight'))
            results.appendChild(p)
        }
        if(bmi > 18.6 && bmi < 24.9){
            const p = document.createElement('p')
            p.appendChild(document.createTextNode('Normal Range'))
            results.appendChild(p)
        }
        if(bmi > 24.9){
            const p = document.createElement('p')
            p.appendChild(document.createTextNode('OverWeight'))
            results.appendChild(p)
        }
    }

})

