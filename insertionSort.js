function insertionSortWithTemp(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let j = i
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  return arr
}

function insertionSortWithSwap(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i
    while (j > 0 && arr[j - 1] > arr[j]) {
      ;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      j--
    }
  }
  return arr
}

let arr1 = [3, 2, 1, 4, 5]
let array1 = [3, 2, 1, 4, 5]
let arr2 = [
  713, 772, 931, 223, 741, 160, 442, 94, 839, 268, 926, 100, 635, 116, 150, 947,
  480, 497, 503, 8, 66, 36, 314, 826, 923, 928, 15, 901, 210, 433, 838, 786,
  651, 11, 902, 916, 615, 448, 507, 295, 383, 308, 967, 338, 14, 146, 869, 887,
  871, 320, 306, 280, 96, 255, 909, 763, 222, 441, 281, 487, 603, 712, 246, 29,
  104, 986, 564, 535, 413, 411, 351, 592, 751, 541, 791, 540, 162, 950, 3, 438,
  519, 614, 450, 21, 660, 333, 793, 469, 410, 695, 114, 270, 59, 244, 229, 911,
  803, 109, 886, 479, 417, 173, 348, 788, 155, 232, 681, 656, 137, 692, 350,
  970, 711, 74, 634, 27, 721, 685, 691, 54, 848, 466, 596, 153, 590, 933, 187,
  652, 987, 422, 556, 485, 291, 475, 898, 531, 908, 952, 51, 200, 872, 30, 937,
  501, 9, 654, 28, 78, 719, 545, 700, 363, 558, 321, 62, 755, 573, 729, 492,
  602, 52, 770, 862, 310, 882, 236, 884, 757, 671, 323, 148, 780, 152, 312, 345,
  347, 674, 423, 23, 818, 600, 129, 408, 966, 990, 84, 811, 776, 655, 534, 353,
  17, 447, 430, 301, 69, 474, 855, 744, 227, 117, 437, 119, 696, 33, 587, 90,
  135, 125, 285, 364, 18, 60, 953, 663, 809, 102, 888, 810, 243, 393, 495, 903,
  491, 195, 126, 490, 118, 659, 857, 940, 250, 434, 16, 416, 643, 287, 387, 787,
  850, 808, 43, 216, 599, 764, 182, 427, 731, 958, 402, 238, 601, 365, 801, 211,
  360, 562, 57, 943, 591, 390, 428, 303, 319, 343, 77, 707, 516, 307, 304, 92,
  177, 409, 896, 977, 868, 878, 539, 272, 890, 449, 242, 147, 885, 499, 452,
  619, 169, 313, 759, 278, 261, 149, 520, 525, 518, 205, 267, 455, 568, 22, 294,
  418, 955, 771, 414, 45, 478, 65, 181, 141, 766, 359, 493, 103, 91, 85, 212,
  477, 215, 608, 702, 722, 488, 723, 263, 983, 957, 630, 796, 436, 552, 667,
  318, 623, 664, 777, 298, 231, 866, 107, 462, 817, 458, 613, 344, 874, 446,
  355, 367, 369, 594, 824, 965, 139, 795, 727, 563, 138, 352, 289, 61, 617, 2,
  576, 380, 332, 382, 34, 805, 754, 461, 429, 720, 445, 815, 397, 509, 476, 358,
  632, 752, 86, 697, 653, 290, 971, 44, 188, 574, 921, 224, 220, 960, 616, 225,
  842, 775, 675, 361, 666, 859, 379, 683, 486, 392, 553, 163, 922, 384, 128,
  134, 521, 178, 40, 197, 388, 47, 184, 845, 463, 108, 963, 951, 843, 863, 705,
  237, 618, 89, 638, 997, 391, 941, 978, 10, 98, 860, 945, 584, 214, 247, 202,
  992, 115, 678, 75, 368, 714, 101, 753, 936, 773, 743, 542, 389, 582, 87, 245,
  260, 395, 555, 76, 565, 982, 93, 228, 724, 913, 639, 529, 283, 49, 357, 767,
  559, 165, 715, 140, 420, 610, 725, 171, 716, 252, 701, 840, 489, 110, 893,
  798, 460, 954, 508, 682, 581, 159, 198, 812, 142,
]
let array2 = [
  713, 772, 931, 223, 741, 160, 442, 94, 839, 268, 926, 100, 635, 116, 150, 947,
  480, 497, 503, 8, 66, 36, 314, 826, 923, 928, 15, 901, 210, 433, 838, 786,
  651, 11, 902, 916, 615, 448, 507, 295, 383, 308, 967, 338, 14, 146, 869, 887,
  871, 320, 306, 280, 96, 255, 909, 763, 222, 441, 281, 487, 603, 712, 246, 29,
  104, 986, 564, 535, 413, 411, 351, 592, 751, 541, 791, 540, 162, 950, 3, 438,
  519, 614, 450, 21, 660, 333, 793, 469, 410, 695, 114, 270, 59, 244, 229, 911,
  803, 109, 886, 479, 417, 173, 348, 788, 155, 232, 681, 656, 137, 692, 350,
  970, 711, 74, 634, 27, 721, 685, 691, 54, 848, 466, 596, 153, 590, 933, 187,
  652, 987, 422, 556, 485, 291, 475, 898, 531, 908, 952, 51, 200, 872, 30, 937,
  501, 9, 654, 28, 78, 719, 545, 700, 363, 558, 321, 62, 755, 573, 729, 492,
  602, 52, 770, 862, 310, 882, 236, 884, 757, 671, 323, 148, 780, 152, 312, 345,
  347, 674, 423, 23, 818, 600, 129, 408, 966, 990, 84, 811, 776, 655, 534, 353,
  17, 447, 430, 301, 69, 474, 855, 744, 227, 117, 437, 119, 696, 33, 587, 90,
  135, 125, 285, 364, 18, 60, 953, 663, 809, 102, 888, 810, 243, 393, 495, 903,
  491, 195, 126, 490, 118, 659, 857, 940, 250, 434, 16, 416, 643, 287, 387, 787,
  850, 808, 43, 216, 599, 764, 182, 427, 731, 958, 402, 238, 601, 365, 801, 211,
  360, 562, 57, 943, 591, 390, 428, 303, 319, 343, 77, 707, 516, 307, 304, 92,
  177, 409, 896, 977, 868, 878, 539, 272, 890, 449, 242, 147, 885, 499, 452,
  619, 169, 313, 759, 278, 261, 149, 520, 525, 518, 205, 267, 455, 568, 22, 294,
  418, 955, 771, 414, 45, 478, 65, 181, 141, 766, 359, 493, 103, 91, 85, 212,
  477, 215, 608, 702, 722, 488, 723, 263, 983, 957, 630, 796, 436, 552, 667,
  318, 623, 664, 777, 298, 231, 866, 107, 462, 817, 458, 613, 344, 874, 446,
  355, 367, 369, 594, 824, 965, 139, 795, 727, 563, 138, 352, 289, 61, 617, 2,
  576, 380, 332, 382, 34, 805, 754, 461, 429, 720, 445, 815, 397, 509, 476, 358,
  632, 752, 86, 697, 653, 290, 971, 44, 188, 574, 921, 224, 220, 960, 616, 225,
  842, 775, 675, 361, 666, 859, 379, 683, 486, 392, 553, 163, 922, 384, 128,
  134, 521, 178, 40, 197, 388, 47, 184, 845, 463, 108, 963, 951, 843, 863, 705,
  237, 618, 89, 638, 997, 391, 941, 978, 10, 98, 860, 945, 584, 214, 247, 202,
  992, 115, 678, 75, 368, 714, 101, 753, 936, 773, 743, 542, 389, 582, 87, 245,
  260, 395, 555, 76, 565, 982, 93, 228, 724, 913, 639, 529, 283, 49, 357, 767,
  559, 165, 715, 140, 420, 610, 725, 171, 716, 252, 701, 840, 489, 110, 893,
  798, 460, 954, 508, 682, 581, 159, 198, 812, 142,
]
console.time("with temp - short")
console.log(insertionSortWithTemp(arr1))
console.timeEnd("with temp - short")
console.time("with temp - long")
console.log(insertionSortWithTemp(arr2))
console.timeEnd("with temp - long")
console.time("with swap - short")
console.log(insertionSortWithSwap(array1))
console.timeEnd("with swap - short")
console.time("with swap - long")
console.log(insertionSortWithSwap(array2))
console.timeEnd("with swap - long")

// insertionSortWithTemp is slower with small arrays and faster with large arrays when compared to insertionSortWithSwap
