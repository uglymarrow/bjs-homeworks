function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {};
}

function sum(...args) {
    //sleep(10); 
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return (arr1.every((currentValue,index) => currentValue === arr2[index]) &&
    arr2.every((currentValue,index) => currentValue === arr1[index]));
}


function memorize(fn, limit) {
    let memory = [];

    if (arguments.length > 2) 
        throw Error("Передано больше двух аргументов! Будут использованы только первые два!");

    return (...innerArguments) => {
        if (memory.length > arguments[1])
            memory.shift();

        let itemInMemory = memory.find(currentValue => compareArrays(currentValue.args, innerArguments));

        if (itemInMemory) {
            return itemInMemory.result;
        } else {
            let newItemResult = arguments[0](...innerArguments);
            memory.push({args: innerArguments,
                         result: newItemResult
                        });
            return newItemResult;
        }
    };
}

function testCase(testFunction, timer) {
    const argMass = [[1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4]];
    console.time(timer);
    for (let i = 0; i < 100; i++) {
        argMass.forEach(element => testFunction(...element));
    }
    console.timeEnd(timer);
}

const mSum = memorize(sum, 5);


console.log(testCase(sum,'sumTimer'));  
//Результат с искусственной задержкой в 10 ms ---- 5051.226 ms
//Результат без искусственной задержки ---- 0.486 ms

console.log(testCase(mSum,'mSumTimer'));  
//Результат с искусственной задержкой в 10 ms ---- 33.356 ms
//Результат без искусственной задержки ---- 1.697 ms