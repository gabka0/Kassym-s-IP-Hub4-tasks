import java.util.ArrayList;
import java.util.Arrays;
public class problems {
    public static ArrayList<Integer> problem1(int n, int[] arr) {
        Arrays.sort(arr);
        ArrayList<Integer> ans = new ArrayList<>();
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] == arr[i - 1]) {
                if (ans.isEmpty() || ans.get(ans.size() - 1) != arr[i]) {
                    ans.add(arr[i]);
                }
            }
        }
        return ans;
        //complexity sorting O(nlogn) + going through array O(n). Total O(nlogn)
    }


    public static boolean problem2(String s1, String s2) {
        if (s1.length() != s2.length()) {
            return false;
        }
        int n = s1.length();
        char[] arr1 = new char[n];
        char[] arr2 = new char[n];

        for (int i = 0; i < n; i++) {
            arr1[i] = s1.charAt(i); // manually fill arrays
            arr2[i] = s2.charAt(i);
        }
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        return Arrays.equals(arr1, arr2);
        //complexity O(n) to convert string into array, and sorting 2*O(nlogn). Total O(nlogn)
    }

    public static void main(String[] args) {
        int[] array = {1, 2, 3, 6, 3, 6, 1};
        ArrayList<Integer> duplicates = problem1(array.length, array);
        System.out.println(duplicates);


        String s1 = "g";
        String s2 = "g";
        boolean isAnagram = problem2(s1, s2);
        System.out.println(isAnagram);
    }
}





