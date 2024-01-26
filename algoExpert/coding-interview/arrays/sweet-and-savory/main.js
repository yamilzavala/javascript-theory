/*
    You're hosting an event at a food festival and want to showcase the best
    possible pairing of two dishes from the festival that complement each
    other's flavor profile.
    
    Each dish has a flavor profile represented by an integer. A negative integer
    means a dish is sweet, while a positive integer means a dish is savory. The
    absolute value of that integer represents the intensity of that flavor. For
    example, a flavor profile of -3 is slightly sweet, one of -10 is extremely
    sweet, one of 2 is mildly savory, and one of 8 is significantly savory.
  
    You're given an array of these dishes and a target combined flavor profile.
    Write a function that returns the best possible pairing of two dishes (the
    pairing with a total flavor profile that's closest to the target one). Note
    that this pairing must include one sweet and one savory dish. You're also
    concerned about the dish being too savory, so your pairing should never be
    more savory than the target flavor profile.
      
    All dishes will have a positive or negative flavor profile; there are no
    dishes with a 0 value. For simplicity, you can assume that there will be at
    most one best solution. If there isn't a valid solution, your function
    should return [0,0].

    . The returned array should be sorted,
    meaning the sweet dish should always come first.   
*/

/*
Explanation
The main idea is first sort the number list in ascending order.
Then there will be two kinds of operation leave in the list: make a bigger sum and make a smaller sum.
In order to make the sum bigger, all we need to do is to move the left pointer to make the left value not so negative.
In order to make the sum smaller, we just need to move the right pointer to make the positive value not so positive.
So the question just end up become finding the best combination that closest to target in the sorted list, and update the result each time when we find a better result!
The edge case is that the left value most be negative and right value must be positive.
And we don't update the result when the dishSum is greater than targer( because it is too savory~)
*/

export function sweetAndSavory(dishes, target) {
    // Write your code here.
    let result = [0,0]
    dishes.sort((a,b) => a-b);
    let left = 0;
    let right = dishes.length - 1;
    let bestDiff = Infinity;  
    console.log('dishes: ', dishes)
    
    while(dishes[left] < 0 && dishes[right] > 0){
        const dishSum = dishes[left] + dishes[right]
      console.log('dishSum: ', dishSum)
      
      if(dishSum > target){
          right--;
      } else {
          const currDiff = target - dishSum;
        if(currDiff < bestDiff){
            bestDiff = currDiff;
          result = [dishes[left], dishes[right]]
        }
          left++;
      }
    }	
    console.log('result:', result)
    return result;
  }
  
  sweetAndSavory([-3,-5,1,7], 8)