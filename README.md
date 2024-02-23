DSA


### Arrays

- Arrays are of fixed length(js and python use dynamic arrays by default)

- O(1) = reading, writing or removing/replacing/overwriting instantly - like getting data from index of array - myArray[3]

- Inserting/removing to end of array is alway efficientO(1), bc inserting to empty spot, BUT inserting at beginning or middle is not efficient bc you first need to shift data to different indexes to place the inserted data where it is trying to go. This less efficient operation is O(n).	
	- Shifting is O(n) operation because must iterate over each item to change index
	- Big O represents the worst case, so if you had an array of 15 potential items/elements, but only 10 elements have been assigned, if you inserted at the beginning, you would need to reassign indexes of 10 elements, thus 0(10), if you inserted in the middle, you would only need to shift and reassigned indexes of 5 elements, thus O(5), BUT since big O refers to the worst case it would refer to O(10), but generally to keep simple we just say O(n) complexity.

### Stacks

stacks are like array and LIFO. Think of stack like vertical array, were you are always pushing to the top of the array/stack.

 - Push O(1)
 - Pop O(1)
 - Peak/Top O(1) - Reads last element without removing like would with Pop