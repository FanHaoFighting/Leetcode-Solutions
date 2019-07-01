/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  let set = new Set()
  let count = 0
  for (let i = 0; i < candies.length && count < candies.length / 2; i++) {
    if (!set.has(candies[i])) {
      set.add(candies[i])
      count++
    }
  }
  return count
};

