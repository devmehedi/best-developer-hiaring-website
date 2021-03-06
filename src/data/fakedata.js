const tools = [
    {
        name: 'me-mairee',
        designation: 'senior developer',
        age: 30,
        img: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/449cef73172acee08825bccaaf27dfc7-714540731618083456.378982/B9604C2D-B162-4CF5-B0F6-66CE2B70611C',
        country: 'USA',
        salary: 2500
    },
    {
        name: 'ahmeddhahak',
        designation: 'react-developer',
        age: 25,
        img: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/f59a7287c1c12f60efd4d7a33211e4be-967768291629940320470/JPEG_20210826_021159_914283320865668394.jpg',
        country: 'CANADA',
        salary: 1800
    },
    {
        name: 'aliahmed',
        designation: 'junior developer',
        age: 27,
        img: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/f9026021776413a56bd3b35e3e57f13f-1591723073681/fa8f3e4a-c9d5-4c06-a1eb-cd7b26963dd2.jpg',
        country: 'CHINA',
        salary: 1000
    },
    {
        name: 'hamza-yaqoob',
        designation: 'wordpress developer',
        age: 29,
        img: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/492cd61aff5d29dea6b8d4b2aa5f3055-1551525585554/de82fb4b-70db-468b-b87e-0f09dbd3c5a2.jpg',
        country: 'NEWYORK',
        salary: 1700
    },
    {
        name: 'mert',
        designation: 'senior developer',
        age: 35,
        img: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/bb0654cabc6e7c44571f943fe63559bb-1578510376719/0ce1c2ca-5b8f-487b-b64c-a6494859e05a.jpg',
        country: 'PAKISTHAN',
        salary: 1300
    },
    {
        name: 'hafizusama',
        designation: 'marnstack developer',
        age: 23,
        img: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/33f9aca2b7c52a8f07562f7352db2de6-1630079665996/fd4a806c-aa85-4397-bea7-7d20391be72b.jpg',
        country: 'AFGANISTHAN',
        salary: 1900
    },
    {
        name: 'usamamk',
        designation: 'frontend developer',
        age: 19,
        img: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/7b3dc4484e084005fdac39c79fbe1f64-1552733693554/de4ff2e3-ddd7-4b1e-8c19-73642992b3ad.jpg',
        country: 'GHANA',
        salary: 1400
    },
    {
        name: 'alvien-golden',
        designation: 'backend developer',
        age: 36,
        img: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/48a70ee97f9fc0a75f735ad6c171a0e3-1622568125548/0af2530f-c258-4739-b7f8-5c74122f371b.jpeg',
        country: 'JAPAN',
        salary: 2000
    },
    {
        name: 'saboorriaz',
        designation: 'express developer',
        age: 21,
        img: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/3da383c2d4e3a9a088a26563a951d07f-1610797337675/ec663b67-f84e-4f2f-a9fb-4099118a1c23.png',
        country: 'KATAR',
        salary: 1300
    },
    {
        name: 'shahriarasad',
        designation: 'mongoDB developer',
        age: 35,
        img: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d250826c6d83f448867d76e548a36ca1-1628758249582/1f609650-4cbc-44a2-a003-2e9d7e7bac7c.jpeg',
        country: 'INDIA',
        salary: 1600
    },
    {
        name: 'sohailkhan',
        designation: 'ES6 developer',
        age: 32,
        img: 't_profile_original',
        country: 'KINGDOM',
        salary: 1900
    },
    {
        name: 'usamamk',
        designation: 'marnstack developer',
        age: 30,
        img: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/64d77ff90e431730b2a9feec891e5e3b-1595058635232/57333377-dd91-42d2-abb6-22579d1aba5b.png',
        country: 'JAPAN',
        salary: 1500
    },
    {
        name: 'saadee',
        designation: 'senior developer',
        age: 24,
        img: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/08dc0ac956973fd26a6653b4855504ed-1541441429182/55bf5ba5-6989-4056-a6be-fb3b6d015943.jpg',
        country: 'USA',
        salary: 2200
    },
    {
        name: 'tanzeelamemon',
        designation: 'typescipt developer',
        age: 28,
        img: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/2528b9c3c1b5e8d07fdd6f7e9c17351c-1588275053356/92ca1405-17f3-400d-b313-f430b193f541.jpg',
        country: 'NEWYORK',
        salary: 2300
    },
    {
        name: 'ms-irfan',
        designation: 'junior developer',
        age: 39,
        img: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/e92cd4138ee8b49d75243b425730553c-1061268631628113912687/JPEG_20210805_025151_1974301703785511393.jpg',
        country: 'USA',
        salary: 2500
    }
]