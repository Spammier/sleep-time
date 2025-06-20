document.addEventListener('DOMContentLoaded', function() {
    const wakeTimeInput = document.getElementById('wake-time');
    const resultsSection = document.getElementById('results');
    const sleepTimesContainer = document.getElementById('sleep-times');

    // 页面加载时自动计算一次
    calculateSleepTimes();

    wakeTimeInput.addEventListener('change', calculateSleepTimes);

    function calculateSleepTimes() {
        const wakeTime = wakeTimeInput.value;
        if (!wakeTime) return;

        const [wakeHour, wakeMinute] = wakeTime.split(':').map(Number);
        const wakeDateTime = new Date();
        wakeDateTime.setHours(wakeHour, wakeMinute, 0, 0);

        // 如果起床时间是今天早上，那么睡觉时间应该是昨天晚上
        if (wakeHour < 12) {
            wakeDateTime.setDate(wakeDateTime.getDate() + 1);
        }

        const sleepTimes = [];
        const sleepCycleDuration = 90; // 90分钟 = 1.5小时
        const fallAsleepTime = 30; // 30分钟入睡时间
        const maxSleepDuration = 9.5 * 60; // 9.5小时转换为分钟

        // 计算不同睡眠周期的入睡时间，从1个周期开始
        for (let cycles = 1; cycles <= 6; cycles++) {
            const totalSleepTime = cycles * sleepCycleDuration; // 纯睡眠时间
            const totalTimeInBed = totalSleepTime + fallAsleepTime; // 包含入睡时间

            // 如果总时间超过9.5小时，跳过
            if (totalTimeInBed > maxSleepDuration) continue;

            const sleepDateTime = new Date(wakeDateTime);
            sleepDateTime.setMinutes(sleepDateTime.getMinutes() - totalTimeInBed);

            const sleepTimeString = formatTime(sleepDateTime);
            const sleepDurationHours = Math.floor(totalSleepTime / 60);
            const sleepDurationMinutes = totalSleepTime % 60;

            sleepTimes.push({
                time: sleepTimeString,
                cycles: cycles,
                duration: `${sleepDurationHours}小时${sleepDurationMinutes > 0 ? sleepDurationMinutes + '分钟' : ''}`,
                totalTime: totalTimeInBed,
                isRecommended: cycles >= 5 && cycles <= 6, // 7.5-9小时是推荐睡眠时间
                isShort: cycles <= 2 // 标记短睡眠时间
            });
        }

        displaySleepTimes(sleepTimes);
    }

    function formatTime(date) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    function displaySleepTimes(sleepTimes) {
        sleepTimesContainer.innerHTML = '';

        sleepTimes.forEach(sleepTime => {
            const card = document.createElement('div');
            let cardClass = 'sleep-time-card';
            if (sleepTime.isRecommended) {
                cardClass += ' recommended';
            } else if (sleepTime.isShort) {
                cardClass += ' short-sleep';
            }
            card.className = cardClass;
            
            card.innerHTML = `
                <div class="sleep-time">${sleepTime.time}</div>
                <div class="sleep-duration">睡眠时长: ${sleepTime.duration}</div>
                <div class="sleep-cycles">${sleepTime.cycles}个睡眠周期</div>
            `;
            
            sleepTimesContainer.appendChild(card);
        });

        resultsSection.style.display = 'block';
    }
}); 