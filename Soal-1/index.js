function loker(num) {
  let array = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35, 36],
  ];
  for (let lt = 0; lt < array.length; lt++) {
    for (let loker = 0; loker < array[lt].length; loker++) {
      if (array[lt][loker] === num)
        return console.log(`Loker nomor ${num} berada di lantai ${lt + 1}`);
    }
  }
}

loker(1);
loker(10);
loker(15);
loker(22);
loker(28);
loker(33);
