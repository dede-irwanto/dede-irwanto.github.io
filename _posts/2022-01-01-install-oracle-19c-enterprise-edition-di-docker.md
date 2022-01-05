---
layout: post
---
Berikut adalah langkah-langkan installasi oracle 19c Enterprise Edition di Docker:

**1. Clone repository Oracle Docker Image**

    git clone https://github.com/oracle/docker-images.git

**2. Download Oracle Database 19c for Linux [https://www.oracle.com/database/technologies/oracle19c-linux-downloads.html](https://www.oracle.com/database/technologies/oracle19c-linux-downloads.html), kemudian kopikan ke direktori "/docker-images/OracleDatabase/SingleInstance/dockerfiles/19.3.0"**

    cp LINUX.X64_193000_db_home.zip /docker-images/OracleDatabase/SingleInstance/dockerfiles/19.3.0

**3. Buka terminal kemudian pindah pada direktori "/docker-images/OracleDatabase/SingleInstance/dockerfiles" hasil clonning tadi**

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

<div id="disqus_thread"></div>
<script>
    (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://dedeirwanto.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
