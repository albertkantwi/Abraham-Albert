function minimumDistances(a) {
    // Write your code here
    
    let min = a.length;
    for(let i = 0; i < a.length; i++) {
        for(let j = i+1; j <a.length; j++) {
            if(a[i] == a[j]) {
                if(j - i < min) {
                    min = j -i;
                }
            }
        }
    }
if (min == a.length) {
    return -1;
}
return min;
}