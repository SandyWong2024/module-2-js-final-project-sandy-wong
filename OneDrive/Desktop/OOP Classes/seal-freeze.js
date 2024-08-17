const rectObj = {
    name: 'Rectangle1',
    width: 10,
    height: 10
};

Object.seal(rectObj);

let descriptors = Object.getOwnPropertyDescriptors(rectObj);
//console.log(descriptors);

rectObj.color = 'red';
delete rectObj.name;

rectObj.width = 20;

//console.log(rectObj);

const circleObj = {
    name: 'Circle1',
    radius: 30
};

Object.freeze(circleObj);

descriptors = Object.getOwnPropertyDescriptors(circleObj);

circleObj.color = 'blue';
delete circleObj.name;
circleObj.name = 'New Name';

console.log(descriptors);

console.log('rectObj is sealed?', Object.isSealed(rectObj));
console.log('rectObj is frozen?', Object.isFrozen(rectObj));
console.log('circleObj is sealed?', Object.isSealed(circleObj));
console.log('circleObj is frozen?', Object.isFrozen(circleObj));