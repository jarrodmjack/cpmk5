export const calculateTimeDifference = (timeStart: string, timeEnd: string) => {
    timeStart = timeStart.split(':').join('')
    timeEnd = timeEnd.split(':').join('')
    let arr = [timeStart, timeEnd]
    let parsedHours = arr.map((str) => {
        let hours = parseInt(str.substr(0, 2), 10)
        let minutes = parseInt(str.substr(2, 4), 10)
        return (hours * 60 + minutes) / 60;
    });
    const worked = parsedHours[1] - parsedHours[0]
    return Math.ceil(worked / 0.5) * 0.5;
}

