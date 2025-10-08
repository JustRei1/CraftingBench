const goldilocksZone = (mass) => {
    const luminosity = mass ** 3.5
    const startingZone = Math.round((Math.sqrt(luminosity) * 0.95) * 100) / 100
    const endZone = Math.round((Math.sqrt(luminosity) * 1.37) * 100) / 100

    return [startingZone, endZone];
}

console.log(goldilocksZone(1))