console.log("Client side JS")


const form = document.querySelector('form')
const location1 = document.querySelector('input')
const msg1 = document.getElementById('msg1')
const msg2 = document.getElementById('msg2')


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    msg1.textContent = 'Loading...';
    msg2.textContent = '';
    const loc = location1.value;
    fetch('http://localhost:3000/weather?address='+loc).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            msg1.textContent = data.error;
        }
        else{
            msg1.textContent = data.place;
            msg2.textContent = data.temprature;
        }
    })
})
    console.log(loc)
})