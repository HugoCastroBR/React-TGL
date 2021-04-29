

// [1,2,3,4,5] => numbersFormatter =>  "1,2,3,4,5"
const NumbersFormatter = (len:number,element:number,index:number) => {

        if(index + 1 === len){
            return `${element}`
        }else{
            return `${element}, `
        }
}

export default NumbersFormatter;