    
// Configuration: Add/remove repos here easily
const repositories = [
  {
    url: "https://github.com/atsuperman/R1/raw/refs/heads/main/",
    songs: [
{ file: "Boht Hard.mp3", details: "💽 (2018) / 🎙️ Emiway Bantai featuring Thoratt / 🎼 Tony James / 📝 Emiway Bantai" },
{ file: "Exotic ft.mp3", details: "💽 (2013) / 🎙️ Priyanka Chopra featuring Pitbull / 🎼 RedOne / 📝 Priyanka Chopra, Pitbull, RedOne" },
{ file: "Follow The Leader.mp3", details: "💽 Líderes (2012) / 🎙️ Wisin & Yandel featuring Jennifer Lopez / 🎼 Jonas Saeed, Niclas Kings / 📝 Wisin & Yandel, Jennifer Lopez, Nyanda Thorbourne, Nailah Thorbourne, Tasha Thorbourne, Candace Thorbourne" },
{ file: "I Know You Want Me.mp3", details: "💽 Pitbull Starring in Rebelution (2009) / 🎙️ Pitbull / 🎼 Nicola Fasano, Pat-Rich, Armando Pérez, Edward Bello, Daniel Seraphine, David Wolinski / 📝 Armando Pérez, Edward Bello, Daniel Seraphine, David Wolinski, Nicola Fasano, Patrick Gonella, Stefano Bosco" },
{ file: "Pho 2 Pht Hn KAIZ Remix.mp3", details: "💽 (2020) / 🎙️ Pháo / 🎼 KAIZ / 📝 Nguyễn Diệu Huyền" },
{ file: "Chamillionaire, Hip Hop Police.mp3", details: "💿 Ultimate Victory (2007) / 🎙️ Chamillionaire featuring Slick Rick / 🎼 J.R. Rotem / 📝 Hakeem Seriki (Chamillionaire), Richard Walters (Slick Rick)" },
{ file: "SKIZZO SKILLZ feat BINIDITAT.mp3", details: "💿 (2012) / 🎙️ Skizzo Skillz featuring Karie" },
{ file: "Jain Makeba.mp3", details: "💽 Zanaka (2015) / 🎙️ Jain / 🎼 Maxim Nucci / 📝 Jain" },
{ file: "Makeba Discotheque mix.mp3", details: "🌐 can visit thehouseofdisco dot com / jain makeba discotheque fantastique remix" },
{ file: "Bebot.mp3", details: "💽 Monkey Business (2005) / 🎙️ apl.de.ap / 🎼 will.i.am / 📝 will.i.am, apl.de.ap Directed by Patricio Ginelsa / Produced by Kid Heroes Productions" },
{ file: "My Humps (Dirty).mp3", details: "💽 Monkey Business (2005) / 🎙️ Fergie, will.i.am / 🎼 will.i.am / 📝 will.i.am, David Payton" },
{ file: "Do It.mp3", details: "💽  (2019) / 🎙️ Ilkay Sencan / 🎼 Turkish DJ Ilkay Sencan / 📝 Ilkay Sencan" },
{ file: "Fireball.mp3", details: "💽 Globalization (2014) / 🎙️ John Ryan / 🎼 Pitbull / 📝 Armando C. Perez (Pitbull), John Ryan, Joe Spargur, Tom Peyton, Ilsey Juber" },
{ file: "Im An Albatraoz.mp3", details: "💽 (2014) / 🎙️ Little Sis Nora / 🎼 Swedish DJ AronChupa / 📝 Aron Ekberg, Nora Ekberg" },
{ file: "Yalla Inna.mp3", details: "💽 (2015) / 🎙️ Inna / 🎼 Play & Win / 📝 Marcel Botezan, Sebastian Barac, Nadir Tamuz Augustin, Inna" },
{ file: "Shaukan.mp3", details: "🎙️ Jubin Nautiyal, Neha Kakkar / (July 23, 2024) / 💽 Shaukan / 🎼 Shashwat Sachdev / 🗄️ Punjabi-Singles / 🌠 Janhvi Kapoor" },
{ file: "Lover.mp3", details: "🎙️ Diljit Dosanjh / (21 Aug 2021) / 📝 Raj Ranjodh / 💽 Lover / 🎼 Intense / 🗄️ Punjabi-Singles / 🏷️ Diljit Dosanjh Music" },
{ file: "PARTY_MASHUP_2023.mp3", details: "Year End Party Mix 2023 / VDj Royal Muz 71" },
{ file: "South & Bollywood Tapori Mashup.mp3", details: "2023 / DJ Bhav Lond" },
{ file: "Stromae Alors On Danse.mp3", details: "🎙️ Stromae / 🎼 Stromae, Dimitri Borrey / 📝 Paul Van Haver / 📅 September 26, 2009 / 📺 Directed by Paul Van Haver & Jérome Guiot" },
{ file: "Conkarah Banana.mp3", details: "🎧 (feat. Shaggy) /  💿DJ FLe - Minisiren Remix" },
{ file: "Guli Mata.mp3", details: "🎙️ Saad Lamjarred, Shreya Ghoshal / 🎼 Mehdi Mozayine (Arabic part), Rajat Nagpal (Hindi part) / 📝 Mohamed El Maghribi, Rana Sotal / 📅 December 17, 2023 / 📺 Featuring Jennifer Winget" },
{ file: "Saj Ke Sawar Ke.mp3", details: "🎬 Muqaddar (1996) / 🎙️ Khesari Lal Yadav, Priyanka Singh / 🎼 Madhukar Anand / 📝 Azad Singh" },
{ file: "Gimme More.mp3", details: "💿by Britney Spears" },
{ file: "Touch It Deep Remix.mp3", details: "🎧Busta Rhymes / AMG Showtime / 💿GANGSTER GANG 24/7" },
{ file: "Nelly_Furtado Promiscuous.mp3", details: "🎙️ Nelly Furtado, Timbaland / 🎼 Timbaland, Danja, Nelly Furtado / 📝 Nelly Furtado, Timothy Timbaland Mosley, Nate Danja Hills, Timothy Clayton / 📅 April 25, 2006 / 📺 Directed by Little X" },
     { file: "9XM Smashup 220.mp3", details: "by Dj Shreya Remix ©️T_Series" },
   { file: "Nadiyon_Paar.mp3", details: "🎬 Roohi (2021) / 🎙️ Sachin-Jigar, Rashmeet Kaur, Shamur, I.P. Singh / 🎼 Sachin-Jigar / 📝 Jigar Saraiya, Emanuele Marascia, Alessandro Murru" }
    ]
  },

  {
    url: "https://github.com/atsuperman/R2/raw/refs/heads/main/",
    songs: [
     { file: "9XM Smashup 270.mp3", details: "by_Dj DharakUSA Remix, ©️T Series" },
{ file: "Arabic lan 1شارع_الهاجري .mp3", details: "🇰🇼unknown" }
    ]
  }
];

// Generate allSongs with encoded URLs
export const allSongs = repositories.flatMap(repo => 
  repo.songs.map(song => ({
    ...song,
    path: `${repo.url}${song.file}`.replace(/ /g, '%20') // Encode spaces
  }))
);
