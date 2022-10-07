---
layout: post
author: dee
tags: ["Programming", "Java"]
keywords: Programming, Java, Palindrome, Algoritma
---

Palindrome adalah sususan kata, kalimat, atau angka yang baik dibaca dari depan ataupun belakang akan menghasilkan susunan yang sama. Contohnya **kodok**, **kasur ini rusak** dan **212**.

Pada tulisan ini kita akan membuat sebuah program Java untuk menentukan apakah suatu kata atau kalimat merupakan Palindrome atau bukan. Ada banyak algoritma yang bisa digunakan untuk membuat program ini, namun saya hanya akan membahas beberapa saja.

**ALGORITMA I**

1. Masukkan sebuah kata/kalimat
2. Balikan kata/kalimat tersebut
3. Bandingkan kata/kalimat asli dengan kata/kalimat yang dibalikkan
4. Jika hasilnya sama, maka kata/kalimat tersebut adalah Palindrom dan jika tidak maka kata/kalimat tersebut bukan Palindrome.

**Buat file dengan dengan nama Palindrome.java**

    import java.util.Scanner;

    public class Palindrome {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            System.out.print("Masukkan kata atau kalimat : ");
            String value = scanner.nextLine();

            if (palindromeWithTemp(value)) {
                System.out.println("Kata atau kalimat '" + value + "' adalah Palindrome");
            } else {
                System.out.println("Kata atau kalimat '" + value + "' bukan Palindrome");
            }
        }

        private static boolean palindromeWithTemp(String value) {
            // Inisialisasi variabel temp
            String temp = "";

            // Looping
            for (var i = value.length() -1; i >= 0; i--) {
                temp = temp + value.charAt(i); // Membalikkan string pada variabel value dengan cara mengambil setiap huruf dari belakang dan menyimpannya ke dalam variabel temp
            }

            // Membandingkan isi variabel temp dengan variabel value dan mengembalikan nilai bertipe boolean
            return temp.equals(value);
        }

    }

**Compile program**

    javac Palindrome.java

**Jalankan program**

    java Palindrome

**ALGORITMA II**

1. Masukkan sebuah kata/kalimat
2. Bandingkan setiap huruf dari kata/kalimat tersebut dengan pola 1:5, 2:4. Misalkan kata yang dimasukkan adalah **K A T A K**, maka kita akan membandingkan karakter 1 dan 5 kemudian 2 dan 4. Karena jumlah karakternya ganjil, maka kita tidak perlu membandingkan karakter diposisi tengah.
3. Jika setiap karakter yang dibandingkan bernilai sama, maka kata atau kalimat tersebut adalah Palindrome.

**Buat file dengan dengan nama Palindrome.java**

    import java.util.Scanner;

    public class Palindrome {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            System.out.print("Masukkan kata atau kalimat : ");
            String value = scanner.nextLine();

            if(palindromeWithoutTemp(value)){
                System.out.println("Kata atau kalimat '" + value + "' adalah Palindrome");
            }else{
                System.out.println("Kata atau kalimat '" + value + "' bukan Palindrome");
            }
        }

        private static boolean palindromeWithoutTemp(String value){
            // Looping
            for(var i=0; i<value.length()/2; i++){
                if(value.charAt(i) != value.charAt(value.length() -1 - i)){ // Fungsi untuk membandingkan setiap karakter dengan pola seperti diatas.
                    return false;
                }
            }
            return true;
        }
    }

**Compile program**

    javac Palindrome.java

**Jalankan program**

    java Palindrome

CMIIW.

Sekian, semoga bermanfaat.
