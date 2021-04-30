//Function to determine how many pairs of socks with matching colors
function pairedSocks( n, arr ) {
    let sortedArr = arr.sort( (a,b) => a - b);
    let pairs = 0;

    for (let i = 0; i < n - 1; i++) {
        if ( sortedArr[i] === sortedArr[i + 1]) {
            pairs++;
            i += 1;
        }
    }

    return pairs;
}

// Test Input
let a = 9
let socks = [10, 20, 20, 10, 10, 30, 50, 10, 20]


console.log("Jawaban: ", pairedSocks(a,socks));
