class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Черга порожня";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "Черга порожня";
        }
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.isEmpty());








class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Стек порожній";
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "Стек порожній";
        }
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }

    // Очищення стека
    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());