function osisaj() {
    document.getElementById('frizura').innerHTML = document.getElementById('cupavac').value
        .replaceAll('Ć', 'C')
        .replaceAll('ć', 'c')
        .replaceAll('Č', 'C')
        .replaceAll('č', 'c')
        .replaceAll('Đ', 'Dj')
        .replaceAll('đ', 'dj')
        .replaceAll('Š', 'S')
        .replaceAll('š', 's')
        .replaceAll('Ž', 'Z')
        .replaceAll('ž', 'z');
}