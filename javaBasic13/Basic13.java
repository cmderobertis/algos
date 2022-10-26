import java.lang.Math;
public class Basic13 {

    public void PrintAllInts1to255(){
        // TODO: Print all the integers from 1 to 255.
        for (int i = 1; i <= 255; i++){
            System.out.println(i);
        }
    }

    public void PrintInts0to255AndSum(){
        // TODO: Print integers from 0 to 255, and with each integer print the sum so far.
        int sum = 0;
        for (int i = 0; i <= 255; i++){
            sum += i;
            System.out.printf("Int: %d - Sum: %d\n", i, sum);
        }
    }

    public void FindAndPrintLargest(int[] intArray){
        // TODO: Given an array, find and print its largest element.
        int max = intArray[0];
        for (int i: intArray){
            if (i > max) max = i;
        }
        System.out.println(max);
    }

    public int[] CreateArrayOfOdds1to255(){
        // TODO: Create an array with all the odd integers between 1 and 255 (inclusive).
        int[] oddArray = new int[128];
        for (int i = 1; i <= 255; i += 2){
            oddArray[(int) Math.floor(i/2)] = i;
        }
        return oddArray;
    }

    public void PrintCountGreaterThanY(int[] intArray, int y){
        // TODO: Given an array and a value Y, count and print the number of array values greater than Y.
        int count = 0;
        for (int i: intArray){
            if (i > y){
                count++;
            }
        }
        System.out.println(count);
    }

    public void PrintMaxMinAvg(int[] intArray){
        // TODO: Given an array, print the max, min and average values for that array.
        int max = intArray[0];
        int min = intArray[0];
        double sum = 0;
        for (int i = 0; i < intArray.length; i++){
            sum += intArray[i];
            if (intArray[i] > max){
                max = intArray[i];
            }
            if (intArray[i] < min) {
                min = intArray[i];
            }
        }
        double average = sum / intArray.length;
        System.out.printf("Max: %d ", max);
        System.out.printf("Min: %d ", min);
        System.out.printf("Average: %f\n", average);
    }

    public Object[] ReplaceWithDojo(Object[] objArray){
        // TODO: Replace any negative array values with 'Dojo'.
        for (int i = 0; i < objArray.length; i++){
            if ((int)objArray[i] < 0) {
                objArray[i] = "Dojo";
            }
        }
        return objArray;
    }

    public void printAllOdd1To255(){
        // TODO: Print all odd integers from 1 to 255.
        for(int i=0; i<=255; i++){
            if(i % 2 != 0){
                System.out.println(i);
            }
        }
    }

    public int[] PrintEachArrayValue(int[] intArray){
        // TODO: Iterate through a given array, printing each value.
        for (int j : intArray) {
            System.out.println(j);
        }

        return intArray;
    }

    public long[] PrintArrayAverage(int[] intArray){
        // TODO: Analyze an array’s values and print the average
        long sum = 0;
        int length = intArray.length;
        for (int j : intArray) {
            sum += j;
        }
        return new long[]{sum / length};
    }

    public int[] SquareArrayValues(int[] intArray){
        // TODO: Square each value in a given array, returning that same array with changed values
        for (int i = 0; i < intArray.length; i++){
            intArray[i] = intArray[i] * intArray[i];
        }
        return intArray;
    }

    public int[] SetNegativeToZero(int[] intArray){
        // TODO: Return the given array, after setting any negative values to zero.
        for (int i = 0; i < intArray.length; i++){
            if(intArray[i] < 0){
                intArray[i] = 0;
            }
        }
        return intArray;
    }

    public int[] ShiftForward(int[] intArray){
        // TODO: Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.
        for (int i=0; i < intArray.length -1; i++) {
            intArray[i] = intArray[i+1];
        }
        intArray[ intArray.length -1] = 0;
        return intArray;
    }


}