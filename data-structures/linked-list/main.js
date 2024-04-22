class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SimpleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /* ### PUSH (add to the end) ###
    > this function shoud accep a value
    > create a new node using the value passed to the function
    > if there is no head property on the list, set the head and the tail to be newly created node
    > otherwise set the next property on the tail to be the new node and set the tail property to be the newly created node
    > increment the length by one
    > return the linked list
    */
    push(val) {
        const node = new Node(val)
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
        return this;
    }

    /* ### POP (remove at the end) ###
    > if there is no nodes in the list, return undefined 
    > loop through the list until you reach the tail
    > set the next property of the second to the last node to be null
    > set the tail to be the second to the last node
    > decrement the length by one
    > return the value of the node removed 
    */
    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = this.head;

        //loop though the end
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length --;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    /* ### TRAVERSE hint ###
    >
    */
    traverse() {
        let current = this.head;
        while(current.next) {
            console.log(current.val)
            current = current.next;
        }
    }

    /* ### SHIFT (remove at the beginning) ###
    > if there are no nodes, return undefined
    > store the current head property in a variable
    > set the head property to be the current head´s next
    > decrement length by one
    > return the value of the node removed 
    */
    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length --;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    /* ### UNSHIFT (insert at the beginning) ###
    > the function should accept a value
    > create a new node, using the value passed to the function
    > if there is no head, set the head and tail to be the newly created node
    > otherwise set the newly created node´s next property to be the current head
    > set the head property to be the newly created node
    > increment the length by one
    > retuen the list 
    */
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;            
        }
        this.length ++;
        return this;        
    }

    /* ### get (get a node front the list) ###
    > this function should accept an index
    > if the index is less than zero or greater than or equal to the length, return null
    > loop through the list until you reach the index and return the node at the especific index 
    */
    get(index) {
       if(index < 0 || index >= this.length) return null;
       let counter = 0;
       let current = this.head;
       while(counter !== index) {
           current = current.next;
           counter++;
       }
       return current;
    }
        
    /* ### set (set a value in a existing node) ###
    > this function should accept an index and a value
    > use you get function to find the specifict node
    > if the node is not found, return false
    > if the node is found, set with the new value and return true
    */
    set(index, newValue) {
        let foundNode = this.get(index);
        if(!foundNode) return false;
        foundNode.val = newValue;
        return true;
    }
    
    /* ### insert (insert a node in a specifict position) ###
    > if the index is less than zero or greater than the lenght, return false
    > if the index is the same as the lenght, push the new node
    > if the index is zero, unshift the new node
    > otherwise, using the get method, access the node at the index - 1 (node before)
    > set the next property to the node before, to be the new node
    > set the next property to the new node to be the previous next
    > increment the lenght by one
    > return true
    */
    insert(index, value) {
        const newNode = new Node(value)
        if(index < 0 || index > this.length) return false;

        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);        
        let prev = this.get(index - 1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return true;
    }

    /* ### remove (remove a node in a specifict position) ###
    > if the index is less than zero or greater than the lenght, return undefined
    > if the index is the same as the lenght - 1, pop
    > otherwise, using the get method, access the node at the index - 1 (node before)
    > set the next property to the node before, to be the next of the next node
    > decrement the lenght by one
    > return true
    */
    remove(index) {
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length - 1) this.pop();
        if(index === 0) this.shift(val);        
        let prev = this.get(index - 1);
        let removed = this.get(index);
        prev.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        let next;
        let prev = null;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        for (let i = 0; i < this.length; i++) {
            next = node.next; // 201 // 250
            node.next = prev; // null 
            prev = node; // 100
            node = next; // 201
        }
          
    }
}

//n1 --> n2 --> n3

// hi --> there --> 99
const list = new SimpleLinkedList();
list.push('hi')
list.push('there')
list.push('99')

// list.traverse()
// list.pop()
//console.log(list.shift())
// console.log(list.unshift('newValue'))
//console.log(list.get(2))
//console.log(list.set(1,'world'))
// list.insert(1, 'yamil')
// list.insert(2, 'josue')
// console.log(list.remove(2))
// console.log(list)





