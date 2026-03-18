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

chineseYear.getAnimal(2000)
//=> 'Dragon'

chineseYear.getAnimal(2026)
//=> Horse🐎
```

## API
### .getAnimal(year: number):string
### .getAnimale(year: number):string
### .year:array
get zodiac animal name of a year number with emoji

## License
MIT © thakkaha