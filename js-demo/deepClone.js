const obj = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'guangzhou'
    },
    arr: ['a', 'b', 'c']
}

const obj2 = deepClone(obj)
obj2.address.city = 'beijing'
console.log(obj.address.city)
console.log(obj2)

/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
*/

function deepClone(obj = {}) {
    if(typeof obj !== 'object' || obj == null) {
        return obj
    }

    // 初始化返回结果
    let result 
    if(obj instanceof Array) {
        result = []
    }else {
        result = {}
    }

    for (const key in obj) {
        // 保证 key 不是原型的属性
        if (Object.hasOwnProperty.call(obj, key)) {
            // 递归调用！！！
            result[key] = deepClone(obj[key])
        }
    }

    // 返回结果
    return result
}