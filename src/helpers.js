export const isValidArray = array => array && array.length > 0;

export const uniqueid = () => '_' + Math.random().toString(36).substring(2, 9) + Date.now();