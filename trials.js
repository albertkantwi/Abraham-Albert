// For Albert

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


// For Abraham

function designerPdfViewer(h, word) {
    // Write your code here
    
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let alphabetsHeight = [];
    
    for(let i =0; i < word.length; i++){
        alphabetsHeight.push(h[alphabets.indexOf(word[i])]);
    }
    let tallest = alphabetsHeight.sort()[alphabetsHeight.length-1];
    return tallest * word.length;
}