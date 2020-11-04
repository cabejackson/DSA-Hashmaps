const HashMap = require('./HashMap');

function main() {

    const lotr = new HashMap;

    lotr.set("Hobbit", "Bilbo")
    lotr.set("Hobbit", "Frodo")
    lotr.set("Wizard", "Gandalf")
    lotr.set("Human", "Aragorn")
    lotr.set("Elf", "Legolas")
    lotr.set("Maiar", "The Necromancer")
    lotr.set("Maiar", "Sauron")
    lotr.set("RingBearer", "Gollum")
    lotr.set("LadyOfLight", "Galadriel")
    lotr.set("HalfElven", "Arwen")
    lotr.set("Ent", "Treebeard")

    console.log(lotr)

}

main();
//still working through these below:
// function removeDuplicates(str) {
//     const map = new HashMap;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ' ') {
//             map.set(str[i], null)
//         }
//     }
//     console.log(map);
// }

// //removeDuplicates("google all that you think can think of")

// function palindrome(str) {
//     const map = new HashMap;

//     let bool = false;

//     for (let i = 0; i < str.length; i++) {
//         let val = !map.get(str[i]) ? 0 : map.get(str[i])
//         map.set(str[i], val + 1)

//         if (map.get(str[i]) % 2 === 0) {
//             bool = true;
//         } else {
//             bool = false;
//         }
//     }
//     return bool;

// }

// //palindrome('sseeeaas')

// function anagram(arr) {
//     const map = new HashMap;

//     const sorted = (str) => {
//         const array = str.split('').sort().join('')
//         return array;
//     }

//     for (let i = 0; i < arr.length; i++) {
//         let w = sorted(arr[i])
//         const val = map.get(w) ? map.get(w) : []
//         map.set(w, [arr[i], ...val])
//         console.log(map.get(w))

//     }

//     console.log(map.get(sorted(arr[0])))

// }

// function recursive(arr, map = null) {
//     map = null ? new HashMap : map;






// }

// recursive(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'])
// //anagram(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'])

