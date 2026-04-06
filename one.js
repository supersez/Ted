// one.js - Compact with two base URLs and durations
const repos = [
  {
    base: "https://github.com/supersez/s/raw/refs/heads/main/",
    songs: [

{ file: "Fina Lana slowed.m4a", details: "📀 FINA LANA (Super Slowed) (2025) / 🎙️ 6YNTHMANE, LXGHTXNG / 🎼 6YNTHMANE, LXGHTXNG / 📝 6YNTHMANE, LXGHTXNG", duration: 90 },
{ file: "50 50- Vannda Vanthan.m4a", details: "📀 50‑50 (feat Vanthan) (2025) / 🎙️ AHrD, Vanthan / 🎼 AHrD / 📝 AHrD", duration: 235 },
{ file: "Pon Mi- Shenseea Dunw3ll.m4a", details: "📀 Pon Mi (2018) / 🎙️ Shenseea, Dunw3ll / 🎼 Dunw3ll / 📝 Chinsea Lee", duration: 140 },
{ file: "Incendio Forestal sped Up.m4a", details: "📀 Incendio Forestal (Sped Up) (2024) / 🎙️ ZAHI & Ocean / 🎼 ZAHI / 📝 ZAHI", duration: 76 },
{ file: "Havhavhav- Lvbel C5.m4a", details: "📀 Havhavhav (2025) / 🎙️ Lvbel C5 / 🎼 LVBEL C5, AKDO / 📝 Lvbel C5, AKDO", duration: 126 },
{ file: "Jumpin Jumpin- Atmox.m4a", details: "📀 Jumpin’ Jumpin (2024) / 🎙️ ATMOX / 🎼 Jang Jun / 📝 Jang Jun", duration: 191 }

]
  },

  {
    base: "https://github.com/atsuperman/R1/raw/refs/heads/main/",
    songs: [

{ file: "Let s Go feat .m4a", details: "📀 Let's Go (HUGEL Remix) (Extended Mix) (2025) / 🎙️ Tom Enzy, Juany Bravo, Sami Brielle / 🎼 Jaden Bojsen, David Guetta / 📝 Not officially credited", duration: 148 },
{ file: "Chura Liya Emiway others mix.m4a", details: "📀 House of Pain (1992) / 🎙️ House of Pain / 🎼 DJ Muggs / 📝 Lawrence Muggerud, Erik Schrody / 🎥 David Perez Shadi / 🏷️ Tommy Boy Records", duration: 187 },
{ file: "Drop It Low- Kat Deluna.m4a", details: "📀 Inside Out (2011) / 🎙️ Kat DeLuna / 🎼 Andras Vleminckx / 📝 Kat DeLuna, Tyrone Edmond, Andras Vleminckx / 🏷️ Universal Motown", duration: 226 },
{ file: "FROM KHORASAN WITH LOVE.m4a", details: "📀 From Khorasan With Love (2025) / 🎙️ Qais Ulfat, Duran Etemadi, Aryana Sayeed, DYSTINCT, Vishal Mishra, Jacqueline F / 🎼 Produced by Umar Salman / 🎥 Fanaa TV", duration: 191 },
{ file: "House of Pain - Jump Around.m4a", details: "📀 House of Pain (1992) / 🎙️ House of Pain / 🎼 DJ Muggs / 📝 Lawrence Muggerud, Erik Schrody / 🎥 David Perez Shadi / 🏷️ Tommy Boy Records", duration: 215 },
{ file: "MC STAN KUSHAL others MIX.m4a", details: "📀 Old School X Boom Bap Remix (2024) / 🎙️ MC Stan, Kushal Pokhrel, DIVINE, Deep Jandu, Laika Pariyar / 🎼 19XX / 🎥 19XX Recordz", duration: 155 },
{ file: "The Power Of Bhangra.m4a", details: "📀 The Power of Bhangra (2003) / 🎙️ Snap! vs. Motivo / 🎼 Snap!, Motivo", duration: 209 },
{ file: "On The Floor feat Pitbull.m4a", details: "📀 Love? (2011) / 🎙️ Jennifer Lopez, Pitbull / 🎼 RedOne / 📝 Nadir Khayat, Kinnda Hamid, AJ Junior, Teddy Sky, Bilal Hajji, Armando Perez, Gonzalo Hermosa, Ulises Hermosa / 🎥 TAJ Stansberry / 🏷️ Island Records", duration: 285 },
{ file: "Anaconda.m4a", details: "📀 The Pinkprint (2014) / 🎙️ Nicki Minaj / 🎼 Polow da Don, Da Internz / 📝 Nicki Minaj, Ernest Clark, Marcos Palacios, Anthony Ray, Sir Mix-a-Lot / 🎥 Colin Tilley", duration: 260 },
{ file: "Babys On Fire.m4a", details: "📀 TensIon (2012) / 🎙️ Die Antwoord / 🎼 DJ Hi-Tek / 📝 Watkin Tudor Jones, Anri du Toit / 🎥 Terence Neale", duration: 237 },
{ file: "Daddy feat Cl.m4a", details: "📀 Chiljip Psy-da (2015) / 🎙️ Psy featuring CL / 🎼 Park Jae-sang, Teddy, Yoo Gun-hyung, Future Bounce, Dominique Regiacorte, Jean-Luc Drion, william / 📝 Park Jae-sang, Teddy, Dominique Regiacorte, Jean-Luc Drion, William Adams / 🎥 Psy", duration: 231 },
{ file: "Despacito.m4a", details: "📀 Despacito (2017) / 🎙️ Luis Fonsi, Daddy Yankee / 🎼 Andrés Torres, Mauricio Rengifo / 📝 Luis Fonsi, Daddy Yankee, Erika Ender / 🎥 Carlos Perez / 🏷️ Universal Music Latin", duration: 229 },
{ file: "Gangnam Style.m4a", details: "📀 Gangnam Style (2012) / 🎙️ PSY / 🎼 PSY, Yoo Gun-hyung / 📝 PSY, Yoo Gun-hyung / 🎥 Cho Soo-hyun / 🏷️ YG Entertainment", duration: 220 },
{ file: "Gentleman.m4a", details: "📀 Gentleman (2013) / 🎙️ PSY / 🎼 PSY, Yoo Gun-hyung / 📝 PSY, Yoo Gun-hyung / 🎥 Cho Soo-hyun / 🏷️ YG Entertainment", duration: 194 },
{ file: "I Fink U Freeky.m4a", details: "📀 TensIon (2012) / 🎙️ Die Antwoord / 🎼 DJ Hi-Tek / 📝 Ninja, yo-Landi Visser / 🎥 Rob Malpage, Ninja / 🏷️ Zef Recordz, Interscope Records", duration: 281 },
{ file: "Pitbull Terrier.m4a", details: "📀 Donker Mag (2014) / 🎙️ Die Antwoord / 🎼 DJ Hi-Tek / 📝 Watkin Tudor Jones, Anri du Toit / 🎥 Ninja / 🏷️ Zef Recordz", duration: 220 },
{ file: "SCHWESTA EWA - 60 PUNCHBARS.m4a", details: "📀 Schwesta Ewa - 60 Punchbars (2012) / 🎙️ Schwesta Ewa / 🎼 EPMD Da Joint sample) / 📝 Schwesta Ewa / 🎥 Henning Imun Brix", duration: 209 },
{ file: "XATAR - Mehr Eier ( Remix).mp3", details: "📀 Schwesta Ewa ft. XATAR - Mehr Eier (Dj Cashesclay & Dj Mastablaze Remix) (2023) / 🎬 Henning Brix, Xatar / 🎥 Henning Imun Brix / 🎭 Thorsten Spivak / 🎟️ Nils Schlonsok / 🚁 Joellfpv", duration: 131 },
{ file: "Schwesta Ewa ft DrDre Remix.mp3", details: "💿 (2025*) / 🎤Schwesta Ewa ft. Dr.Dre - Adventskalender  🎼( Dj Cashesclay Remix )", duration: 91 },
{ file: "NASTY! (SLOWED).mp3", details: "📀 NASTY! (SLOWED) (2025) / 🎙️ IMPXSTR, Paul Leger / 🎼 Paul Leger / 📝 Paul Leger / 🏷️ Black 17 Media, LLC.", duration: 56 },
{ file: "NASTY!.mp3", details: "📀 NASTY! (2025) / 🎙️ IMPXSTR, Paul Leger / 🎼 Paul Leger / 📝 Paul Leger / 🏷️ Black 17 Media, LLC.", duration: 109 },
{ file: "50 Cent - Candy Shop.mp3", details: "📀 Candy Shop (2005) / 🎙️ 50 Cent featuring Olivia / 🎼 Scott Storch / 📝 Curtis Jackson, Scott Storch / 🎥 Jessy Terrero / 🏷️ Interscope, Aftermath, Shady, G-Unit", duration: 249 },
{ file: "50 Cent - In Da Club.mp3", details: "📀 In da Club (2003) / 🎙️ 50 Cent / 🎼 Dr. Dre, Mike Elizondo / 📝 50 Cent, Dr. Dre, Mike Elizondo / 🎥 Philip Atwell / 🏷️ Shady, Aftermath, Interscope", duration: 248 },
{ file: "Andreea D - Rompedon.mp3", details: "📀 Rompedon (2014) / 🎙️ Andreea D / 🎼 Silviu Păduraru, Victor Alstani / 📝 Emanuela Oancea, Mike Wells / 🎥 Alex Ceaușu / 🏷️ Roton Music", duration: 178 },
{ file: "Claydee feat Dame Dame.mp3", details: "📀 Dame Dame (2017) / 🎙️ Claydee, Lexy Panterra / 🎼 Claydee, Tim Aeby / 📝 Claydee, Andrea Sandoval, Sebastian Guerrero, Mauricio Alfredo Guerrero Jr., Sammy Plotkin, KAS Music / 🎥 Claydee / 🏷️ Down2Earth Music", duration: 188 },
{ file: "Eva Simons ft policeman.mp3", details: "📀 Policeman (2015) / 🎙️ Eva Simons, Konshens / 🎼 Sidney Samson / 📝 Eva Simons, Sidney Samson / 🎥 Rigel Kilston / 🏷️ Powerhouse", duration: 193 },
{ file: "Gasolina.mp3", details: "📀 Barrio Fino (2004) / 🎙️ Daddy Yankee, Glory / 🎼 Luny Tunes / 📝 Daddy Yankee, Eddie Dee", duration: 193 },
{ file: "Impacto (Remix).mp3", details: "📀 El Cartel: The Big Boss (2007) / 🎙️ Daddy Yankee, Fergie / 🎼 Scott Storch, Tainy / 📝 Daddy Yankee, Fergie, William Adams", duration: 208 },
{ file: "Rakhi Rakhi.mp3", details: "🎬 Rakhi (2006) / 🎙️ Devi Sri Prasad, Mamta Mohandas / 🎼 Devi Sri Prasad / 📝 Sirivennela Seetharama Sastry / 🎥 Krishna Vamsi", duration: 333 },
{ file: "Chhotte peg mar.mp3", details: "🎬 Sonu Ke Titu Ki Sweety (2018) / 🎙️ Yo Yo Honey Singh, Neha Kakkar, Navraj Hans / 🎼 Yo Yo Honey Singh / 📝 Yo Yo Honey Singh / 🎥 Luv Ranjan", duration: 204 },
{ file: "Dil Chori.mp3", details: "🎬 Sonu Ke Titu Ki Sweety (2018) / 🎙️ Yo Yo Honey Singh, Simar Kaur, Ishers / 🎼 Yo Yo Honey Singh / 📝 Yo Yo Honey Singh, Singhsta, Oye Sheraa / 🎥 Luv Ranjan", duration: 227 },
{ file: "High Heels.mp3", details: "📀 High Heels (2012) / 🎙️ Jaz Dhami, Yo Yo Honey Singh / 🎼 Yo Yo Honey Singh / 📝 Alfaaz / 🏷️ Sanchez Productions Ltd", duration: 298 },
{ file: "Payal.mp3", details: "📀 Payal / 🎙️ Yo Yo Honey Singh, Paradox / 🎼 Yo Yo Honey Singh / 📝 Paradox / 🏷️ Sanchez Productions Ltd", duration: 227 },
{ file: "This Party Getting Hot.mp3", details: "📀 This Party Gettin' Hot / 🎙️ Jazzy B, Yo Yo Honey Singh / 🎼 Yo Yo Honey Singh / 🏷️ Jazzy B Records", duration: 211 },
{ file: "Urvashi.mp3", details: "📀 Urvashi / 🎙️ Yo Yo Honey Singh / 🎼 Yo Yo Honey Singh / 🏷️ T-Series", duration: 215 },
{ file: "DJ Devil - Taati.mp3", details: "📀 Taati (2020) / 🎙️ DJ Devil / 🎼 DJ Devil / 🏷️ Sony Music India", duration: 159 },
{ file: "Kya Baat Ay.mp3", details: "📀 Kya Baat Ay (2018) / 🎙️ Harrdy Sandhu / 🎼 B Praak / 📝 Jaani / 🎥 Arvindr Khaira / 🏷️ Sony Music India", duration: 179 },
{ file: "Akh Lad javve.mp3", details: "🎬 Loveyatri (2018) / 🎙️ Badshah, Asees Kaur, Jubin Nautiyal / 🎼 Tanishk Bagchi / 📝 Tanishk Bagchi, Badshah / 🎥 Abhiraj Minawala", duration: 180 },
{ file: "Hasan Shah Hawa.mp3", details: "📀 Hawa (2021) / 🎙️ Hasan Shah / 🎼 Hasan Shah / 📝 Hasan Shah, Ramses / 🎥 Not specified", duration: 152 },
{ file: "High Hukku.mp3", details: "📀 High Hukku (2023) / 🎙️ King, Nikhita Gandhi / 🎼 King / 📝 King / 🎥 Punit J Pathak", duration: 183 },
{ file: "Karabuu.mp3", details: "🎬 Pogaru (2021) / 🎙️ Chandan Shetty / 🎼 Chandan Shetty / 📝 Chandan Shetty / 🎥 Nanda Kishore", duration: 219 },
{ file: "Oo Bolega Remix.mp3", details: "🎬 Pushpa: The Rise (2021) / 🎙️ Kanika Kapoor / 🎼 Devi Sri Prasad, DJ Tarunn / 📝 Chandrabose / 🎥 Sukumar / 🏷️ T-Series", duration: 180 },
{ file: "Tauba Tauba.mp3", details: "🎬 Bad Newz (2023) / 🎙️ Karan Aujla / 🎼 Karan Aujla / 📝 Karan Aujla", duration: 207 },
{ file: "Ding Dang karthage.mp3", details: "🎬 Munna Michael (2017) / 🎙️ Amit Mishra, Antara Mitra / 🎼 Javed–Mohsin / 📝 Danish Sabri, Sabbir Khan / 🎥 Sabbir Khan", duration: 203 },
{ file: "Firse Machayenge.mp3", details: "📀 Firse Machayenge (2019) / 🎙️ Emiway Bantai / 🎼 Tony James / 📝 Emiway Bantai / 🎥 Rayhaan Patni", duration: 207 },
{ file: "Jalebi Baby.mp3", details: "💽 Jalebi Baby (2020) / 🎙️ Tesher / 🎼 Tesher / 📝 Tesher / 🎥 Gil Green", duration: 189 },
{ file: "Aidan Na Nach.mp3", details: "💽 (2023) / 🎙️ Amar Jalal / 🎼 Kaptaan / 📝 Kaptaan / 🎥 Piyush Bhagat, Shazia Samji / 💼 Anshul Garg", duration: 193 },
{ file: "Aloo Chaat RnB.mp3", details: "🎬 Aloo Chaat (2009) / 🎙️ RDB featuring Nindy Kaur and Smooth / 🎼 RDB / 📝 RDB", duration: 310 },
{ file: "Bhool Bhulaiyaa 3.mp3", details: "🎬 Bhool Bhulaiyaa 3 (2022) / 🎙️ Neeraj Shridhar, Shalmali Kholgade / 🎼 Pritam", duration: 230 },
{ file: "Boht Hard.mp3", details: "💽 (2018) / 🎙️ Emiway Bantai featuring Thoratt / 🎼 Tony James / 📝 Emiway Bantai", duration: 181 },
{ file: "Exotic ft.mp3", details: "💽 (2013) / 🎙️ Priyanka Chopra featuring Pitbull / 🎼 RedOne / 📝 Priyanka Chopra, Pitbull, RedOne", duration: 269 },
{ file: "Follow The Leader.mp3", details: "💽 Líderes (2012) / 🎙️ Wisin & Yandel featuring Jennifer Lopez / 🎼 Jonas Saeed, Niclas Kings / 📝 Wisin & Yandel, Jennifer Lopez, Nyanda Thorbourne, Nailah Thorbourne, Tasha Thorbourne, Candace Thorbourne", duration: 238 },
{ file: "I Know You Want Me.mp3", details: "💽 Pitbull Starring in Rebelution (2009) / 🎙️ Pitbull / 🎼 Nicola Fasano, Pat-Rich, Armando Pérez, Edward Bello, Daniel Seraphine, David Wolinski / 📝 Armando Pérez, Edward Bello, Daniel Seraphine, David Wolinski, Nicola Fasano, Patrick Gonella, Stefano Bosco", duration: 237 },
{ file: "Pho 2 Pht Hn KAIZ Remix.mp3", details: "💽 (2020) / 🎙️ Pháo / 🎼 KAIZ / 📝 Nguyễn Diệu Huyền", duration: 184 },
{ file: "Chamillionaire, Hip Hop Police.mp3", details: "💿 Ultimate Victory (2007) / 🎙️ Chamillionaire featuring Slick Rick / 🎼 J.R. Rotem / 📝 Hakeem Seriki (Chamillionaire), Richard Walters (Slick Rick)", duration: 251 },
{ file: "SKIZZO SKILLZ feat BINIDITAT.mp3", details: "💿 (2012) / 🎙️ Skizzo Skillz featuring Karie", duration: 222 },
{ file: "Jain Makeba.mp3", details: "💽 Zanaka (2015) / 🎙️ Jain / 🎼 Maxim Nucci / 📝 Jain", duration: 250 },
{ file: "Makeba Discotheque mix.mp3", details: "🌐 can visit thehouseofdisco dot com / jain makeba discotheque fantastique remix", duration: 387 },
{ file: "Bebot.mp3", details: "💽 Monkey Business (2005) / 🎙️ apl.de.ap / 🎼 will.i.am / 📝 will.i.am, apl.de.ap Directed by Patricio Ginelsa / Produced by Kid Heroes Productions", duration: 210 },
{ file: "My Humps (Dirty).mp3", details: "💽 Monkey Business (2005) / 🎙️ Fergie, will.i.am / 🎼 will.i.am / 📝 will.i.am, David Payton", duration: 327 },
{ file: "Do It.mp3", details: "💽  (2019) / 🎙️ Ilkay Sencan / 🎼 Turkish DJ Ilkay Sencan / 📝 Ilkay Sencan", duration: 231 },
{ file: "Fireball.mp3", details: "💽 Globalization (2014) / 🎙️ John Ryan / 🎼 Pitbull / 📝 Armando C. Perez (Pitbull), John Ryan, Joe Spargur, Tom Peyton, Ilsey Juber", duration: 236 },
{ file: "Im An Albatraoz.mp3", details: "💽 (2014) / 🎙️ Little Sis Nora / 🎼 Swedish DJ AronChupa / 📝 Aron Ekberg, Nora Ekberg", duration: 168 },
{ file: "Yalla Inna.mp3", details: "💽 (2015) / 🎙️ Inna / 🎼 Play & Win / 📝 Marcel Botezan, Sebastian Barac, Nadir Tamuz Augustin, Inna", duration: 197 },
{ file: "Shaukan.mp3", details: "🎙️ Jubin Nautiyal, Neha Kakkar / (July 23, 2024) / 💽 Shaukan / 🎼 Shashwat Sachdev / 🗄️ Punjabi-Singles / 🌠 Janhvi Kapoor", duration: 168 },
{ file: "Lover.mp3", details: "🎙️ Diljit Dosanjh / (21 Aug 2021) / 📝 Raj Ranjodh / 💽 Lover / 🎼 Intense / 🗄️ Punjabi-Singles / 🏷️ Diljit Dosanjh Music", duration: 187 },
{ file: "PARTY_MASHUP_2023.mp3", details: "Year End Party Mix 2023 / VDj Royal Muz 71", duration: 365 },
{ file: "South & Bollywood Tapori Mashup.mp3", details: "2023 / DJ Bhav Lond", duration: 361 },
{ file: "Stromae Alors On Danse.mp3", details: "🎙️ Stromae / 🎼 Stromae, Dimitri Borrey / 📝 Paul Van Haver / 📅 September 26, 2009 / 📺 Directed by Paul Van Haver & Jérome Guiot", duration: 235 },
{ file: "Conkarah Banana.mp3", details: "🎧 (feat. Shaggy) /  💿DJ FLe - Minisiren Remix", duration: 210 },
{ file: "Guli Mata.mp3", details: "🎙️ Saad Lamjarred, Shreya Ghoshal / 🎼 Mehdi Mozayine (Arabic part), Rajat Nagpal (Hindi part) / 📝 Mohamed El Maghribi, Rana Sotal / 📅 December 17, 2023 / 📺 Featuring Jennifer Winget", duration: 236 },
{ file: "Saj Ke Sawar Ke.mp3", details: "🎬 Muqaddar (1996) / 🎙️ Khesari Lal Yadav, Priyanka Singh / 🎼 Madhukar Anand / 📝 Azad Singh", duration: 167 },
{ file: "Gimme More.mp3", details: "💿by Britney Spears", duration: 241 },
{ file: "Touch It Deep Remix.mp3", details: "🎧Busta Rhymes / AMG Showtime / 💿GANGSTER GANG 24/7", duration: 232 },
{ file: "Nelly_Furtado Promiscuous.mp3", details: "🎙️ Nelly Furtado, Timbaland / 🎼 Timbaland, Danja, Nelly Furtado / 📝 Nelly Furtado, Timothy Timbaland Mosley, Nate Danja Hills, Timothy Clayton / 📅 April 25, 2006 / 📺 Directed by Little X", duration: 243 },
{ file: "9XM Smashup 220.mp3", details: "by Dj Shreya Remix ©️T_Series", duration: 180 },
{ file: "Nadiyon_Paar.mp3", details: "🎬 Roohi (2021) / 🎙️ Sachin-Jigar, Rashmeet Kaur, Shamur, I.P. Singh / 🎼 Sachin-Jigar / 📝 Jigar Saraiya, Emanuele Marascia, Alessandro Murru", duration: 148 },
 ]
  },

  {
    base: "https://github.com/atsuperman/R2/raw/refs/heads/main/",
    songs: [

{ file: "9XM Smashup 270.mp3", details: "by_Dj DharakUSA Remix, ©️T Series", duration: 237 },
{ file: "Arabic lan 1شارع_الهاجري .mp3", details: "🇰🇼unknown", duration: 326 },

 ]
  }
];


// Build final songs array with full URL and duration
export const songs = [];
for (const repo of repos) {
  for (const s of repo.songs) {
    songs.push({
      file: s.file,
      url: repo.base + encodeURIComponent(s.file),
      details: s.details,
      duration: s.duration
    });
  }
}

