import moment from "moment";

class Event {
    constructor() {}
    PrepareEvents(integralArr) {
        var eventInfoArr = [];
        integralArr.forEach(x => {
            var eventInfo = new EventInfo();

            eventInfo.title = 'Sport Training';
            eventInfo.class = 'sport';
            eventInfo.content = 'Sport training with next statistics: ';

            eventInfo.start = moment(x.original.timestamps[0]).format('YYYY-MM-DD HH:mm');
            eventInfo.end = moment(x.original.timestamps[x.original.timestamps.length - 1]).format('YYYY-MM-DD HH:mm');

            if (x.original.activity_type == null) {
                eventInfo.activityType = 'Biking';
            }

            eventInfo.altitude_max = Math.round(x.stats.altitude_max * 10) / 10;
            eventInfo.altitude_min = Math.round(x.stats.altitude_min * 10) / 10;
            eventInfo.altitude_avg = Math.round(x.stats.altitude_avg * 10) / 10;
            eventInfo.ascent = Math.round(x.stats.ascent * 10) / 10;
            eventInfo.descent = Math.round(x.stats.descent * 10) / 10;
            eventInfo.distance = Math.round(x.stats.distance * 10) / 10;
            eventInfo.duration = Math.round((x.stats.duration / 3600) * 10) / 10;

            eventInfo.calories = Math.round(x.stats.calories * 10) / 10;

            eventInfo.hr_max = Math.round(x.stats.hr_max * 10) / 10;
            eventInfo.hr_min = Math.round(x.stats.hr_min * 10) / 10;
            eventInfo.hr_avg = Math.round(x.stats.hr_avg * 10) / 10;

            eventInfoArr.push(eventInfo);
        });
        return eventInfoArr;
    }
}

class EventInfo {
    constructor() {
        this.start = '';
        this.end = '';
        this.title = '';
        this.content = '';
        this.classStyle = '';

        this.activityType = null;

        this.altitude_avg = null;
        this.altitude_max = null;
        this.altitude_min = null;
        this.ascent = null;
        this.descent = null;
        this.distance = null;
        this.duration = null;

        this.calories = null;

        this.hr_max = null;
        this.hr_min = null;
        this.hr_avg = null;
    }

}

export {
    Event,
    EventInfo
}