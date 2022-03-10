function swap(obj, key1, key2) {
    [obj[key1], obj[key2]] = [obj[key2], obj[key1]];
}

function ChangePositions(sportData) {
    let positions = sportData.positions;

    for (let i = 0; i < positions.length; i++) {
        swap(positions[i], 0, 1);
    }
    
    return sportData;
}

export {
    ChangePositions
}