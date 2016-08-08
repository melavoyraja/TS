/**
 * Created by pramod on 8/2/2016.
 */
var container = document.getElementById('container');
function countdown(initial, final, interval, start) {
    if (final === void 0) { final = 0; }
    if (interval === void 0) { interval = 1; }
    if (start === void 0) { start = 11; }
    var current = initial;
    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}
function calculateTotal(x, y) {
    var total = x.length + y.length;
    return total;
}
var todo = { name: 'hello' };
