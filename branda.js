function toggleProfile() {
  const profile = document.getElementById("profile");
  if (profile.style.display === "none" || profile.style.display === "") {
    profile.style.display = "block"; // tampilkan
  } else {
    profile.style.display = "none"; // sembunyikan lagi
  }
}
