function binarySearch(list, element) {
    return binarySearchRecursion( list, element, 0, list.length -1)
}

function binarySearchRecursion(list, element, left, right){
    if (left > right){ //not >= because then odd lengthed lists don't work
        return -1;
    }
    const mid = Math.floor((left + right) / 2); //Used ChatGPT here to understand to use Math.floor to ensure it's an int and not a float
    if (list[mid] === element){
        return mid;
    }
    else if (list[mid] < element){
        return binarySearchRecursion( list, element, mid + 1, right); //ChatGPT used to remind that return needs to be used here smh
    }
    else{
        return binarySearchRecursion( list, element, left, mid - 1); //Also used ChatGPT here for the same airhead mistake
    }
}
/*
//Example lists to test
const list1 = [1, 2, 3, 4, 5];
const list2 = [-1, 7, 72, 43, 58, 72, 0, 72, 9];
//Quirk: In a list with multiple desired targets, the length of the list will change which index is returned
const list3 = [-10, -5, 0, 5, 10, 15];

//Testing output for given lists and target element
console.log(binarySearch(list1, 4));
console.log(binarySearch(list2, 72));
console.log(binarySearch(list3, -10));
console.log(binarySearch(list3, 123));
*/
