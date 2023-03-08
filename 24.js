const band = {
    bandName: 'led zoolin',
    famousSong: 'stairway to heave',
    year: 1968,
    anotherFamousSong: 'kashmir'
}

const { bandName: var1, famousSong: var2, ...restProp } = band

// const bandName = band.bandName
// const famousSong = band.famousSong

console.log(var1, var2)
console.log(restProp)