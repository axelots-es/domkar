/* ===== EDIT DI SINI: nomor WhatsApp, paket, testimoni, FAQ ===== */
window.SITE = {
    waNumber: "6287787502950", // format 62xxxxxxxxxx tanpa + atau 0 di depan
    // ===== PILIHAN PAKET & LAYANAN =====
    // catalogUrl: Tautan Google Drive katalog (default langsung ke https://drive.google.com/ atau ganti dengan link folder/file Anda)
    packages: [
        {
            name: "Catering",
            emoji: "🍱",
            badge: "Paling Populer",
            desc: "Melayani pesanan catering kotakan, prasmanan, dan tumpeng nampan lezat higienis untuk berbagai acara kantor, keluarga, lamaran, maupun nikahan.",
            catalogUrl: "https://drive.google.com/",
            waMessage: "Assalamualaikum Dombastis. saya ingin pesan catering"
        },
        {
            name: "Aqiqah",
            emoji: "🐑",
            badge: "Sesuai Syariat",
            desc: "Layanan aqiqah siap saji yang praktis, higienis, dan berkah. Olahan daging domba pilihan bebas bau prengus dalam bentuk box atau prasmanan.",
            catalogUrl: "https://drive.google.com/",
            waMessage: "Assalamualaikum Dombastis. saya ingin pesan aqiqah"
        },
        {
            name: "Daging Domba",
            emoji: "🥩",
            badge: "Segar & Halal",
            desc: "Penyediaan karkas dan daging domba segar berkualitas tinggi langsung dari peternakan kami. Terjamin halal, higienis, dan siap kirim.",
            catalogUrl: "https://drive.google.com/",
            waMessage: "Assalamualaikum Dombastis. saya ingin pesan daging domba"
        },
        {
            name: "Kunjungan Edu Farm",
            emoji: "🏡",
            badge: "Wisata Keluarga",
            desc: "Wisata edukasi peternakan ramah keluarga dan anak. Interaksi memberi pakan domba, outbound seru, serta santap kuliner di resto asri.",
            catalogUrl: "https://drive.google.com/",
            waMessage: "Assalamualaikum Dombastis. saya ingin pesan kunjungan edu farm"
        }
    ],
    // ===== KEUNGGULAN =====
    // Pilihan icon: "fasilitas", "halal", "menu", "kepuasan", atau masukkan emoji/SVG pilihan Anda
    perks: [
        ["fasilitas", "Fasilitas Lengkap", "Rumah Makan, Venue, Sound, Proyektor, wisata edukasi, lapangan outbond semua ada di resto kami."],
        ["halal", "Jaminan Halal", "Sedari pemilihan domba sampai menjadi hidangan standar halal kami jaga sesuai syariat."],
        ["menu", "Varian menu Nusantara & Timur Tengah", "Menyediakan aneka hidangan Nusantara dan Timur Tengah yang ramah budget dan menggugah selera."],
        ["kepuasan", "Kepuasan anda, prioritas kami", "Kualitas kebersihan, ketepatan waktu dan rasa kami jaga agar bisa memberikan hidangan yang terbaik untuk segala acara anda."]
    ],
    // ===== KLIEN KAMI =====
    // Untuk menambahkan logo: Masukkan file gambar (png/webp/svg) ke folder 'image/clients/' 
    // lalu tulis path-nya pada 'logo', contoh: logo: "image/clients/eagle.png"
    // Jika 'logo' dibiarkan kosong (""), otomatis menampilkan kotak inisial.
    clients: [
        { name: "Eagle Sporting Good", logo: "image/egle.png", initial: "ESG" },
        { name: "PT SAI", logo: "image/sai.png", initial: "SAI" },
        { name: "DISNAKER Nganjuk", logo: "image/disnaker.webp", initial: "DIS" },
        { name: "BLK Nganjuk", logo: "image/blk.webp", initial: "BLK" },
        { name: "Nucless", logo: "image/nucless.webp", initial: "NUC" },
        { name: "LPK Insan Kamil", logo: "image/lpk.webp", initial: "IK" },
        { name: "LPNU Nganjuk", logo: "image/lpnu.png", initial: "LPNU" }
    ],
    reviews: [
        ["Rina A.", 5, "Porsinya pas, sayurnya masih segar. Langganan makan siang kantor."],
        ["Budi S.", 5, "Pesan katering 50 box untuk arisan, tepat waktu dan rapi."],
        ["Dewi K.", 4, "Paket keluarganya cukup untuk 5 orang. Sambalnya juara."]
    ],
    faqs: [
        ["Bisa request catering tanpa olahan daging domba?", "Bisa, Silahkan konsultasi ke tim kami untuk request menu anda via whatsapp"],
        ["Area antar sampai mana?", "Kota Nganjuk, Kediri dan Jombang"],
        ["Bisa mengadakan acara apa saja di Dombastis?", "Kumpul keluarga, pengajian, seminar,rapat, lamaran, wedding, aqiqah, dan acara lainnya."],
        ["Jam operasional resto?", "Karena sekarang baru soft opening, sekarang kami baru buka di Sabtu & Minggu mulai jam 6 pagi"],
        ["Melayani delivery order?", "Ya, kami melayani pesan antar ke rumah anda untuk free ongkirbisa mengikuti jadwal kirim siang jam 11 & sore jam 5"]
    ]
};
