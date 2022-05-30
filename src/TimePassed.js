export default function TimePassed(date) {
    let diff = Date.now() - date.getTime();
    let second = Math.floor(diff / 1000);

    if (second < 60) {
        return second + " วินาที";
    } else if (second < 3600) {
        return Math.floor(second / 60) + " นาที";
    } else if (second < 86400) {
        return Math.floor(second / 3600) + " ชั่วโมง";
    } else if (second < 86400 * 30) {
        return Math.floor(second / 86400) + " วัน";
    } else if (second < 86400 * 365) {
        return Math.floor(second / (86400 * 30)) + " เดือน";
    } else {
        return Math.floor(second / (86400 * 365)) + " ปี"; 
    }
}
