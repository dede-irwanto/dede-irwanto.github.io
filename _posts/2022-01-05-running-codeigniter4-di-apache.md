---
layout: post
---
**1. Uncomment rewrite module pada file httpd.conf**

    LoadModule rewrite_module modules/mod_rewrite.so

**2. Ubah AllowOverride None menjadi AllowOverride All**

    Define WWWROOT "c:/webserver/www"

    <Directory "${WWWROOT}">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

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
