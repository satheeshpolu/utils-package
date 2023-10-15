# Reusable Code Package

This Package contains a collection of reusable core functions designed to simplify common programming tasks.

# Installalation

- Go to the root directory of your project in the terminal or command-prompt and run `npm i @satheeshpolu/utils-package`

- It will download and install the latest version of `@satheeshpolu/utils-package` package in your project.

- Reference link https://www.npmjs.com/package/@satheeshpolu/utils-package

## Reusable core functions

The following functins are included in this package:

<br>

| S.No | Functions                                         |                                      Paramerter(s)                                      |                    Default Values                     |       Possible Values       |
| ---- | ------------------------------------------------- | :-------------------------------------------------------------------------------------: | :---------------------------------------------------: | :-------------------------: |
| 1    | formatNumber(number)                              |                             **_number_**: Number`required`                              |                          NA                           | Number: `+ve or -ve number` |
| 2    | formatDate(date, delimiter)                       |         **_date_**: Date`required`<br> **\*delimiter\*\*\*\*** string`optional`         |         date= `new Date()` <br>delimiter= `.`         |  delimiter: `/ or : or - `  |
| 3    | sortData(data, orderType)                         |          **_data_**: Array[] `required`<br> **_orderType_**: string`optional`           |            data = `[]` <br>orderType=`asc`            |      orderType: `des`       |
| 4    | sortArrayOfObjectsByField(data, field, orderType) | **_data_**: Array[]`required`<br> **_field_**:object key`optional`<br> **_orderType_**: | data = `[]` <br>field=`object key`<br>orderType=`asc` |      orderType: `des`       |

## Core Functions

These core functions are provided for your convenience:

**_1. formatNumber()_**: It is designed to help you format `number` in a specific way. You can use it to ensure that numbers are displayed consistently according to your application's requirements.

**_2. formatDate()_**: It is designed to help you format `date` in a specific way. You can use it to ensure that numbers are displayed consistently according to your application's requirements.

**_3. sortArrayOfObjects()_**: Description of what Package 1 does.

**_4. sortArrayOfObjectsByField()_**: Description of what Package 2 does.

### **_1. formatNumber()_**:

It is designed to help us format `number` in a specific way. You can use it to ensure that numbers are displayed consistently according to your application's requirements.

> > #### Usage
> >
> > This function enables us to add a leading `0` to numbers when they are less than `10`.
> >
> > ```
> > const formattedNumber = formatNumber(number);
> > ```
> >
> > ```
> > Note: It doesn't show any affect if the number is `-ve` or above `10`.<br>
> > Example(s):
> >    1.const formattedNumber = utilsPackage.formatNumber(9);   //Output: 09
> >    2.const formattedNumber = utilsPackage.formatNumber(-9);  //Output: -9
> >    3.const formattedNumber = utilsPackage.formatNumber(99);  //Output: 99
> > ```

### **_2. formatDate()_**:

It is designed to help us format `date` in a specific way. You can use it to ensure that dates are displayed consistently according to your application's requirements.

> > #### Usage
> >
> > Import the this package at the top of the file as shown below.<br>
> > `const utilsPackage = require('@satheeshpolu/utils-package');`
> >
> > const formattedNumber = utilsPackage.formatDate(); // `output: 01.10.2023 16:39`
> >
> > ```
> > Example(s):
> >    const formattedNumber = utilsPackage.formatDate(new Date(), '/');  // Output: 01/10/2023 16:39
> >    const formattedNumber = utilsPackage.formatDate(new Date(), ':');  // Output: 01:10:2023 16:39
> >    const formattedNumber = utilsPackage.formatDate(new Date(), '-');  // Output: 01-10-2023 16:39
> > ```

### **_3. sortArray()_**:

It is designed to help us sort data of array.

> > #### Usage
> >
> > Import the this package at the top of the file as shown below.<br>
> > `const utilsPackage = require('@satheeshpolu/utils-package');`
> >
> > const formattedNumber = utilsPackage.sortArray([-1, -4, -6, 3]); // Output: [-6, -4, -1, 3]
> >
> > ```
> > Example(s):
> >    const formattedNumber = utilsPackage..sortArray([-1, -4, -6, 3], 'des); // Output: [3, -1, -4, -6]
> > ```

### **_4. sortArrayOfObjectsByKey()_**:

It is designed to help us sort data of array which has an object list.

> > #### Usage
> >
> > Import the this package at the top of the file as shown below.<br>
> > `const utilsPackage = require('@satheeshpolu/utils-package');`
> >
> > ```
> > Example(s):
> >  const formattedNumber = utilsPackage.sortArrayOfObjectsByKey([{x: 1, y: 1}, {x: 4, y: 6}], 'x')); // Output: [ { x: 1, y: 1 }, { x: 4, y: 6 } ]
> >  const formattedNumber = utilsPackage.sortArrayOfObjectsByKey([{x: 1, y: 1}, {x: 4, y: 6}], 'x', 'des')); // Output: [ { x: 4, y: 6 }, { x: 1, y: 1 } ]
> >  const formattedNumber = utilsPackage.sortArrayOfObjectsByKey([{x: 'sam', y: 'aa'}, {x: 'ram', y: 'cc'}], 'x')); // Output: [ { x: 'ram', y: 'cc' }, { x: 'sam', y: 'aa' } ]
> >  const formattedNumber = utilsPackage.sortArrayOfObjectsByKey([{x: 'sam', y: 'aa'}, {x: 'ram', y: 'cc'}], 'x', 'des')); // Output: [ { x: 'sam', y: 'aa' }, { x: 'ram', y: 'cc' } ]
> > ```
### Note: This document is current, including the existing features, and is set to incorporate additional reusable functions in the future.