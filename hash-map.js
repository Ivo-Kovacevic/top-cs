const LinkedList = require("./hash-map-linked-list");

class HashMap {
    constructor(size = 16) {
        this.size = size;
        this.buckets = Array(this.size);
        this.loadFactor = 0.5;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        this.buckets[index] = { key, value };
        if (this.size * this.loadFactor < this.length()) {
            this.resize();
        }
    }

    resize() {
        const oldBuckets = this.buckets;
        this.size *= 2;
        this.buckets = Array(this.size);
        for (const bucket of oldBuckets) {
            if (bucket) {
                this.set(bucket.key, bucket.value);
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        if (this.buckets[index]) {
            return this.buckets[index].value;
        }
        return null;
    }

    has(key) {
        const index = this.hash(key);
        if (this.buckets[index]) {
            return true;
        }
        return false;
    }

    remove(key) {
        const index = this.hash(key);
        if (this.buckets[index]) {
            this.buckets[index] = undefined;
            return true;
        }
        return false;
    }

    length() {
        const valuesArr = this.buckets.filter((value) => value !== undefined);
        return valuesArr.length;
    }

    totalSize() {
        return this.buckets.length;
    }

    clear() {
        this.buckets = Array(this.size);
    }

    keys() {
        const keysArr = [];
        for (let bucket of this.buckets) {
            if (bucket) {
                keysArr.push(bucket.key);
            }
        }
        return keysArr;
    }

    values() {
        const valuesArr = [];
        for (const bucket of this.buckets) {
            if (bucket) {
                valuesArr.push(bucket.value);
            }
        }
        return valuesArr;
    }

    entries() {
        const entries = [];
        for (const bucket of this.buckets) {
            if (bucket) {
                entries.push([bucket.key, bucket.value]);
            }
        }
        return entries;
    }
}

const hashMap = new HashMap();

hashMap.set("apple", "red");
hashMap.set("banana", "yellow");
hashMap.set("carrot", "orange");
hashMap.set("dog", "brown");
hashMap.set("elephant", "gray");
hashMap.set("frog", "green");
hashMap.set("grape", "purple");
hashMap.set("coat", "black");
hashMap.set("ice cream", "white");
hashMap.set("shirt", "blue");
hashMap.set("kite", "pink");
hashMap.set("lion", "golden");
hashMap.set("moon", "silver");

console.log(hashMap.length());
console.log(hashMap.totalSize());
console.log(hashMap.entries());

hashMap.clear();
