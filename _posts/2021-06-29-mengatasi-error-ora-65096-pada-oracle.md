---
layout: post
author: dee
tags: ["Oracle", "Database", "Error"]
keywords: Oracle, Database, Error, ORA-65096
---

Beberapa waktu lalu, ketika hendak menambahkan user baru di Oracle 19c muncul error **ORA-65096: invalid common user or role name**. Untuk mengatasinya, login sebagai sysdba dan ketikkan skrip berikut:

    alter session set "_ORACLE_SCRIPT"=true;

Setelah itu, coba create ulang user tadi.

**Catatan:**

Untuk alasan keamanan, sebaiknya set ulang ORACLE_SCRIPT menjadi false:

    alter session set "_ORACLE_SCRIPT"=false;

CMIIW.

Sekian, semoga bermanfaat.
