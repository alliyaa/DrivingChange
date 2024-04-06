const homeButton = document.getElementById('homepg');

homeButton.addEventListener('click',  () => 
{
    document.body.innerHTML = '';
    createSecondPage();

});

function createSecondPage()
{
    const secondPageDiv = document.createElement('div');
    secondPageDiv.classList.add('secondPageDiv');

    const carButton = document.createElement('button');
    carButton.textContent = 'Car';
    secondPageDiv.appendChild(carButton);

    
    const busButton = document.createElement('button');
    busButton.textContent = 'Bus';
    secondPageDiv.appendChild(busButton);
    
    
    document.body.appendChild(secondPageDiv); 

}