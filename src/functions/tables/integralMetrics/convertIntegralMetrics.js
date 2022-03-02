function convertIntegralMetrics(key, value) {
    if (key == "distance") {
        value = value / 1000;
    }
    else if (key == "duration") {
        value = value / 3600;
    }
    return Math.floor(value * 10) / 10;
}

function convertKeysIntegralMetrics(key) {
    if (key == "distance") {
        key = "Distance (km)";
    }
    else if (key == "duration") {
        key = "Duration (hours)";
    }
    else if (key == "hr_avg") {
        key = "Average Heart Rate (bpm)";
    }
    else if (key == "hr_max") {
        key = "Maximum Heart Rate (bpm)";
    }
    else if (key == "hr_min") {
        key = "Minimum Heart Rate (bpm)";
    }
    else if (key == "altitude_avg") {
        key = "Average Altitude (m)";
    }
    else if (key == "altitude_max") {
        key = "Maximum Altitude (m)";
    }
    else if (key == "altitude_min") {
        key = "Minimum Altitude (m)";
    }
    else if (key == "ascent") {
        key = "Ascent";
    }
    else if (key == "descent") {
        key = "Descent";
    }
    return key;
}

export { convertIntegralMetrics, convertKeysIntegralMetrics }