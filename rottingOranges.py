class Solution:
  def orangesRotting(self, grid: list[list[int]], coords = [], mins = 0) -> int:
    newCoords = []
    if len(coords) == 0:
      for row in range(len(grid)):
        for col in range(len(grid[row])):
          if grid[row][col] == 2:
            newCoords.append([row, col])
      if len(newCoords) == 0:
        for row in range(len(grid)):
          for col in range(len(grid[row])):
            if grid[row][col] == 1:
              return -1
        return mins
      else:
        return Solution.orangesRotting(self, grid, newCoords, mins)
    for coord in coords:
      row = coord[0]
      col = coord[1]
      if col > 0 and grid[row][col - 1] == 1:
        grid[row][col - 1] = 2
        newCoords.append([row, col - 1])
      if col < len(grid[0]) - 1 and grid[row][col + 1] == 1:
        grid[row][col + 1] = 2
        newCoords.append([row, col + 1])
      if row > 0 and grid[row - 1][col] == 1:
        grid[row - 1][col] = 2
        newCoords.append([row - 1, col])
      if row < len(grid) - 1 and grid[row + 1][col] == 1:
        grid[row + 1][col] = 2
        newCoords.append([row + 1, col])
    if len(newCoords) == 0:
      for row in range(len(grid)):
        for col in range(len(grid[row])):
          if grid[row][col] == 1:
            return -1
      return mins
    else:
      return Solution.orangesRotting(self, grid, newCoords, mins + 1)

grid1 = [
  [2,1,1],
  [1,1,0],
  [0,1,1]
  ]
grid2 = [
  [2,1,1],
  [0,1,1],
  [1,0,1]
  ]
grid3 = [[0,2]]

sol = Solution()
print(sol.orangesRotting(grid1))
print(sol.orangesRotting(grid2))
print(sol.orangesRotting(grid3))