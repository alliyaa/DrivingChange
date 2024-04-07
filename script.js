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
    carButton.classList.add('car');

    
    const busButton = document.createElement('button');
    busButton.textContent = 'Bus';
    secondPageDiv.appendChild(busButton);
    busButton.classList.add('bus');
        
    const trainButton = document.createElement('button');
    trainButton.textContent = 'Train';
    secondPageDiv.appendChild(trainButton);
    trainButton.classList.add('train');
    
    document.body.appendChild(secondPageDiv); 

}