export function setByPath(value,path,defaultValue) { 
    var obj = {...defaultValue};
    var schema = obj;  // a moving reference to internal objects within obj
    var pList = path.split('.');
    var len = pList.length;
    for(var i = 0; i < len-1; i++) {
        var elem = pList[i].trim();
        if (!schema[elem]) {
            var nextVal = {};
            if (i < len-2) {
                var nextElem = pList[i+1].trim();
                if (!isNaN(Number(nextElem)) && parseInt(nextElem).toString() === nextElem) nextVal = [];
            }
            if (!isNaN(Number(elem)) && parseInt(elem).toString() === elem) elem = parseInt(elem);
            schema[elem] = nextVal;
        }
        schema = schema[elem];
    }
    schema[pList[len-1]] = value;
    return obj;
}

export const onChangeNumber = (e) => {
    // 1st way
    // const re = /^[-+]?[0-9]+\.[0-9]+$/;
    // if (e.target.value === '' || re.test(e.target.value)) return e.target.value;
    // 2nd way
    if (e.target.value === '') return "0";
    if (!isNaN(e.target.value)) return e.target.value;
    return null;
    // 3rd way
    // return e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  };