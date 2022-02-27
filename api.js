
const loadData = () =>{

    fetch("https://api.thedogapi.com/v1/breeds")
    .then (res => res.json())
    .then (data =>  displayDog(data) )

}

    const  displayDog = (dogData) => {
    const dogId = document.getElementById('dogId')
    const firstData = dogData.slice(0,10);
    
    for(const dog of firstData){
        const div =document.createElement('div')
        div.className = "col-lg-4"
        dogId.appendChild(div)
        div.innerHTML=`
        <h3>${dog.name}</h3>

        `
       
    }
 

}

