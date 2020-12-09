import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.lang.reflect.Array;
import java.util.*;

public class day5 {
    public static void main(String[] args) throws Exception {
        File file = new File("input.txt");
        int[] rows = {0, 127};
        int row = 0;
        int[] columns = {0, 7};
        int column = 0;
        int index = 0;
        ArrayDeque<Integer> computedResultDeque = new ArrayDeque<>();
        String line;

        BufferedReader br = new BufferedReader(new FileReader(file));

        while((line = br.readLine()) != null) {
            char[] chars = line.toCharArray();
            for (char letter : chars) {
                System.out.println(letter);

                if(index < 6) {
                    checkRow(letter, rows);
                } else if(index == 6) {
                    Arrays.sort(rows);
                    row = rows[0];
                    System.out.println("La rangée est : " + row);
                } else if(index > 6 && index < 9) {
                    checkColumn(letter, columns);
                } else if(index == 9) {
                    Arrays.sort(columns);
                    column = columns[1];
                    System.out.println("La colonne est : " + column);
                }
                index++;
                System.out.println(index);
            }
            index = 0;

            System.out.println("ROW:" + row + "COL:" + column );

            computeResult(row, column, computedResultDeque);
        }

        int[] computedResult = new int[computedResultDeque.size()];
        int count = 0;
        for(Iterator<Integer> i = computedResultDeque.iterator(); i.hasNext();) {
            computedResult[count++] = i.next();
        }
        System.out.println("------------------");

        System.out.println(computedResultDeque);

        System.out.println("------------------");


        Arrays.sort(computedResult);

        System.out.println("Valeur maximale : " + computedResult[computedResult.length - 1]);

        System.out.println("Rangée : " + row);
        System.out.println("Colonne : " + column);
    }

    private static void checkRow(char letter, int[] rows) {
        if(letter == 'F') {
            rows[1] = (int)Math.ceil((rows[0] + rows[1])) / 2;
        } else if (letter == 'B') {
            rows[0] = (int)Math.floor((rows[0] + rows[1])) / 2;
        }

        System.out.println("Printing rows :");
        System.out.println(Arrays.toString(rows));
    }

    private static void checkColumn(char letter, int[] columns) {
        if(letter == 'L') {
            columns[1] = (int)Math.ceil((columns[0] + columns[1])) / 2;
        } else if (letter == 'R') {
            columns[0] = (int)Math.floor((columns[0] + columns[1])) / 2;
        }

        System.out.println("Printing columns :");
        System.out.println(Arrays.toString(columns));
    }

    private static void computeResult(int row, int col, ArrayDeque<Integer> computedResultDeque) {
        int res = ((row * 8) + col);

        computedResultDeque.push(res);
    }
}
