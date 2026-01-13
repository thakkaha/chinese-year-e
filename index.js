const years = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep', 'Monkey', 'Rooster', 'Dog', 'Pig'];
const yearse=['&#x1F400;', '&#x1F402;','&#x1F405;','&#x1F407;','&#x1F409;','&#x1F40D;','&#x1F40E;','&#x1F411;','&#x1F412;','&#x1F413;','&#x1F415;','&#x1F416;'];

exports.years = years

exports.getAnimal = num => {
  const ind = num % 12;
  let name =years[ind];
  name+= ' '+yearse[ind];
    if (!name) throw new Error(`Opps, error`)
  return name
}

exports.getAnimale = num => {
  const ind = num % 12;
  let name =yearse[ind];
    if (!name) throw new Error(`Opps, error`)
  return name
}