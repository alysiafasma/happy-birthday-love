document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    let currentPage = 1;

    const pages = [
        `
        <div class="container">
            <div class="icon" id="gift-icon">🎁</div>
            <h1 id="message" style="display:none;">Selamat Ulang Tahun, Sayang!</h1>
            <button id="nextButton" style="display:none;">Klik untuk Lanjut</button>
        </div>
        `,
        `
        <div class="game-container">
        <img class="background-image" src="The Art Showcase.jpg" alt="Background">
        <img class="character" src="fiki.png" alt="Character">
        <div class="dialog-box" id="dialog-box">
            <div class="bubble" id="bubble">
                <p id="dialog-text">Halo! Namaku Muhammad Fiqri Adham Iqbal.</p>
            </div>
            <nav><button class="next-button">➡️</button></nav>
        </div>
    </div>
        `,
        `
        <div class="container">
            <div class="flex-container">
                <div class="text-content">
                    <p>Kadang hidup menyimpan kejutan indah yang tak pernah terbayang. Kehadiranmu, yang datang di</p>
                    <p>luar dugaan, adalah anugerah yang tak bisa kulukiskan dengan kata-kata. Saat langkahmu</p>
                    <p>mendekat, dunia yang semula terasa biasa saja berubah menjadi penuh warna.</p>
                    <p>Kamu adalah keajaiban yang tak pernah kutahu sedang kutunggu. Dalam ketidaksengajaan yang</p>
                    <p>manis itu, kamu hadir, membawa hangatnya kebahagiaan yang tak pernah kusangka akan singgah di</p>
                    <p>hatiku. Kehadiranmu mengajarkanku bahwa takdir selalu punya cara istimewa untuk membuat hati ini penuh rasa syukur.</p>
            <p>Dan hari ini, di hari ulang tahunmu, aku semakin menyadari betapa berharganya dirimu. Aku</p>
                    <p>bersyukur pada Sang Maha Kuasa karena menghadirkanmu ke dunia ini, karena memberiku</p>
                    <p>kesempatan mencintai seseorang seindah dirimu. Terima kasih sudah lahir, menjadi dirimu yang luar biasa, dan mengisi hidupku dengan kebahagiaan yang tak terhingga.</p>
                    <p>Selamat ulang tahun, sayang. Kamu adalah alasan untuk selalu bersyukur setiap hari. 💖</p>
                </div>
            </div>
            <nav><button class="next-button">➡️</button></nav>
        </div>
        `,
        `
        <div class="container">
            <p>PKL ini adalah awal dari langkah besar aa menuju masa depan. Caca tahu aa punya kemampuan, 
            semangat,</p>
            <p>dan tekad yang luar biasa. Meski mungkin nanti ada hari-hari yang melelahkan atau 
            tantangan yang berat, caca yakin aa bisa melewatinya dengan baik.</p>
            
            <p>Ingat, caca selalu ada di sini untuk mendukung aa. Setiap usaha yang aa lakukan adalah bentuk 
            perjuangan aa, dan itu membuat</p>
            <p>caca semakin bangga sama aa. Jangan takut untuk belajar, 
            jangan ragu untuk bertanya, dan jangan lupa untuk istirahat kalau mulai lelah.</p>
            
            <p>Aa adalah orang yang kuat dan luar biasa, dan caca yakin aa akan memberikan yang terbaik. 
            Semangat, ya, cintaku.</p>
            <p>Caca percaya sama aa, dan caca akan selalu ada di sini untuk menyemangati 
            setiap langkah aa.</p>
            
            <p>Caca sayang aa, semangat terus! ❤️✨</p>
            

            <nav><button class="next-button">➡️</button></nav>
        </div>
        `,
        `
       <div class="container">
           <img src="Desain tanpa judul.png" alt="Gambar Fullscreen" class="fullscreen-image">
           <nav><button class="next-button">➡️</button></nav>
        </div>

        `,
        `
        <div class="container">
            <div class="icon">🎉</div>
            <h1>Selamat Ulang Tahun, Mi Novio!</h1>
            <p>Semoga hari-harimu selalu bahagia. Aku sayang kamu! ❤️</p>
        </div>
        `
    ];

    const renderPage = () => {
        app.innerHTML = pages[currentPage - 1];

        // Tambahkan event listener ke elemen yang baru dirender
        const nextButton = app.querySelector(".next-button");
        if (nextButton) {
            nextButton.addEventListener("click", nextPage);
        }

        const giftIcon = app.querySelector("#gift-icon");
        if (giftIcon) {
            giftIcon.addEventListener("click", showMessage);
        }
    };

    const nextPage = () => {
        if (currentPage < pages.length) {
            currentPage++;
            renderPage();
        }
    };

    const showMessage = () => {
        const message = app.querySelector("#message");
        const nextButton = app.querySelector("#nextButton");

        if (message && nextButton) {
            message.style.display = "block";
            nextButton.style.display = "inline-block";

            // Tambahkan event listener untuk tombol "next"
            nextButton.addEventListener("click", nextPage);
        }
    };

    renderPage(); // Render halaman pertama saat dimuat
});
