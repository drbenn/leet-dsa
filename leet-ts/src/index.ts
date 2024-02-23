// npm run dev    

async function main() { 

    // NeetDSA Beginner course
    // 2. static arrays
    // removeDuplicates([0,0,1,1,1,2,2,3,3,4])
    // removeElement([3,2,2,3], 3)
    // 3. Dynamic Arrays
    // getConcatenation([1,3,2,1]);
    // 4. Stacks
    // calPoints(["5","2","C","D","+"])
    // isValidSolution("()[]{}")
    isValidSolution_drill1('(]')


    // array

    // 1. Two Sum
    // twoSumAttempt1([6,1,4,3,7], 9);
    // twoSumSolution([6,1,4,3,7], 9);
    // twoSumSolution_redo4([6,1,4,3,7], 9);

    // 2. Best Time to Buy and Sell Stock
    // maxProfitSolution([7,1,5,3,6,4]);

    // 3. Contains dulpicate
    // containsDuplicateSolution([1,2,3,4])
    // containsDuplicateSolution([1,1,1,3,3,4,3,2,4,2])

    // 4. Product of Array Except Self
    // productExceptSelf([1,2,3,4])
    // productExceptSelf_2([1,2,3,4])

    // 5. Max subarray
    // maxSubArray([-2,1,-3,4,-1,2,1,-5,4])


};


main();

class MinStack {
    private stack: number[];
    private min_stack: number[];

    constructor() {
        this.stack = [];
        this.min_stack = [];
    }

    push(val: number): void {
        this.stack.push(val);
        if (!this.min_stack.length || 
            ( this.min_stack.length && this.min_stack[this.min_stack.length - 1] >= val )) {
            
                this.min_stack.push(val)
        };
    }

    pop(): void {
        // this.stack.pop();
        let removedElement = this.stack.pop();
        if (this.min_stack[this.min_stack.length -1] === removedElement) {
            this.min_stack.pop();
        }

    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.min_stack[this.min_stack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// isValid("()[]{}")
function isValidSolution_drill1(s: string): boolean {
    const openParens: string[] = ['(', '[', '{'];
    let stack: string[] = [];
    const reciprocalClosedParen: any = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (let paren of s) {
        if (openParens.includes(paren)) {
            stack.push(paren);
        } else {
            const stackPeek = stack[stack.length - 1]
            if (stackPeek === reciprocalClosedParen[paren]) {
                stack.pop();
            } else {
                return false;
            }
        };
    };
    return stack.length === 0;
};




// isValid("()[]{}")
function isValidSolution(s: string): boolean {
    const openBrackets: string[] = ['(', '[', '{'];
    const bracketPairs: any = {
      ')': '(',
      ']': '[',
      '}': '{',
    };
    let stack: string[] = [];
    for (let bracket of s) {
        // as you loop through you add all opening brackets to the stack
        // the last added is the most "freshest" paren to close thus the stackpeek
        if (openBrackets.includes(bracket)) {
            stack.push(bracket);
        }
        // if you encounter a closing paren
        // does the closing paren match with the freshest open paren? at the stackpeek?
        // if so pop the opening paren
        // IT IS UNNECESSARY TO ADD THE CLOSING PAREN TO THE STACK
        else if (stack && stack.length) {
            const stackPeek = stack[stack.length - 1];
            if (bracketPairs[bracket] === stackPeek) {
                stack.pop();
            } 
            else {
                // if closing paren is out of order and breaks the code, fail the test
                return false;
            }
        }
    }
    return stack.length === 0;
};


function calPoints(operations: string[]): number {
    let points: number[] = [];
    let score: number = 0;
    
    for (let i = 0; i < operations.length; i++ ) {
        if (operations[i] === 'D' && points.length) {
            points.push(points[points.length - 1] * 2);
        } else if (operations[i] === 'C' && points.length) {
            points.pop();
        } else if (operations[i] === '+' && points.length >= 2) {
            points.push(points[points.length - 1] + points[points.length - 2]);
        }
        else if (parseInt(operations[i])) {
            points.push(parseInt(operations[i]));  
        };
    };

    for (let i = 0; i < points.length; i++ ) {
        score += points[i];
    }
    return score;
};

function getConcatenation(nums: number[]): number[] {
    let left: number = 0;
    let numsLength: number = nums.length;
    let ans: number[] = new Array(numsLength * 2);

    for (let i = 0; i < numsLength; i++) {
        ans[left] = nums[i];
        ans[left + numsLength] = nums[i];
        left += 1;
    }
    return ans;    
};


function removeElement(nums: number[], val: number): number {
    let left: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[left] = nums[i];
            left += 1;
        };
    };
    return left;
};

function removeDuplicates(nums: number[]): number {
    let left: number = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[left] = nums[i];
            left += 1;
        }
    }
    console.log(left);   
    return left;
};

function maxSubArray(nums: number[]): number {
    // sliding window with left pointer and right pointer

    let maxSubSum: number = nums[0];
    let currentSum: number = 0;

    for ( let i = 0; i < nums.length; i++) {
        if (currentSum < 0 ) {
            currentSum = 0;
        }
        currentSum += nums[i];
        maxSubSum = Math.max(currentSum, maxSubSum);
    };
    console.log(maxSubSum);
    return maxSubSum;
};

function productExceptSelf(nums: number[]): number[] {
    const left = new Array(nums.length).fill(1);
    const right = new Array(nums.length).fill(1);
    const result = new Array(nums.length).fill(1);

    // prefix iteration
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    };

    // postfix iteration
    for (let i = nums.length - 2; i > -1; i--) {
        right[i] = right[i + 1] * nums[i + 1]; 
    };

    // pre & post join multiplication for result
    for (let i = 0; i < nums.length; i++ ) {
        result[i] = left[i] * right[i];
    };
        
    return result;
};

function productExceptSelf_2(nums: number[]): number[] {
    let left: number[] = new Array(nums.length).fill(1);
    let right: number[] = new Array(nums.length).fill(1);
    let result: number[] = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++ ) {
        left[i] = nums[i - 1] * left[i - 1];
    };

    for (let i = nums.length - 2; i > -1; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    };

    for (let i  = 0; i < nums.length; i++) {
        result[i] = left[i] * right[i];
    };
    return result;
};

function twoSumAttempt1(nums: number[], target: number): number[] | [null, null] {
    console.log('YOLO');
    const obj: any = {};

    nums.forEach((num: number, idx: number) => {
        // if number minus existing value equals target, return indexes of each
        const winningDif: number = target - num;
       
        // does winning dif exist as key in the object?
        if (winningDif in obj) {
            console.log("OHHH YEAH");
            console.log([obj[winningDif], idx]);
            return [idx, obj[winningDif]]
        } else {
            //else add number with index as value for future calc checks
            obj[num] = idx
        }; 
    });
    return [null, null];
};

function twoSumSolution(nums: number[], target: number): number[] {
    // create hashMap to test if other item to sum exists
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if(map.has(diff)) {
            console.log('solution found: ', [map.get(diff), i]);
            return [map.get(diff), i]
        } else {
            map.set(nums[i], i);
        };
    }
    return [0, 0];
};


function twoSumSolution_redo4(nums: number[], target: number): number[] {
    // create map to hold available sum values
    const selections = new Map();

    for (let i = 0; i < nums.length; i++ ) {
        const difference: number = target - nums[i];
        // if selections map has the key which contains the difference value return the winning set
        if (selections.has(difference)) {
            console.log('solution: ', [ selections.get(difference), i]);
            return [ selections.get(difference), i]
        } else {
            // else add value to selections for potential future solution use
            selections.set(nums[i], i);
        };
    };
    return [0,0];
};

function maxProfitSolution(prices: number[]): number {
    // my major mental roadblock is understanding that maxProfit is the only returned value,
    // no dates or indexes, so if the left pointer is moved past the maxProfit trade points for a
    // lower value and no higher maxProfit is found, it doesnt matter, because we are not
    // returning dates/indexes

    // use two pointers, time goes in one direction and buy must always be before sell
    let left = 0; // buy as index in time
    let right = 1; // sell as index in time
    let maxProfit = 0;

    while (right < prices.length) {
        const potentialProfit = prices[right] - prices[left];
        console.log(prices);
        
        if (potentialProfit > maxProfit) {
            maxProfit = potentialProfit;
        };
        if (prices[left] > prices[right]) {
            left = right;
        };
        // console.log('maxprofit: ', maxProfit, ' left: ', left, ' right: ', right);
        right++
    };
    
    return maxProfit
};


function containsDuplicateSolution(nums: number[]): boolean {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++ ) {
        if (map.has(nums[i])) {
            console.log('has duplicate of: ', nums[i]);
            
            return true;
        } else {
            map.set(nums[i], i);
        };
    }
    return false;
    
};

