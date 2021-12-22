Untuk mengatasi masalah CredSSP saat melakukn remote desktop di windows lakukan beberapa langkah berikut:
1. Jalankan CMD sebagai Adminstrator
2. Copy Paste skrip berikut
  REG ADD 
  HKLM\Software\Microsoft\Windows\CurrentVersion\Policies\System\CredSSP\Parameters\ /v
  AllowEncryptionOracle /t REG_DWORD /d 2
