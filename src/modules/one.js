const firstFile = () => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    const timerDays = document.getElementById('day__today');
    const timerNewYear = document.getElementById('timer__newyear');
    const getTimeRemaining = () => {
        let dateNow = new Date();
        let getMiliseconds = new Date().getTime();
        let getNewYearDay = new Date('01 january 2023').getTime();
        let dateToMiliseconds = Math.floor(getMiliseconds);
        let newYearDay = Math.floor(getNewYearDay);

        let day = dateNow.getDay();
        let hour = dateNow.getHours();
        let minute = dateNow.getMinutes();
        let second = dateNow.getSeconds();
        return {
            hour,
            minute,
            second,
            day,
            dateToMiliseconds,
            newYearDay,
        };
    };
    const updateTime = () => {
        let getTime = getTimeRemaining();
        timerHours.textContent = getTime.hour;
        timerMinutes.textContent = getTime.minute;
        timerSeconds.textContent = getTime.second;


        if (getTime.second < 10) {
            timerSeconds.textContent = '0' + getTime.second;
        }
        if (getTime.minute < 10) {
            timerMinutes.textContent = '0' + getTime.minute;
        }
        if (getTime.hour < 10) {
            timerHours.textContent = '0' + getTime.hour;
        }

        setTimeout(updateTime, 1000);

    };

    //получаем день недели
    const inputDay = () => {
        let getTime = getTimeRemaining();
        let weekDays = [
            'воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
        ];
        timerDays.textContent = weekDays[getTime.day];
        setTimeout(updateTime, 1000);
    };
    //нахождение дней до нового года
    const dayTonewYear = () => {
        let getTime = getTimeRemaining();
        let milisecondInDay = 24 * 60 * 60 * 1000;
        let dayName = '';
        let dayToNewYear = Math.floor((getTime.newYearDay - getTime.dateToMiliseconds) / milisecondInDay);
        //находим последнюю цифру
        let lastNumber = dayToNewYear.toString().substr(-1);

        if (lastNumber == 2 || lastNumber == 2 || lastNumber == 4) {
            timerNewYear.textContent = dayToNewYear + ' дня';
        } else if (lastNumber == 1) {
            timerNewYear.textContent = dayToNewYear + ' день';
        } else {
            timerNewYear.textContent = dayToNewYear + ' дней';
        }
        setTimeout(updateTime, 1000);
    };
    dayTonewYear();
    updateTime();
    inputDay();
};
export default firstFile;