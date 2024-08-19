class main{
    public static void main(string[] args) {
        int a = 12
        int b = 6
        int sumA = 0:

        a = a * b;
        b = a / b;
        a = a / b;
        
        for (int i = 1; i <= a; i++) {
            sumA = sumA + a%i;
        }
        System.out.println(sumA);
    }
}