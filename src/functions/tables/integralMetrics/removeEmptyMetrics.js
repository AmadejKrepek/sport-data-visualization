function removeEmptyMetrics(data) {
    if (data.activity_type == null) {
        delete data.activity_type;
    }
    if (data.distance == null)  {
        delete data.distance;
    }
    if (data.hr_avg == null) {
        delete data.hr_avg;
    }
    if (data.duration == null) {
        delete data.duration;
    }
    if (data.hr_max == null) {
        delete data.hr_max;
    }
    if (data.hr_min == null) {
        delete data.hr_min;
    }
    if (data.altitude_avg == null) {
        delete data.altitude_avg;
    }
    if (data.altitude_max == null) {
        delete data.altitude_max;
    }
    if (data.altitude_min == null) {
        delete data.altitude_min;
    }
    if (data.ascent == null) {
        delete data.ascent;
    }
    if (data.descent == null) {
        delete data.descent;
    }
    if (data.calories == null) {
        delete data.calories;
    }
    return data;
}

export {
    removeEmptyMetrics
}