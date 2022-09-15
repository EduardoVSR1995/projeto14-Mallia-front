function err(value){
    return alert(value)
}

function sucess({...props}){    
    const todos = props;
    return  props.data;
}

export {err, sucess};