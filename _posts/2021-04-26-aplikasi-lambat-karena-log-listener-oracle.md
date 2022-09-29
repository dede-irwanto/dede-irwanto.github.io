---
layout: post
author: dee
tags: ["Oracle", "Error"]
keywords: Oracle, Error
---

Beberapa hari lalu, tiba-tiba saja aplikasi di kantor mendadak berjalan sangat lambat. Untuk menampilkan halaman login saja membutuhkan waktu kurang lebih 1 menit, padahal aplikasi ini berjalan pada jaringan local.

Tanpa berfikir panjang, langsung saja saya cek log aplikasinya. Dari catatan log tersebut ternyata ada masalah pada listener databasenya. Kebetulan aplikasi di kantor menggunakan database Oracle.

Setelah melakukan penelusuran di Google dengan berbagai keyword, ternyata masalah utamanya adalah log listener yang sudah membengkak, dan memang benar, ukuran file listener.log sudah mencapai 4 Gb.

Solusinya,

1. Matikan service listener
2. Delete file listener.log
3. Buat file baru dengan nama listener.log
4. Jalankan service listener
5. Done

CMIIW.

Sekian, semoga bermanfaat
