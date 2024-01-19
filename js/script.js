const adviceContainer = document.querySelector("#advice-line");
const submit = document.querySelector("#btn");
const adviceNumber = document.querySelector("#no");

const fetchData = async() => {

    try{
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        adviceContainer.textContent = await '"'+data.slip.advice+'"';
        adviceNumber.textContent = await '#'+ data.slip.id;
    }
    catch(err){
        console.error('Error fetching data:', err.message);
    }
}

submit.addEventListener('click',()=>{
    fetchData()
})




