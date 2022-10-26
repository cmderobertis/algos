def arrayRankTransform(arr):
  if len(arr) == 0:
    return []
  sortedArr = sorted(arr)
  rank = 1
  rankDict = {}
  rankList = []
  for num in sortedArr:
    if num in rankDict:
      continue
    else:
      rankDict[num] = rank
      rank += 1
  for num in arr:
    rankList.append(rankDict[num])
  return rankList

inputArr = [5,1,2,1,6,3]

print(arrayRankTransform(inputArr))