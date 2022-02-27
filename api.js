
const loadData = () =>{

    fetch("https://api.thedogapi.com/v1/breeds")
    .then (res => res.json())
    .then (data =>  displayDog(data) )

}
// spinner 
    const displaySpinner = spinnerStyle =>{
    document.getElementById('spinner').style.display = spinnerStyle
    }
//  event handler
    const  displayDog = (dogData) => {
    const dogId = document.getElementById('dogId')
    const firstData = dogData.slice(0,50);
// spinner function
    displaySpinner('block')
    for(const dog of firstData){
        const div =document.createElement('div')
        div.className = "col-lg-4"
        dogId.appendChild(div)
        div.innerHTML=`
        <h3>${dog.name}</h3>
        <p> ${dog.temperament}</p>
        <p>Life Span: ${dog.life_span}</p>
        <img width ="400px" height="250px"  src =${dog.image.url} />

     `
              
       
    }
 
// spinner function
displaySpinner('none')
}

