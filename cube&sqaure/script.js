function calculate() {
    var num = parseFloat(document.getElementById('num').value);
    var operation = document.querySelector('input[name="operation"]:checked').value;
    var result;

    switch(operation) {
        case 'square':
            result = num * num;
            break;
        case 'cube':
            result = num * num * num;
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').innerHTML = 'Result: ' + result;
}