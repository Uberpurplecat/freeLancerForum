const container = document.querySelector('.container');
const names = [
    "Dr. Slice",
    "Dr. Pressure",
    "Prof. Possibility",
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose"
  ];
  
const occupations = [
    "gardener",
    "programmer",
    "teacher",
    "gardener"
  ];
  
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
function randomFreelancers(){
  const nameIndex = Math.floor(Math.random()*names.length);
  const occupationIndex = Math.floor(Math.random()*occupations.length);
  const prices = Math.floor(Math.random()*100);
  const freelancer = {
    name: names[nameIndex],
    occupation: occupations[occupationIndex],
    price: prices
  }
  return freelancer;
}

const freeLancers = [
  randomFreelancers(),
  randomFreelancers()
];

function render(){
  const html = freeLancers.map(function(freelancer){
    return `<div>Freelancers: ${freelancer.name} price: $${freelancer.price} Occupation: ${freelancer.occupation}</div>`;
  })
  container.innerHTML = html.join('');
}

render();

setInterval(function(){
  const newFreeLancer = randomFreelancers();
  freeLancers.push(newFreeLancer);
   render();
}, 500);