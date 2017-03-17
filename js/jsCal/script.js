displayNum = "";
storedNum = "";
operation = 0;
queuedOperation = 0;
calculationFinished = false;

function clear() {
    // Select the calculator's display
     document.getElementById("monitor") = '0';

    // Clear the global variables and the display
    displayNum = "";
    storedNum = "";
    operation = 0;
    queuedOperation = 0;        
    monitor.value = displayNum;

}


function store(num){

    var monitor = document.getElementById("monitor");
    monitor.value += num;

}

function operation(op){




}



function clearPreviousResult() {
    var monitor = document.getElementById('monitor');
    if (calculationFinished) {
        monitor.value = '0';
        calculationFinished = false;

    }

}
