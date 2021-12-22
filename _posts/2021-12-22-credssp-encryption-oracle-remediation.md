---
layout: post
---
Untuk mengatasi masalah CredSSP saat melakukn remote desktop di windows lakukan beberapa langkah berikut:
1. Jalankan CMD sebagai Adminstrator
2. Copy Paste skrip berikut:
  REG ADD 
  HKLM\Software\Microsoft\Windows\CurrentVersion\Policies\System\CredSSP\Parameters\ /v
  AllowEncryptionOracle /t REG_DWORD /d 2

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
