//1. Stringdagi "potato" kartoshka miqdorini aniqlaydigan funksiya yozing
//Example:
//var str = "potatopotato";
//potatoes("potatopotato") ➞ 2potatoes
//potatoes("potatoapple") ➞ 1potatoes

//
// 2. Berilgan stringdagi charlar (belgilarni) sanang
// Example:
// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4

//first and second qoestion's Answear is the same

// var string = "edabit",
//   searchFor = "a",
//   count = 0,
//   pos = string.indexOf(searchFor);

// while (pos > -1) {
//   ++count;
//   pos = string.indexOf(searchFor, ++pos);
// }

// console.log(count);

// 3. Anaggram ekanini tekshiradigan funksiya yozing
// Example:
// isAnagram("cristian", "Cristina") ➞ trueisAnagram
// ("Dave Barry", "Ray Adverb") ➞ trueisAnagram
// ("Nope", "Note") ➞ false
//var str1 = "Nope";
//var str2 = "Note";
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const result = {};
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    result[char] = result[char] ? (result[char] += 1) : (result[char] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!result[char]) {
      return false;
    } else {
      result[char] = -1;
    }
  }
  return true;
}
console.log(isAnagram("cristian", "cristina"));
