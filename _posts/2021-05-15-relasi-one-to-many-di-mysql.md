---
layout: post
---
Asumsikan saja kita memiliki 2 buah tabel, yaitu tabel categories dan products. Adapun kolom-kolom beserta datanya adalah sebagai berikut:

#### Tabel categories

| id |         name         |
|:--:|:--------------------:|
|  1 | Aksesoris Handphone  |
|  2 | Aksesoris Komputer   |
|  3 | Peralatan Elektronik |

#### Tabel products

| id | category_id |     name    |
|:--:|:-----------:|:-----------:|
|  1 |      3      | Televisi    |
|  2 |      3      | Mesin cuci  |
|  3 |      1      | Power bank  |
|  4 |      2      | Monitor     |
|  5 |      2      | SSD         |
|  6 |      1      | Casing HP   |
|  7 |      3      | Rice cooker |
|  8 |      2      | HDD         |
|  9 |      1      | Charger HP  |

Perhatikan kolom **category_id** pada tabel **products** diatas. Dari namanya, kita bisa menyimpulkan bahwa kolom ini direferensikan pada tabel **categories** kolom **id**. Sebenarnya bisa saja kita gunakan nama lain, hanya saja saya rasa itu akan menyulitkan. Dan jika kita cermati, memang benar, data-data pada kolom **category_id** tersebut, diambil dari data kolom **id** pada tabel **categories**. Inilah yang dinamakan relasi **_one to many_**, dimana satu **category** bisa memiliki banyak **products** (one category to many products).

Berikut langkah-langkah untuk membuat relasi **_one to many_**:

**Buat database dengan nama belajar_relasi**

    create database belajar_relasi;

    use belajar_relasi;

**Buat tabel categories**

    create table categories(
    id int auto_increment primary key,
    name varchar(100) not null
    ) engine = InnoDB;

**Buat tabel products**

    create table products (
    id int auto_increment primary key,
    category_id int not null,
    name varchar(100) not null
    ) engine = InnoDB;

**Insert data pada tabel categories**

    insert into categories(name) values
    ('Aksesoris Handphone'),
    ('Aksesoris Komputer'),
    ('Peralatan Elektronik');


**Buat constraint untuk mengimplementasikan relasi one to many**

Kita beri nama constraint ini **fk_products_categories**:

    alter table products add constraint fk_products_categories foreign key (category_id references categories (id);

Constraint ini dibuat agar data-data yang ada pada kolom **category_id** (tabel **_products_**) direferensikan pada kolom **id** (tabel **_categories_**). Artinya, jika data yang dimasukkan pada kolom **category_id** tidak terdapat pada kolom **id**, maka secara otomatis data tersebut akan ditolak. 


Sekarang kita buat EER Diagram untuk melihat relasi antar tabelnya, kebetulan saya menggunakan MySQL Workbench. Berikut screenshoot pembuatannya:

![EER Diagram 01](/assets/img/2021-05-15/01.png)

![EER Diagram 02](/assets/img/2021-05-15/02.png)

![EER Diagram 03](/assets/img/2021-05-15/03.png)

![EER Diagram 04](/assets/img/2021-05-15/04.png)

![EER Diagram 05](/assets/img/2021-05-15/05.png)

![EER Diagram 06](/assets/img/2021-05-15/06.png)

![EER Diagram 07](/assets/img/2021-05-15/07.png)

![EER Diagram 08](/assets/img/2021-05-15/08.png)

![EER Diagram 09](/assets/img/2021-05-15/09.png)

Perhatikan diagram di atas, terdapat garis penghubung antara kedua tabel tersebut. Jika kita klik garis penghubungnya, diperoleh gambar berikut:

![EER Diagram 10](/assets/img/2021-05-15/10.png)

**Uji constraint**

Untuk menguji constraint yang kita buat, coba masukkan data pada kolom **category_id** (tabel **_products_**) dengan data yang tidak ada pada kolom **id** (tabel **_categories_**).

Sebelumnya, kita tampilkan dulu data pada tabel **categories**:

![Data pada tabel categories](/assets/img/2021-05-15/11.png)

Sekarang, coba insert data pada tabel **products**:

    insert into products(category_id, name) values (4, 'Mesin jahit');

![Error insert products](/assets/img/2021-05-15/13.png)

Error di atas terjadi karena kita coba memasukkan data yang tidak ada pada kolom **id** (tidak ada data dengan **id** 4 di tabel **categories**).

**Insert data products berdasarkan kolom id pada tabel categories**

Sekarang, kita coba masukkan data pada kolom **category_id** (tabel **_products_**) berdasarkan data yang ada pada kolom **id** (tabel **_categories_**):

    insert into products(category_id, name) values 
    (3, 'Televisi'),
    (3, 'Mesin cuci'),
    (1, 'Power bank'),
    (2, 'Monitor'),
    (2, 'SSD'),
    (1, 'Casing HP'),
    (3, 'Rice cooker'),
    (2, 'HDD'),
    (1, 'Charger HP');

![Success insert products](/assets/img/2021-05-15/15.png)

Tampilkan data pada tabel **products**:

![Data pada tabel products](/assets/img/2021-05-15/12.png)

**Menampilkan products berdasarkan category**

Langkah terakhir, tampilkan data **products** berdasarkan **categories**.

    select b.name as categories_name, a.name as products_name from products a inner join categories b on a.category_id=b.id;

![Join table](/assets/img/2021-05-15/14.png)

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