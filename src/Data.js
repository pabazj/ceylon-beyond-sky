import uniqid from 'uniqid';

import Adventure from'./assets/Packages/adventure/rafting.jpg';
import Ayuruweda from'./assets/Packages/ayuruweda/spa.jpg';
import Beach from'./assets/Packages/beach/SurfingEvening.jpg';
import BuddhistCulture from'./assets/Packages/buddhisit_culture/polonnaruwa.jpg';
import Family from'./assets/Packages/family_tour/Village.jpg';
import Ramayana from'./assets/Packages/ramayana/Slaya.jpg';
import Wedding from'./assets/Packages/wedding_honeymoon/Lovers.jpg';
import WildLife from'./assets/Packages/wild_life_safari/safari.jpg';

import AnuradhapuraOne from './assets/Destinations/Anuradapura/image1.jpg';
import AnuradhapuraTwo from './assets/Destinations/Anuradapura/image2.jpg';
import BenthotaOne from './assets/Destinations/Benthota/image1.jpg';
import BenthotaTwo from './assets/Destinations/Benthota/image2.jpg';
import ColomboOne from './assets/Destinations/Colombo/image1.jpg';
import ColomboTwo from './assets/Destinations/Colombo/image2.jpg';
import DambullaOne from './assets/Destinations/Dambulla/image1.jpg';
import DambullaTwo from './assets/Destinations/Dambulla/image2.jpg';
import EllaOne from './assets/Destinations/Ella/image1.jpg';
import EllaTwo from './assets/Destinations/Ella/image2.jpg';
import GalleOne from './assets/Destinations/Galle/image1.jpg';
import GalleTwo from './assets/Destinations/Galle/image2.jpg';
import HortonPlainsOne from './assets/Destinations/HortonPlains/image1.jpeg';
import HortonPlainsTwo from './assets/Destinations/HortonPlains/image2.jpeg';
import JaffnaOne from './assets/Destinations/Jaffna/image1.jpg';
import JaffnaTwo from './assets/Destinations/Jaffna/image2.jpg';
import KandyOne from './assets/Destinations/Kandy/image1.jpg';
import KandyTwo from './assets/Destinations/Kandy/image2.jpg';
import MirissaOne from './assets/Destinations/Mirissa/image1.jpg';
import MirissaTwo from './assets/Destinations/Mirissa/image2.jpg';
import NuwaraeliyaOne from './assets/Destinations/Nuwaraeliya/image1.jpg';
import NuwaraeliyaTwo from './assets/Destinations/Nuwaraeliya/image2.jpg';
import PolonnaruwaOne from './assets/Destinations/Polonnaruwa/image1.jpg';
import PolonnaruwaTwo from './assets/Destinations/Polonnaruwa/image2.jpg';
import RainForestOne from './assets/Destinations/RainForest/image1.jpg';
import RainForestTwo from './assets/Destinations/RainForest/image2.jpg';
import SigiriyaOne from './assets/Destinations/Sigiriya/image1.jpg';
import SigiriyaTwo from './assets/Destinations/Sigiriya/image2.jpg';
import UdawalawaOne from './assets/Destinations/Udawalawa/image1.jpg';
import UdawalawaTwo from './assets/Destinations/Udawalawa/image2.jpg';
import YalaOne from './assets/Destinations/Yala/image1.jpg';
import YalaTwo from './assets/Destinations/Yala/image2.jpg';

import Cycling from './assets/Activities/cycling.jpg';
import Diving from './assets/Activities/water.jpg';
import Balloon from './assets/Activities/balloon.jpg';
import Camping from './assets/Activities/tent.jpg'

const PACKAGES = '/packages'
const ACTIVITIES = '/activities'
const DESTINATIONS = '/destinations'

export const packageList = [
{
    id: uniqid(),
    url: `${PACKAGES}/adventure-tour`,
    image: Adventure ,
    title: 'Adventure Tour',
    details: 'Adventure tourism is a type of tourism in which tourist do some adventures activities like as skydiving, hill climbing and scuba diving.'
},
{
    id: uniqid(),
    url: `${PACKAGES}/beach-tour`,
    image: Beach,
    title: 'Beach Tour',
    details: 'Beach tourism is the major segment of holiday tourism that has led to an overall development of tourism in many parts of the world. ',
    
},
{
    id: uniqid(),
    url: `${PACKAGES}/family-tour`,
    image: Family,
    title: 'Family Tour',
    details: 'Family tourism is driven by the increasing importance placed on promoting family togetherness, keeping family bonds alive and creating family memories.', 
},
{
    id: uniqid(),
    url: `${PACKAGES}/ayurveda-and-wellness`,
    image: Ayuruweda,
    title: 'Ayurveda And Wellness',
    details: 'Sri Lanka is well known for Ayurveda medicine and treatment because of its traditional background and availability of plenty of natural herbs.',
    
},
{
    id: uniqid(),
    url: `${PACKAGES}/buddhist-culture-and-classic`,
    image: BuddhistCulture,
    title: 'Buddhist Culture And Classic',
    details: 'Being one of the oldest practicing Buddhist countries in the world, it has been recorded that the Lord Buddha had visited Sri Lanka thrice after attaining Buddhahood. ', 
},
{
    id: uniqid(),
    url: `${PACKAGES}/wedding-and-honeymoon-tour`,
    image: Wedding,
    title: 'Wedding And Honeymoon Tour',
    details: 'Sri Lanka has always been an ideal destination for an exotic wedding ceremony and honeymoon. ', 
},
{
    id: uniqid(),
    url: `${PACKAGES}/ramayana-tour`,
    image: Ramayana,
    title: 'Ramayana Tour',
    details: 'This special tour brings you to the roots of the ancient great Indian epic The Ramayana', 
},
{
    id: uniqid(),
    url: `${PACKAGES}/whild-life-safari`,
    image: WildLife,
    title: 'Whild Life Safari',
    details: 'We Offer the best Big Game Safari experiences outside of Sri Lanka ', 
},
]
export const activityList = [
    {
        id: uniqid(),
        url: `${ACTIVITIES}/cycling`,
        icon: 'cycling' ,
        title: 'Cycling',
        description: 'Enjoy the freedom of two wheels and explore the great outdoors'
    },
    {
        id: uniqid(),
        url: `${ACTIVITIES}/water-sports`,
       icon: 'kayaking' ,
        title: 'Water Sports',
        description: 'Experience the thrill of adrenaline-pumping aquatic activities'
        
    },
    {
        id: uniqid(),
        url: `${ACTIVITIES}/hot-air-ballooning`,
        icon: 'balloon' ,
        title: 'Hot Air ballooning',
        description: 'Soar high above and take in breathtaking views from the sky'
    },
    {
        id: uniqid(),
        url: `${ACTIVITIES}/camping`,
        icon: 'camping' ,
        title: 'Camping',
        description: 'Unwind in nature, escape the hustle and bustle, and recharge your soul'
    }
]

export const destinationyList = [
    {
        id: uniqid(),
        url: `${DESTINATIONS}/anuradhapura`,
        title: 'Anuradhapura',
        paraOne: `Anuradhapura is one of the island’s most famous ancient cities, firmly in place in any tours in Sri
        Lanka.The ancient ruins predating the Christian era puts Anuradhapura in the pantheon of human
        history along with Athens, Alexandria and Patalipurhra. It depicts the trajectory of the Sinhalese
        civilization from the time it was founded in 4th century BC.The Mahavamsa, the historical chronicle
        affirms that the city was founded in 380 BC. The capital city of Sinhala Kings of Sri Lanka suffered,
        survived, was razed to the ground and was rebuilt as most other cities whose prosperity and the envy of
        rulers in its proximity was a recipe for recurring disasters and innovative engineering in
        reconstruction.The past grandeur is narrated by a fascinating collection of ancient ruins some of which
        have been painstakingly restored. The remote past of a majestic capital and a monastic city of
        benevolent kings, despotic monarchs, retreating rulers and heroic conquerors reach out to you from Sri
        Lanka history.The Dagoba – Thuparamaya was built by King Devanam Piya Tissa in 3rd century BC to
        enshrine the clavicle of the Buddha, considered a sacred relic that was gifted to the King by the Mauryan
        Missionary Emperor Asoka. The city was conquered and sacked by Pandyan kings in the 9th century. The
        destruction in AD 993 by an invading Indian King brought an end to the city as the capital of Sri Lanka.
        Close to Anuradhapura is Mihintale, the oldest and the first wildlife sanctuary of all mankind. The story
        goes that King Devanam Piyatissa who was a deer hunt when he found Arahant Mahinda and by royal
        edict declared the entire area as a protected reserve a tradition that continues to this day. Other than
        Mihintale, there are more than 14 protected wild life parks you can visit on your Sri Lanka trip`,
        paraTwo: `The oldest tree in the world adorns this city of shrines. It was brought from India in the 3rd century BC.
        Its sanctity rests on it being grown from the Bo Tree (ficus religiousa) in Bodhgaya India. Under the
        shade of the parent tree, the Ascetic Siddharathe sought enlightenment.The relicts of the Buddha
        enshrined in Stupas or Dagobas have thus determined the topography of Anuradhapura.Your holiday in
        Sri Lanka needs to an enriching experience. Find the answer to the question “can man escape his
        destiny?” Yes. See the Samadhi Statue of the Buddha, matchless in the intense serenity that it
        radiates.Can a royal bath be made as ornate in its scale and beauty as that of a cathedral? Yes, See the
        twin ponds. To learn about Sri Lanka is to learn about the genius of man.`,
        imageOne:AnuradhapuraOne,
        imageTwo:AnuradhapuraTwo
    },
    {
        id: uniqid(),
        url: `${DESTINATIONS}/kandy`,
        title: 'Kandy',
        paraOne: `Kandy is a city with graceful charm, radiating an ambiance of antiquity that you will find only in a Sri
        Lanka holiday. Do insist on spending at least two whole days in the city of the last Sinhala Kings of the
        island, your Sri Lanka tour operator will not hesitate!Cocooned in the comfort of a protected valley in
        the central hills of Sri Lanka, the city at 500 meters (1640 feet) above sea level is home to the Temple of
        the Sacred Tooth Relic and a vast array of shrines, and temples dating back to the 14th century.In 1592
        Kandy became the capital of the Sinhala kings who repulsed the Portuguese and Dutch invaders. They
        held out against the British until 1815. The proud city is also home to several monuments, including the
        Dalada Maligawa the “Palace of the Sacred Tooth Relic”- the symbol of sovereignty of the nation, a must
        visit site in your Sri Lanka Holiday. The Magul Maduwa – The Audience Hall with its wooden columns is
        the epitome of Kandyan architecture. It is in this space that the Sinhala chieftains ceded the kingdom to
        the British Crown in 1815.The City is built with the Temple Palace of the Sacred Tooth Relic at its
        epicenter. Four shrines – the devales that surround the Temple Palace are dedicated to the Gods Vishnu,
        Skandha, Natha and Godess Paththini. The God Vishnu is the guardian deity of the Buddhist Island, God
        Skandha is the god of war, God Natha is an incarnation of the Bhodisathva the next Buddha and Goddess
        Paththini is the goddess of chastity and health.`,
        paraTwo: `The two monasteries Asgiriya and Malwatte house two chapters of the Main Buddhist sect that is
        referred to as the Siamese school. The two prelates of Asgiriya and Malwatte are vested with the
        ecclesiastical authority of administering the temple palace – the Dalada Maligawa. Malwatte which
        literally means floral abode has preserved its impressive hall with its imposing columns and the
        magnificent painted ceiling. Kandy is the cultural and religious capital of Sri Lanka.The splendor of the
        great pageant of the “Esala Perehera” reaffirms its sanctity every year. It is a spectacle held usually in
        the first week of August with the full moon. To include it in your Sri Lanka holiday needs some planning
        including your Sri Lanka flights. Kandy is virtually hidden behind a thick curtain of natural foliage in the
        form of lush tropical forests and a 60 hectare botanical garden. This is another reason why you need two
        days in Kandy in your Sri Lanka Holiday plan.The garden was first conceived by King Kirthi Sri Rajasinghe
        on the loop of the Mahaweli River that partly encircles Kandy.Under their care and meticulous attention
        the Botanical Gardens took shape as the best in Asia. A promenade of palm trees is an unusual example
        of creative gardening that the English are known for. The palm saplings were brought from Panama in
        1903. The garden has plant species from all over the world from exotic orchids to a tree that spreads its
        canopy to cover 1.600 square meters.`,
        paraThree: `One of the most endearing sights during your Sri Lanka vacation will be the scene of work elephants
        reposing in the gently flowing Mahaweli River, spraying a steady stream of water with their trunks in
        carefully orchestrated symphony. In tandem you will hear the Drums and Bells of the Temple palace`,
        imageOne:KandyOne,
        imageTwo:KandyTwo
    },
    {
        id: uniqid(),
        url: `${DESTINATIONS}/dambulla`,
        title: 'Dambulla',
        paraOne: `The Dambulla Cave Temple is traced to the 1st century BC, and is the most treasured cave temple in
        Asia. It has five caves under a vast rock that overhangs the temple. On the underbelly of the Rock is
        carved a drip line that keeps the interiors dry.Inside the caves, the ceilings are adorned with intricate
        patterns of religious images meticulously painted following the natural contours of the rock. Images of
        the Buddha and bodhisattvas and gods and goddesses are to be seen inside.The cave monastery
        remains the best-preserved historical structure in Sri Lanka that dates back to the 2nd and 3rd centuries
        BC. It remains to this day a living Shrine that draws thousands of devotees and curious visitors.`,
        paraTwo: `The temple has five caves imaginatively converted to shrines. The caves built at the base of a 150m high
        rock during the first century BC to 993 AD and between 1073 -1250 are the most inspiring cave temples
        of the many cave temples in Sri Lanka. You reach the cave temple by walking on the gentle slope of the
        towering Dambulla rock that gives you a magnificent view of the plains below with the Sigiriya rock
        fortress emerging out of the flat landscape. No doubt you will have Homeric thoughts because a Sri
        Lanka Holiday is the most enjoyable odyssey you can make in Asia.`,
        imageOne:DambullaOne,
        imageTwo:DambullaTwo
    },
    {
        id: uniqid(),
        url: `${DESTINATIONS}/polonnaruwa`,
        title: 'Polonnaruwa',
        paraOne: `Polonnaruwa is an ancient City with some very well preserved ruins despite the damage inflicted by
        invaders, is a must visit place in the itinerary of an all inclusive tour of Sri Lanka. This metropolis of
        antiquity was created in the 12th century by the Sinhala monarch Parakramabahu the 1st, and is an
        astonishing urban settlement. The striking harmony between its buildings and its natural surroundings
        attest to a civilization at its zenith with a sure grasp of aesthetic sensitivity and architectural design.The
        Chola invaders from South India who launched successive invasions practiced Brahmanism, whilst the
        Sinhalese Kings were devoted Buddhists. The Hindu shrines and Buddhist monasteries that stand in
        silence emanates the zealotry of the invader and the determination of the defender.Monasteries that
        sheltered monks from Ramanna Desha (present day Myanmar) testifies to the close ties that existed
        between two Buddhist kingdoms during the Polonnaruwa period. The conquering Cholas constructed
        monuments to their religion Brahmanism, and temples to Shiva where fine bronze statues were found
        which can now be seen in the National Museum, Colombo – a place if you are interested in antiquity
        while on your Sri Lanka Holiday.When the Sinhala King moved to the new capital of Polonnaruwa, the
        sacred Bodhi Tree could not be moved from Anuradhapura. Thus, the Sacred Tooth Relic became the
        repository of Sinhala Sovereignty. The “Atadage” the Temple of the Tooth Relic is the most impressive
        structure among the remains of Polonnaruwa.The Gal Vihara, the Stone Reliquary, with its enormous
        rock sculptures is undoubtedly one of the greatest achievements of Sinhalese art.Polonnaruwa city is
        where you can see the island’s greatest historical treasures. It is still of great economic significance as a
        contributor to agriculture. The enormous reservoir called the Parakrama Samudraya (Sea of Parakrama)
        was built by King Parakramabahu the 1st (1153-1186 AD).The large expanse of water dominates the
        entire Citadel of Polonnaruwa and its environs with its retaining wall, 14 kms in length and 12m in
        height. The manmade reservoir covers a surface area of 15 sq.kms.`,
        imageOne:PolonnaruwaOne,
        imageTwo:PolonnaruwaTwo
    },
    {
        id: uniqid(),
        url: `${DESTINATIONS}/galle`,
        title: 'Galle',
        paraOne: `Galle is a port city that has been known to chroniclers of civilizationsm mariners and traders from the
        days of King Solomon. Legends woven about Sri Lanka describe how King Solomon got peacocks and
        cinnamon through the port of Galle.If not true they may well approximate truth, for the phonetic
        genesis of “Cinnamon” is traced to Hebrew.The Greek geographer Cosmas Indicopluestas of Alexandria,
        mentions Galle as an important stop for Ships and Sailors of the Levant as early 6th century of the first
        millennium. Galle in the Sri Lanka Map has attracted Persians, Arabs, Greeks and Romans from the west
        and Indians and Malays from Gujarat and Malacca.Galle enters modern history in 1505 when the first
        Portuguese ship of Lorenzo de Almeida was driven to its inviting bay.The bay is sheltered by a rocky
        peninsula which according local lore was a lump of Himalayan soil which the Monkey God Hanuman
        dropped when he brought medicinal plants and herbs to treat the wounded in a battle in the Hindu epic
        Ramayana. In a seminal book “Ceylon Under the British” a scholar records in impishly imaginative words
        “… If the vagaries of the winds brought the Portuguese to Sri Lanka, the lure of Cinnamon kept them
        there.” So they did, until evicted by the Dutch in 1640. Galle you discover today, will relate that story
        from every nook and corner as you walk its streets and corridors’ of well preserved structures that have
        withstood both time and the price of progress.Today it is a protected world heritage site. It is has again
        regained its past grandeur simply by staying still within its imposing granite walls of the fort conceding
        some space to accommodate some world class Luxury Hotels in Sri Lanka.This ancient port city was
        directly in the cross roads of history. It was also the natural stop for ancient mariners who sailed with
        the help of obliging monsoon winds from China to the Shores of Arabia long before Isabella and
        Ferdinand decided to bet on Columbus. You will find the foot prints of Admiral Zeng Ho of China in Galle.
        The descendants of Arab traders with their quaint settlements and picturesque mosques will surprise
        you with their disarming charm and recall the wanderlust of Ibn Batuta who arrived on a stop over with
        no Sri Lanka Map but did leave descriptions of Sri Lanka accommodation.Galle is a monumental rebuke
        to that Imperial Poet Kipling. The fortified city, built by the Dutch, exists in its original design of the walls
        with 14 bastions enclosing an area of 52 hectares. It is an ingenious mixture of European architecture
        and Sri Lankan building traditions. In the structure of the ramparts, coral has been used with granite.
        The lay out of the streets and homes clearly point to a masterly synthesis of the east and west. In Galle
        the Dutch builders have made the “twain meet”, long before Kipling uttered those poetic but certainly
        not prophetic words “never the twain shall meet”. The twain continues to meet every January at the
        Galle Literary Festival an annual event in Sri Lanka that attracts the cream of Writers from all over. Galle
        was Global long before the advent of the internet and the web. In fact from the latter half of the fist
        millennium.`,
        imageOne:GalleOne,
        imageTwo:GalleTwo
    },
    {
        id: uniqid(),
        url: `${DESTINATIONS}/colombo`,
        title: 'Colombo',
        paraOne: `Colombo is a city that makes you feel home no sooner you reach it.Known to Roman, Arab and Chinese
        traders for 2000 years as well as Indian traders from Calicut and Gujarat also made it their rendezvous
        point with the Arabs from the Gulf of Oman.The natural point of convergence for traders from the
        remotest recesses of the past today it is a vibrant city frequented by visitors both on holiday in Sri Lanka
        or a Stopover in Sri Lanka on their way to the heart of Asia.Colombo withstood the turbulence of
        European conquest with its ancient charm and elegance. In the process it became the seventh largest
        sheltered port in the world in 1907. Its demography mirrors its captivating history with a mix of
        Buddhist, Hindu, Muslim and Christian ethics.Many great landmarks within its Municipality display this
        colourful history.The picturesque Gangaramaya Temple with its Sacred Enclosure of Higher Ordination
        built on the Dutch built Beira Lake, the Sri Kailasnathasr Hindu temple that overlooks the Colombo Fort
        Railway yard, the Dewatagaha Mosque where a 19th century Sufi saint is entombed, St. Lucias
        Cathedral, Wolvendaal Dutch Reformed Church and the Anglican St. Michaels Church built of stone,
        mortar and wood narrate the story of a city that still stands on the crossroads of evolving history.The
        Port of Colombo is one of the world’s largest artificial harbours, that is still under expansion. It is a major
        Indian Ocean seaport. As the main commercial hub of Sri Lanka, Colombo is the preferred location for
        the operations of both foreign and local banks, insurance companies and global investment and financial
        service providers.The part of the city known as the Fort was first built by the Portuguese as their
        protected enclave. It was modified by the Dutch. The British had little use for its fortifications after its
        total conquest of the island. It is now an important commercial center with many offices, five-star
        hotels, attractive shops and banks. The 19th century Clock Tower was once a lighthouse. Other historic
        landmarks are the President’s House and Gardens which was the residence of the British Governors
        from the time of the Dutch occupation.The Dutch left some remarkable imprints behind.`,
        paraTwo: `Most of them can be seen in the Dutch Museum located in the fort in a well preserved building of the
        Dutch period. The Mount Lavinia Beach is one of the sought after resort areas only 2 kms away from
        Colombo. The hotel that bears the name was once the residence of Sir Thomas Maitland, the British
        Governor who built it as his weekend retreat in 1805. The oldest hotel east of Suez is at one end of the
        Galle Face green, a wide promenade popular with all residents and visitors.Colombo has some of the
        oldest residential properties with ornate arcades, wide verandahs and painted ceilings of colonial
        buccaneers, bankers and barons who made their fortunes in trade shipping and plantations. They are of
        such antiquity that they need to be protected however prohibitively expensive to be lived in. Today they
        form one of the most extravagantly comfortable strings of Sri Lanka Boutique hotels in the whole region.
        The dream home away from home for a holiday in Sri Lanka which may well turn in to a prolonged
        vacation in Sri Lanka.`,
        imageOne:ColomboOne,
        imageTwo:ColomboTwo
        
    },
    {
        id: uniqid(),
        url: `${DESTINATIONS}/sigiriya`,
        title: 'Sigiriya',
        paraOne: `Sigiriya is both a palace and a fortress of stunning splendor, and is a tribute to its ingenious builders. Lest
        we forget to the King who wanted a Sri Lanka Holiday deal in a palace built on the flat top of a rock with
        a terrace and a mirror wall. The entrance is at mid level, through the Famous Lion gate that gives Sigiriya
        its name makes it the perfect tailor made holiday Sri Lanka. The frescoes of Heavenly Maidens -some
        twenty, sensuously captivating beauties who have survived out of nearly 600 date to the time of the
        playboy King Kashyappa, narrate in paint the pleasures of a pristine past of a land that you have chosen
        when you decided on your Sri Lanka vacation.Sigiriya is an architectural marvel and a classic example of
        urban planning in the first millennium. A park laid out on a symmetrical plan to appease Royal indolence
        and water retaining structures with ingenious surface and subsurface hydraulic systems will surprise
        you, as most of them function to this day.What will enthrall you most are the frescoes and the mirror
        wall graffiti. Together they narrate a story painted and etched of the genius of a people who lived and
        loved with passion. They surpass the guest comments you will read of the most fastidious of Boutique
        Hotels in Sri Lanka.`,
        paraTwo: `The Frescoes – are drawn in a style considered unique. They radiate an ethereal beauty that seduces
        your senses with a grace that is exquisite despite its antiquity.The Mirror Wall- It is said the Mirror Wall
        was so polished that the King could see himself when he passed through the ornate terrace in the sky.
        Its surface suggests that it is made of some form of porcelain. The mirror wall has verses dating from the
        8th century wherein they wrote on love, irony, loss and grief.The Gardens of Sigiriya is one of the oldest
        landscaped gardens in the world.The Lion’s Mouth – is the entrance to the palace, with its giant paws
        still intact. A guide for you to imagine the enormous edifice that it once was and still is on the Sri Lanka
        Map.`,
        imageOne:SigiriyaOne,
        imageTwo:SigiriyaTwo
    },
    {
        id: uniqid(),
        url: `${DESTINATIONS}/bentota`,
        title: 'Bentota',
        paraOne: `One of the top 10 beaches in Asia according to the list compiled for Forbes Best Beaches in Asia Awards
        2010, Bentota, which is found next to Beruwala, is a great place for family holidays. Five star holiday
        resorts flank the beach front and the Bentota River winds it way through the area. However its not only
        famous for its pristine beaches but also a number of exciting water sports such as windsurfing, para-
        sailing and jet skiing. Thrilling river safaris along the river grant visitors access to cinnamon plantations,
        nature resorts and temples which are further inland. An unmissable experience would be a visit to the
        residencies of two of Sri Lanka’s most famous personalities. Geoffrey Bawa, the internationally
        renowned Sri Lankan architect built his country estate Lunuganga in Bentota, while his brother Bevis
        Bawa an equally famous landscape artist designed Brief, a 5 acre landscaped garden. Both are open to
        the public and a visit to the Bentota would not be complete without a visit to Lunuganga and Brief.`,
        imageOne:BenthotaOne,
        imageTwo:BenthotaTwo
    },
    {
        id: uniqid(),
        url: `${DESTINATIONS}/jaffna`,
        title: 'Jaffna',
        paraOne: `Jaffna is one of the oldest human settlements in the peninsular region of Northern Sri Lanka. The city
        was the epicenter of a decade’s long conflict that has now ended. An old resident says in his blog “the
        quiet nostalgia for a gratifying past puts a faint smile on the granite brought in for reconstruction.”
        Reconstruction of the city and the return of its residents to the once vibrant economy are captured in
        canvas by an acclaimed artist. He notes “…continual transformation is the process that cities need to
        endure when they emerge in to new life once again.” That canvas unfolds before your eyes on your Sri
        Lanka vacation when you visit the Jaffna peninsula and the colourful offshore islands that surround it.
        Once the 2nd largest Sri Lankan city, it was also an important Portuguese colonial hold. The Dutch Fort
        that still dominates the Jaffna skyline is spread over an area of 22 hectares within the city limits. The star
        shaped Jaffna Fort built in 1680 by the Dutch is considered as the best example of Dutch fortifications in
        Asia. In Delft Island (Neduntivu islet) 35 kms from the city is the Delft Fort built by the Portuguese.
        Behind the Fort is a beautiful beach with exquisite shells. A ferry service connects the largest island in
        the Palk straits with the mainland. The architecture of the Kandaswamy Kovil in the Nallur quarter of the
        city has been built in the South Indian Dravidian style. The shrine which stood on the site before its
        destruction by the Portuguese dates back to the 10th century. At Kantarodai, there are about 100
        miniature dagobas or stupas crowded in to an area of about one hectare. The diameter of the largest
        stupa is approximately 4 meters. These are believed to be 2000 years old.Nagadeepa is a small island an
        hour’s journey by boat from the city. The Buddhist temple recently restored is a temple revered by
        Buddhists of Sri Lanka who believe that it was visited by the Buddha.`,
        imageOne:JaffnaOne,
        imageTwo:JaffnaTwo
    },
    {
        id: uniqid(),
        url: `${DESTINATIONS}/nuwaraeliya`,
        title: 'Nuwaraeliya',
        paraOne: `Known as Little England, the town of Nuwara Eliya enjoys spring-like weather throughout the year. A
        favorite retreat of the British during colonial times, the town is dotted with English country style houses
        and half-timbered bungalows. During this tour you will visit Victoria Park, Gregory Lake, 19th century
        Golf Club and drive around the city.Besides the sensational scenery, there are plenty of highlights to
        explore during a city tour of Nuwara Eliya.The British influence on Nuwara Eliya is evident from the
        Racecourse built by John Baker, a place he used to train his imported thoroughbreds from England. The
        racecourse is the only racecourse in Sri Lanka and is amongst the highest found anywhere in the world.`,
        paraTwo: `The historic Hill Club is a gentlemen’s club from the old colonial days, set within twenty six acres. It was
        the centre of colonial life when it was established by the foreign planters in the 19th century. Today, the
        Hill Club is located between Nuwara Eliya’s popular golf course and the county home of Sri Lanka’s
        president.Gregory’s Lake was created by the British Governor William Gregory who wished to make use
        of the water from the nearby Nanuoya River. The ninety hectare expanse, surrounded by the lush
        countryside, is a beautiful and tranquil place to spend an hour or two and the lake and adjoining boat
        house provides visitors with boating opportunities. South of the centre of Nuwara Eliya is Victoria Park,
        an immaculately kept public park which spreads out over an area in excess of twenty five acres. Victoria
        Park is very popular among bird lovers with the park being home to a number of endemic species which
        are supported by the Nanu Oya River and lakes that are situated in the park.`,
        imageOne:NuwaraeliyaOne,
        imageTwo:NuwaraeliyaTwo
        
    },
    {
        id: uniqid(),
        url: `${DESTINATIONS}/ella`,
        title: 'Ella',
        paraOne: `Ella is a small yet beautiful town in the district of Badulla in the province of Uva, Sri Lanka, which is
        administered by the Urban Council. Ella is roughly 200 kilometers (120 mi) east of Colombo and is at an
        elevation of 1,041 meters (3,415 ft) above sea level. The region is abundant in biodiversity, filled with
        many varieties of flora and fauna. Ella is framed by hills dotted by cloud forest and tea plantations. Due
        to its height, the region has a colder atmosphere than the nearby lowlands. The Ella Gap provides views
        through the southern plains of Sri Lanka. A near-perfect-location for the nature loving and adventurous;
        the picturesque valley of Ella offers spectacular views of the southern mountains and highlands. Famed
        for the main nature trails that lead through it, Ella provides first-rate hiking opportunities, regardless of
        how experienced you are. It also features Ravana falls which is one of the main waterfalls in the island,
        Mini Adam’s Peak and Ella Rock. Just a little bit of hint - on a clear night, you can see the Great Basses
        lighthouse with its commanding posture and that is a view that shouldn’t be missed.`,
        imageOne:EllaOne,
        imageTwo:EllaTwo
    },
    {
        id: uniqid(),
        url: `${DESTINATIONS}/mirissa`,
        title: 'Mirissa',
        paraOne: `Mirissa is a small town on the south coast of Sri Lanka, situated in the Southern Province of Matara. It is
        about 150 kilometers (93 mi) south of Colombo and is located at an elevation of 4 meters (13 ft) above
        sea level. The beach and nightlife of Mirissa make it an attractive holiday destination. It is indeed a
        fishing port and one of the primary whale and dolphin sites on the planet. among the popular beach
        destinations in the south of Sri Lanka. The region is full of stunning Sri Lankan beaches, whale watching,
        surfing waves, and fantastic pubs and restaurants. Mirissa has been growing fast over the past few years
        and also becoming busier. There are also lots of places where you can appreciate fresh coconut from
        your hammock, enjoying the sunset.`,
        imageOne:MirissaOne,
        imageTwo:MirissaTwo
    },
    {
        id: uniqid(),
        url: `${DESTINATIONS}/yala`,
        title: 'Yala',
        paraOne: `Yala is a huge land area of lagoons and grasslands, making it a perfect and lusty living home for various
        animal species. The Yala Safari takes you closer to all this glory. Known as the world’s leopard kingdom,
        Yala is also the home of many other captivating mammals. Yala National Park Safari is a perfect wildlife
        experience in all terms; 215 bird species, 44 mammal species, 47 reptile species, 18 amphibian species,
        and 21 fish species live in Yala. All these facts and figures are remarkable in any wildlife safari standards.
        The elephant herd of Yala may contain up to 350 individuals; again, it is also one of the highest recorded
        elephants in one place. About 25 individual leopards wander in block one. Sri Lankan leopards (Panthera
        Pardus Kotiya) are said to be a distinct sub-species from their Indian neighbors. Leopards can be seen
        throughout the park, though best period for enjoying the sights of leopards is during January to July.`,
        paraTwo: `Yala National Park’s Block 1, on the western side of the park, the only one of all five blocks open to the
        visitors, has recorded the highest density of leopards among the leopard populations scattered in the
        wildlife parks of Sri Lanka. These magnificent beasts have now much habituated to the encroachment of
        their domains by the humans in jeeps. Young males don’t betray any sign of disturbance; they seem
        confident roaming over the gravel roads tracks as well as the bush jungle during the day: the visitors
        enjoy to no ends, fine photographic opportunities to capture the magnificent beasts well focused at the
        close range.`,
        imageOne:YalaOne,
        imageTwo:YalaTwo  
    },
    {
        id: uniqid(),
        url: `${DESTINATIONS}/udawalawa`,
        title: 'Udawalawa',
        paraOne: `Udawalawe National Park is one of the best wildlife safari choices on the planet for witnessing
        magnificent mammals, birds, reptiles, and many other animal species. The name Udawalawe is famous
        for the higher density of endemic animal species living in healthy settings. One of the best places on the
        island to witness the jumbos of the jungle is the enthralling elephant. The forest settings of the park is a
        collection of grassland and bush forest, making safari and tours more convenient and accessible for
        jeeps. You can get remarkably closer to your favorite animal here, and we guarantee it. We do
        Udawalawe safari tours in perfect style for local and international travelers.`,
        paraTwo: `There’s not a single negative trait to mention regarding the Udawalawe National Park; it is perfect in all
        terms. As a dedicated forest area for the gorgeous animal kingdom, this national park has done a
        fabulous job in protecting the animals and helping them breed and thrive to grow in numbers. Wild
        elephants, deer, birds, and wild buffalos wandering all over are pretty common sights here. In terms of
        wildlife elephant numbers living in a smaller land area, Udawalawe even supersedes African national
        parks. Why travel to Africa to enjoy iconic elephants in large numbers, Udawalawe safari tours are a
        better choice.` ,
        imageOne:UdawalawaOne,
        imageTwo:UdawalawaTwo 
        
    },
    {
        id: uniqid(),
        url: `${DESTINATIONS}/rainforest`,
        title: 'Rainforest',
        paraOne: `Rainforests are incredible places which cover only 6% of the surface area of the Earth, however more
        than half of the world’s plant and animal species lives in them. The reason they are called rainforests is
        because they receive a high amount of rainfall annually. Consisting of tall, dense jungle, the climate
        inside a rainforest is hot and humid. At one time in Sri Lanka rainforests consisted of over 26% of the
        land area, however today only 2% is left of forest cover. Hence it is no surprise that all rainforests in the
        island have been declared protected areas with Sinharaja designated as a World Heritage site. The title
        of World Heritage Site is granted by UNESCO and it means that the area has been listed as a place of
        special significance to the common heritage of humanity. It is therefore in the interest of mankind to
        preserve and protect such sites.The rainforests of Sri Lanka are treasure troves of biodiversity and
        beauty. Most of the island’s rainforests are located on the western and southern slopes of the
        mountains of Sri Lanka and they are well worth a visit. The three most famous rainforests in Sri Lanka
        are Peak Wilderness, 250 km2; Knuckles, 175 km2; and the Sinharaja World Heritage Site, 90 km2. The
        elusive loris, the majestic elephant and fierce eyed leopards are found within these rainforests.`,
        imageOne:RainForestOne,
        imageTwo:RainForestTwo,
        types: [
            {
                id: uniqid(),
                title: 'Peak Wilderness Sanctuary',
                details: `The third largest natural reserve in Sri Lanka, the Peak Wilderness Sanctuary is a tropical rainforest
                which derives its name from the surrounding areas of Adams Peak, Horton Plains, Pidhurutalagala and
                Hakgala. In 2009 the world’s rarest toad, the Adenomus kandianus which was thought to be extinct for
                133 years, was rediscovered in this rainforest.`
            },
            {
                id: uniqid(),
                title: 'Knuckles',
                details: `The Knuckles Mountain range includes sections of Kandy and Matale with the Mahaveli Valley
                separating it from the Central Hills on the South and East while the Matale valley does the same on the
                West. It was named Knuckles because the mountain range looks like a clenched fist. Its importance lies
                in its clear water, cloud forests and unique flora and fauna.`
            },
            {
                id: uniqid(),
                title: 'Sinharaja World Heritage',
                details: `A national park and biodiversity hotspot in Sri Lanka, the Sinharaja rainforest is of global importance and
                has been named a World Biosphere Reserve as well as a UNESCO World Heritage Site. Part of Sri Lanka’s
                lowland rainforests, this reserve is a goldmine of endemic species including reptiles, birds, mammals,
                insects and trees.It is difficult to part from these magnificent forests with their exceptional ensemble of
                flora and fauna. In order to truly embrace the natural beauty of Sri Lanka it is essential that you
                undertake a forest trek through these incredible rainforests.`
            },
            {
                id: uniqid(),
                title: 'Kanneliya World Heritage',
                details: `Kanneliya Rainforest is one of Galle’s major attractions in Southern Province, Sri Lanka. This Forest
                Reserve is named among the 21 Biodiversity Hotspots in the world. And this forest complex is
                considered the last large remaining rainforest in Sri Lanka other than Sinharaja rain forest. It was
                declared a biosphere reserve in 2004 by UNESCO. Kanneliya forest is rich in a diverse range of flora,
                fauna, and especially endemic animals to Sri Lanka. You will get a chance to see monkeys, snakes,
                chameleons, extensive birdlife, and a vast range of tropical trees, plants, and flowers. December to April
                is the best time to travel to Kanneliya. Because of the Lower chance of rain. Streams are generally rich
                after rain. And this period is ideal for visiting waterfalls in Kanneliya. If you are seeking adventure-based
                tourism locations in Sri Lanka Kanneliya is mind blowing place.`
            }
        ]
    },
    {
        id: uniqid(),
        url: `${DESTINATIONS}/horton-plains`,
        title: 'Horton Plains',
        paraOne: `Located at an altitude over 2000 meters, the Horton Plains is a nature’s gift. The national park, in the
        central part of the island country, is a so different from the other frequently visited national parks, it is
        well worth a visit. Consisting mostly of montane grass and cloud forests, the national park offers a great
        diversity of flora and fauna, many of which are endemic. A trip to the Horton Plains is generally done
        from Nuwara Eliya, which lies around 35 kilometers from the national park. However, it is more
        enjoyable to do a trip solely to Horton Plains to experience its unique biodiversity and physical
        features.The Horton Plains is the place where three of Sri Lanka’s major rivers have originated—Kelani,
        Walawe, and Mahaweli. Being located on a plateau, the national park has uneven rocky surface. Many
        places are covered with red soil, adding beautifully to the landscape. Apart from being a hotspot for
        ecologists, the Horton Plains is a wonderful tourist destination. Its primary tourist attraction includes the
        World’s End and the Baker’s waterfall. The cool climate makes it an ideal place to trek and be in the lap
        of nature.Horton Plains offers various trekking routes for visitors. The most popular among them is the 9
        kilometers circular trek that goes past the World’s End. Situated by a sheer cliff, the World’s End offers
        breathtaking views of the surroundings. If the clouds don’t engulf you by the time you reach the place,
        you will be able to even see the sea, lying some 80 kilometers away. Apart from the World’s End, the
        trek also takes you past Baker’s Falls and the Chimney Lake.Along your trek, you will be able to spot
        several wildlife, if you are lucky. Some of the frequently sighted animals in the region include Sambar
        deer, giant squirrel, wild boar, otters, fishing cat, bear monkey, and toque monkey.Though the national
        park was once full of elephants, today it is in fact, the only national park in Sri Lanka without a single
        elephant. The elusive Slender Loris, which has been sighted very rarely in the region is considered to be
        a completely different species to be seen no where else in the world.`,
        imageOne:HortonPlainsOne,
        imageTwo:HortonPlainsTwo
    }
]
