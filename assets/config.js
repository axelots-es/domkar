/* ===== EDIT DI SINI: nomor WhatsApp, paket, testimoni, FAQ ===== */
window.SITE = {
  waNumber: "6281234567890", // format 62xxxxxxxxxx tanpa + atau 0 di depan
  packages: [
    { name: "Paket Personal", for: "Untuk 1 orang", emoji: "🍱", price: 25000, priceLabel: "Rp 25.000", perHead: "Rp 25.000/orang",
      items: ["1 nasi", "1 lauk utama", "1 sayur", "1 pelengkap", "1 minuman"], note: "Siap antar ±45 menit" },
    { name: "Paket Berdua", for: "Untuk 2 orang", emoji: "🍛", price: 45000, priceLabel: "Rp 45.000", perHead: "± Rp 22.500/orang", badge: "Paling Hemat",
      items: ["2 nasi", "2 lauk utama", "1 sayur", "2 pelengkap", "2 minuman"], note: "Siap antar ±45 menit" },
    { name: "Paket Keluarga", for: "Untuk 4–6 orang", emoji: "🍲", price: 120000, priceLabel: "Rp 120.000", perHead: "± Rp 20.000/orang", best: true,
      items: ["5 nasi", "3 jenis lauk", "2 sayur", "Sambal", "Kerupuk", "4 minuman"], note: "Pesan 2 jam sebelumnya" },
    { name: "Paket Katering / Acara", for: "Minimal 20 porsi", emoji: "🎉", price: 0, priceLabel: "Mulai Rp 28.000/porsi", perHead: "Harga per porsi", badge: "Untuk Acara", catering: true,
      items: ["Nasi box atau prasmanan", "Pilihan menu", "Kemasan rapi", "Opsi pengantaran"], note: "Pesan minimal H-2" }
  ],
  perks: [
    ["🌿", "Bahan segar setiap hari", "Dibeli pagi, dimasak hari itu juga."],
    ["🧼", "Dapur bersih", "Proses memasak higienis dan rapi."],
    ["🍚", "Porsi mengenyangkan", "Harga jujur, tanpa biaya tersembunyi."],
    ["🛵", "Antar tepat waktu", "Dikemas rapi dan sampai sesuai jadwal."]
  ],
  reviews: [
    ["Rina A.", 5, "Porsinya pas, sayurnya masih segar. Langganan makan siang kantor."],
    ["Budi S.", 5, "Pesan katering 50 box untuk arisan, tepat waktu dan rapi."],
    ["Dewi K.", 4, "Paket keluarganya cukup untuk 5 orang. Sambalnya juara."]
  ],
  faqs: [
    ["Berapa minimal pemesanan katering?", "Minimal 20 porsi. Pesan paling lambat H-2 sebelum acara."],
    ["Area antar sampai mana?", "Kota Malang dan sekitarnya. Ongkir menyesuaikan jarak."],
    ["Jam operasionalnya?", "Setiap hari 08.00–20.00."],
    ["Metode pembayaran?", "Transfer bank, QRIS, atau tunai saat antar."],
    ["Bisa request menu atau alergi?", "Bisa. Sebutkan di chat WhatsApp sebelum konfirmasi."]
  ]
};
