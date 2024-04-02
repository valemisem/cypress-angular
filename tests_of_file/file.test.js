const validateValue = require ('./file')

test ('name of the test', () => {
    expect (validateValue(50)).toBe(true)
})

test ('second test', () => {
    expect (validateValue(100)).toBe(true)
})