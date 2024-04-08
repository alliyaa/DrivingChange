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
    secondPageDiv.innerHTML= " <h5> Choose Your Mode of Transportation </h5>";

    const carImg = document.createElement('img');
    carImg.classList.add('carImg');
    carImg.src = 'Car.png';
    secondPageDiv.appendChild(carImg);
    const carButton = document.createElement('button');

    carButton.addEventListener('click', () =>
    {
        document.body.innerHTML= '';
        TripTime('car');
   
    });

    carButton.textContent = 'Car';
    secondPageDiv.appendChild(carButton);
    carButton.classList.add('car');

    const busImg = document.createElement('img');
    busImg.classList.add('busImg');
    busImg.src = 'bus.png';
    secondPageDiv.appendChild(busImg);
    const busButton = document.createElement('button');

    busButton.addEventListener('click',  () =>
   {
    
    document.body.innerHTML= '';
    TripTime('bus');
   });

    busButton.textContent = 'Bus';
    secondPageDiv.appendChild(busButton);
    busButton.classList.add('bus');

    const trainImg = document.createElement('img');
    trainImg.classList.add('trainImg');
    trainImg.src = 'Train.png';
    secondPageDiv.appendChild(trainImg);
    const trainButton = document.createElement('button');

    trainButton.addEventListener('click', () =>
    {
        document.body.innerHTML= '';
        TripTime('train');
   
    });

    trainButton.textContent = 'Train';
    secondPageDiv.appendChild(trainButton);
    trainButton.classList.add('train');
    
    document.body.appendChild(secondPageDiv); 

}

function TripTime(viechle)
{
   const tripTime = document.createElement('div');
   tripTime.textContent = 'Enter your trip time in minutes';
   document.body.appendChild(tripTime);

   const editTime = document.createElement('div');
   editTime.contentEditable = true;
   editTime.textContent="14 mins";
   document.body.appendChild(editTime);

   const calculateButton = document.createElement('button');
   calculateButton.textContent = "Calculate";
   document.body.appendChild(calculateButton);

   
    calculateButton.addEventListener('click', function() {
    const editedTime = editTime.textContent;
    console.log("Edited time:", editedTime);
    new CarbonEmission(editedTime,viechle);
});

}


 class CarbonEmission
 {
    constructor(time,viechle)
    {
        this.time=time;
        this.viechle=viechle;
    }

 }


 

 