const {shuffleArray} = require('./utils')

//dummy variables
let dummyArray = [1,2,3,4,5]


describe('shuffleArray should', () => {
     test('should return an return of the same length', () => {
        let returnedArr = shuffleArray(dummyArray)
        expect(returnedArr.length).toEqual(dummyArray.length)

     });

     
})



