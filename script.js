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

    const editedContent = editTime.textContent;
    const numericContent = editedContent.replace(/\D/g, ''); 
    editTime.textContent = numericContent;
    console.log(editTime.textContent);

    const editedTime = editTime.textContent;

    if(viechle==='car')
    {

      carCarbonEmission(editedTime, viechle);

    }

    else if (viechle==='bus')
    {
       
          busCarbonEmission(editedTime, viechle);
    }

    else
    {
        trainCarbonEmission(editedTime, viechle);
    }
    
});

}


 class CarbonEmission
 {
    constructor(time, viechle)
    {
        this.time=time;
        this.viechle=viechle;
    }
    
    carCarbon() {
            const carCarbonE = this.time * 133; 
            return carCarbonE;
        }
    

    busCarbon() 
        {
            const carCarbonE = this.time * 20; 
            return carCarbonE;
        }
    

    trainCarbon() 
        {
            const carCarbonE = this.time * 10; 
            return carCarbonE;
        }
    
}


function carCarbonEmission(editedTime, viechle)
{
    document.body.textContent='';
    const emission = new CarbonEmission(editedTime, viechle);
    const carCarbonC = emission.carCarbon(); 
    const carbonEDiv = document.createElement('div');
    carbonEDiv.textContent+= "Your carbon Emission is: ";
    carbonEDiv.textContent+= carCarbonC; 
    carbonEDiv.textContent+= "grams of Co2"; 


    carbonEDiv.textContent+= "For the same trip, bus emits";
    const carCarbonB = emission.busCarbon(); 
    carbonEDiv.textContent+= carCarbonB; 
    carbonEDiv.textContent+= "grams of Co2"; 

    carbonEDiv.textContent+= "For the same trip, train emits";
    const carCarbonT = emission.trainCarbon(); 
    carbonEDiv.textContent+= carCarbonT;
    carbonEDiv.textContent+= "grams of Co2"; 

    document.body.appendChild(carbonEDiv);

        
    TreesPerEmission(carCarbonC,viechle);

}

function busCarbonEmission(editedTime, viechle)
{
    document.body.textContent='';
    const emission = new CarbonEmission(editedTime, viechle);
    const busCarbonE = emission.busCarbon(); 
    const carbonEDiv = document.createElement('div');
    carbonEDiv.textContent+= "Your carbon Emission is: ";
    carbonEDiv.textContent+= busCarbonE; 
    carbonEDiv.textContent+= "grams of Co2"; 

    carbonEDiv.textContent+= "For the same trip, car emits";
    const carCarbonC = emission.carCarbon(); 
    carbonEDiv.textContent+= carCarbonC; 
    carbonEDiv.textContent+= "grams of Co2"; 

    carbonEDiv.textContent+= "For the same trip, train emits";
    const carCarbonT = emission.trainCarbon(); 
    carbonEDiv.textContent+= carCarbonT;
    carbonEDiv.textContent+= "grams of Co2"; 

    document.body.appendChild(carbonEDiv);

    TreesPerEmission(busCarbonE,viechle);

}

function trainCarbonEmission(editedTime, viechle)
{
    document.body.textContent='';
    const emission = new CarbonEmission(editedTime, viechle);
    const trainCarbonE = emission.trainCarbon();

    const carbonEDiv = document.createElement('div');
    carbonEDiv.textContent+= "Your carbon Emission is: ";
    carbonEDiv.textContent += trainCarbonE; 
    carbonEDiv.textContent+= "grams of Co2"; 


    carbonEDiv.textContent+= "For the same trip, car emits";
    const carCarbonC = emission.carCarbon(); 
    carbonEDiv.textContent+= carCarbonC; 
    carbonEDiv.textContent+= "grams of Co2"; 

    carbonEDiv.textContent+= "For the same trip, bus emits";
    const carCarbonB = emission.busCarbon(); 
    carbonEDiv.textContent+= carCarbonB; 
    carbonEDiv.textContent+= "grams of Co2"; 
   


    document.body.appendChild(carbonEDiv);

    
    TreesPerEmission(trainCarbonE,viechle);


}

function TreesPerEmission(emission,viechle)
{
     
    const TreeDiv = document.createElement('div');
    TreeDiv.textContent+= "With your" + viechle + "the carbon emisssions are equivalent to ";
    const Trees =  (12*(((emission * 30) / 1000) / 21.77)).toFixed(2)
    TreeDiv.textContent += Trees;
    TreeDiv.textContent+= "trees per year";
    document.body.appendChild(TreeDiv);
    
}
 

 