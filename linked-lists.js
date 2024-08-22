class LinkedList {
    constructor(headNode = null) {
        this.headNode = headNode;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.headNode === null) {
            this.headNode = newNode;
            return;
        }

        let currentNode = this.headNode;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value, this.headNode);
        this.headNode = newNode;
    }

    size() {
        if (this.headNode === null) {
            return "List is empty";
        }

        let numOfNodes = 1;
        let currentNode = this.headNode;
        while (currentNode.nextNode !== null) {
            numOfNodes++;
            currentNode = currentNode.nextNode;
        }
        return numOfNodes;
    }

    head() {
        if (this.headNode === null) {
            return "List is empty";
        }

        return this.headNode.value;
    }

    tail() {
        if (this.headNode === null) {
            return "List is empty";
        }

        let currentNode = this.headNode;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at(index) {
        if (this.headNode === null) {
            return "List is empty";
        }

        let currentNode = this.headNode;
        let currentIndex = 0;
        while (currentIndex < index) {
            currentNode = currentNode.nextNode;
            currentIndex++;
        }
        return currentNode;
    }

    pop() {
        if (this.headNode === null) {
            return "List is empty";
        }

        let currentNode = this.headNode;
        while (currentNode.nextNode.nextNode !== null)
            currentNode = currentNode.nextNode;
        currentNode.nextNode = null;
    }

    contains(value) {
        if (this.headNode === null) {
            return "List is empty";
        }

        let currentNode = this.headNode;
        while (currentNode.nextNode !== null) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        if (this.headNode === null) {
            return "List is empty";
        }

        let currentNode = this.headNode;
        let currentIndex = 0;
        while (currentNode !== null) {
            currentIndex++;
            if (currentNode.value === value) return currentIndex;
            currentNode = currentNode.nextNode;
        }
        return "List doesnt contain item";
    }

    toString() {
        if (this.headNode === null) {
            return "List is empty";
        }

        let result = "";
        let currentNode = this.headNode;
        while (currentNode !== null) {
            result += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        return (result += null);
    }

    head() {
        return this.headNode;
    }

    insertAt(value, index) {
        const newNode = new Node(value);

        if (index === 0) {
            newNode.nextNode = this.headNode;
            this.headNode = newNode;
            return;
        }

        let currentNode = this.headNode;
        let currentIndex = 0;

        while (currentNode !== null && currentIndex < index - 1) {
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        if (currentNode === null) {
            return "Index is bigger than list";
        }

        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
    }

    removeAt(index) {
        if (this.headNode === null) {
            return "List is empty";
        }

        if (index === 0) {
            this.headNode = this.headNode.nextNode;
            return;
        }

        let currentNode = this.headNode;
        let currentIndex = 0;
        while (currentNode.nextNode !== null && currentIndex < index - 1) {
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        currentNode.nextNode = currentNode.nextNode.nextNode;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("horse");

console.log(list.at(2));
