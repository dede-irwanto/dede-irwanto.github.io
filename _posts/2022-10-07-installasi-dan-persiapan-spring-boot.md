---
layout: post
author: dee
tags: ["Java", "Spring Boot", "Backend"]
keywords: Java, Spring Boot, Backend
---

**Daftar Isi**

- [Apa itu Spring Boot?](#Apa%20itu%20Spring%20Boot?)
- [Installasi Java](#Installasi%20Java)
- [Installasi Maven](#Installasi%20Maven)
- [Membuat Project Pertama](#Membuat%20Project%20Pertama)

<span id="Apa itu Spring Boot?" />

**Apa itu Spring Boot?**

Spring Boot merupakan salah satu framework berbasis Spring yang memungkinkan seorang Programmer Java membangun aplikasi web dengan lebih cepat. Lantas, mengapa dikatakan berbasis Spring? Yap, jika kita buka situs resminya [https://spring.io/projects](https://spring.io/projects), Spring memiliki berbagai project dengan fungsionalitasnya masing-masing, seperti Spring Security, Spring Cloud, Spring Session, dll. Nah, Spring Boot sendiri merupakan salah satu bagian dari project-project tersebut.

<span id="Installasi Java" />

**Installasi Java**

Karena Spring Boot berjalan di atas JVM, maka terlebih dahulu kita harus menginstall Java Development Kit (JDK). Versi JDK yang saya gunakan adalah 17 (LTS) dengan sistem operasi Windows 11 64 bit.

1. Download JDK [https://download.oracle.com/java/17/archive/jdk-17.0.4.1_windows-x64_bin.zip](https://download.oracle.com/java/17/archive/jdk-17.0.4.1_windows-x64_bin.zip). Dalam hal ini saya memilih untuk mendownload file executable yang telah di compress dalam bentuk zip (bukan installer) agar nanti tidak perlu melakukan installasi pada sistem windows.

2. Ekstrak file JDK yang telah didownload tadi.

   ![Extract file JDK](/images/2022-10-07/extract-jdk.jpg)

3. Buat folder baru bernama **Java** di **C:\Program Files**.

   ![Create folder Java](/images/2022-10-07/create-folder.jpg)

4. Pindahkan file JDK yang telah diekstrak tadi pada folder **Java**.

   ![Move JDK to Program File](/images/2022-10-07/move-jdk-to-program-file.jpg)

5. Set **JAVA_HOME** pada User variables.

   - Klik start dan ketikkan key **envi**. Kemudian klik **Edit the system environment variables**.

     ![klik Edit the system environment variables](/images/2022-10-07/set-environment-1.jpg)

   - Klik tab **Environment Variables**.

     ![klik tab Environment Variables](/images/2022-10-07/set-environment-2.jpg)

   - Pada **User variables for user** klik tab **New**

     ![new user variable](/images/2022-10-07/add-new-java-home.jpg)

   - Akan muncul form **Edit user variable**. Pada **Variable name** isi dengan **JAVA_HOME** sedangkan pada **Variable value** diisi dengan lokasi penyimpanan file JDK **C:\Program Files\Java\jdk-17.0.4.1**

     ![Set JAVA_HOME](/images/2022-10-07/add-java-home.jpg)

   - Klik **OK**

6. Set path JDK pada System variables.

   - Klik start dan ketikkan key **envi**. Kemudian klik **Edit the system environment variables**.

     ![klik Edit the system environment variables](/images/2022-10-07/set-environment-1.jpg)

   - Klik tab **Environment Variables**.

     ![klik tab Environment Variables](/images/2022-10-07/set-environment-2.jpg)

   - Pada **System variables** pilih **Path** kemudian klik **Edit**.

     ![Path](/images/2022-10-07/set-environment-3.jpg)

   - Pada form **Edit environment variables** klik **Browse**, kemudian arahkan dan pilih folder **C:\Program Files\Java\jdk-17.0.4.1\bin**.

     ![Browse folder C:\Program Files\Java\jdk-17.0.4.1\bin](/images/2022-10-07/set-environment-4.jpg)

   - Setelah folder **C:\Program Files\Java\jdk-17.0.4.1\bin** ditambahkan, klik tombol **OK**. Kemudian restart komputer.

     ![OK](/images/2022-10-07/set-environment-5.jpg)

7. Cek apakah JDK sudah berhasil diinstall. Buka terminal windows, kemudian ketikkan perintah berikut:

   ```
   java --version
   ```

   ![Cek JDK version](/images/2022-10-07/test-jdk-installation.jpg)

   Jika output yang ditampilkan sudah seperti gambar di atas maka JDK telah berhasil diinstall.

<span id="Installasi Maven" />

**Installasi Maven**

Maven merupakan salah satu build tools yang sangat populer. Tool ini banyak digunakan oleh programmer Java karena fitur dan kemudahan yang ditawarkannya dalam menangani sebuah project. Berikut langkah-langkah untuk menginstall maven:

1. Download Maven versi terbaru [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)

2. Ekstrak file yang sudah didownload tadi dan pindahkan ke folder **C:\Program Files\Java**.

   ![Move Maven to Program File](/images/2022-10-07/move-maven-to-program-file.jpg)

3. Set path Maven pada System variables.

   Lihat tahap ke-6 pada installasi JDK

4. Cek apakah Maven sudah berhasil diinstall.

   ```
   mvn --version
   ```

   ![Cek Maven version](/images/2022-10-07/test-maven-installation.jpg)

Sampai disini semua persiapan dan installasi sudah dilakukan. Selanjutnya kita akan menuju kebagian terakhir dari sesi ini.

<span id="Membuat Project Pertama" />

**Membuat Project Pertama**

Spring telah menyediakan sebuah web utility untuk mengenerate project.

1. Kunjungi [https://start.spring.io/](https://start.spring.io/)

2. Lakukan konfigurasi-konfigurasi dasar seperti pemilihan project building tool, bahasa program yang digunakan, dependency yang butuhkan dan metadata. Setelah itu klik tombol **GENERATE**.

   ![Spring Initializr](/images/2022-10-07/spring-initializr.jpg)

3. Ekstrak file yang telah digenerate tadi. Kemudian buka dengan Text Editor atau IDE, kebetulan saya menggunakan Intellij IDEA.

   ![Open Project](/images/2022-10-07/open-project.jpg)

4. Buka file **ProjectPertamaApplication.java** pada folder **\src\main\java\io\github\dedeirwanto**.
   Tambahkan kode berikut sebelum **public class**:

   ```
   @RestController
   ```

   Tambahkan kode berikut sesudah **public static void**:

   ```
   @GetMapping("/hello")
   public String hello() {
      return "Hello world";
   }
   ```

   Kurang lebih potongan kode di atas seperti gambar berikut:

   ![Add Code Hello](/images/2022-10-07/add-code-hello.jpg)

   Pembahasan mengenai fungsi kode di atas akan dibahas pada bab tersendiri nanti.

5. Jalankan Spring Boot.

   ```
   mvn spring-boot:run
   ```

   ![Run Spring Boot](/images/2022-10-07/run-spring-boot.jpg)

6. Buka browser dan ketikkan **http://localhost:8080/hello** pada address bar.

   ![Hello world](/images/2022-10-07/hello-world.jpg)

   Jika output yang ditampilkan oleh browser seperti gambar di atas maka project pertama kita sudah berhasil.

Selesai sudah pembahasan **Spring Boot** pada tahap persiapan dan installasi. Next mungkin akan dibahas mengenai **Customisasi Spring Boot**.

CMIIW.

Sekian, semoga bermanfaat.

Referensi:

- [https://spring.io/](https://spring.io/)
- [https://daengweb.id/berkenalan-dengan-spring-boot](https://daengweb.id/berkenalan-dengan-spring-boot)
- [https://maven.apache.org/install.html](https://maven.apache.org/install.html)
