//example
let actualHours = 45;
let hourlyRate = 50;
let overtime = 1.5;
let weeklyHours = 40;

let overtimeHours = actualHours > weeklyHours ? actualHours - weeklyHours : 0;
let normalHours = actualHours > weeklyHours ? weeklyHours : actualHours;
let normalPay = normalHours * hourlyRate;
let overtimePay = overtimeHours * hourlyRate * overtime;

let totalPay = normalPay + overtimePay;

console.log(`The total pay is $${totalPay}`);

//another example
let a = "Good"
let b = "morning"
console.log(`${a} ${b}!`)


//Basic hashtable example

const hash = (key, size) => {
    let hashedKey = 0


    for (let i = 0; i < key.length; i++) {
        hashedKey = key.charCodeAt(i)
    }

    return hashedKey % size

}
class HashTable {
    constructor() {
        this.size = 20
        //array filled with 20 buckets
        this.buckets = Array(this.size)

        //options:
        //choose to store more

        //how to manage collisions:
        //by storing other collections
        // in each of its buckets
        //option1: choose to store more arrays
        //option2: choose to store linkedLists
        //option3: using ES6 maps 

        //Populate ea. bucket with a map

        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Map()
        }
    }

    //methods

    insert(key, value) {
        //hash the key
        let idx = hash(key, this.size)
        //access the bucket at that index
        //set is a built in method on the map data structure
        this.buckets[idx].set(key, value)

    }

    remove(key) {
        //hash the key
        let idx = hash(key, this.size)
        //get is a built in method on the map data structure
        let deleted = this.buckets[idx].get(key)
        //deleet the item
        //delete is a built in method on the map data structure
        this.buckets[idx].delete(key)


        //return the deleted key
        return deleted
    }

    search(key) {
        //hash the key
        let idx = hash(key, this.size)
        return this.buckets[idx].get(key)

    }



}

const hashTable = new HashTable()

/*


// hashTable.insert({ "Hobbit": "Bilbo" })
// hashTable.insert({ "Hobbit": "Frodo" })
// hashTable.insert({ "Wizard": "Gandalf" })
// hashTable.insert({ "Human": "Aragorn" })
// hashTable.insert({ "Elf": "Legolas" })
// hashTable.insert({ "Maiar": "The Necromancer" })
// hashTable.insert({ "Maiar": "Sauron" })
// hashTable.insert({ "RingBearer": "Gollum" })
// hashTable.insert({ "LadyOfLight": "Galadriel" })
// hashTable.insert({ "HalfElven": "Arwen" })
// hashTable.insert({ "Ent": "Treebeard" })
console.log("the hashtable before insertion", hashTable)


hashTable.insert("Hobbit", "Bilbo")
hashTable.insert("Hobbit", "Frodo")
hashTable.insert("Wizard", "Gandalf")
hashTable.insert("Human", "Aragorn")
hashTable.insert("Elf", "Legolas")
hashTable.insert("Maiar", "The Necromancer")
hashTable.insert("Maiar", "Sauron")
hashTable.insert("RingBearer", "Gollum")
hashTable.insert("LadyOfLight", "Galadriel")
hashTable.insert("HalfElven", "Arwen")
hashTable.insert("Ent", "Treebeard")


console.log("the hashtable after insertion", hashTable)


//hashTable.search("Maiar")

console.log(`"search", should return Sauron here:`, hashTable.search("Maiar"))
console.log(`"search", should return Frodo here:`, hashTable.search("Hobbit"))
console.log(`"search", should return Treebeard here:`, hashTable.search("Ent"))
console.log(`"search", should return Legolas here:`, hashTable.search("Elf"))

console.log(`----------------------------------------------------------`)
//non-collision bucket
console.log(`"delete", should return Legolas here:`, hashTable.remove("Elf"))
//collision buckets w/ 2 collisions
console.log(`"delete", should return Sauron here:`, hashTable.remove("Maiar"))
//collision buckets w/ 3 collisions
console.log(`"delete", should return Treebeard here:`, hashTable.remove("Ent"))
//returns hashtable after deletion
console.log("the hashtable after deletion", hashTable)


    * /


/*
1. Create a HashMap class
    Walk through the HashMap implementation in the curriculum and understand it well.
    Then write a HashMap class and its core functions
    with open addressing as the collision resolution mechanism.

Export your HashMap module
Create a.js file called HashMaps_drills.In the file import the HashMap module.Create a function called main()
Inside your main() function, create a hash map called lotr.
For your hash map that you have created, set the MAX_LOAD_RATIO = 0.5 and SIZE_RATIO = 3.
Add the following items to your hash map: { "Hobbit": "Bilbo" }, { "Hobbit": "Frodo" },
{ "Wizard": "Gandalf" }, { "Human": "Aragorn" }, { "Elf": "Legolas" }, { "Maiar": "The Necromancer" },
{ "Maiar": "Sauron" }, { "RingBearer": "Gollum" }, { "LadyOfLight": "Galadriel" }, { "HalfElven": "Arwen" },
{ "Ent": "Treebeard" }
Print your hash map and notice the length and items that are hashed in your hash map.Have you hashed all the items you were asked to ?
    Retrieve the value that is hashed in the key "Maiar" and Hobbit.
What are the values of Maiar and Hobbit that you have ? Is there a discrepancy ? Explain your answer.
What is the capacity of your hash table after you have hashed all the above items ? Explain your answer.
*/

// 2. What does this do?
// const WhatDoesThisDo = function () {
//     let str1 = 'Hello World.';
//     let str2 = 'Hello World.';
//     let map1 = new HashMap();
//     map1.set(str1, 10);
//     map1.set(str2, 20);
//     let map2 = new HashMap();
//     let str3 = str1;
//     let str4 = str2;
//     map2.set(str3, 20);
//     map2.set(str4, 10);

//     console.log("map1.get(str1):", map1.get(str1));
//     console.log("map2.get(str3):", map2.get(str3));
// }


/*
//3. Demonstrate understanding of Hash maps
    * You don't need to write code for the following two drills.
    use any drawing app or simple pen and paper *

//1) Show your hash map after the insertion of keys
    10, 22, 31, 4, 15, 28, 17, 88, 59
    into a hash map of length 11 using open addressing
    and a hash function k mod m, where k is the key and m is the length.

//2) Show your hash map after the insertion of the keys
    5, 28, 19, 15, 20, 33, 12, 17, 10
    into the hash map with collisions resolved by separate chaining.
    Let the hash table have a length m = 9, and let the hash function be k mod m.
*/


/*
4. Remove duplicates
    Implement a function to delete all duplicated characters in a string
    and keep only the first occurrence of each character.
    For example, if the input is string “google”,
    the result after deletion is “gole”.
    Test your program with a sentence as well such as
    "google all that you think can think of".
*/






/*
5. Any permutation a palindrome
Write an algorithm to check whether any anagram of some string is a palindrome.
Given some string, "acecarr", the algorithm should return true,
because the letters in "acecarr" can be rearranged to the anagram "racecar",
which itself is a palindrome. In contrast, given the word "north",
the algorithm should return false,
because there's no anagram for "north" that would be a palindrome.
*/







/*
6. Anagram grouping
    Write an algorithm to group a list of words into anagrams.
    For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'],
    the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].
*/







/*
7. Separate Chaining
Write another hash map implementation as above,
but use separate chaining as the collision resolution mechanism.

Test your hash map with the same values from the lotr hash map.
*/