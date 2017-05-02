function buildName(firstName: string, ...restOfName: string[]): string {
    return firstName + ' ' + restOfName.join(' ');
}

let result1 = buildName('Bob');                 // works correctly now, returns 'Bob Smith'
let result2 = buildName('Bob', undefined);      // okay and returns 'Bob Smith'
let result3 = buildName('Bob', 'Adams');        // okay and returns "Bob Adams"
let result4 = buildName(undefined, 'Adams');    // okay and returns "Will Adams"

let benedict = buildName('Benedict', 'Timothy', 'Carlton', 'Cumberbatch');