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
   tripTime.classList.add('thirdPage');

   const tripTimeQ = document.createElement('div');
   tripTimeQ.classList.add('thirdPageH');
   tripTimeQ.textContent= " Enter your Trip Time in Minutes ";
   tripTime.appendChild(tripTimeQ);

   const editTime = document.createElement('div');
   editTime.classList.add('editableBox');;
   editTime.contentEditable = true;
   editTime.textContent=" ";
   tripTime.appendChild(editTime);

   const calculateButton = document.createElement('button');
   calculateButton.textContent = "Calculate";
   tripTime.appendChild(calculateButton);

    calculateButton.addEventListener('click', function() {

    const editedContent = editTime.textContent;
    const numericContent = editedContent.replace(/\D/g, ''); 
    editTime.textContent = numericContent;



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


document.body.appendChild(tripTime);



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
    carbonEDiv.textContent+= "With the car, the carbon emission is: ";
    carbonEDiv.textContent+= carCarbonC; 
    carbonEDiv.textContent+= " grams of Co2"; 

    
    const fourthPage = document.createElement('div');
    fourthPage.appendChild(carbonEDiv);

   
    const carbonODiv = document.createElement('div');
    
    const carbonHDiv = document.createElement('div');
    carbonHDiv.textContent+="With Other Modes of Transportation:";

    carbonODiv.textContent+= "For the same trip, a bus emits ";
    const carCarbonB = emission.busCarbon(); 
    carbonODiv.textContent+= carCarbonB; 
    carbonODiv.textContent+= " grams of Co2"; 
    

    const carbonTDiv = document.createElement('div');
    carbonTDiv.textContent ="For the same trip, a train emits ";
    const carCarbonT = emission.trainCarbon(); 
    carbonTDiv.textContent+= carCarbonT;
    carbonTDiv.textContent+= " grams of Co2";

    fourthPage.classList.add('fourthPage');
    fourthPage.appendChild(carbonHDiv);
    fourthPage.appendChild(carbonODiv);
    fourthPage.appendChild(carbonTDiv);


    carbonEDiv.classList.add('carbon');
    carbonODiv.classList.add('carbon');
    carbonHDiv.classList.add('carbono');
    carbonTDiv.classList.add('carbon');

    document.body.appendChild(fourthPage);
  

    TreesPerEmission(carCarbonC,viechle,fourthPage);
   

}

function busCarbonEmission(editedTime, viechle)
{
    document.body.textContent='';
    const emission = new CarbonEmission(editedTime, viechle);
    const busCarbonE = emission.busCarbon(); 

    const carbonEDiv = document.createElement('div');
    carbonEDiv.textContent+= "With the Bus, the carbon emission is: ";
    carbonEDiv.textContent+= busCarbonE; 
    carbonEDiv.textContent+= " grams of Co2"; 

    const fourthPage = document.createElement('div');
    fourthPage.appendChild(carbonEDiv);
   
   
    const carbonODiv = document.createElement('div');

    const carbonHDiv = document.createElement('div');
    carbonHDiv.textContent+="With Other Modes of Transportation:";

    carbonODiv.textContent+= "For the same trip, a car emits ";
    const carCarbonC = emission.carCarbon(); 
    carbonODiv.textContent+= carCarbonC; 
    carbonODiv.textContent+= " grams of Co2"; 

   
    
    const carbonTDiv = document.createElement('div');
    carbonTDiv.textContent ="For the same trip, a train emits ";
    const carCarbonT = emission.trainCarbon(); 
    carbonTDiv.textContent+= carCarbonT;
    carbonTDiv.textContent+= " grams of Co2";

    fourthPage.classList.add('fourthPage');
    fourthPage.appendChild(carbonHDiv);
    fourthPage.appendChild(carbonODiv);
    fourthPage.appendChild(carbonTDiv);


    carbonEDiv.classList.add('carbon');
    carbonODiv.classList.add('carbon');
    carbonHDiv.classList.add('carbono');
    carbonTDiv.classList.add('carbon');

    document.body.appendChild(fourthPage);

    TreesPerEmission(busCarbonE,viechle,fourthPage);

}

function trainCarbonEmission(editedTime, viechle)
{
    document.body.textContent='';
    const emission = new CarbonEmission(editedTime, viechle);
    const trainCarbonE = emission.trainCarbon();


    const carbonEDiv = document.createElement('div');
    carbonEDiv.textContent+= "With the train, the carbon emission is: ";
    carbonEDiv.textContent += trainCarbonE; 
    carbonEDiv.textContent+= " grams of Co2"; 
    
  
    const fourthPage = document.createElement('div');
    fourthPage.appendChild(carbonEDiv);
   
   
    const carbonODiv = document.createElement('div');

    
    const carbonHDiv = document.createElement('div');
    carbonHDiv.textContent+="With Other Modes of Transportation:";

    carbonODiv.textContent+= "For the same trip, a car emits ";
    const carCarbonC = emission.carCarbon(); 
    carbonODiv.textContent+= carCarbonC; 
    carbonODiv.textContent+= " grams of Co2"; 

    const carbonBDiv = document.createElement('div');
    carbonBDiv.textContent+= "For the same trip, a bus emits ";
    const carCarbonB = emission.busCarbon(); 
    carbonBDiv.textContent+= carCarbonB; 
    carbonBDiv.textContent+= " grams of Co2"; 
   
    fourthPage.classList.add('fourthPage');
    fourthPage.appendChild(carbonHDiv);
    fourthPage.appendChild(carbonODiv);
    fourthPage.appendChild(carbonBDiv);

    carbonEDiv.classList.add('carbon');
    carbonODiv.classList.add('carbon');
    carbonHDiv.classList.add('carbono');
    carbonBDiv.classList.add('carbon');

    document.body.appendChild(fourthPage);
  
    TreesPerEmission(trainCarbonE,viechle,fourthPage);

}



function TreesPerEmission(emission, viechle,fourthPage) {
    const TreeDiv = document.createElement('div');
    TreeDiv.textContent += "With the " + viechle + " as your mode of transportation, the carbon emissions are equivalent to ";
    const Trees = (12 * (((emission * 30) / 1000) / 21.77)).toFixed(2);
    TreeDiv.textContent += Trees + " trees per year";

    TreeDiv.classList.add('carbon');
 
    
    const Treepic = document.createElement('div');
    const numTrees = Math.ceil(Trees); 
    for (let i = 0; i < numTrees; i++) {
        const treeImg = document.createElement('img');
        treeImg.src = 'Trees.png'; 
        treeImg.alt = 'Tree';
        treeImg.classList.add('tree');
        Treepic.appendChild(treeImg);
    }

    fourthPage.appendChild(TreeDiv);
    fourthPage.appendChild(Treepic);

    document.body.appendChild(fourthPage);
}

 