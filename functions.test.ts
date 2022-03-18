const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('arrayLength', () => {
        const shuffledArr = shuffleArray([1,2,3,4,5])
        expect(shuffledArr.toHaveLength(5)) 
    });
    test('array has five elements', () => {
        const array = [1,2,3,4,5]
        expect(shuffleArray).toEqual(expect.arrayContaining(array))
    });
    test('type should be array', () => {
        let type = (typeof shuffleArray)
        expect(Array.isArray(shuffleArray)).toBe(true)
        
    })
})

