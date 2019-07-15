function find(elem){
    if(elem.nodeType == 1){
        console.log(elem);
        var a = elem.childNodes;
        for(var i = 0 ; i<a.length ; i++){
            find(a[i]);
        }
    }
    
}