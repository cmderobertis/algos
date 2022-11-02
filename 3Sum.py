def threeSum(nums):
  nums = sorted(nums)
  print(nums)
  answers = []
  for index1 in range(len(nums)):
    for index2 in range(len(nums) - 1, index1, -1):
      print(nums[index1], nums[index2])
      target = -(nums[index1] + nums[index2])
      for index3 in range(len(nums)):
      #   if nums[index3] + target == 0 and index3 != index1 and index3 != index2:
      #     answers.append([index1, index2, index3])
        continue
  return answers

inputList = [-1,0,1,2,-1,-4]

print(threeSum(inputList))