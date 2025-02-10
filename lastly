    
// Configuration: Add/remove repos here easily
const repositories = [
  {
    url: "https://github.com/atsuperman/R1/raw/refs/heads/main/",
    songs: [
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
