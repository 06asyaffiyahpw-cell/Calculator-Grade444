// Toggle Music
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    if (music.paused) music.play();
    else music.pause();
}

// Hitung Nilai
function hitung() {
    let tugas = parseFloat(document.getElementById("tugas").value);
    let uh = parseFloat(document.getElementById("uh").value);
    let uts = parseFloat(document.getElementById("uts").value);
    let uas = parseFloat(document.getElementById("uas").value);
    let sas = parseFloat(document.getElementById("sas").value);

    if ([tugas, uh, uts, uas, sas].some(isNaN)) {
        document.getElementById("hasil").innerHTML = "⚠ Semua nilai harus diisi!";
        return;
    }

    // Bobot Otomotif
    let nilaiAkhir =
        (tugas * 0.20) +
        (uh * 0.20) +
        (uts * 0.20) +
        (uas * 0.20) +
        (sas * 0.20);

    // Grade
    let grade = "";
    if (nilaiAkhir >= 85) grade = "A";
    else if (nilaiAkhir >= 75) grade = "B";
    else if (nilaiAkhir >= 65) grade = "C";
    else if (nilaiAkhir >= 55) grade = "D";
    else grade = "E";

    document.getElementById("hasil").innerHTML =
        `<b>Nilai Akhir:</b> ${nilaiAkhir.toFixed(2)}<br>
         <b>Grade:</b> ${grade}`;
}
