def checkStraightLine(coordinates):
        if len(coordinates) < 3:
            return True
        x1 = coordinates[0][0]
        y1 = coordinates[0][1]
        x2 = coordinates[1][0]
        y2 = coordinates[1][1]
        slope = None if x2-x1 == 0 else (y2-y1)/(x2-x1)
        for i in range(1, len(coordinates) - 1):
            x1 = coordinates[i][0]
            y1 = coordinates[i][1]
            x2 = coordinates[i + 1][0]
            y2 = coordinates[i + 1][1]
            slope2 = None if x2-x1 == 0 else (y2-y1)/(x2-x1)
        if slope != slope2:
              return False
        return True


coords = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
coords2 = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
print(checkStraightLine(coords))
print(checkStraightLine(coords2))