---
layout: post
author: dee
tags: ["Windows"]
keywords: CredSSP, Windows, Remote Desktop
---

Untuk mengatasi masalah CredSSP saat menggunakan remote desktop di windows, lakukan beberapa langkah berikut:

**1. Jalankan CMD sebagai Adminstrator**

**2. Copas skrip berikut:**

    REG ADD HKLM\Software\Microsoft\Windows\CurrentVersion\Policies\System\CredSSP\Parameters\ /v AllowEncryptionOracle /t REG_DWORD /d 2

**3. Enter**

CMIIW.

Sekian, semoga bermanfaat.
