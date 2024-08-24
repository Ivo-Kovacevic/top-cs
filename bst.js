class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(arr) {
        this.root = this.buildTree(arr);
    }

    buildTree(arr) {
        const sortedArr = [...new Set(arr)].sort((a, b) => a - b);
        const tree = this.buildTreeRecursively(sortedArr);
        return tree;
    }

    buildTreeRecursively(arr, start = 0, end = arr.length) {
        if (start > end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2);
        const treeNode = new Node(arr[mid]);

        treeNode.left = this.buildTreeRecursively(arr, start, mid - 1);
        treeNode.right = this.buildTreeRecursively(arr, mid + 1, end);

        return treeNode;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return;
        }

        let currentNode = this.root;
        while (true) {
            if (value > currentNode.data) {
                if (currentNode.right === null) {
                    currentNode.right = new Node(value);
                    return;
                }
                currentNode = currentNode.right;
            } else if (value < currentNode.data) {
                if (currentNode.left === null) {
                    currentNode.left = new Node(value);
                    return;
                }
                currentNode = currentNode.left;
            } else {
                return console.log("Value is already in the tree");
            }
        }
    }

    getTree() {
        return this.root;
    }
}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

// console.log(tree.getTree());

tree.insert(4);

// Visualized tree
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

prettyPrint(tree.getTree());
