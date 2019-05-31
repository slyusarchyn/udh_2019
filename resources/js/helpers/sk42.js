var Pi = Math.PI;
var ro = 206264.8062; // Число угловых секунд в радиане

//Эллипсоид Красовского
var aP = 6378245.;
var alP = 1 / 298.3;
var e2P = 2 * alP - (alP * alP);

//Эллипсоид WGS84 (GRS80, эти два эллипсоида сходны по большинству параметров)
var aW = 6378137;
var alW = 1 / 298.257223563;
var e2W = 2 * alW - (alW * alW);

// Вспомогательные значения для преобразования эллипсоидов
var a = (aP + aW) / 2
var e2 = (e2P + e2W) / 2
var da = aW - aP
var de2 = e2W - e2P

// Линейные элементы трансформирования, в метрах
var dx = 23.92
var dy = -141.27
var dz = -80.9

// Угловые элементы трансформирования, в секундах
var wx = 0
var wy = 0
var wz = 0

// Дифференциальное различие масштабов
var ms = 0

export function toCK42(lat, lng) {

    var ck42Lat = lat - dB(lat, lng) / 3600;
    var ck42Lng = lng - dL(lat, lng) / 3600;

    return {lat: ck42Lat, lng: ck42Lng};

}


function dB(lat, lng) {

    var B = lat * Math.PI / 180;
    var L = lng * Math.PI / 180;

    var M = a * (1 - e2) / Math.pow((1 - e2 * Math.sin(B) * Math.sin(B)), 1.5);
    var N = Math.pow(a * (1 - e2 * Math.sin(B) * Math.sin(B)), -0.5);

    return ro / M * (N / a * e2 * Math.sin(B) * Math.cos(B) * da + (N * N / a * a + 1) * N * Math.sin(B) * Math.cos(B) * de2 / 2 - (dx * Math.cos(L) + dy * Math.sin(L)) * Math.sin(B) + dz * Math.cos(B)) - wx * Math.sin(L) * (1 + e2 * Math.cos(2 * B)) + wy * Math.cos(L) * (1 + e2 * Math.cos(2 * B)) - ro * ms * e2 * Math.sin(B) * Math.cos(B);

}

function dL(lat, lng) {

    var B = lat * Math.PI / 180;
    var L = lng * Math.PI / 180;

    var N = a * Math.pow((1 - e2 * Math.sin(B) * Math.sin(B)), -0.5);

    return ro / (N * Math.cos(B)) * (-dx * Math.sin(L) + dy * Math.cos(L)) + Math.tan(B) * (1 - e2) * (wx * Math.cos(L) + wy * Math.sin(L)) - wz;

}
