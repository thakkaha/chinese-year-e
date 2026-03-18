# chinese-year-e
> get the zodiac animal name of a certain year

## Install
```
npm install --save chinese-year-e
```

## Usage
```js
const chineseYear = require('chinese-year-e')
chineseYear.years
//=> ['Rat', 'Ox', ...]

chineseYear.yearse
//=>['&#x1F400;', '&#x1F402;', ...]


chineseYear.getAnimal(2026)
//=> Horse 🐎

chineseYear.getAnimale(2026)
//=> 🐎
```

## API
### .getAnimal(year: number):string
### .getAnimale(year: number):string
### .year:array
### .yeare:array
get zodiac animal name of a year number with emoji

## License
MIT © thakkaha