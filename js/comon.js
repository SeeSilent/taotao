function lunbozuo(){
    let count = 0;
    let width = 220;
    let zuo = document.getElementsByClassName('lunbozuo')[0].getElementsByTagName('li').length-1;
    
    function change_auto(){
        if(count < zuo){
            count ++;
            getNext();
        }else{
            count = 0;
            getReset();
        }
    }
    
    function getNext(){
        let tu1 = document.getElementsByClassName('lunbozuo')[0];
        tu1.style.marginLeft = '-' + width*count + 'px';
        tu1.style.transition = 0.3 + 's';
    }
    
    function getReset(){
        let tu1 = document.getElementsByClassName('lunbozuo')[0];
        tu1.style.marginLeft = '0px';
        tu1.style.transition = '0s';
    }
    
    setInterval(change_auto,1000);
}
lunbozuo();

function lunboyou(){
    let count = 0;
    let width = 750;
    let zuo = document.getElementsByClassName('zhonglun')[0].getElementsByTagName('li').length-1;
    
    function change_auto(){
        if(count < zuo){
            count ++;
            getNext();
        }else{
            count = 0;
            getReset();
        }
    }
    
    function getNext(){
        let tu1 = document.getElementsByClassName('zhonglun')[0];
        tu1.style.marginLeft = '-' + width*count + 'px';
        tu1.style.transition = 0.3 + 's';
    }
    
    function getReset(){
        let tu1 = document.getElementsByClassName('zhonglun')[0];
        tu1.style.marginLeft = '0px';
        tu1.style.transition = '0s';
    }
    
    setInterval(change_auto,3000);
}
lunboyou();