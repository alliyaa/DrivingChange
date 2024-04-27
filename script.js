
const Page = document.createElement('div');
createFirstPage();


const homeLink = document.getElementById("homeLink");

homeLink.addEventListener("click", function(event) {
     event.preventDefault();

     Page.classList.remove('secondPageDiv');
     Page.classList.remove('awarenessPage');
     Page.classList.remove('references');
     Page.classList.remove('thirdPage');
     Page.classList.remove('fifthPage');
     Page.classList.remove('fourthPage');
     Page.classList.remove('futurePage');   
     Page.innerHTML = '';
     Page.textContent = '';

     createFirstPage();
     Page.classList.add('rhome');
   

   
});


const awarenessLink = document.getElementById("awarenessLink");

awarenessLink.addEventListener("click", function(event) {
    event.preventDefault();
  
    Page.innerHTML = '';
    Page.textContent = '';
    Page.classList.add('awarenessPage');


    Page.classList.remove('homepage');
    Page.classList.remove('references');
    Page.classList.remove('futurePage');
    Page.classList.remove('secondPageDiv');
    Page.classList.remove('thirdPage');
    Page.classList.remove('fifthPage');
    Page.classList.remove('fourthPage');
    Page.classList.remove('rhome');
   
  
    Page.innerHTML+=" <h2> General Awareness on Carbon Emission <h2>";
 
  
    Page.innerHTML += " <h3> Carbon dioxide emissions from transportation are a significant contributor to climate change. In Saudi Arabia alone, transportation emissions reached a staggering 277.74 million tonnes of CO₂ in 2022. These emissions not only contribute to global warming but also lead to poor air quality and environmental degradation.<br><br>Our Purpose<br><br>Our project aims to shed light on the daily carbon emissions generated by individual transportation choices. By illustrating the immense difference in emissions between various modes of transport, we hope to inspire people to opt for more sustainable alternatives available within the Kingdom.<br><br>Join Us in Making a Difference<br><br>Every journey counts. By making informed decisions about how we travel, we can collectively reduce our carbon footprint and contribute to Saudi Arabia's ambitious goal of achieving zero net emissions by 2060. While many sustainability initiatives focus on large-scale solutions, we believe in the power of individual actions. By providing users with a platform to calculate their carbon emissions per trip, rather than per kilometer, we aim to offer a more personalized and relatable perspective. This approach aligns with Saudi Arabia's Vision 2030, which emphasizes the importance of reducing carbon emissions at both the individual and national levels.<br><br>How You Can Get Involved<br><br>Explore our website to learn more about the environmental impact of different modes of transportation and discover practical tips for reducing your carbon footprint. Share our message with your friends, family, and colleagues to spread awareness and inspire collective action towards a more sustainable future.<br><br>Together, let's drive change and harness the power of public transportation for a greener, healthier Saudi Arabia.<br><br>Join the movement. Drive sustainably. </h3>";
  

    document.body.appendChild(Page);
});



const refLink = document.getElementById("refLink");
refLink.addEventListener("click", function(event) {
    event.preventDefault();

    Page.classList.remove('homepage');
    Page.classList.remove('awarenessPage');
    Page.classList.remove('futurePage');
    Page.classList.remove('secondPageDiv');
    Page.classList.remove('thirdPage');
    Page.classList.remove('fifthPage');
    Page.classList.remove('fourthPage');
   

    Page.innerHTML+="";
    Page.textContent+="";
    
    

    Page.innerHTML = `
    <h3 class="section-heading">Assumptions</h3>
    <p class="section-content">
        It is acknowledged that various vehicle models emit differing amounts of carbon based on their make, model, and fuel efficiency. To maintain simplicity and generalizability in our calculations, we have opted to utilize data derived from average vehicle emissions based in the United States. In the absence of comprehensive research on public transport vehicles' emissions in Saudi Arabia, we have relied on data sourced from the United States for our analysis. Given the similarities in vehicle technology, fuel composition, and operating conditions between the two regions, we are assuming that the emission patterns observed in the United States will be reasonably representative of those in Saudi Arabia. While this assumption allows us to make informed estimates, it is essential to acknowledge the potential differences between the two contexts that may affect emission outcomes. As such, our findings should be interpreted with caution, and further localized research in Saudi Arabia is warranted to validate and refine our assumptions.
    </p>
    <h3 class="section-heading">Limitations</h3>
    <p class="section-content">
        One notable limitation of our project is the carbon emissions generated during idling periods, particularly in congested traffic conditions. While our calculations accurately capture emissions during vehicle movement, they do not account for the carbon emitted when a vehicle is stationary but the engine is running. Idling represents a significant source of emissions, especially in urban areas where traffic congestion is common. By not incorporating this aspect into our analysis, our estimates may underestimate the true environmental impact of driving in densely populated areas or during peak traffic times. Future iterations of our project could explore methods to integrate idling emissions data, thereby providing a more comprehensive assessment of carbon footprints associated with vehicular travel.
    </p>
    <h3 class="section-heading">References</h3>
    <p class="section-content">
        1-Congressional Budget Office. “The Role of Transportation in U.S. Greenhouse Gas Emissions.” Congressional Budget Office, December 2022, <br> <a href="http://www.cbo.gov/system/files/2022-12/58566-co2-emissions-transportation.pdf">www.cbo.gov/system/files/2022-12/58566-co2-emissions-transportation.pdf</a>.<br> <br>
        2-United States Environmental Protection Agency. “Greenhouse Gas Emissions from a Typical Passenger Vehicle.” EPA,  <br> <a href="http://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle#:~:text=typical%20passenger%20vehicle%3F-">www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle#:~:text=typical%20passenger%20vehicle%3F-</a>.<br> <br> <br>
        3-Oak Ridge National Laboratory. “Transportation Energy Data Book Edition 39.” Oak Ridge National Laboratory, February 2021, <br> <a href="http://tedb.ornl.gov/wp-content/uploads/2021/02/TEDB_Ed_39.pdf#page=68">tedb.ornl.gov/wp-content/uploads/2021/02/TEDB_Ed_39.pdf#page=68</a>.<br> <br> <br>
        4-Embassy of The Kingdom of Saudi Arabia. “Transportation & Communication.” The Embassy of The Kingdom of Saudi Arabia,  <br> <a href="http://saudiembassy.net">saudiembassy.net</a>.<br> <br> 
        5-Our World in Data. “Saudi Arabia: CO2 Country Profile.” Our World in Data,  <br> <a href="http://ourworldindata.org/co2/country/saudi-arabia">ourworldindata.org/co2/country/saudi-arabia</a>.<br><br>
        6-Riyadh Bus. “Plan.”  <br> <a href="http://riyadhbus.sa">riyadhbus.sa</a>.<br> <br>
        7-United Nations Development Programme. “Online services reduce CO2 emissions from Saudi cars with some 0.77 million tons annually.” UNDP, <br> <a href="http://www.undp.org">www.undp.org</a>.<br> <br>
    </p>
`;

  Page.classList.add('references');
  document.body.appendChild(Page);
  
});


const futureLink = document.getElementById("futureLink");

futureLink.addEventListener("click", function(event) {
    
    event.preventDefault();

    Page.classList.remove('homepage');
    Page.classList.remove('awarenessPage');
    Page.classList.remove('references');
    Page.classList.remove('secondPageDiv');
    Page.classList.remove('thirdPage');
    Page.classList.remove('fifthPage');
    Page.classList.remove('fourthPage');

      
    Page.innerHTML="";
    Page.textContent="";

    Page.classList.remove('homepage');
    Page.classList.remove('awarenessPage');
    Page.classList.remove('references');
    
    Page.classList.add('futurePage');
   
    Page.innerHTML += "<h3> Future Possibilities </h3>";
    Page.innerHTML += "<p> 1-We aim to enhance the accuracy of carbon emission calculations by introducing the option for users to specify the type of car they are driving. We recognize that vehicles equipped with different engine types, makes, and models can vary significantly in their carbon emission profiles. By allowing users to input this specific information, we can tailor our calculations to better reflect the emissions associated with their individual vehicles. This approach will enable us to provide more personalized and precise assessments of carbon footprints, empowering users with valuable insights into the environmental impact of their transportation choices.  <br> <br> <br> <br> 2- Additionally, we intend to introduce an option for users to specify the type of fuel their vehicle is running on, thereby enabling more precise calculations of carbon emissions. We acknowledge that the composition of fuels varies widely, leading to significant differences in their carbon emission profiles. This feature will offer users a more comprehensive understanding of the environmental impact of their transportation choices, empowering them to make informed decisions that align with their sustainability goals.</p>";
    
  

    document.body.appendChild(Page);

});


createFirstPage();

    function createFirstPage() {
   
        Page.classList.add('homepage');
        Page.classList.remove('awarenessPage');
        Page.classList.remove('references');
        Page.classList.remove('secondPageDiv');
        Page.classList.remove('thirdPage');
        Page.classList.remove('fifthPage');
        Page.classList.remove('fourthPage');
        Page.classList.remove('futurePage');
    
        const Header = document.createElement('div');
        Header.innerHTML = "Find Out Your <br>  Carbon Footprint!";
        Header.classList.add('HeaderM');

        const homeButton = document.createElement('button');
        homeButton.textContent = "Learn More";

        homeButton.addEventListener('click', () => {
         Page.innerHTML = '';
         Page.textContent = '';
            createSecondPage();
        });

        Page.appendChild(Header);
        Page.appendChild(homeButton);
        document.body.appendChild(Page);
    }


    function createSecondPage() {
       
        Page.classList.remove('awarenessPage');
        Page.classList.remove('references');
        Page.classList.remove('thirdPage');
        Page.classList.remove('fifthPage');
        Page.classList.remove('fourthPage');
        Page.classList.remove('futurePage');
        Page.classList.add('secondPageDiv');
        
        Page.innerHTML = "<h5>Choose Your Mode of Transportation</h5>";
    
        const carImg = document.createElement('img');
        carImg.classList.add('carImg');
        carImg.src ='Car.png';
        Page.appendChild(carImg);
    
        const carButton = document.createElement('button');
        carButton.addEventListener('click', () => {
            
            TripTime('car');
        });
        carButton.textContent = 'Car';
        Page.appendChild(carButton);
        carButton.classList.add('car');
    
        const busImg = document.createElement('img');
        busImg.classList.add('busImg');
        busImg.src = 'bus.png';
        Page.appendChild(busImg);
    
        const busButton = document.createElement('button');
        busButton.addEventListener('click', () => {
           
            TripTime('bus');
        });
        busButton.textContent = 'Bus';
        Page.appendChild(busButton);
        busButton.classList.add('bus');
    
        const trainImg = document.createElement('img');
        trainImg.classList.add('trainImg');
        trainImg.src = 'Train.png';
        Page.appendChild(trainImg);
    
        const trainButton = document.createElement('button');
        trainButton.addEventListener('click', () => {
           
            TripTime('train');
        });
        trainButton.textContent = 'Train';
        Page.appendChild(trainButton);
        trainButton.classList.add('train');
    
  
        document.body.appendChild(Page); 
    }
    



function TripTime(vehicle)
{

   Page.innerHTML = '';
   Page.textContent = '';
   
   Page.classList.remove('awarenessPage');
   Page.classList.remove('references');
   Page.classList.remove('secondPageDiv');
   Page.classList.remove('homePage');
   Page.classList.remove('fifthPage');
   Page.classList.remove('fourthPage');
   Page.classList.remove('futurePage');
  
   Page.classList.add('thirdPage');
   
 
   
   Page.innerHTML += " <h3> Enter your Trip Distance in Kilometres </h3> ";
   

   const editTime = document.createElement('div');
   editTime.classList.add('editableBox');;
   editTime.contentEditable = true;
   editTime.textContent=" ";
   Page.appendChild(editTime);


   const calculateButton = document.createElement('button');
   calculateButton.textContent = "Calculate";
   Page.appendChild(calculateButton);

    calculateButton.addEventListener('click', function() {

    const editedContent = editTime.textContent;
    const numericContent = editedContent.replace(/\D/g, ''); 
    editTime.textContent = numericContent;



    const editedTime = editTime.textContent;

    if(vehicle==='car')
    {


      carCarbonEmission(editedTime, vehicle);

    }

    else if (vehicle==='bus')
    {
       
          busCarbonEmission(editedTime, vehicle);
    }

    else if (vehicle==='train')
    {
        trainCarbonEmission(editedTime, vehicle);
    }
    

});

document.body.appendChild(Page);


}



 class CarbonEmission
 {
    constructor(time, vehicle)
    {
        this.time=time;
        this.vehicle=vehicle;
    }
    
    carCarbon() {
            const carCarbonE = this.time * 597; 
            return carCarbonE;
        }
    

    busCarbon() 
        {
            const carCarbonE = this.time * 482; 
            return carCarbonE;
        }
    

    trainCarbon() 
        {
            const carCarbonE = this.time * 283; 
            return carCarbonE;
        }
    
}



function carCarbonEmission(editedTime, vehicle)
{
    Page.innerHTML="";
    Page.textContent="";
    Page.classList.add('fourthPage');
    const emission = new CarbonEmission(editedTime, vehicle);
    const carCarbonC = emission.carCarbon(); 

  

    const carbonEDivH = document.createElement('div');
    const carbonEDiv = document.createElement('div');

    
    carbonEDivH.classList.add('fpH');
    carbonEDiv.classList.add('fp');
   

    carbonEDivH.textContent+="With the car ";
    const fcarCarbonC = formatNumberWithCommas(carCarbonC);
    carbonEDiv.textContent+=fcarCarbonC; 
    carbonEDiv.textContent+= " grams of CO₂ are emitted";
    
    Page.appendChild(carbonEDivH);
    Page.appendChild(carbonEDiv);
  

   
    Page.innerHTML+=" <h4> How many trees need to be planted per year to offset your net carbon emissions? </h4>";
    const Strees = document.createElement('button');
    Strees.textContent+="See Trees";
    Page.appendChild(Strees);

    Strees.addEventListener('click', () => {
    TreesPerEmission(fcarCarbonC,carCarbonC,editedTime,vehicle);
    });
    
  
    document.body.appendChild(Page);
    
   
  

}

function busCarbonEmission(editedTime, vehicle)
{
    Page.innerHTML="";
    Page.textContent="";
    Page.classList.add('fourthPage');
    const emission = new CarbonEmission(editedTime, vehicle);
    const busCarbonE = emission.busCarbon(); 
    
    

    const carbonEDiv = document.createElement('div');
    
    const carbonEDivH = document.createElement('div');
   
        
    carbonEDivH.classList.add('fpH');
    carbonEDiv.classList.add('fp');
    Page.appendChild(carbonEDivH)

    carbonEDivH.textContent+= "With the Bus";
    const busCraboncF = formatNumberWithCommas(busCarbonE);
    carbonEDiv.textContent+= busCraboncF; 
    carbonEDiv.textContent+= " grams of CO₂ are emitted";
    Page.appendChild(carbonEDiv);

   
    Page.innerHTML+=" <h4> How many trees need to be planted per year to offset your net carbon emissions? </h4>";

    const Strees = document.createElement('button');
    Strees.textContent+="See Trees";
    Page.appendChild(Strees);

    Strees.addEventListener('click', () => {
    TreesPerEmission(busCraboncF, busCarbonE,editedTime,vehicle);
    });
    
  
    document.body.appendChild(Page); 

}

function trainCarbonEmission(editedTime, vehicle)
{
    Page.innerHTML="";
    Page.textContent="";
    Page.classList.add('fourthPage');
    const emission = new CarbonEmission(editedTime, vehicle);
    const trainCarbonE = emission.trainCarbon();


    const carbonEDivH = document.createElement('div');
    const carbonEDiv = document.createElement('div');
  
          
    carbonEDivH.classList.add('fpH');
    carbonEDiv.classList.add('fp');
    Page.appendChild(carbonEDivH);

    carbonEDivH.textContent+= "With the train";
    const trainF= formatNumberWithCommas(trainCarbonE);
    carbonEDiv.textContent+= trainF; 
    carbonEDiv.textContent+= " grams of CO₂ are emitted";
  
    Page.appendChild(carbonEDivH);
    Page.appendChild(carbonEDiv);

    
   
    Page.innerHTML+=" <h4> How many trees need to be planted per year to offset your net carbon emissions? </h4>";
    const Strees = document.createElement('button');
    Strees.textContent+="See Trees";
    Page.appendChild(Strees);

    Strees.addEventListener('click', () => {
    TreesPerEmission(trainF, trainCarbonE,editedTime,vehicle);
    });
    

    document.body.appendChild(Page);


}
function TreesPerEmission(e, emission, editedTime, vehicle) {
    
    Page.innerHTML="";
    Page.textContent="";
   
    Page.classList.add('fifthPage');

    const TreeDiv = document.createElement('div');
    TreeDiv.textContent += "With the " + vehicle + " as your mode of transportation, ";
    const Trees = (((emission / 1000) *252 / 20)).toFixed(1);
    const numTrees = Math.ceil(Trees);
    const formatTrres =  formatNumberWithCommas(numTrees);
    

    TreeDiv.textContent += formatTrres + " trees per year are required to offset " + e + " grams of CO₂";
    TreeDiv.classList.add('HeaderV');

    const Treepic = document.createElement('div');
    Treepic.classList.add('TreeBackg');

    let treeCounter = 0;
    const interval = setInterval(function () {
        if (treeCounter < numTrees) {
            const treeImg = document.createElement('img');
            treeImg.src = 'Trees.png';
            treeImg.alt = 'Tree';
            treeImg.classList.add('tree');
            Treepic.appendChild(treeImg);
            treeCounter++;
            const treeHeight = Treepic.clientHeight;
            TreeDiv.style.marginTop = treeHeight + 'px';
            
        } else {
            clearInterval(interval);

        
        }
    }, 300);
   
    Page.appendChild(TreeDiv);
    Page.appendChild(Treepic);

   
 
    
    const OthersButton = document.createElement('button');
    OthersButton.classList.add('Treebtn');
    OthersButton.textContent += "Compare Emissions";
    Page.appendChild(OthersButton);

 if(vehicle==='car') {
  
  OthersButton.addEventListener('click', () =>
  {
    Page.innerHTML="";
    Page.textContent="";
    const emission = new CarbonEmission(editedTime, vehicle);

   const carbonODiv = document.createElement('div');
   const carbonHDiv = document.createElement('div');
   carbonHDiv.textContent+="For the same trip";

   carbonODiv.textContent+= "A bus emits ";
   const carCarbonB = emission.busCarbon(); 
   const busCarb =formatNumberWithCommas(carCarbonB);
   carbonODiv.textContent+= busCarb; 
   carbonODiv.textContent+= " grams of Co2"; 
   

   const carbonTDiv = document.createElement('div');
   carbonTDiv.textContent ="A train emits ";
   const carCarbonT = emission.trainCarbon(); 
   const carbF = formatNumberWithCommas(carCarbonT);
   carbonTDiv.textContent+= carbF ;
   carbonTDiv.textContent+= " grams of Co2";

  Page.classList.add('fourthPage');
  Page.appendChild(carbonHDiv);
  Page.appendChild(carbonODiv);
  Page.appendChild(carbonTDiv);


   carbonODiv.classList.add('carbon');
   carbonHDiv.classList.add('HeaderV');
   carbonTDiv.classList.add('carbon');
   
   document.body.appendChild(Page); 



});


 }


 if(vehicle==='bus')
 {
    
    OthersButton.addEventListener('click', () =>
    {
    
    Page.innerHTML="";
    Page.textContent="";
    const emission = new CarbonEmission(editedTime, vehicle)
    const carbonODiv = document.createElement('div');

    const carbonHDiv = document.createElement('div');
    carbonHDiv.textContent+="For the same trip:";

    carbonODiv.textContent+= "A car emits ";
    const carCarbonC = emission.carCarbon(); 
    const carbFu = formatNumberWithCommas(carCarbonC);
    carbonODiv.textContent+= carbFu; 
    carbonODiv.textContent+= " grams of CO₂"; 
   
    
    const carbonTDiv = document.createElement('div');
    carbonTDiv.textContent ="A train emits ";
    const carCarbonT = emission.trainCarbon(); 
    const carbT= formatNumberWithCommas(carCarbonT);
    carbonTDiv.textContent+= carbT;
    carbonTDiv.textContent+= " grams of CO₂";

    Page.classList.add('fourthPage');
    Page.appendChild(carbonHDiv);
    Page.appendChild(carbonODiv);
    Page.appendChild(carbonTDiv);


    carbonODiv.classList.add('carbon');
    carbonHDiv.classList.add('HeaderV');
    carbonTDiv.classList.add('carbon');

    
  
    document.body.appendChild(Page); 

    });
      

 }


 if(vehicle==='train')
 {
    
    OthersButton.addEventListener('click', () =>
    {
     Page.innerHTML="";
     Page.textContent="";
    const emission = new CarbonEmission(editedTime, vehicle)
    const carbonODiv = document.createElement('div');

    
    const carbonHDiv = document.createElement('div');
    carbonHDiv.textContent+="For the same trip";

    carbonODiv.textContent+= "A car emits ";
    const carCarbonC = emission.carCarbon(); 
    
    const carbCF =  formatNumberWithCommas(carCarbonC);
    carbonODiv.textContent+= carbCF; 
    
    carbonODiv.textContent+= " grams of CO₂"; 

    const carbonBDiv = document.createElement('div');
    carbonBDiv.textContent+= "A bus emits ";
    const carCarbonB = emission.busCarbon(); 
    
    const busCF =  formatNumberWithCommas(carCarbonB);

    carbonBDiv.textContent+= busCF; 

    carbonBDiv.textContent+= " grams of CO₂"; 
   
    Page.classList.add('fourthPage');
    Page.appendChild(carbonHDiv);
    Page.appendChild(carbonODiv);
    Page.appendChild(carbonBDiv);

  
    carbonODiv.classList.add('carbon');
    carbonHDiv.classList.add('HeaderV');
    carbonBDiv.classList.add('carbon');
    document.body.appendChild(Page);


    });
 }

    document.body.appendChild(Page); 
   
}



// Creating The Tree Animation on the First Page


let canvas1 = document.createElement("canvas");
canvas1.id = "tree1";
canvas1.setAttribute("role", "img");
canvas1.setAttribute("aria-label", "A tree growing until it bears fruit, dropping its fruit, shrinking, and repeating the cycle");


let canvas2 = document.createElement("canvas");
canvas2.id = "tree2";
canvas2.setAttribute("role", "img");
canvas2.setAttribute("aria-label", "A tree growing until it bears fruit, dropping its fruit, shrinking, and repeating the cycle");


Page.appendChild(canvas1);
Page.appendChild(canvas2);


window.addEventListener("DOMContentLoaded",() => {
	const t = new Tree("canvas");
});

class Tree {
	constructor(qs) {
		this.C = document.querySelector(qs);
		this.c = this.C?.getContext("2d");
		this.S = window.devicePixelRatio;
		this.W = 800;
		this.H = 800;
		this.branches = [];
		this.darkTheme = false;
		this.debug = false;
		this.decaying = false;
		this.floorY = 685;
		this.fruit = [];
		this.gravity = 0.098;
		this.loopDelay = 500;
		this.loopEnd = Utils.dateValue;
		this.maxGenerations = 10;

		if (this.C) this.init();
	}
	get allBranchesComplete() {
		const { branches, maxGenerations } = this;

		return branches.filter(b => {
			const isLastGen = b.generation === maxGenerations;
			return b.progress >= 1 && isLastGen;
		}).length > 0;
	}
	get allFruitComplete() {
		return !!this.fruit.length && this.fruit.every(f => f.progress === 1);
	}
	get allFruitFalling() {
		return !!this.fruit.length && this.fruit.every(f => f.timeUntilFall <= 0);
	}
	get debugInfo() {
		return [
			{ item: 'Pixel Ratio', value: this.S },
			{ item: 'Branches', value: this.branches.length },
			{ item: 'Branches Complete', value: this.allBranchesComplete },
			{ item: 'Decaying', value: this.decaying },
			{ item: 'Fruit', value: this.fruit.length },
			{ item: 'Fruit Complete', value: this.allFruitComplete }
		];
	}
	get lastGeneration() {
		const genIntegers = this.branches.map(b => b.generation);
		return [...new Set(genIntegers)].pop();
	}
	get trunk() {
		return {
			angle: 0,
			angleInc: 20,
			decaySpeed: 0.0625,
			diameter: 10,
			distance: 120,
			distanceFade: 0.2,
			generation: 1,
			growthSpeed: 0.04,
			hadBranches: false,
			progress: 0,
			x1: 400,
			y1: 680,
			x2: 400,
			y2: 560
		};
	}
	detectTheme(mq) {
		this.darkTheme = mq.matches;
	}

	draw() {
        const { c, W, H, debug, branches, fruit } = this;
    
        c.clearRect(0,0,W,H);
    
        const lightness = this.darkTheme ? 80 : 90; 
        const foreground = `hsl(223,10%,${lightness}%)`; 
        c.fillStyle = foreground;
        c.strokeStyle = foreground;
		
		if (debug === true) {
			const textX = 24;

			this.debugInfo.forEach((d,i) => {
				c.fillText(`${d.item}: ${d.value}`,textX,24 * (i + 1));
			});
		}

		
		branches.forEach(b => {
			c.lineWidth = b.diameter;
			c.beginPath();
			c.moveTo(b.x1,b.y1);
			c.lineTo(
				b.x1 + (b.x2 - b.x1) * b.progress,
				b.y1 + (b.y2 - b.y1) * b.progress
			);
			c.stroke();
			c.closePath();
		});

	
		fruit.forEach(f => {
			c.globalAlpha = f.decayTime	< f.decayFrames ? f.decayTime / f.decayFrames : 1;
			c.beginPath();
			c.arc(f.x,f.y,f.r * f.progress,0,2 * Math.PI);
			c.fill();
			c.closePath();
			c.globalAlpha = 1;
		});
	}
	grow() {
		
		if (!this.branches.length && Utils.dateValue - this.loopEnd > this.loopDelay) {
			this.branches.push(this.trunk);
		}

		if (!this.allBranchesComplete) {
			this.branches.forEach(b => {
				if (b.progress < 1) {
				
					b.progress += b.growthSpeed;

					if (b.progress > 1) {
						b.progress = 1;

						if (b.generation === this.maxGenerations) {
							this.fruit.push({
								decayFrames: 18,
								decayTime: 150,
								progress: 0,
								speed: 0.04,
								timeUntilFall: Utils.randomInt(0,300),
								x: b.x2,
								y: b.y2,
								r: Utils.randomInt(4,6),
								restitution: 0.2 * (1 - b.y2 / this.floorY),
								yVelocity: 0
							});
						}
					}

				} else if (!b.hadBranches && b.generation < this.maxGenerations) {
					b.hadBranches = true;
					
					const lean = 5;
					const angleLeft = b.angle - (b.angleInc + Utils.randomInt(-lean,lean));
					const angleRight = b.angle + (b.angleInc + Utils.randomInt(-lean,lean));
					const distance = b.distance * (1 - b.distanceFade);
					const generation = b.generation + 1;

					const leftBranch = {
						angle: angleLeft,
						angleInc: b.angleInc,
						decaySpeed: b.decaySpeed,
						diameter: Math.floor(b.diameter * 0.9),
						distance,
						distanceFade: b.distanceFade,
						generation,
						growthSpeed: b.growthSpeed,
						hadBranches: false,
						progress: 0,
						x1: b.x2,
						y1: b.y2,
						x2: b.x2 + Utils.endPointX(angleLeft,distance),
						y2: b.y2 - Utils.endPointY(angleLeft,distance)
					};

					const rightBranch = {...leftBranch};
					rightBranch.angle = angleRight;
					rightBranch.x2 = b.x2 + Utils.endPointX(angleRight,distance);
					rightBranch.y2 = b.y2 - Utils.endPointY(angleRight,distance);

					this.branches.push(leftBranch,rightBranch);
				}
			});
		}
		if (!this.allFruitComplete) {
			this.fruit.forEach(f => {
				if (f.progress < 1) {
					f.progress += f.speed;

					if (f.progress > 1) f.progress = 1;
				}
			});
		}

		if (this.allBranchesComplete && this.allFruitComplete) this.decaying = true;
	}
	decay() {
		if (this.fruit.length) {
		
			this.fruit = this.fruit.filter(f => f.decayTime > 0);

			this.fruit.forEach(f => {
				if (f.timeUntilFall <= 0) {
					f.y += f.yVelocity;
					f.yVelocity += this.gravity;

					const bottom = this.floorY - f.r;

					if (f.y >= bottom) {
						f.y = bottom;
						f.yVelocity *= -f.restitution;
					}

					--f.decayTime;

				} else if (!f.decaying) {
					--f.timeUntilFall;
				}
			});
		}
		if (this.allFruitFalling || !this.fruit.length) {
			
			this.branches = this.branches.filter(b => b.progress > 0);

			this.branches.forEach(b => {
				if (b.generation === this.lastGeneration) b.progress -= b.decaySpeed;
			});
		}
		if (!this.branches.length && !this.fruit.length) {
			
			this.decaying = false;
			this.loopEnd = Utils.dateValue;
		}
	}
	init() {
		this.setupCanvas();
		this.setupThemeDetection();
		this.run();
	}
	run() {
		this.draw();

		if (this.decaying) this.decay();
		else this.grow();

		requestAnimationFrame(this.run.bind(this));
	}
	setupCanvas() {
		const { C, c, W, H, S } = this;

		C.width = W * S;
		C.height = H * S;
		C.style.width = "auto";
		C.style.height = "100%";
		c.scale(S,S);

		c.font = "16px sans-serif";
		c.lineCap = "round";
		c.lineJoin = "round";
	}
	setupThemeDetection() {
		if (window.matchMedia) {
			const mq = window.matchMedia("(prefers-color-scheme: dark)");
			this.detectTheme(mq);
			mq.addListener(this.detectTheme.bind(this));
		}
	}
}

class Utils {
	static get dateValue() {
		return +new Date();
	}
	static endPointX(angleInDeg,distance) {
		return Math.sin(angleInDeg * Math.PI / 180) * distance;
	}
	static endPointY(angleInDeg,distance) {
		return Math.cos(angleInDeg * Math.PI / 180) * distance;
	}
	static randomInt(min,max) {
		return min + Math.round(Math.random() * (max - min));
	}
}

const tree1 = new Tree("#tree1");
const tree2 = new Tree("#tree2");

function formatNumberWithCommas(number) {
    let numberStr = number.toString();

    let parts = numberStr.split('.');
    let integerPart = parts[0];
    let decimalPart = parts.length > 1 ? '.' + parts[1] : '';

    let formattedInteger = '';
    let commaCounter = 0;
    for (let i = integerPart.length - 1; i >= 0; i--) {
        formattedInteger = integerPart[i] + formattedInteger;
        commaCounter++;
        if (commaCounter % 3 === 0 && i > 0 && integerPart[i - 1] !== '-') {
            formattedInteger = ',' + formattedInteger;
            commaCounter = 0;
            if (i > 1) {
                formattedInteger =  formattedInteger ;
            }
        }
    }
    let formattedNumber = formattedInteger + decimalPart;
    console.log("done");
    console.log(formattedNumber);

    return formattedNumber;
}

// Test cases
console.log(formatNumberWithCommas(11940)); // Output: 11,940
console.log(formatNumberWithCommas(1234567.89)); // Output: 1,234,567.89


