---
layout: post
author: dee
tags: ["Codeigniter", "Programming", "Backend", "PHP"]
keywords: PHP, Codeigniter4, Programming, BackEnd
---

Agar aplikasi yang dibangun dengan framework Codeigniter 4 dapat dikenali oleh webserver - dalam hal ini apache 2 -
**1. Uncomment rewrite module pada file httpd.conf**

    LoadModule rewrite_module modules/mod_rewrite.so

**2. Ubah AllowOverride None menjadi AllowOverride All**

    Define WWWROOT "c:/webserver/www"

    <Directory "${WWWROOT}">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

**3. Restart Apache**

CMIIW.

Sekian, semoga bermanfaat.
