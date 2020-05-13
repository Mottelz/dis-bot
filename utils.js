// Function that inverts strings
const flip = function (msg, callback) {
    // convert to string
    let raw = String(msg);
    let final = '';
    // Invert string
    for(let i = raw.length - 1; i > -1; i--) {
        final += raw[i];
    }
    // Feed to callback
    callback(final);
}


module.exports = {
    flip
};