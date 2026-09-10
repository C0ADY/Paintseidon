/* =========================================================
   Paintseidon — site behaviour
   1. Mobile navigation toggle
   2. Footer copyright year
   3. Quote form -> pre-filled mailto: submission
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1. mobile nav ---------- */
  var navToggle = document.getElementById("navToggle");
  var navList = document.getElementById("navList");

  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      var isOpen = navList.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- 2. footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- 3. quote form ---------- */
  // IMPORTANT: replace the address below with the real business email
  // before publishing the site. See README.md for details.
  var QUOTE_RECIPIENT_EMAIL = "email@example.com";

  var form = document.getElementById("quoteForm");
  var status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = form.name.value.trim();
      var phone = form.phone.value.trim();
      var email = form.email.value.trim();
      var address = form.address.value.trim();
      var service = form.service.value;
      var size = form.size.value.trim();
      var timing = form.timing.value.trim();
      var message = form.message.value.trim();

      // basic required-field validation
      var missing = [];
      if (!name) missing.push("Full name");
      if (!phone) missing.push("Phone number");
      if (!address) missing.push("Property address / postcode");
      if (!service) missing.push("Service needed");

      if (missing.length) {
        status.textContent =
          "Please fill in: " + missing.join(", ") + ".";
        status.className = "form-status is-error";
        return;
      }

      var subject = "Quote request from " + name;

      var bodyLines = [
        "New quote request from the website:",
        "",
        "Name: " + name,
        "Phone: " + phone,
        "Email: " + (email || "Not provided"),
        "Property address / postcode: " + address,
        "Service needed: " + service,
        "Rough size: " + (size || "Not provided"),
        "Preferred timing: " + (timing || "Not provided"),
        "",
        "Job details:",
        message || "(none provided)"
      ];

      var mailtoLink =
        "mailto:" + encodeURIComponent(QUOTE_RECIPIENT_EMAIL) +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      status.textContent =
        "Opening your email app with these details filled in — " +
        "just hit send from there to complete your request.";
      status.className = "form-status is-success";

      window.location.href = mailtoLink;
    });
  }
});
