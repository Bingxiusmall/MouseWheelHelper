window.onload = function(){
var removed = new Array();
var help = false;
function INDEXOF(arr, item){
    if(Array.prototype.indexOf){
        return arr.indexOf(item);
    }
    else{
        l = arr.length;
        for(var i=0;i<l;i++){
            if(arr[i] == item){
                return i;
            }
        }
        return -1;
    }
}
onmousewheel = function(e){
    if(help){
        try{
            if(e.deltaY<0){
                if(INDEXOF(['HTML', 'BODY', 'HEAD'], e.path[0].tagName) != -1)
                    alert('You can\'t remove ' + e.path[0].tagName + '!');
                else if(e.path[0].id == '__RUNHELP__'){
                    alert('You can\'t remove RunHelp Btn!!!');
                }
                else{
                    removed.push([e.path[0], e.path[1], e.path[0].nextElementSibling]);
                    e.path[0].remove();
                }
            }
            else{
                last_removed = removed.pop();
                if(last_removed[2] == null)
                    last_removed[1].appendChild(last_removed[0]);
                else
                    last_removed[1].insertBefore(last_removed[0], last_removed[2]);
            }
        }catch(m){
            if(removed.length == 0)
                alert('Nothing to add!');
        }finally{
            return false;
        }
    }else{
        return true;
    }
}
function addbtn(){
    var element = document.createElement('button');
    element.innerText = 'click to run help';
    element.id = '__RUNHELP__';
    if(document.body.children[0] == null){
        document.body.appendChild(element);
    }
    else{
        document.body.insertBefore(element, document.body.children[0]);
    }
    element.onclick = function(){help = !help;};
}
addbtn();
}
