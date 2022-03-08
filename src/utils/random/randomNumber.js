function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomDoubleFromInterval(min, max) { // min and max included 
    return Math.round((Math.random() * (max - min + 1) + min) * 10) / 10;
}

export {
    randomIntFromInterval,
    randomDoubleFromInterval
}