---
layout: post
author: dee
tags: ["Database", "Oracle"]
keywords: Database, Oracle, 19C
---

Berikut adalah langkah-langkan installasi oracle 19c Enterprise Edition di Docker:

**1. Clone repository Oracle Docker Image**

    git clone https://github.com/oracle/docker-images.git

**2. Download Oracle 19C for Linux**

[https://www.oracle.com/database/technologies/oracle19c-linux-downloads.html](https://www.oracle.com/database/technologies/oracle19c-linux-downloads.html).

**3. Copas ke direktori "/docker-images/OracleDatabase/SingleInstance/dockerfiles/19.3.0"**

    cp LINUX.X64_193000_db_home.zip /docker-images/OracleDatabase/SingleInstance/dockerfiles/19.3.0

**4. Pindah ke direktori dockerfile**

    cd /docker-images/OracleDatabase/SingleInstance/dockerfiles

**4. Build Container Image**

    ./buildContainerImage.sh -e -v 19.3.0 -o '--build-arg SLIMMING=false'

**5. Create Docker Volume**

    docker volume create oracle-db

**6. Run Oracle Database pada Container**

    docker run --name oracle -p 1521:1521 -p 5500:5500 -e ORACLE_SID=<nama_sid> -e ORACLE_PWD=<password_db> -v oracle-db:/opt/oracle/oradata oracle/database:19.3.0-ee

**7. Tunggu hingga proses selesai.**

CMIIW.

Sekian, semoga bermanfaat.
