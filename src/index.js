console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',function(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response=>response.json())

    .then(data=>{
        const imageContainer=document.getElementById('dog-image-container')
        const imagesUrls=data.message
        imagesUrls.forEach(imagesUrl=> {
            
            const imageHolder=document.createElement('img')
            imageHolder.src=imagesUrl
            imageContainer.appendChild(imageHolder)
        });
    })
    .catch(error=>{
        alert(error.message)
    })
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response=>response.json())
    .then(data=>{
        const breedList=document.getElementById('dog-breeds')
        const breedsData=data.message
        const dropdownList=document.getElementById('breed-dropdown')
        const breedsDataKeys=Object.keys(breedsData)
        breedsDataKeys.forEach(breedData=>{
            const breedElement=document.createElement('li')
            breedElement.textContent=breedData
            breedElement.addEventListener('click',function(){
                breedElement.classList.toggle('selected')
            })
            breedList.appendChild(breedElement)
        })
        dropdownList.addEventListener('change',function(){
            const chosenLetter=dropdownList.value 
            const breeds=document.querySelectorAll('li')
            breeds.forEach(breed=>{
                const firstLetter=breed.textContent.charAt(0).toLowerCase()
                if(chosenLetter===firstLetter){
                    breed.style.display='block'
                }
                else{
                    breed.style.display='none'
                }
            })

        })


    })
    .catch(error=>{
        alert(error.message)
    })
})
