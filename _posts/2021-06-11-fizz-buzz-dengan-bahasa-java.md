---
layout: post
author: dee
tags: ["Programming", "Java"]
keywords: Programming, Java, Fizz, Buzz, FizzBuzz
---

**Fizz Buzz** merupakan permainan sederhana yang sangat cocok digunakan untuk belajar pemrograman. Permainan ini akan mencetak tulisan **Fizz** untuk setiap kelipatan 3 dan tulisan **Buzz** untuk kelipatan 5, sedangkan untuk kelipatan 3 dan 5 maka akan mencetak tulisan **Fizz Buzz**.

Berikut adalah contoh program **Fizz Buzz** menggunakan Bahasa Java:

**Buat file bernama FizzBuzz.java**

    import java.util.Scanner;

    public class FizzBuzz {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            System.out.print("Masukkan sebuah nilai integer : ");

            fizzBuzz((Integer.parseInt(scanner.nextLine())));

        }

        private static void fizzBuzz(int value) {
            for (int i = 1; i <= value; i++) {
                if (i % 3 == 0 && i % 5 == 0) {
                    System.out.println("Fizz Buzz");
                } else if(i % 3 == 0) {
                    System.out.println("Fizz");
                } else if (i % 5 == 0){
                    System.out.println("Buzz");
                } else {
                    System.out.println(i);
                }
            }
        }

    }

**Compile program**

    javac FizzBuzz.java

**Jalankan program**

    java FizzBuzz

CMIIW.

Sekian, semoga bermanfaat.
