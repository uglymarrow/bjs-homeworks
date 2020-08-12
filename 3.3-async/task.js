class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    };

    addClock(time, callback, alarmId) {
        if (! alarmId) 
            throw new Error('Идентификатор звонка не передан');

        if (this.alarmCollection.find(element => element.id == alarmId)) {
            console.error('Звонок с таким же идентификатором уже существует');
            return false;
        }

        this.alarmCollection.push({ id : alarmId,
                                    time : time,
                                    callback : callback
                                  });
        return true;
    }

    removeClock(alarmId) {
        if (this.alarmCollection.find(element => element.id == alarmId)) {
            this.alarmCollection = this.alarmCollection.filter(element => element.id != alarmId);
            return true;
        }

        return false;
    }

    getCurrentFormattedTime(min) {
        let now = new Date();
        let hours = now.getHours();
        if (! min) 
            min = 0;
        let minutes = now.getMinutes() + min;
        hours = (hours < 10) ? ('0'+ hours) : hours;
        minutes = (minutes < 10) ? ('0'+ minutes) : minutes;
        return hours + ':' + minutes;
    }
 
    printAlarms() {
        if (this.alarmCollection.length == 0) {
            console.log('Будильников нет');
            return false;
        } else {
            this.alarmCollection.forEach(element => console.log('Будильник №'+ element.id + ' заведен на ' + element.time));
            return true;
        }
    }

    start() {
        if (! this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(element => checkClock(element))        
            , 15000);   
           return true; 
        } else {
            return false;
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
            return true;
        }

        return false;
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
};

function checkClock(curAlarm) {
    if (curAlarm.time == (new AlarmClock).getCurrentFormattedTime()) {
        return curAlarm.callback();
    } else {
        return false;
    }
}

function testCase() {
    let clock = new AlarmClock;
    clock.addClock(clock.getCurrentFormattedTime(), () => console.log('I am first!'), 1);
    clock.addClock(clock.getCurrentFormattedTime(1), () => {
        console.log('I am second!');
        clock.removeClock(2);
    }, 2);
    clock.addClock(clock.getCurrentFormattedTime(2), () => {
        console.log('I am third!');
        clock.clearAlarms();
        clock.printAlarms();
    }, 3);
    clock.printAlarms();
    clock.start();
}

testCase();