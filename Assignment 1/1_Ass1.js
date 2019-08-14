function Maximum(no1, no2, no3) {
    var Max;
    if ((no1 > no2) && (no1 > no3)) {
        Max = no1;
    }
    else if ((no2 > no1) && (no2 > no3)) {
        Max = no2;
    }
    else if ((no3 > no1) && (no3 > no2)) {
        Max = no3;
    }
    return Max;
}
var iRet = Maximum(23, 89, 6);
console.log("Maximum number is " + iRet);
