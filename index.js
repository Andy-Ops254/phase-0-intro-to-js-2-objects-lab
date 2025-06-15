// Write your solution in this file!
const employee={
    name: "Andrew Rimongi",
    streetAddress: "4th south avenue,Kahawa sukari",
}

function updateEmployeeWithKeyAndValue(obj,key,value){
    const newObj={...obj};
    newObj[key]=value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]=value;
    return obj
}

function deleteFromEmployeeByKey (employee,key) {
    const deleteKey={...employee};
    delete deleteKey[key]
    return deleteKey
}

function destructivelyDeleteFromEmployeeByKey (employee,key) {
    delete employee[key];
    return employee;
}