---
layout: post
author: dee
tags: ["ICMP", "Firewall"]
keywords: ICMP, Firewall
---

**Internet Control Message Protocol (ICMP)** adalah protokol jaringan yang bertugas untuk menghandle proses pengiriman dan penerimaan pesan yang dilakukan oleh suatu host ke host lainnya yang terhubung dalam sebuah jaringan. Salah satu program utility yang memanfaatkan protokol ini adalah **PING (Packet Internet Gopher)**.

Secara default, system operasi seperti Windows mendisable protokol **ICMP** ini. Sehingga ketika kita menggunakan perintah **ping** untuk mengecek koneksi antara suatu host dengan host lainnya maka akan direspon dengan **Request time out**. Oleh karenanya, agar host-host tersebut bisa saling berkomunikasi, terlebih dahulu kita harus mengaktifkan protkol ini. Berikut langkah-langkahnya:

1. Klik start kemudian search **Windows Defender Firewall with Advanced Security**
2. Pilih menu **Inbound Rules**
3. Pilih menu **New Rule**
4. Pilih **Custom** kemudian **Next**
5. Pilih **All programs** kemudian **Next**
6. Pada **Protocol type** pilih **ICMPv4** kemudian **Next**
7. Pilih **Any IP address** kemudian **Next**
8. Pilih **Allow the connection** kemudian **Next**
9. Centang **Domain, Private dan Public** kemudian **Next**
10. Pada text **Name** tuliskan nama rule **Allow ICMP request**
11. Klik tombol **Finish**

CMIIW.

Sekian, semoga bermanfaat.
