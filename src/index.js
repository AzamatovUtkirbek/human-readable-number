module.exports = function toReadable(number) {
    var th = ['', 'thousand', 'million', 'billion', 'trillion'];
    var dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tw = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var ndg=[];
    var tthousand=[];
    var reading='';
    for(let i=0;i<100;i++){
        if(i<20){
            ndg.push(dg[i]);
        }else{
            if(i%10==0){
                ndg.push(tw[Math.floor(i/10)]);
            }else{
                ndg.push(tw[Math.floor(i/10)]+' '+dg[Math.floor(i%10)]);
            }
        }
    }
    for(let i=0;i<1000;i++){
        if(i<100){
            tthousand.push(ndg[i]);
        }else{
            if(i%100==0){
                tthousand.push(ndg[Math.floor(i/100)]+' hundred');
            }else{
                tthousand.push(ndg[Math.floor(i/100)]+' hundred '+ndg[i%100]);
            }
        }
    }
    var numstr=number+'';
    while(numstr.length%3!=0){
        numstr='0'+numstr;
    }
    for(i=0;i<Math.floor(numstr.length/3);i++){
        let tekst=numstr.substring(i*3,(i+1)*3);
        let degree=numstr.length/3-i-1;
        if(degree==0){
            if(reading.length==0){
                reading=tthousand[tekst*1];
            }else{
                if(tekst*1!=0){
                    reading=reading+(reading.length==0?'':' ')+tthousand[tekst*1];
                }
            }
        }else{
            if(tekst*1!=0){
                reading=reading+(reading.length==0?'':' ')+tthousand[tekst*1]+' '+th[degree];
            }
        }
    }
    return reading;
}
