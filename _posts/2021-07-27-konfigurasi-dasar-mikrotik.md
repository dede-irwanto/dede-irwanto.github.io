---
layout: post
---
Asumsikan kita mememiliki topologi jaringan seperti berikut:

![alt text](/images/2021-07-27/topologi.png)

**Konfigurasi IP address ether1 dan ether2**

    ip address add address=10.0.2.3/24 interface=ether1
    ip address add address=192.168.1.1/24 interface=ether2

**Konfigurasi IP gateway**

    ip route add gateway=10.0.2.2

**Konfigurasi DNS server**

    ip dns set servers=8.8.8.8,8.8.4.4

**Konfigurasi DHCP server**
    
    ip dhcp-server setup


    Select interface to run DHCP server on

    dhcp server interface: ether2
    Select network for DHCP addresses

    dhcp address space: 192.168.1.0/24
    Select gateway for given network

    gateway for dhcp network: 192.168.1.1
    Select pool of ip addresses given out by DHCP server

    addresses to give out: 192.168.1.2-192.168.1.20
    Select DNS servers

    dns servers: 8.8.8.8,8.8.4.4

**Konfigurasi Firewall NAT**
    
    ip firewall nat add chain=srcnat out-interface=ether1 action=masquerade

Sampai disini, konfigurasi pada mikrotik sudah selesai. Selanjutnya tinggal konfigurasi IP DHCP pada Client.

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