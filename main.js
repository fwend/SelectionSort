const arr = [4,7,2,3,8,6,5,1,9];

const selectionSort = (a) => {
    for (let i = 0; i < a.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < a.length; j++) {
            if (a[j] < a[min]) {
                min = j;
            }
        }        
        swap(a, i, min);
    }
};

const swap = (a, i, j) => {
    const t = a[i];
    a[i] = a[j];
    a[j] = t;    
};

selectionSort(arr);
console.log(arr);