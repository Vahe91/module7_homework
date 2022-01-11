function hasProp(str, obj) {
    for (key in obj) {
        return obj.hasOwnProperty(str);
    }
}

const str = 'key';

const obj = {
    a: 1,
    b: 2,
    key: 3,
    c: 4
}

console.log(hasProp(str, obj));