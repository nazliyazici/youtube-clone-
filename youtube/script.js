const videos = [
    {
        "id": "1",
        "title": "Kaçak Gelinler-23.Bölüm",
        "description": "Kaçak Gelinler",
        "upload_date": "10 yıl önce",
        "views": "5,5 Mn",
        "url": "https://www.youtube.com/embed/CxJPvYas_kY?si=gKd6wgd076tRoiD8"
    },
    {
        "id": "2",
        "title": "Sürpriz (161. Bölüm) - Çok Güzel Hareketler 2",
        "description": "Sürpriz",
        "upload_date": "1 yıl önce",
        "views": "1,2 Mn",
        "url": "https://www.youtube.com/embed/Vh_uS9h4CY8?si=rbJnu_ZoxyOKyIg7"
    },
    {
        "id": "3",
        "title": "Mor ve Ötesi - Bir Derdim Var (Official Video)",
        "description": "Mor ve Ötesi",
        "upload_date": "11 yıl önce",
        "views": "136 Mn",
        "url": "https://www.youtube.com/embed/7RW8n4iXZbA?si=2FCqX9mzu_vLZkL9"
    },
    {
        "id": "4",
        "title": "İkiye On Kala - Kafamda Kentsel Dönüşümler",
        "description": "İkiye On Kala",
        "upload_date": "4 yıl önce",
        "views": "159 Mn",
        "url": "https://www.youtube.com/embed/hyPnLpRBZBE?si=5F_ajFXVEXafxbJn"
    },
    {
        "id": "5",
        "title": "Umut Kaya - Mor Yazma (Official Video)",
        "description": "Umut Kaya",
        "upload_date": "9 yıl önce",
        "views": "61 Mn",
        "url": "https://www.youtube.com/embed/mvS90kRKnv4?si=WP72nB9NGCrMHORq"
    },
    {
        "id": "6",
        "title": "SOLOTÜRK pilotu nasıl olunur? (SOLOTÜRK Pilotlarıyla Özel Röportaj)",
        "description": "SOLOTÜRK pilotu nasıl olunur?",
        "upload_date": "5 ay önce",
        "views": "18 B",
        "url": "https://www.youtube.com/embed/dFsKLHdpiSA?si=i0btWJjLFfxyyFpq"
    },


    {
        "id": "7",
        "title": "TOLKSHOW:Filtresiz | 1.Bölüm(İbrahim Büyükak)",
        "description": "25 Film",
        "upload_date": "2 ay önce",
        "views": "1,7 Mn",
        "url": "https://www.youtube.com/embed/Thq9jHohfwo?si=JTWci240CUqDbHy_"
    },

    {
        "id": "8",
        "title": "Aklını Alırım 3 - Çok Güzel Hareketler 2",
        "description": "Çok Güzel Hareketler",
        "upload_date": "4 ay önce",
        "views": "4,3 Mn",
        "url": "https://www.youtube.com/embed/0xnuAaiT8mw?si=VUHHhh4XVovDzxF1"
    },


    {
        "id": "9",
        "title": "Beyaz,Çağatay Ulusoy'a Yüklendi - Beyaz Show",
        "description": "Beyaz Show",
        "upload_date": "2 yıl önce",
        "views": "2,2 Mn",
        "url": "https://www.youtube.com/embed/rQTcM_MuBCs?si=BBc6kAxWxclTwqRh"
    },

    {
        "id": "10",
        "title": "NESİNİ ELEŞTİREYİM AYOL - PRENS",
        "description": "Murat Soner",
        "upload_date": "6 ay önce",
        "views": "5,5 Mn",
        "url": "https://www.youtube.com/embed/kPNkFbHutzo?si=bsYNaCDwe1t-piPy"
    },


    {
        "id": "11",
        "title": "Sıfır Kilometre Oyuncuları ile Ben Hiç Oynadık! Derya Pınar Ak - Ahmet Haktan Zavlak",
        "description": "Böcek Films",
        "upload_date": "5 ay önce",
        "views": "119 B",
        "url": "https://www.youtube.com/embed/AcT5Hf_eilY?si=LhKNRsNWX5Xc-3T-"
    },

    
    {
        "id": "12",
        "title": "Saatler Olsun (195.Bölüm) - Çok Güzel Hareketler 2",
        "description": "Çok Güzel Hareketler",
        "upload_date": "1 gün önce",
        "views": "839 B",
        "url": "https://www.youtube.com/embed/SDY04dlB1WI?si=HW2ScjTPRxhIRB71"
    }

];

const container = document.getElementById('videoContainer');
videos.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.classList.add('yt-video-card', 'col-md-4');
    videoCard.innerHTML = `
        <iframe class="w-200" height="200" src="${video.url}" 
          title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
          encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="d-flex mt-2">
          <button class="btn round-btn"><i class="bx bx-user"></i></button>
          <div>
            <div class="ms-3">
              <h5 class="video-title">${video.title}</h5>
              <p class="video-tag">${video.description}</p>
              <label>${video.views} görüntüleme</label> - 
              <label>${video.upload_date}</label>
            </div>
          </div>
        </div>
    `;
    container.appendChild(videoCard);
});





