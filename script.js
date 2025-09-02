const phSlider = document.getElementById("phSlider");
const phValue = document.getElementById("phValue");
const indikator = document.getElementById("indikator");
const resultColor = document.getElementById("resultColor");
const sifatLarutan = document.getElementById("sifatLarutan");

// Fungsi untuk menentukan warna berdasarkan data yang Anda berikan
function getPhColor(indikator, pH) {
  const colorData = {
    telang: {
      1: "#FF0000", // Merah
      2: "#C71585", // Magenta
      3: "#0000FF", // Biru
      4: "#9932CC", // Biru keunguan
      5: "#4B0082", // Ungu
      6: "#4B0082", // Ungu (Perkiraan: Asam lemah, warna ungu mulai stabil)
      7: "#ADD8E6", // Biru Pucat (Perkiraan: Menuju netral/basa lemah)
      8: "#ADD8E6", // Biru Pucat (Perkiraan: Basa lemah)
      9: "#ADD8E6", // Biru Pucat
      10: "#2F4F4F", // Hijau Pinus
      11: "#2E8B57", // Hijau Rusian
      12: "#2E8B57", // Hijau Rusian (Perkiraan: Hijau mulai stabil)
      13: "#FFFF00", // Kuning
      14: "#FFFF00", // Kuning (Perkiraan: Warna kuning tetap)
    },
    sirih: {
      1: "#90EE90", // Hijau bening
      2: "#FFFFFF", // Bening
      3: "#008000", // Hijau
      4: "#90EE90", // Hijau Pucat
      5: "#FFFFFF", // Bening
      6: "#FFFFFF", // Bening (Perkiraan: Warna bening tetap)
      7: "#ADFF2F", // Hijau-kuning (Perkiraan: Menuju netral/basa)
      8: "#ADFF2F", // Hijau-kuning (Perkiraan: Basa lemah)
      9: "#ADFF2F", // Hijau-kuning
      10: "#90EE90", // Hijau Pucat
      11: "#556B2F", // Hijau Keruh
      12: "#556B2F", // Hijau Keruh (Perkiraan: Warna keruh tetap)
      13: "#ADFF2F", // Kuning-hijau
      14: "#ADFF2F", // Kuning-hijau (Perkiraan: Warna tetap)
    },
    tomat: {
      1: "#DC143C", // Merah Pecah
      2: "#FF6347", // Merah Pucat
      3: "#00008B", // Biru Agak Gelap
      4: "#FF6347", // Merah Pucat
      5: "#FF0000", // Merah
      6: "#FF0000", // Merah (Perkiraan: Merah tetap)
      7: "#A9A9A9", // Abu-abu (Perkiraan: Netral)
      8: "#D2B48C", // Coklat Pucat (Perkiraan: Mulai basa)
      9: "#A52A2A", // Coklat Dilat
      10: "#FF6347", // Merah Pucat
      11: "#FF4500", // Oranye-merah
      12: "#FF4500", // Oranye-merah (Perkiraan: Warna tetap)
      13: "#FFFF00", // Kuning (Perkiraan: Mulai menguning)
      14: "#FFFF00", // Kuning (Perkiraan: Warna tetap)
    },
  };

  // Mengambil warna berdasarkan indikator dan pH
  const color = colorData[indikator][pH];
  return color || "#eee";
}

// Fungsi untuk menentukan sifat larutan
function getSifatLarutan(pH) {
  if (pH >= 1 && pH <= 6) {
    return "Asam";
  } else if (pH === 7) {
    return "Netral";
  } else {
    return "Basa";
  }
}

// Event listener untuk perubahan slider dan select box
function updateApp() {
  const currentPh = parseInt(phSlider.value);
  const selectedIndikator = indikator.value;

  phValue.textContent = `pH: ${currentPh}`;
  resultColor.style.backgroundColor = getPhColor(selectedIndikator, currentPh);
  sifatLarutan.textContent = `Sifat Larutan: ${getSifatLarutan(currentPh)}`;
}

// Inisialisasi awal
updateApp();

// Menambahkan event listener
phSlider.addEventListener("input", updateApp);
indikator.addEventListener("change", updateApp);
