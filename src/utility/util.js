export function arrayObjectToString(arrayObject) {
    if (typeof arrayObject === 'object') {
        const _array = arrayObject.map(function (item) {
            return item['name'];
        });
        return _array;
    }
}

export function arrayString(_array) {
    if (Array.isArray(_array)) {
        return _array.toString();
    }
}
export function toTitleCase(_text) {
    const result = _text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
}


