---
layout: post
---
Untuk membuat project web Java menggunakan Maven ada beberapa langkah yang perlu dilakukan:

**1. Create Project**

    mvn archetype:generate -DgroupId=io.github.irwanto.dede -DartifactId=example-java-webapp -Dversion=1.0.0-release -DarchetypeCatalog=internal -DarchetypeGroupId=org.apache.maven.archetypes -DarchetypeArtifactId=maven-archetype-webapp

**2. Edit file pom.xml**

    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
        <modelVersion>4.0.0</modelVersion>
        <groupId>io.github.irwanto.dede</groupId>
        <artifactId>example-java-webapp</artifactId>
        <packaging>war</packaging>
        <version>1.0.0-release</version>
        <name>example-java-webapp Maven Webapp</name>
        <url>https://maven.apache.org</url>
        
        <properties>
            <java.version>11</java.version>
            <slf4j.version>1.7.25</slf4j.version>
            <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
            <endorsed.dir>${project.build.directory}/endorsed</endorsed.dir>
        </properties>

        <dependencies>
            <!-- enabled jstl -->
            <dependency>
                <groupId>jstl</groupId>
                <artifactId>jstl</artifactId>
                <version>1.2</version>
            </dependency>
            <!-- enabled JSP -->
            <dependency>
                <groupId>javax</groupId>
                <artifactId>javaee-web-api</artifactId>
                <version>7.0</version>
                <scope>provided</scope>
            </dependency>
            <!-- enabled logger using slf4j -->
            <dependency>
                <groupId>org.slf4j</groupId>
                <artifactId>slf4j-jdk14</artifactId>
                <version>${slf4j.version}</version>
            </dependency>
            <dependency>
                <groupId>org.slf4j</groupId>
                <artifactId>slf4j-api</artifactId>
                <version>${slf4j.version}</version>
            </dependency>
            <!-- project lombok -->
            <dependency>
                <groupId>org.projectlombok</groupId>
                <artifactId>lombok</artifactId>
                <version>1.18.12</version>
                <scope>provided</scope>
            </dependency>        
            <dependency>
                <groupId>junit</groupId>
                <artifactId>junit</artifactId>
                <version>4.13.2</version>
                <scope>test</scope>
            </dependency>
        </dependencies>
        

        <build>
            <finalName>${project.artifactId}</finalName>
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
        </build>
    </project>

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