function bubbleSort(arr) {
    let result = [...arr];
    let len = result.length;

    for (let i = 0; i < len - 1; i++) {
        let swapped = false;

        for (let j = 0; j < len - 1 - i; j++) {
            if (result[j] > result[j + 1]) {
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return result;
}


function selectionSort(arr) {
    let result = [...arr];
    let len = result.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < len; j++) {
            if (result[j] < result[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [result[i], result[minIndex]] = [result[minIndex], result[i]];
        }
    }

    return result;
}


function insertionSort(arr) {
    let result = [...arr];
    let len = result.length;

    for (let i = 1; i < len; i++) {
        let current = result[i];
        let j = i - 1;

        while (j >= 0 && result[j] > current) {
            result[j + 1] = result[j];
            j--;
        }

        result[j + 1] = current;
    }

    return result;
}


let numbers = [7, 3, 9, 2, 5, 1];

console.log("Original:", numbers);
console.log("Bubble Sort:", bubbleSort(numbers));
console.log("Selection Sort:", selectionSort(numbers));
console.log("Insertion Sort:", insertionSort(numbers));