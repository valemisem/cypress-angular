const mapArrToString = require("./mapArr")

describe ('mapArrToString', () => {
    test ('correct', () => {
        expect (mapArrToString([1,2,3])).toEqual(['1','2','3'])
    })
})