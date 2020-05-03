export function getredirectTo(type,header){
    let path;
    if(type==='Boss'){
        path='/boss'
    }else{
        path='/god'
    }
    if(!header){
        path+='info'
    }
    return path
}