    // Menambahkan event listener untuk setiap tombol
    document.querySelectorAll('.toggle-info').forEach(button => {
        button.addEventListener('click', function() {
            const additionalInfo = this.nextElementSibling;
            if (additionalInfo.style.display === 'none' || additionalInfo.style.display === '') {
                additionalInfo.style.display = 'block';
                this.textContent = 'Sembunyikan Informasi Tambahan';
            } else {
                additionalInfo.style.display = 'none';
                this.textContent = 'Tampilkan Informasi Tambahan';
            }
        });
    });
    
    // Menambahkan efek fade-in saat halaman dimuat
    window.addEventListener('load', function() {
        document.querySelectorAll('.fade-in').forEach((element) => {
            element.classList.add('visible');
        });
    });
