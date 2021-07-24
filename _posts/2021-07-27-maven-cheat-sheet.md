---
layout: post
---
Berikut adalah perintah yang sering saya gunakan pada Maven:

**1. Cek versi Maven**
    
    mvn --version

**2. Create project**

    mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false

**3. Build dan jalankan project**

    mvn package exec:java -Dexec.mainClass="com.mycompany.app.App"

**4. Clean project**

    mvn clean

**5. Skip unit test**

    mvn package exec:java -Dexec.mainClass="com.mycompany.app.App" -DskipTest=true 

**6. Build dan jalankan project beserta dengan dependencies**

    mvn package assembly:single exec:java -Dexec.mainClass="com.mycompany.app.App"

Lebih lanjut tentang Maven Assembly Plugin : [https://maven.apache.org/plugins/maven-assembly-plugin/usage.html](https://maven.apache.org/plugins/maven-assembly-plugin/usage.html)

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