---
layout: post
author: dee
tags: ["Database", "Oracle", "Error"]
keywords: Database, Oracle, Error, ORA-12514
---

Untuk mengatasi error ORA-12514: TNS:listener does not currently know of service requested in connect descriptor, pertama pastikan konfigurasi listener dan tnsname sudah benar. Jika masih muncul masalah yang sama, lakukan prosedur berikut:

**1. Login sebagai sysdba**

**2. Cek konfigurasi local listener**

    show parameter LOCAL_LISTENER;

**3. Jalankan perintah berikut sesuai dengan konfigurasi listner yang ada**

    alter system set LOCAL_LISTENER="(ADDRESS=(PROTOCOL=TCP)(HOST=NAMA_HOST)(PORT=PORT_LISTENER))" scope=both sid='NAMA_SID';

CMIIW.

Sekian, semoga bermanfaat.
