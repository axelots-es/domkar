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
  $("#packages").innerHTML = S.packages.map(function (p, i) {
    var msg = p.catering
      ? "Halo, saya ingin menanyakan *Paket Katering/Acara* untuk ... porsi pada tanggal ... Mohon info detailnya."
      : "Halo, saya ingin memesan *" + p.name + " (" + p.priceLabel + ")*. Mohon info ketersediaan dan estimasi pengantaran. Terima kasih.";
    var badge = p.best ? '<span class="badge best">⭐ Best Seller</span>' : (p.badge ? '<span class="badge">' + esc(p.badge) + "</span>" : "");
    return '<article class="card' + (p.best ? " featured" : "") + '">' + badge +
      '<div class="ph" role="img" aria-label="Ilustrasi ' + esc(p.name) + '">' + p.emoji + "</div>" +
      "<h3>" + esc(p.name) + '</h3><p class="for">👥 ' + esc(p.for) + "</p>" +
      '<p class="price">' + esc(p.priceLabel) + '</p><p class="per">' + esc(p.perHead) + "</p>" +
      '<ul class="ticks">' + p.items.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" +
      '<p class="note">' + esc(p.note) + "</p>" +
      '<a class="btn block" target="_blank" rel="noopener noreferrer" href="' + wa(msg) + '" data-pkg="' + esc(p.name) + '">Pesan Paket Ini</a></article>';
  }).join("");

  // Keunggulan, testimoni, FAQ
  $("#perks").innerHTML = S.perks.map(function (k) {
    return '<div class="perk"><span class="ico" aria-hidden="true">' + k[0] + "</span><h3>" + esc(k[1]) + "</h3><p>" + esc(k[2]) + "</p></div>";
  }).join("");
  $("#reviews").innerHTML = S.reviews.map(function (r) {
    return '<figure class="rev"><div class="stars" aria-label="Rating ' + r[1] + ' dari 5">' + "★".repeat(r[1]) + "☆".repeat(5 - r[1]) + "</div><blockquote>" + esc(r[2]) + "</blockquote><figcaption>" + esc(r[0]) + "</figcaption></figure>";
  }).join("");
  $("#faqs").innerHTML = S.faqs.map(function (f) {
    return "<details><summary>" + esc(f[0]) + "</summary><p>" + esc(f[1]) + "</p></details>";
  }).join("");

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

  // Floating button muncul setelah hero
  var fab = $("#fab"), hero = $(".hero");
  new IntersectionObserver(function (en) {
    fab.classList.toggle("show", !en[0].isIntersecting);
  }).observe(hero);
})();
