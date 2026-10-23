// ================= قنوات باقة بي إن سبورت =================
const beinChannels = [
    {id: 'bein_sd_1', name: 'beIN SPORTS 1 SD', url: 'http://154.70.152.200:8080/live/16185949120247/12129772068661/677057.ts?token=yaacXaU.fUXcf.X.UUacd.yHXHcXHfaH.X.y.MD.ts.0380b755451484c493e79dff599ce30c82b65b6daa77676fff78351e866933a8...bGtpanU5NTAuc2l0ZToyMDUy', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_sd_2', name: 'beIN SPORTS 2 SD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/677067.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_sd_3', name: 'beIN SPORTS 3 SD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/677068.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_sd_4', name: 'beIN SPORTS 4 SD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/677069.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_sd_5', name: 'beIN SPORTS 5 SD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/677070.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_sd_6', name: 'beIN SPORTS 6 SD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/677071.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_sd_7', name: 'beIN SPORTS 7 SD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/677072.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_hd_1', name: 'beIN SPORTS 1 HD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/677012.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_hd_2', name: 'beIN SPORTS 2 HD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/677013.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_hd_3', name: 'beIN SPORTS 3 HD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/677014.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_hd_4', name: 'beIN SPORTS 4 HD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/677042.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_hd_5', name: 'beIN SPORTS 5 HD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/677043.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_hd_6', name: 'beIN SPORTS 6 HD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/677044.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_hd_7', name: 'beIN SPORTS 7 HD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/677045.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_hd_8', name: 'beIN SPORTS 8 HD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/677046.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_hd_9', name: 'beIN SPORTS 9 HD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/677047.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_4k_1', name: 'beIN SPORTS 1 4K', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/676985.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_4k_2', name: 'beIN SPORTS 2 4K', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/676986.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_4k_3', name: 'beIN SPORTS 3 4K', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/676987.ts', logo: 'https://iili.io/nha0uSV.md.jpg'},
    {id: 'bein_4k_4', name: 'beIN SPORTS 4 4K', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/676988.ts', logo: 'https://iili.io/nha0uSV.md.jpg'}
];

// ================= قنوات باقة ألوان الرياضية =================
const alwanChannels = [
    {id: 'alwan_4k_1', name: 'Alwan Sport 1 4k', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649689.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'},
    {id: 'alwan_4k_2', name: 'Alwan Sport 2 4k', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649690.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'},
    {id: 'alwan_4k_3', name: 'Alwan Sport 3 4k', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649691.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'},
    {id: 'alwan_4k_4', name: 'Alwan Sport 4 4k', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649692.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'},
    {id: 'alwan_4k_5', name: 'Alwan Sport 5 4k', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649693.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'},
    {id: 'alwan_4k_6', name: 'Alwan Sport 6 4k', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649694.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'},
    {id: 'alwan_hd_1', name: 'Alwan Sport 1 HD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649702.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'},
    {id: 'alwan_hd_2', name: 'Alwan Sport 2 HD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649703.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'},
    {id: 'alwan_hd_3', name: 'Alwan Sport 3 HD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649704.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'},
    {id: 'alwan_hd_4', name: 'Alwan Sport 4 HD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649705.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'},
    {id: 'alwan_hd_5', name: 'Alwan Sport 5 HD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649706.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'},
    {id: 'alwan_hd_6', name: 'Alwan Sport 6 HD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649707.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'},
    {id: 'alwan_sd_1', name: 'Alwan Sport 1 SD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649708.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'},
    {id: 'alwan_sd_2', name: 'Alwan Sport 2 SD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649709.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'},
    {id: 'alwan_sd_3', name: 'Alwan Sport 3 SD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649710.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'},
    {id: 'alwan_sd_4', name: 'Alwan Sport 4 SD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649711.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'},
    {id: 'alwan_sd_5', name: 'Alwan Sport 5 SD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649712.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'},
    {id: 'alwan_sd_6', name: 'Alwan Sport 6 SD', url: 'http://live-albashatv.site/mm?url=http://lkiju950.site:2052/live/16185949120247/12129772068661/649713.ts', logo: 'https://iili.io/nhcuPQR.md.jpg'}
];

// ================= قنوات باقة Solo Sport =================
const soloChannels = [
    {id: 'solo_hd_1', name: 'Solo Sport 1 HD', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/723479.ts', logo: 'https://i.ibb.co/CpwWwryK/image-b27bb3f5.jpg'},
    {id: 'solo_hd_2', name: 'Solo Sport 2 HD', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/723483.ts', logo: 'https://i.ibb.co/CpwWwryK/image-b27bb3f5.jpg'},
    {id: 'solo_hd_3', name: 'Solo Sport 3 HD', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/723487.ts', logo: 'https://i.ibb.co/CpwWwryK/image-b27bb3f5.jpg'},
    {id: 'solo_hd_4', name: 'Solo Sport 4 HD', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/723491.ts', logo: 'https://i.ibb.co/CpwWwryK/image-b27bb3f5.jpg'},
    {id: 'solo_hd_5', name: 'Solo Sport 5 HD', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/723495.ts', logo: 'https://i.ibb.co/CpwWwryK/image-b27bb3f5.jpg'},
    {id: 'solo_sd_1', name: 'Solo Sport 1 SD', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/723480.ts', logo: 'https://i.ibb.co/CpwWwryK/image-b27bb3f5.jpg'},
    {id: 'solo_sd_2', name: 'Solo Sport 2 SD', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/723484.ts', logo: 'https://i.ibb.co/CpwWwryK/image-b27bb3f5.jpg'},
    {id: 'solo_sd_3', name: 'Solo Sport 3 SD', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/723488.ts', logo: 'https://i.ibb.co/CpwWwryK/image-b27bb3f5.jpg'},
    {id: 'solo_sd_4', name: 'Solo Sport 4 SD', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/723492.ts', logo: 'https://i.ibb.co/CpwWwryK/image-b27bb3f5.jpg'},
    {id: 'solo_sd_5', name: 'Solo Sport 5 SD', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/723496.ts', logo: 'https://i.ibb.co/CpwWwryK/image-b27bb3f5.jpg'}
];

// ================= قنوات الكأس =================
const alkassChannels = [
    {id: 'alkass_1', name: 'Al Kass 1', url: 'http://4576.live-44359.xyz/live/2487903738/ez94z02zgm/18747.m3u8', logo: 'https://i.ibb.co/DgpMKgN1/large-20260828213617-1787942177-551.jpg'},
    {id: 'alkass_2', name: 'Al Kass 2', url: 'http://4576.live-44359.xyz/live/2487903738/ez94z02zgm/18746.m3u8', logo: 'https://i.ibb.co/DgpMKgN1/large-20260828213617-1787942177-551.jpg'},
    {id: 'alkass_3', name: 'Al Kass 3', url: 'http://4576.live-44359.xyz/live/2487903738/ez94z02zgm/18745.m3u8', logo: 'https://i.ibb.co/DgpMKgN1/large-20260828213617-1787942177-551.jpg'},
    {id: 'alkass_4', name: 'Al Kass 4', url: 'http://4576.live-44359.xyz/live/2487903738/ez94z02zgm/18744.m3u8', logo: 'https://i.ibb.co/DgpMKgN1/large-20260828213617-1787942177-551.jpg'},
    {id: 'alkass_5', name: 'Al Kass 5', url: 'http://4576.live-44359.xyz/live/2487903738/ez94z02zgm/458811.m3u8', logo: 'https://i.ibb.co/DgpMKgN1/large-20260828213617-1787942177-551.jpg'}
];

// ================= قناة ثمانية =================
const thmanyahChannels = [
    {id: 'thamanya_1', name: 'thamanya sport 1', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/646090.ts', logo: 'https://i.ibb.co/fdnXrW7B/IMG-4055be1a-9779-47d1-a0e6-7e0ae8f6df1c.jpg'},
    {id: 'thamanya_2', name: 'thamanya sport 2', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/646091.ts', logo: 'https://i.ibb.co/fdnXrW7B/IMG-4055be1a-9779-47d1-a0e6-7e0ae8f6df1c.jpg'},
    {id: 'thamanya_3', name: 'thamanya sport 3', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/231971.ts', logo: 'https://i.ibb.co/fdnXrW7B/IMG-4055be1a-9779-47d1-a0e6-7e0ae8f6df1c.jpg'}
];

// ================= قنوات إم بي سي =================
const mbcChannels = [
    {id: 'mbc_1', name: 'MBC 1', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/5123.ts', logo: 'https://iili.io/nh0Gup4.md.jpg'},
    {id: 'mbc_2', name: 'MBC 2', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/5124.ts', logo: 'https://iili.io/nh0Gup4.md.jpg'},
    {id: 'mbc_3', name: 'MBC 3', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/5125.ts', logo: 'https://iili.io/nh0Gup4.md.jpg'},
    {id: 'mbc_4', name: 'MBC 4', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/5126.ts', logo: 'https://iili.io/nh0Gup4.md.jpg'},
    {id: 'mbc_5', name: 'MBC 5', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/5127.ts', logo: 'https://iili.io/nh0Gup4.md.jpg'},
    {id: 'mbc_lraq', name: 'MBC Iraq', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/5134.ts', logo: 'https://iili.io/nh0Gup4.md.jpg'},
    {id: 'mbc_drama', name: 'MBC Drama', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/5128.ts', logo: 'https://iili.io/nh0Gup4.md.jpg'},
    {id: 'mbc_action', name: 'MBC Action', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/5129.ts', logo: 'https://iili.io/nh0Gup4.md.jpg'},
    {id: 'mbc_max', name: 'MBC Max', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/5130.ts', logo: 'https://iili.io/nh0Gup4.md.jpg'},
    {id: 'mbc_bollywood', name: 'MBC Bollywood', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/5131.ts', logo: 'https://iili.io/nh0Gup4.md.jpg'},
    {id: 'mbc_persia', name: 'MBC Persia', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/5132.ts', logo: 'https://iili.io/nh0Gup4.md.jpg'}
];

// ================= منصات شاهد VIP والترفيه =================
const vipChannels = [
    {id: 'shahid_films', name: 'Shahid Films', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/192753.ts', logo: 'https://iili.io/nh0lnJR.md.jpg'},
    {id: 'shahid_turkish', name: 'Shahid Turkish', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/192741.ts', logo: 'https://iili.io/nh0lnJR.md.jpg'},
    {id: 'shahid_bab', name: 'Shahid Bab Al-Hara', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/192768.ts', logo: 'https://iili.io/nh0lnJR.md.jpg'},
    {id: 'shahid_kaber', name: 'Shahid ALkaber Aoe', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/192776.ts', logo: 'https://iili.io/nh0lnJR.md.jpg'},
    {id: 'shahid_masrah', name: 'Shahid Masrah', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/192764.ts', logo: 'https://iili.io/nh0lnJR.md.jpg'},
    {id: 'shahid_egypt', name: 'Shahid Masrah Egypt', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/192765.ts', logo: 'https://iili.io/nh0lnJR.md.jpg'},
    {id: 'shahid_miraya', name: 'Shahid Miraya', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/192769.ts', logo: 'https://iili.io/nh0lnJR.md.jpg'},
    {id: 'shahid_anime', name: 'Shahid Animetown', url: 'http://silka.m3um9xplus.org:2052/live/10375497945304/24779171855387/192642.ts', logo: 'https://iili.io/nh0lnJR.md.jpg'}
];
