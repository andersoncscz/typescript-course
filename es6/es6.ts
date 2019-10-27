class EcmaScript {
    //Rest Operator. It needs to be the last parameter, if not, the compiler won't know where 'args' ends.
    showArrayRest = (a: string, b: string, ...args: number[]) : void => {
        //Receives args as a rest operator, and prints a new array using spread operator as result.
        console.log('\nRest Operator', [a, b, ...args])
    }

    //Spread Operator, it will returns a new array with content from teamA and teamB merged.
    showArraySpread = (teamA: string[], teamB: string[]): void => {
        console.log('\nSpread Operator', [...teamA, ...teamB]);
    }
}

const teamA = ['Anderson', 'Patricia'];
const teamB = ['Ana', 'Josh'];
const ecma = new EcmaScript();

ecma.showArraySpread(teamA, teamB); //Spread operator
ecma.showArrayRest('zero', 'one', 2, 3, 4, 5, 6, 7, 8, 9, 10); //Rest operator