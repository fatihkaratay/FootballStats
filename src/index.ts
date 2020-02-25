import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

// create and onject that satidsfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// create and instance of MarchReader and pass in somethins satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// matchReader.mactches


let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`
  Man United won ${manUnitedWins} games
`);