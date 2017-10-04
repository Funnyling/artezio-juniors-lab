function buildName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
}

let result1 = buildName('Bob');                  // error, too few parameters
let result2 = buildName('Bob', 'Adams', 'Sr.');  // error, too many parameters
let result3 = buildName('Bob', 'Adams');         // ah, just right




function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}

let result1 = buildName('Bob');                  // works correctly now error, too few parameters
let result2 = buildName('Bob', 'Adams', 'Sr.');  // error, too many parameters
let result3 = buildName('Bob', 'Adams');         // ah, just right






function buildName(firstName: string, lastName = 'Smith'): string {
    return firstName + ' ' + lastName;
}

let result1 = buildName('Bob');                  // works correctly now, returns 'Bob Smith'
let result2 = buildName('Bob', undefined);       // still works, also returns 'Bob Smith'
let result3 = buildName('Bob', 'Adams', 'Sr.');  // error, too many parameters
let result4 = buildName('Bob', 'Adams');         // ah, just right

function buildName(firstName: string = 'Will', lastName = 'Smith'): string {
    return firstName + ' ' + lastName;
}

let result1 = buildName('Bob');  // works correctly now, returns 'Bob Smith'
let result2 = buildName('Bob', undefined); // okay and returns 'Bob Smith'
let result3 = buildName('Bob', 'Adams');  // okay and returns "Bob Adams"
let result4 = buildName(undefined, 'Adams'); // okay and returns "Will Adams"




function buildName(firstName: string, ...restOfName: string[]): string {
    return firstName + ' ' + restOfName.join(' ');
}

let benedict = buildName('Benedict', 'Timothy', 'Carlton', 'Cumberbatch');