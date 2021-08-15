---
layout: post
---
Untuk membuat project web Java menggunakan Maven ada beberapa langkah yang perlu dilakukan:

**1. Create Project**

    mvn archetype:generate -DgroupId=io.github.dede-irwanto -DartifactId=example-java-webapp -Dversion=1.0.0-release -DarchetypeCatalog=internal -DarchetypeGroupId=org.apache.maven.archetypes -DarchetypeArtifactId=maven-archetype-webapp

**2. Tambahkan plugin tomcat7***

Plugin ini berfungsi sebagai pengganti web server. Letakkan skrip berikut diantara sintaks <build></build>.

    <plugins>
        <plugin>
            <groupId>org.apache.tomcat.maven</groupId>
            <artifactId>tomcat7-maven-plugin</artifactId>
            <version>2.2</version>
        </plugin>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.1</version>
            <configuration>
                <source>1.8</source>
                <target>1.8</target>
                <compilerArguments>
                    <endorseddirs>${endorsed.dir}</endorseddirs>
                </compilerArguments>
            </configuration>
        </plugin>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-war-plugin</artifactId>
            <version>3.2.3</version>
            <configuration>
                <failOnMissingWebXml>false</failOnMissingWebXml>
            </configuration>
        </plugin>  
    </plugins>  

![alt text](/images/2021-08-15/pom-xml.png)

**3. Compile program**

    mvn clean package tomcat7:run -DskipTests

![alt text](/images/2021-08-15/tomcat7-run.png)

**4. Jalankan program**

![alt text](/images/2021-08-15/hello-world.png)

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