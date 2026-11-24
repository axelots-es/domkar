(function () {
  var S = window.SITE, $ = function (s) { return document.querySelector(s); };
  var rp = function (n) { return "Rp " + n.toLocaleString("id-ID"); };
  function wa(text) { return "https://wa.me/" + S.waNumber + "?text=" + encodeURIComponent(text); }
  function track(name, params) {
    if (window.gtag) window.gtag("event", name, params || {});
    else if (window.console) console.debug("[event]", name, params || "");
  }
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  // Paket
  if ($("#packages") && S.packages) {
    $("#packages").innerHTML = S.packages.map(function (p) {
      var msg = p.waMessage || ("Assalamualaikum Dombastis. saya ingin pesan " + p.name.toLowerCase());
      var badge = p.best ? '<span class="badge best">⭐ Best Seller</span>' : (p.badge ? '<span class="badge">' + esc(p.badge) + "</span>" : "");
      var driveUrl = p.catalogUrl || "https://drive.google.com/";
      var desc = p.desc || p.for || "";
      var visual = p.image
        ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '">'
        : p.emoji;
      return '<article class="card' + (p.best ? " featured" : "") + '">' + badge +
        '<div class="ph" role="img" aria-label="Ilustrasi ' + esc(p.name) + '">' + visual + "</div>" +
        "<h3>" + esc(p.name) + "</h3>" +
        '<p class="card-desc">' + esc(desc) + "</p>" +
        '<div class="card-actions">' +
          '<a class="btn btn-ghost block btn-katalog" target="_blank" rel="noopener noreferrer" href="' + esc(driveUrl) + '">Lihat Katalog</a>' +
          '<a class="btn block" target="_blank" rel="noopener noreferrer" href="' + wa(msg) + '" data-pkg="' + esc(p.name) + '">Pesan Layanan</a>' +
        "</div>" +
      "</article>";
    }).join("");
  }

  // Klien Kami
  if ($("#clients") && S.clients) {
    $("#clients").innerHTML = S.clients.map(function (c) {
      var img = c.logo
        ? '<img src="' + esc(c.logo) + '" alt="Logo ' + esc(c.name) + '" loading="lazy">'
        : '<div class="klien-initial">' + esc(c.initial) + '</div>';
      return '<div class="klien-card">' + img + '<span>' + esc(c.name) + '</span></div>';
    }).join("");
  }

  // Keunggulan / Perks Icon Map
  var perkIcons = {
    "fasilitas": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l1-5h16l1 5"/><path d="M4 9v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"/><path d="M9 21V13h6v8"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/></svg>',
    "halal": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L4 5.5v6.8c0 5.4 3.4 10.4 8 11.7 4.6-1.3 8-6.3 8-11.7V5.5L12 2z" stroke-width="2"/><text x="12" y="13.5" text-anchor="middle" font-family="Poppins, Arial, sans-serif" font-weight="800" font-size="4" fill="currentColor" stroke="none" letter-spacing="0.4">HALAL</text><path d="M8.5 16.5c1.1.8 2.2 1.2 3.5 1.2s2.4-.4 3.5-1.2" stroke-width="1.5"/></svg>',
    "menu": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="currentColor"/><path d="M12 4v2"/><path d="M4 17a8 8 0 0 1 16 0H4z" stroke-width="2"/><path d="M2 19h20" stroke-width="2"/><path d="M9 13c1-.8 2-1 3-1s2 .2 3 1"/></svg>',
    "kepuasan": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8.5" r="6" stroke-width="2"/><polygon points="12,4.5 13.5,7.5 16.5,8 14.2,10.2 14.8,13.2 12,11.7 9.2,13.2 9.8,10.2 7.5,8 10.5,7.5" fill="currentColor" stroke="none"/><polyline points="8.5 14 7 21 12 18.5 17 21 15.5 14"/></svg>'
  };

  function getPerkIcon(key) {
    if (perkIcons[key]) return perkIcons[key];
    if (key === "🌿") return perkIcons["fasilitas"];
    if (key === "🧼") return perkIcons["halal"];
    if (key === "🍚") return perkIcons["menu"];
    if (key === "🛵") return perkIcons["kepuasan"];
    return key;
  }

  // Keunggulan, testimoni, FAQ
  $("#perks").innerHTML = S.perks.map(function (k) {
    var iconHtml = getPerkIcon(k[0]);
    return '<div class="perk"><span class="ico" aria-hidden="true">' + iconHtml + "</span><h3>" + esc(k[1]) + "</h3><p>" + esc(k[2]) + "</p></div>";
  }).join("");
  $("#reviews") && ($("#reviews").innerHTML = S.reviews.map(function (r) {
    return '<figure class="rev"><div class="stars" aria-label="Rating ' + r[1] + ' dari 5">' + "★".repeat(r[1]) + "☆".repeat(5 - r[1]) + "</div><blockquote>" + esc(r[2]) + "</blockquote><figcaption>" + esc(r[0]) + "</figcaption></figure>";
  }).join(""));
  $("#faqs").innerHTML = S.faqs.map(function (f) {
    return "<details><summary>" + esc(f[0]) + "</summary><p>" + esc(f[1]) + "</p></details>";
  }).join("");

  // Tombol Konsultasi FAQ
  var btnKonsultasi = $("#btn-konsultasi");
  if (btnKonsultasi) {
    var msgKonsultasi = "Assalamualaikum Dombastis. Saya ingin konsultasi pesanan saya.";
    btnKonsultasi.href = wa(msgKonsultasi);
    btnKonsultasi.target = "_blank";
    btnKonsultasi.rel = "noopener noreferrer";
  }

  // Tombol Testfood
  var btnTestfood = $("#btn-testfood");
  if (btnTestfood) {
    var msgTestfood = "Assalamualaikum Dombastis, saya tertarik untuk mengagendakan test food. Mohon informasinya. Terimakasih!";
    btnTestfood.href = wa(msgTestfood);
    btnTestfood.target = "_blank";
    btnTestfood.rel = "noopener noreferrer";
  }

  // Tautan WhatsApp umum
  var generic = "Halo, saya ingin memesan paket makanan. Mohon info ketersediaan. Terima kasih.";
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = wa(generic); a.target = "_blank"; a.rel = "noopener noreferrer";
  });

  // Analitik klik
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a"); if (!a) return;
    if (a.dataset.pkg) track("click_wa_package", { package: a.dataset.pkg });
    else if (a.dataset.wa) track("click_wa_" + a.dataset.wa);
    else if (a.hasAttribute("data-maps")) track("click_maps");
  });

  // Spotlight border – mengikuti posisi kursor pada card
  document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });

  // Floating button muncul setelah hero
  var fab = $("#fab"), hero = $(".hero");
  new IntersectionObserver(function (en) {
    fab.classList.toggle("show", !en[0].isIntersecting);
  }).observe(hero);
})();
