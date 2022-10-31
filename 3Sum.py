def threeSum(nums):
  print(nums)
  numsLength = len(nums)
  answers = []
  for index1 in range(numsLength):
    for index2 in range(index1 + 1, numsLength):
      print(nums[index1], nums[index2])
      target = -(nums[index1] + nums[index2])
      for index3 in range(numsLength):
        if nums[index3] + target == 0 and index3 != index1 and index3 != index2:
          answers.append([index1, index2, index3])
  return answers

inputList = [-1,0,1,2,-1,-4]

print(threeSum(inputList))