let Arr = new Array()

class CustomArr {
    constructor() {
        this.length = 0
        this.data = {}
    }

    myPush(element){
        this.data[this.length] = element
        this.length++
        return this.data
    }
    myFind(index){
        if (this.data[index] === undefined) {
            console.log("not found");
            
        }
        return this.data[index]
    }
    myPop() {
        delete this.data[this.length - 1]
        this.length--
        return
    }
    myUnshift(item) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1]
        }
        this.data[0] = item
        this.length++
        return this.data
    }
    myShift() {
        const firstitem = this.data[0]
        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
        return firstitem
    }
    myForEach(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this.data[i], i, this.data)
        }
    }
    myIncludes(item) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) {
                return true
            }
        }
        return false
    }
    mySlice(start, end) {
        let newArray = new CustomArr()
        if (end === undefined || end > this.length) {
            end = this.length
        }
        for (let i = start; i < end; i++) {
            newArray.myPush(this.data[i])
        }
        return newArray
    }
    myFilter() {
        let newArray = new CustomArr()
        for (let i = 0; i < this.length; i++) {
            let item = this.data[i]
            if (newArray[item]) {
                newArray[item]++
            } else {
                newArray[item] = 1
            }
        }
        return newArray
    }
}

let arr1 = new CustomArr()
arr1.myPush("daniel")
arr1.myPush("samual")
arr1.myPush("bolu")
arr1.myPush("kalu")
arr1.myPush("samual")
arr1.myUnshift("opemipo")
arr1.myShift()
arr1.myForEach((value, index) => {
    console.log(index, value);
  });

  
console.log(arr1.myFind(1));

console.log(arr1.length);
console.log(arr1);
console.log(arr1.myIncludes("daniel"));
console.log(arr1.mySlice(1, 4));
console.log(arr1.myFilter());


// shift unshift foreach includes slice filter

