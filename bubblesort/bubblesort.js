/**
* Simple bubble sort algorithm in JavaScript
*
* 
* 
* 
*/


function bubbleSort(a) {
  var swapped = false,
    i = 1,
    j = a.length,
    tmp;
 
  for (; i < j; i += 1) {
    if (a[i - 1] > a[i]) {
      tmp = a[i];
      a[i] = a[i - 1];
      a[i - 1] = tmp;
      swapped = true;
    }
  }
 
  if (swapped) {
    bubbleSort(a);
  }
}
