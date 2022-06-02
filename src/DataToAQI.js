import questionIcon from '../public/images/question.svg';
import smileIcon from '../public/images/smile.svg';
import smilingIcon from '../public/images/smiling.svg';
import neutralIcon from '../public/images/neutral.svg';
import sadIcon from '../public/images/sad.svg';
import cryingIcon from '../public/images/crying.svg';

const aqiLevelTo = [
    {
        label: "ไม่มีข้อมูล",
        icon: questionIcon,
        color: "213, 216, 220"
    },
    {
        label: "อากาศดีมาก",
        icon: smilingIcon,
        color: "52, 152, 219"
    },
    {
        label: "อากาศดี",
        icon: smileIcon,
        color: "46, 204, 113"
    },
    {
        label: "ปานกลาง",
        icon: neutralIcon,
        color: "241, 196, 15"
    },
    {
        label: "เริ่มมีผลต่อสุขภาพ",
        icon: sadIcon,
        color: "243, 156, 18"
    },
    {
        label: "มีผลต่อสุขภาพ",
        icon: cryingIcon,
        color: "231, 76, 60"
    },
];

const dataToAQI = data => {
    const mapValue = (value, min1, max1, min2, max2) => min2 + ((value - min1) / (max1 - min1) * (max2 - min2));

    if (typeof data.pm025 !== "undefined") {
        const dataValue = +data.pm025;
        if (dataValue <= 25) {
            return {
                aqi: dataValue.toFixed(0),
                level: 1
            }
        }
        if (dataValue <= 37) {
            return {
                aqi: mapValue(dataValue, 26, 37, 26, 50).toFixed(0),
                level: 2
            }
        }
        if (dataValue <= 50) {
            return {
                aqi: mapValue(dataValue, 38, 50, 51, 100).toFixed(0),
                level: 3
            }
        }
        if (dataValue <= 90) {
            return {
                aqi: mapValue(dataValue, 51, 90, 101, 200).toFixed(0),
                level: 4
            }
        }
        return {
            aqi: mapValue(dataValue, 51, 90, 101, 200).toFixed(0),
            level: 5
        }
    }

    if (typeof data.pm100 !== "undefined") {
        const dataValue = +data.pm100;
        if (dataValue <= 50) {
            return {
                aqi: mapValue(dataValue, 0, 50, 0, 25).toFixed(0),
                level: 1
            }
        }
        if (dataValue <= 80) {
            return {
                aqi: mapValue(dataValue, 51, 80, 26, 37).toFixed(0),
                level: 2
            }
        }
        if (dataValue <= 50) {
            return {
                aqi: mapValue(dataValue, 81, 120, 51, 100).toFixed(0),
                level: 3
            }
        }
        if (dataValue <= 90) {
            return {
                aqi: mapValue(dataValue, 121, 180, 101, 200).toFixed(0),
                level: 4
            }
        }
        return {
            aqi: mapValue(dataValue, 121, 180, 101, 200).toFixed(0),
            level: 5
        }
    }

    // console.log("data", data);

    if (typeof data.temp !== "undefined") {
        return {
            aqi: (+data.temp).toFixed(0) + " °C",
            level: 2,
            isTemp: true
        }
    }

    return {
        aqi: "?",
        level: 0
    }
}

export default function(data) {
    const aqiInfo = dataToAQI(data);
    return Object.assign(aqiInfo, aqiLevelTo[aqiInfo.level]);
};
