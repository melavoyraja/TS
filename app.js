/**
 * Created by pramod on 8/2/2016.
 */
var container = document.getElementById('container');
function countdown(initial, final, interval) {
    var current = initial;
    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}
