# Reusable Code Package

This Package contains a collection of reusable core functions designed to simplify common programming tasks.

# Installalation

- Navigate to the root directory of your project using the terminal or command prompt.<br> Then run ```npm i @satheeshpolu/utils-package```

- This process will download and install the most recent version of the `@satheeshpolu/utils-package` package into your project.

- Reference link https://www.npmjs.com/package/@satheeshpolu/utils-package

## Reusable core functions

The package includes the following functions:

<br>

| S.No | Functions                                         |                                      Paramerter(s)                                      |                    Default Values                     |       Possible Values       |
| ---- | ------------------------------------------------- | :-------------------------------------------------------------------------------------: | :---------------------------------------------------: | :-------------------------: |
| 1    | formatNumber(number)                              |                             **_number_**: Number`required`                              |                          NA                           | Number: `+ve or -ve number` |
| 2    | formatDate(date, delimiter)                       |         **_date_**: Date`required`<br> ***delimiter*** string`optional`         |         date= `new Date()` <br>delimiter= `.`         |  delimiter: `/ or : or - `  |
| 3    | sortData(data, orderType)                         |          **_data_**: Array[] `required`<br> **_orderType_**: string`optional`           |            data = `[]` <br>orderType=`asc`            |      orderType: `des`       |
| 4    | sortArrayOfObjectsByField(data, field, orderType) | **_data_**: Array[]`required`<br> **_field_**:object key`optional`<br> **_orderType_**: | data = `[]` <br>field=`object key`<br>orderType=`asc` |      orderType: `des`       |
| 5    | calculateTimeDifference(diffMs)                         |          **_diffMs_**: number `required`<br>            |            NA            |      number: `>= 0`       |

## Fundamental Functions

You can make use of these fundamental functions for your convenience:

### **_1. formatNumber()_**:
Its purpose is to assist you in formatting a `number` in a specific manner. It allows you to maintain consistent and application-specific formatting for numbers.

> #### Usage
>
> This function allows us to prepend a leading `0` to numbers when they are less than `10`.
>
> ```
> const formattedNumber = formatNumber(number);
> ```
>
> ```
> Note: It doesn't show any affect if the number is `-ve` or above `10`.<br>
> Example(s):
>    1.const formattedNumber = utilsPackage.formatNumber(9);   //Output: 09
>    2.const formattedNumber = utilsPackage.formatNumber(-9);  //Output: -9
>    3.const formattedNumber = utilsPackage.formatNumber(99);  //Output: 99
> ```

### **_2. formatDate()_**:

Its purpose is to assist in formatting `date` in a specific manner. This function ensures that dates are consistently displayed according to your application's requirements.

> #### Usage
>
> Import the this package at the top of the file as shown below.<br>
> `const utilsPackage = require('@satheeshpolu/utils-package');`

> const formattedNumber = utilsPackage.formatDate(); // output: 01.10.2023 16:39`
>
> ```
> Example(s):
>    const formattedNumber = utilsPackage.formatDate(new Date(), '/');  // Output: 01/10/2023 16:39
>    const formattedNumber = utilsPackage.formatDate(new Date(), ':');  // Output: 01:10:2023 16:39
>    const formattedNumber = utilsPackage.formatDate(new Date(), '-');  // Output: 01-10-2023 16:39
> ```

### **_3. sortArray()_**:

Its purpose is to aid in sorting data within an array.

> #### Usage
>
> Import the this package at the top of the file as shown below.<br>
> `const utilsPackage = require('@satheeshpolu/utils-package');`
>
> const formattedNumber = utilsPackage.sortArray([-1, -4, -6, 3]); // Output: [-6, -4, -1, 3]
>
> ```
> Example(s):
>    const formattedNumber = utilsPackage..sortArray([-1, -4, -6, 3], 'des); // Output: [3, -1, -4, -6]
> ```

### **_4. sortArrayOfObjectsByKey()_**:

Its purpose is to assist in sorting data within an array that contains a list of objects.

> #### Usage
>
> Import the this package at the top of the file as shown below.<br>
> `const utilsPackage = require('@satheeshpolu/utils-package');`
>
> ```
> Example(s):
>  const formattedNumber = utilsPackage.sortArrayOfObjectsByKey([{x: 1, y: 1}, {x: 4, y: 6}], 'x')); // Output: [ { x: 1, y: 1 }, { x: 4, y: 6 } ]
>  const formattedNumber = utilsPackage.sortArrayOfObjectsByKey([{x: 1, y: 1}, {x: 4, y: 6}], 'x', 'des')); // Output: [ { x: 4, y: 6 }, { x: 1, y: 1 } ]
>  const formattedNumber = utilsPackage.sortArrayOfObjectsByKey([{x: 'sam', y: 'aa'}, {x: 'ram', y: 'cc'}], 'x')); // Output: [ { x: 'ram', y: 'cc' }, { x: 'sam', y: 'aa' } ]
>  const formattedNumber = utilsPackage.sortArrayOfObjectsByKey([{x: 'sam', y: 'aa'}, {x: 'ram', y: 'cc'}], 'x', 'des')); // Output: [ { x: 'sam', y: 'aa' }, { x: 'ram', y: 'cc' } ]
> ```

### **_5. calculateTimeDifference()_**:
Converts a time difference in milliseconds to a human-readable object.
> #### Usage
>
> Import the this package at the top of the file as shown below.<br>
> `const utilsPackage = require('@satheeshpolu/utils-package');`
>
> ```
> Example(s):
>console.log(calculateTimeDifference(4500));     // Output: { duration: '0h 0m 4s', hours: 0, minutes: 0, seconds: 4 }
>console.log(calculateTimeDifference(125000));   // Output: { duration: '0h 2m 5s', hours: 0, minutes: 2, seconds: 5 }
>console.log(calculateTimeDifference(11742000)); // Output: { duration: '3h 15m 42s', hours: 3, minutes: 15, seconds: 42 }
> ```

### Note: This document is up-to-date, encompassing the current features, and is prepared to introduce further reusable functions in the future.