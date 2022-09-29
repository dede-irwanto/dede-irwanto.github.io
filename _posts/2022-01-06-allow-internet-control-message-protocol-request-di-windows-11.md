---
layout: post
author: dee
tags: ["ICMP", "Firewall"]
keywords: ICMP, Firewall
---

**Internet Control Message Protocol (ICMP)** adalah salah satu protokol inti dari keluarga protokol internet. ICMP utamanya digunakan oleh sistem operasi komputer jaringan untuk mengirim pesan kesalahan yang menyatakan, sebagai contoh, bahwa komputer tujuan tidak bisa dijangkau.

ICMP berbeda tujuan dengan TCP dan UDP dalam hal ICMP tidak digunakan secara langsung oleh aplikasi jaringan milik pengguna. Salah satu pengecualian adalah aplikasi ping yang mengirim pesan ICMP Echo Request (dan menerima Echo Reply) untuk menentukan apakah komputer tujuan dapat dijangkau dan berapa lama paket yang dikirimkan dibalas oleh komputer tujuan. (Sumber: [Wikipedia](https://id.wikipedia.org/wiki/Internet_Control_Message_Protocol))

Agar komputer bisa membalas request ICMP - menampilkan pesan reply pada komputer yang melakukan request ICMP - ada beberapa langkah yang perlu dilakukan:

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
