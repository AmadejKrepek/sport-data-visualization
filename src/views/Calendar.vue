<template>
    <div class="row" v-if="GetSportData != null">
        <VueCal class="vuecal--green-theme"
        :events="GetCalendarData"
        :selected-date="GetCalendarData[GetCalendarData.length-1].start"
        hide-weekends
        :disable-views="['years', 'day']"
        events-count-on-year-view
        events-on-month-view="short"
        style="height: 900px"
        :on-event-click="onEventClick" />

        <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
            <div class="container">
                <div class="row text-center">
                    <div class="col-12 col-md-4">
                        <fa icon="map-location-dot" class="chart-symbol mt-5" id="start_symbol" @click="GoToMap"></fa>
                        <h6 class="mt-4">{{moment(selectedEvent.start).format('YYYY-MM-DD HH:mm')}}</h6>
                    </div>
                    <div class="col-12 col-md-4">
                        <h4 class="text-center">{{selectedEvent.title}}</h4>
                        <div class="modal__content">
                            <span class="fw-bold">Start Date: </span>{{moment(selectedEvent.start).format('YYYY-MM-DD HH:mm')}} <br />
                            <span class="fw-bold">End Date: </span>{{moment(selectedEvent.end).format('YYYY-MM-DD HH:mm')}} <br />
                            <span class="fw-bold">Activity Type: </span>{{selectedEvent.activityType}} <br />
                            <span class="fw-bold">Duration: </span>{{selectedEvent.duration}} hours <br />
                            <span class="fw-bold">Max Altitude: </span>{{selectedEvent.altitude_max}} <br />
                            <span class="fw-bold">Min Altitude: </span>{{selectedEvent.altitude_min}} <br />
                            <span class="fw-bold">Average Altitude: </span>{{selectedEvent.altitude_avg}} <br />
                            <span class="fw-bold">Ascent: </span>{{selectedEvent.ascent}} <br />
                            <span class="fw-bold">Descent: </span>{{selectedEvent.descent}} <br />
                            <span class="fw-bold">Distance: </span>{{selectedEvent.distance}} <br />
                            <span class="fw-bold">Max HeartRate: </span>{{selectedEvent.hr_max}} <br />
                            <span class="fw-bold">Min HeartRate: </span>{{selectedEvent.hr_min}} <br/>
                            <span class="fw-bold">Average HeartRate: </span>{{selectedEvent.hr_avg}} <br />
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <fa icon="flag-checkered" class="chart-symbol mt-5" id="finish_symbol" @click="GoToDashboard"></fa>
                        <h6 class="mt-4">{{moment(selectedEvent.end).format('YYYY-MM-DD HH:mm')}}</h6>
                    </div>
                </div>
            </div>

        </vue-final-modal>
    </div>
    <div v-else>
        <div class="col-12 col-xl-12">
            <div class="col-12 col-xl-12 mb-4 text-center" v-if="GetSportData == null" data-bs-toggle="modal" data-bs-target="#importDataModal" role="button">
          <h1 class="p-2" >Click here to add some sports data</h1>
          <fa icon="folder-plus" class="folder-symbol" id="temperature"></fa>
      </div>
        </div>
    </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import '@/css/calendar.css';
import '@/css/event.css';

import moment from 'moment';

export default {
    name: 'Calendar',
    components: {
        VueCal,
    },
    data: () => ({
        date: new Date(),
        showModal: false,
        selectedEvent: {},
        events: [
        {
            start: '2018-11-19 10:35',
            end: '2018-11-19 11:30',
            title: 'Doctor appointment',
            content: 'Click to see more details',
            contentFull: 'My shopping list is rather long:<br><ul><li>Avocados</li><li>Tomatoes</li><li>Potatoes</li><li>Mangoes</li></ul>',
            class: 'leisure'
        },
        {
            start: '2018-11-19 18:30',
            end: '2018-11-19 19:15',
            title: 'Dentist appointment',
        },
        {
            start: '2018-11-20 18:30',
            end: '2018-11-20 20:30',
            title: 'Crossfit'
        },
        {
            start: '2018-11-21 11:00',
            end: '2018-11-21 13:00',
            title: 'Brunch with Jane'
        },
        {
            start: '2018-11-21 19:30',
            end: '2018-11-21 23:00',
            title: 'Swimming lesson'
        },
        {
            start: '2019-09-30 19:30',
            end: '2019-09-30 23:00',
            title: 'Swimming lesson'
        },
        {
            start: "2018-11-19 12:00",
            end: "2018-11-19 14:00",
            title: "LUNCH",
            class: "lunch",
            background: true
        },
        {
            start: "2018-11-20 12:00",
            end: "2018-11-20 14:00",
            title: "LUNCH",
            class: "lunch",
            background: true
        }
        ]
    }),
    methods: {
        onEventClick(event, e) {
            this.selectedEvent = event;
            this.showModal = true;

            e.stopPropagation();
        },
        moment,
        GoToMap() {
            this.$router.push('/');
        },
        GoToDashboard() {
            this.$router.push('/map');
        }
    },
    computed: {
        GetSportData() {
            return this.$store.getters.getSportData;
        },
        GetCalendarData() {
          return this.$store.getters.getCalendarData;
        }
    }
}
</script>

<style scoped>
#start_symbol {
    font-size: 200px;
    color: rgb(255, 102, 0);
    cursor: pointer;
}

#finish_symbol {
    font-size: 200px;
    color: green;
    cursor: pointer;
}

.folder-symbol {
  font-size: 200px;
  color: rgb(44, 157, 172);
}

.vuecal__event {cursor: pointer;}

.vuecal__event-title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 4px 0 8px;
}

.vuecal__event-time {
  display: inline-block;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.vuecal__event-content {
  font-style: italic;
}

::v-deep .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ::v-deep .modal-content {
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
  }
  .modal__title {
    font-size: 1.5rem;
    font-weight: 700;
  }
  
  .dark-mode div::v-deep .modal-content {
    border-color: #2d3748;
    background-color: #1a202c;
  }
</style>