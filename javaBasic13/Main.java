import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Basic13 b = new Basic13();
        int[] ints = {34,42,-22,1,68,2,40,6};
        Object[] ints2 = {34,42,-22,1,68,2,40,6};
        b.PrintAllInts1to255();
        b.PrintInts0to255AndSum();
        b.FindAndPrintLargest(ints);
        System.out.println(Arrays.toString(b.CreateArrayOfOdds1to255()));
        b.PrintCountGreaterThanY(ints, 7);
        b.PrintMaxMinAvg(ints);
        System.out.println(Arrays.toString(b.ReplaceWithDojo(ints2)));
        b.printAllOdd1To255();
        b.PrintEachArrayValue(ints);
        b.PrintArrayAverage(ints);
        System.out.println(Arrays.toString(b.SetNegativeToZero(ints)));
        System.out.println(Arrays.toString(b.SquareArrayValues(ints)));
        System.out.println(Arrays.toString(b.ShiftForward(ints)));
    }
}
