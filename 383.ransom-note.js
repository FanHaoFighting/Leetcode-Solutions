/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Array(26)
    for (let i = 0; i < map.length; i++) {
      map[i] = 0
    }
    let aCharCode = 'a'.charCodeAt()
    for (let i = 0; i < magazine.length; i++) {
      map[magazine.charCodeAt(i) - aCharCode]++
    }
    for (let i = 0; i <  ransomNote.length; i++) {
      if (map[ransomNote.charCodeAt(i) - aCharCode] == 0) {
        return false
      }
      map[ransomNote.charCodeAt(i) - aCharCode]--
    }
    return true
};

