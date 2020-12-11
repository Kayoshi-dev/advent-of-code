import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.*;

public class day5 {
    static double[] rows = {0, 127};
    static double row;

    static double[] columns = {0, 7};
    static double column;

    static ArrayList<Double> computedResult = new ArrayList<>();

    public static void main(String[] args) throws Exception {
        File file = new File("input.txt");
        BufferedReader br = new BufferedReader(new FileReader(file));
        String line;

        while ((line = br.readLine()) != null) {
            char[] letter = line.toCharArray();

            for (int i = 0; i < letter.length; i++) {
                determineSeat(letter, i);
            }

            rows[0] = 0;
            rows[1] = 127;
            row = 0;

            columns[0] = 0;
            columns[1] = 7;
            column = 0;
        }

        double idMax = Collections.max(computedResult);
        System.out.println(idMax);
    }

    private static void determineSeat(char[] letter, int index) {
        if(index < 6) {
            checkRows(letter[index]);
        } else if (index == 6) {
            Arrays.sort(rows);

            if(letter[index] == 'F') {
                row = rows[0];
            } else {
                row = rows[1];
            }
        } else if (index < 9) {
            checkColumns(letter[index]);
        } else if (index == 9) {
            Arrays.sort(columns);
            if(letter[index] == 'R') {
                column = columns[1];
            } else {
                column = columns[0];
            }
        }

        addToArray();
    }

    private static void checkRows(char letter) {
        if(letter == 'F') {
            rows[1] = Math.floor((rows[0] + rows[1]) / 2);
        } else if (letter == 'B') {
            rows[0] = Math.ceil((rows[0] + rows[1]) / 2);
        }
    }

    private static void checkColumns(char letter) {
        if(letter == 'R') {
            columns[1] = Math.floor((columns[0] + columns[1]) / 2);
        } else if (letter == 'L') {
            columns[0] = Math.ceil((columns[0] + columns[1]) / 2);
        }
    }

    private static void addToArray() {
        double rowID = (row * 8) + column;

        computedResult.add(rowID);
    }
}
