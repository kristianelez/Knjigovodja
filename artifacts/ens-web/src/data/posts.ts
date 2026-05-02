import heroImg from '@/assets/images/hero.png';
import blog1 from '@/assets/images/blog-1.png';
import blog2 from '@/assets/images/blog-2.png';
import blog3 from '@/assets/images/blog-3.png';
import blog4 from '@/assets/images/blog-4.png';
import blog5 from '@/assets/images/blog-5.png';
import blog6 from '@/assets/images/blog-6.png';
import blog7 from '@/assets/images/blog-7.png';
import blog8 from '@/assets/images/blog-8.png';
import blog9 from '@/assets/images/blog-9.png';
import blog10 from '@/assets/images/blog-10.png';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "kako-prijaviti-porez-u-2026-godini",
    title: "Kako prijaviti porez u 2026. godini",
    excerpt: "Sve što trebate znati o novim poreznim pravilima i rokovima za prijavu poreza u Bosni i Hercegovini za 2026. godinu.",
    category: "Porezi",
    author: "Amila Hodžić",
    date: "15. Januar 2026.",
    readTime: "5 min",
    image: blog1,
    content: "Porezna prijava u Bosni i Hercegovini može biti kompleksan proces, ali uz pravilnu pripremu, to ne mora biti slučaj. U 2026. godini stupaju na snagu određene izmjene koje se tiču poreza na dobit i dohodak. Prva i najvažnija promjena odnosi se na digitalizaciju procesa prijave, gdje se sve više oslanjamo na elektronske servise Porezne uprave.\n\nVažno je napomenuti da rokovi ostaju isti kao i prethodnih godina. Za pravna lica, rok za podnošenje prijave poreza na dobit je 31. mart tekuće godine za prethodnu godinu. Fizička lica koja obavljaju samostalnu djelatnost također trebaju ispoštovati ovaj rok.\n\nJedna od čestih grešaka koje preduzetnici prave je neadekvatno vođenje evidencije o troškovima koji se priznaju kao porezno priznati rashodi. Zato je saradnja sa stručnim knjigovođom ključna. Kroz pravilno klasificiranje troškova, možete značajno smanjiti svoju poreznu osnovicu i optimizirati poslovanje u skladu sa zakonom.\n\nNa kraju, preporučujemo da ne čekate zadnji dan za podnošenje prijave. Sistem može biti preopterećen, a svako kašnjenje povlači za sobom zatezne kamate i moguće kazne. Pripremite dokumentaciju na vrijeme i budite bezbrižni."
  },
  {
    id: "2",
    slug: "prednosti-angazovanja-knjigovodstvene-agencije",
    title: "Prednosti angažovanja knjigovodstvene agencije",
    excerpt: "Zašto je vanjsko knjigovodstvo često bolje i isplativije rješenje od zapošljavanja internog računovođe.",
    category: "Knjigovodstvo",
    author: "Emir Begić",
    date: "02. Februar 2026.",
    readTime: "4 min",
    image: blog2,
    content: "Mnogi vlasnici malih i srednjih preduzeća često se pitaju da li im je isplativije zaposliti računovođu u stalni radni odnos ili angažovati eksternu knjigovodstvenu agenciju. Iako obje opcije imaju svoje prednosti, angažman agencije donosi niz benefita koji su posebno izraženi u današnjem dinamičnom poslovnom okruženju.\n\nPrva i najočitija prednost je smanjenje troškova. Zapošljavanje radnika podrazumijeva ne samo isplatu plate, već i doprinosa, regresa, naknada za topli obrok, te troškove opremanja radnog mjesta i nabavke softvera. Sa agencijom, plaćate samo ugovorenu uslugu.\n\nDruga velika prednost je pristup timu stručnjaka. Kada angažujete agenciju poput ENS d.o.o., vi ne dobijate samo jednu osobu, već cijeli tim eksperata iz različitih oblasti - od obračuna plata, preko PDV-a, do poreznog savjetovanja. To znači da uvijek imate nekoga ko je u toku sa najnovijim zakonskim izmjenama.\n\nKonačno, odgovornost i sigurnost su na strani agencije. Profesionalne knjigovodstvene agencije imaju osiguranje od profesionalne odgovornosti. U slučaju greške, agencija snosi odgovornost, što vama kao vlasniku biznisa daje dodatni mir."
  },
  {
    id: "3",
    slug: "sta-je-pdv-i-ko-mora-biti-u-sistemu",
    title: "Šta je PDV i ko mora biti u sistemu",
    excerpt: "Vodič za početnike o porezu na dodatu vrijednost u BiH i limitima za obavezan ulazak u sistem PDV-a.",
    category: "Porezi",
    author: "Amila Hodžić",
    date: "20. Februar 2026.",
    readTime: "6 min",
    image: blog3,
    content: "Porez na dodatu vrijednost (PDV) je jedan od najvažnijih poreznih oblika u Bosni i Hercegovini. Za mnoge nove preduzetnike, sistem PDV-a predstavlja nepoznanicu, ali njegovo razumijevanje je ključno za legalno i uspješno poslovanje.\n\nU Bosni i Hercegovini, standardna stopa PDV-a iznosi 17%. Prema Zakonu o PDV-u, svako lice čiji oporezivi promet dobrima ili uslugama u prethodnoj godini prelazi prag od 100.000 KM (ili se očekuje da će preći taj prag u tekućoj godini) obavezno je da se prijavi i registruje kao PDV obveznik kod Uprave za indirektno oporezivanje (UIO).\n\nMeđutim, mnogi preduzetnici se odlučuju za dobrovoljni ulazak u sistem PDV-a i prije ostvarenja ovog limita. Zašto? Ako poslujete uglavnom sa drugim firmama (B2B) koje su već u sistemu PDV-a, njima će odgovarati da i vi budete u sistemu kako bi mogli odbiti ulazni PDV. Također, ako vaša djelatnost zahtijeva velika početna ulaganja i nabavku opreme, ulazak u sistem PDV-a vam omogućava povrat poreza na ta ulaganja.\n\nVođenje PDV evidencija zahtijeva preciznost i redovnost. Prijave se podnose mjesečno, do 10. u mjesecu za prethodni mjesec. Propusti u ovom segmentu se strogo kažnjavaju, stoga je prepuštanje ovog posla stručnom knjigovođi najbolja odluka."
  },
  {
    id: "4",
    slug: "najcesce-greske-pri-vodjenju-poslovnih-knjiga",
    title: "Najčešće greške pri vođenju poslovnih knjiga",
    excerpt: "Saznajte koje su to uobičajene greške koje preduzetnici prave i kako ih izbjeći uz stručnu pomoć.",
    category: "Savjeti",
    author: "Emir Begić",
    date: "05. Mart 2026.",
    readTime: "4 min",
    image: blog4,
    content: "Vođenje poslovnih knjiga zahtijeva maksimalnu koncentraciju i poznavanje propisa. Čak i male greške mogu dovesti do ozbiljnih finansijskih posljedica i kazni od strane nadležnih institucija. Kroz našu praksu u ENS d.o.o. susretali smo se sa raznim situacijama, a ovo su najčešće greške koje smo primijetili.\n\nMiješanje privatnih i poslovnih finansija je ubjedljivo najčešća greška kod preduzetnika i vlasnika malih d.o.o. firmi. Plaćanje privatnih troškova sa računa firme, ili obrnuto, stvara haos u knjigovodstvu i predstavlja ozbiljan prekršaj zakona. Sredstva firme su isključivo namijenjena za poslovne svrhe.\n\nNedostatak uredne dokumentacije je još jedan veliki problem. Svaka transakcija mora biti pokrivena validnim dokumentom (fakturom, računom, ugovorom). Gubitak računa za reprezentaciju, gorivo ili materijal znači da se ti troškovi ne mogu knjižiti, čime se umjetno povećava dobit i, posljedično, porez.\n\nZakašnjelo dostavljanje dokumentacije knjigovođi također stvara probleme. Knjigovođa ne može kvalitetno obaviti svoj posao i pravovremeno podnijeti prijave ako dokumente dobije zadnji dan roka. Redovna, mjesečna ili sedmična komunikacija i dostava papira je ključ za uredno poslovanje."
  },
  {
    id: "5",
    slug: "obracun-plata-u-bih",
    title: "Obračun plata u BiH — vodič za poslodavce",
    excerpt: "Sve što poslodavci trebaju znati o doprinosima, porezima i zakonitom obračunu plata za zaposlene.",
    category: "Plate",
    author: "Amila Hodžić",
    date: "12. Mart 2026.",
    readTime: "5 min",
    image: blog5,
    content: "Obračun plata je jedan od najosjetljivijih segmenata poslovanja. Svaka greška direktno utiče na prava radnika, ali i na obaveze firme prema državi. U Federaciji Bosne i Hercegovine, sistem obračuna plata uključuje neto platu, porez na dohodak i doprinose.\n\nKada ugovarate platu sa radnikom, važno je jasno definisati da li dogovarate neto ili bruto iznos. Neto plata je ono što radnik dobije na račun, dok bruto plata uključuje neto iznos plus porez na dohodak (10%) i doprinose iz plate (PIO, zdravstveno, osiguranje od nezaposlenosti). Pored toga, poslodavac plaća i doprinose na platu, što čini ukupni trošak zaposlenog.\n\nNaknade poput toplog obroka, prijevoza i regresa također podliježu određenim pravilima. Topli obrok je neoporeziv do određenog limita definisanog zakonom, a sve preko tog limita se tretira kao oporezivi dohodak. Slično važi i za ostale naknade.\n\nZbog čestih izmjena u propisima o radu i porezima, povjeravanje obračuna plata profesionalnoj agenciji smanjuje rizik od grešaka i osigurava potpunu usklađenost sa zakonom, čuvajući vas od visokih kazni inspekcijskih organa."
  },
  {
    id: "6",
    slug: "kako-osnovati-doo-u-fbih",
    title: "Kako osnovati d.o.o. u Federaciji BiH",
    excerpt: "Korak po korak vodič kroz proces registracije društva sa ograničenom odgovornošću u Sarajevu i šire.",
    category: "Pravo",
    author: "Emir Begić",
    date: "25. Mart 2026.",
    readTime: "7 min",
    image: blog6,
    content: "Osnivanje društva sa ograničenom odgovornošću (d.o.o.) u Federaciji BiH je proces koji zahtijeva pripremu i prikupljanje određene dokumentacije. Iako je procedura u proteklim godinama donekle pojednostavljena, i dalje uključuje posjete različitim institucijama.\n\nPrvi korak je donošenje Odluke (ili Ugovora) o osnivanju koja se ovjerava kod notara. Minimalni osnivački kapital za d.o.o. iznosi 1.000 KM, koji se uplaćuje na prelazni račun u banci. Zatim se sa ovjerenom dokumentacijom i potvrdom o uplati kapitala podnosi zahtjev za registraciju nadležnom općinskom sudu.\n\nNakon dobijanja Rješenja o registraciji od suda, slijedi izrada pečata i dobijanje Identifikacionog broja (ID broja) od Porezne uprave. Nakon toga slijedi prijava u Zavod za statistiku (dobijanje statističkog broja) te otvaranje transakcijskog računa u poslovnoj banci.\n\nPosljednji koraci uključuju prijavu direktora i zaposlenih u Poreznu upravu, te podnošenje zahtjeva za PDV broj ukoliko firma odmah ulazi u sistem PDV-a. Cijeli proces može trajati od 15 do 30 dana. Naša agencija ENS d.o.o. nudi uslugu vođenja cijelog procesa osnivanja, čime štedite dragocjeno vrijeme i izbjegavate administrativne prepreke."
  },
  {
    id: "7",
    slug: "elektronsko-fiskalno-poslovanje",
    title: "Elektronsko fiskalno poslovanje — šta donosi",
    excerpt: "Novi zakoni o elektronskoj fiskalizaciji mijenjaju način na koji izdajemo račune. Pripremite se na vrijeme.",
    category: "Knjigovodstvo",
    author: "Amila Hodžić",
    date: "10. April 2026.",
    readTime: "4 min",
    image: blog7,
    content: "Digitalizacija poslovnih procesa je nezaustavljiv trend, a Bosna i Hercegovina također pravi korake u tom pravcu kroz najavljene procese nove elektronske fiskalizacije. Ovaj sistem predstavlja modernizaciju trenutnog načina izdavanja fiskalnih računa i komunikacije sa Poreznom upravom.\n\nNovi model podrazumijeva online prenos podataka o svakom izdatom računu u realnom vremenu na servere Porezne uprave. To znači da će softverska rješenja i kase morati biti stalno povezani na internet, a podaci će biti trenutno dostupni inspektorima za kontrolu.\n\nZa privrednike ovo znači potrebu za prilagođavanjem postojećih sistema ili nabavku novih koji podržavaju ovaj standard. Iako u početku predstavlja trošak, dugoročno elektronska fiskalizacija smanjuje sivu ekonomiju i stvara pravednije tržišne uslove za sve učesnike.\n\nVaš knjigovođa je tu da vas provede kroz ove promjene. U ENS d.o.o. pratimo sve zakonske regulative i pravovremeno obavještavamo naše klijente o koracima koje trebaju poduzeti kako bi njihovo poslovanje bilo 100% u skladu sa novim zahtjevima."
  },
  {
    id: "8",
    slug: "porezne-olaksice-za-mala-preduzeca",
    title: "Porezne olakšice za mala preduzeća",
    excerpt: "Saznajte koje sve olakšice i poticaje možete iskoristiti kako biste legalno umanjili porezne obaveze.",
    category: "Porezi",
    author: "Emir Begić",
    date: "18. April 2026.",
    readTime: "5 min",
    image: blog8,
    content: "Plaćanje poreza je zakonska obaveza, ali to ne znači da ne trebate iskoristiti legalne mogućnosti za umanjenje porezne osnove. Zakon o porezu na dobit u FBiH predviđa određene olakšice i poticaje koji su posebno značajni za mala preduzeća u razvoju.\n\nJedna od najznačajnijih olakšica odnosi se na zapošljavanje novih radnika. Poslodavci koji zapošljavaju određene kategorije nezaposlenih osoba (poput onih sa biroa, lica sa invaliditetom ili pripravnika) često mogu ostvariti pravo na sufinansiranje doprinosa kroz programe Zavoda za zapošljavanje ili umanjenje porezne osnove.\n\nInvestiranje iz dobiti je također odličan način za poreznu optimizaciju. Zakon stimuliše firme koje odluče reinvestirati ostvarenu dobit u vlastitu proizvodnju, opremu ili postrojenja, omogućavajući im značajna umanjenja obaveze poreza na dobit pod određenim uslovima.\n\nPrepoznavanje i pravovremeno korištenje ovih olakšica zahtijeva detaljno poznavanje propisa. Dobar knjigovođa ne samo da evidentira prošlost, već i savjetuje za budućnost, pomažući vam da strateški isplanirate svoje finansije."
  },
  {
    id: "9",
    slug: "razlika-izmedju-knjigovotje-i-racunovodje",
    title: "Razlika između knjigovođe i računovođe",
    excerpt: "Da li znate razliku? Razumijevanje ovih uloga je bitno za pravilno upravljanje finansijama vaše firme.",
    category: "Savjeti",
    author: "Amila Hodžić",
    date: "05. Maj 2026.",
    readTime: "4 min",
    image: blog9,
    content: "U svakodnevnom govoru, termini knjigovođa i računovođa se često koriste kao sinonimi, ali u profesionalnom svijetu oni predstavljaju dva različita nivoa upravljanja finansijama firme.\n\nKnjigovođa se prvenstveno bavi prikupljanjem, organizovanjem i knjiženjem finansijskih transakcija. Njegov posao je da osigura da su svi ulazni i izlazni računi evidentirani, da su bankovni izvodi usklađeni, te da je dnevna finansijska dokumentacija uredna i tačna. To je temelj na kojem se gradi sve ostalo.\n\nS druge strane, računovođa analizira podatke koje je knjigovođa pripremio. Računovođa sastavlja finansijske izvještaje, vrši analizu profitabilnosti, priprema porezne prijave i pruža strateške savjete. Računovođa tumači finansijsku sliku firme i pomaže vlasniku u donošenju ključnih poslovnih odluka.\n\nU ENS d.o.o. ponosimo se time što našim klijentima pružamo kompletnu uslugu - od besprijekornog knjigovodstva do naprednog računovodstvenog i finansijskog savjetovanja. Na taj način osiguravamo stabilnost i rast vašeg biznisa."
  },
  {
    id: "10",
    slug: "finansijski-izvjestaji-sta-morate-znati",
    title: "Finansijski izvještaji — šta morate znati",
    excerpt: "Kako čitati bilans stanja i bilans uspjeha i zašto su oni krvotok vašeg poslovanja.",
    category: "Knjigovodstvo",
    author: "Emir Begić",
    date: "20. Maj 2026.",
    readTime: "6 min",
    image: blog10,
    content: "Godišnji finansijski izvještaji (završni račun) nisu samo puka zakonska obaveza koju morate predati FIA-i do kraja februara, već su najvažniji dokument za analizu zdravlja vašeg biznisa. Dva ključna dijela ovog izvještaja su Bilans stanja i Bilans uspjeha.\n\nBilans stanja daje fotografiju finansijske pozicije firme na određeni dan (obično 31. decembar). On prikazuje čime firma raspolaže (aktiva - novac, zalihe, oprema) i iz kojih izvora to finansira (pasiva - kapital vlasnika, krediti, obaveze prema dobavljačima). Aktiva i pasiva moraju biti u ravnoteži.\n\nBilans uspjeha, s druge strane, prikazuje rezultat poslovanja u određenom periodu (od 1. januara do 31. decembra). On sučeljava sve ostvarene prihode i nastale rashode, a rezultat je neto dobit ili gubitak. Razumijevanje stavki u bilansu uspjeha pomaže vam da uvidite gdje novac 'curi' i koji segmenti poslovanja su najprofitabilniji.\n\nKao vlasnik firme, ne morate znati sastaviti ove izvještaje - to je posao vaše agencije. Ali izuzetno je važno da znate da ih pročitate i razumijete uz pomoć vašeg računovođe. ENS d.o.o. redovno organizuje sastanke sa klijentima gdje detaljno analiziramo ove pokazatelje."
  },
  {
    id: "11",
    slug: "cijena-knjigovodstvenih-usluga-sarajevo",
    title: "Cijena knjigovodstvenih usluga u Sarajevu - koliko košta knjigovođa?",
    excerpt: "Detaljan pregled cijena knjigovodstvenih usluga u Sarajevu i BiH za 2026. godinu - šta utiče na cijenu i kako odabrati pravu agenciju.",
    category: "Savjeti",
    author: "Amila Hodžić",
    date: "05. Juni 2026.",
    readTime: "6 min",
    image: blog1,
    content: "Jedno od prvih pitanja koje preduzetnici u Sarajevu postavljaju kada razmišljaju o angažovanju knjigovođe je - koliko to zapravo košta? Cijena knjigovodstvenih usluga u Bosni i Hercegovini varira od 100 KM do preko 1.000 KM mjesečno, ovisno o nizu faktora koje ćemo detaljno objasniti.\n\nNajvažniji faktor koji utiče na cijenu je obim poslovanja - broj ulaznih i izlaznih faktura, broj zaposlenih za koje se obračunava plata, te status u sistemu PDV-a. Mali obrt sa nekoliko faktura mjesečno može očekivati cijenu od 100-200 KM, dok firma sa 200+ dokumenata mjesečno i 10 zaposlenih može plaćati i preko 800 KM.\n\nDrugi faktor je djelatnost. Trgovinske firme i ugostiteljski objekti zahtijevaju više vremena zbog velikog broja malih transakcija, dok IT firme ili konsalting agencije imaju jednostavniju strukturu. Specifične djelatnosti poput građevine ili proizvodnje također zahtijevaju dodatnu ekspertizu.\n\nU ENS d.o.o. nudimo transparentno cjenovne pakete prilagođene veličini vašeg biznisa. Naša preporuka je da prilikom odabira knjigovođe ne gledate samo cijenu - jeftin knjigovođa može vas koštati mnogo više kroz propuštene porezne olakšice ili kazne. Kontaktirajte nas za besplatnu procjenu vašeg biznisa."
  },
  {
    id: "12",
    slug: "knjigovodstvo-za-obrte-bih-vodic",
    title: "Knjigovodstvo za obrte u BiH - kompletan vodič za samostalne preduzetnike",
    excerpt: "Sve što vlasnici obrta u Bosni i Hercegovini moraju znati o knjigovodstvenim obavezama, paušalu i prelazu na PDV sistem.",
    category: "Knjigovodstvo",
    author: "Emir Begić",
    date: "12. Juni 2026.",
    readTime: "7 min",
    image: blog2,
    content: "Obrt je jedan od najpopularnijih oblika poslovanja u Bosni i Hercegovini, posebno za samostalne preduzetnike, zanatlije i pružaoce usluga. Iako je administrativno jednostavniji od d.o.o., obrt ima specifične knjigovodstvene obaveze koje vlasnici često previđaju.\n\nObrti u BiH mogu poslovati kao paušalni obveznici ili kao obveznici poreza na dohodak po stvarno ostvarenom dohotku. Paušalni sistem je jednostavniji - plaćate fiksni mjesečni iznos poreza i doprinosa bez vođenja kompleksnih knjiga, ali postoji limit godišnjeg prometa (trenutno 50.000 KM).\n\nAko prelazite paušalni limit ili želite priznavati stvarne troškove, prelazite na vođenje poslovnih knjiga - knjige prihoda i rashoda (KPR), knjige prometa, te evidencije osnovnih sredstava. Tada postaje gotovo neophodno angažovati knjigovođu jer su obaveze identične onima kod d.o.o.\n\nPoseban izazov je prelazak u sistem PDV-a, koji nastupa kada godišnji promet pređe 100.000 KM. Tada se značajno povećava administrativna zahtjevnost - mjesečne PDV prijave, evidencija ulaznog i izlaznog PDV-a, te rad sa fiskalnim računima. ENS d.o.o. specijalizovan je za rad sa obrtima u Sarajevu i nudi pakete prilagođene upravo ovom obliku poslovanja."
  },
  {
    id: "13",
    slug: "kako-registrovati-firmu-sarajevo",
    title: "Kako registrovati firmu u Sarajevu - korak po korak vodič za 2026.",
    excerpt: "Kompletan praktičan vodič za registraciju firme u Sarajevu - od izbora oblika poslovanja do dobijanja prvog ID broja.",
    category: "Pravo",
    author: "Lejla Mujić",
    date: "20. Juni 2026.",
    readTime: "8 min",
    image: blog3,
    content: "Pokretanje vlastitog biznisa u Sarajevu može djelovati zastrašujuće zbog brojnih institucija i papirologije, ali uz pravilan plan, cijeli proces može biti završen za 2-3 sedmice. U ovom vodiču detaljno opisujemo svaki korak.\n\nPrvi korak je odluka o obliku poslovanja - obrt, d.o.o., ili neki drugi oblik. Za većinu malih preduzetnika koji žele ozbiljnije poslovanje, d.o.o. je najbolji izbor zbog ograničene odgovornosti i kredibiliteta. Minimalni osnivački kapital je 1.000 KM.\n\nSlijedi izbor naziva firme i provjera dostupnosti u sudskom registru, te definisanje šifri djelatnosti prema Klasifikaciji djelatnosti BiH. Zatim ide notarska ovjera Odluke o osnivanju, uplata kapitala u banku, i podnošenje zahtjeva za registraciju Općinskom sudu u Sarajevu.\n\nNakon registracije slijedi izrada pečata, prijava u Poreznu upravu FBiH za dobijanje ID broja, prijava u Zavod za statistiku, otvaranje transakcijskog računa, prijava direktora i zaposlenih, te eventualno ulazak u sistem PDV-a. ENS d.o.o. nudi kompletnu uslugu osnivanja firme po ključ-u-ruke principu - vi se bavite biznisom, mi se bavimo papirologijom."
  },
  {
    id: "14",
    slug: "knjigovodstvo-za-freelancere-bih",
    title: "Knjigovodstvo za freelancere u BiH - kako legalno raditi sa stranim klijentima",
    excerpt: "Praktični vodič za freelancere u BiH - kako prijaviti dohodak iz inostranstva, koji oblik poslovanja izabrati i kako optimizirati poreze.",
    category: "Savjeti",
    author: "Amila Hodžić",
    date: "28. Juni 2026.",
    readTime: "7 min",
    image: blog4,
    content: "Sve više stručnjaka u BiH radi kao freelanceri za strane klijente putem platformi poput Upwork-a, Toptal-a ili direktnim ugovorima. Iako je ova vrsta posla vrlo unosna, mnogi freelanceri ne znaju kako legalno prijaviti svoj dohodak i izlažu se ozbiljnim poreznim rizicima.\n\nPrva odluka je između rada kao samostalna djelatnost (obrt) ili osnivanje d.o.o. Za freelancere sa godišnjim dohotkom do 50.000 KM, paušalni obrt je najjednostavnije rješenje. Za one sa većim primanjima, d.o.o. nudi bolje porezne uslove i veću fleksibilnost u priznavanju troškova.\n\nKada radite za strane klijente, faktura se izdaje bez obračuna PDV-a (export usluga je oslobođen PDV-a), ali morate voditi računa o pravilnoj dokumentaciji. Naplate stižu na devizni račun i konvertuju se po srednjem kursu CBBiH na dan priliva, što utiče na obračun dohotka.\n\nPosebno je važno pravilno priznati troškove - oprema, internet, softverske licence, kursevi i edukacije, dio režija ako radite od kuće - sve to može značajno smanjiti vašu poreznu osnovicu. ENS d.o.o. ima poseban paket za IT freelancere i digitalne nomade u Sarajevu koji uključuje sve specifičnosti ovog tipa poslovanja."
  },
  {
    id: "15",
    slug: "online-knjigovodstvo-kako-funkcionise",
    title: "Online knjigovodstvo - kako funkcioniše i da li je sigurno za vašu firmu",
    excerpt: "Sve više firmi prelazi na online knjigovodstvo. Otkrijte kako ovaj model radi, koje su prednosti i kako odabrati pouzdanu agenciju.",
    category: "Knjigovodstvo",
    author: "Kenan Hadžić",
    date: "05. Juli 2026.",
    readTime: "5 min",
    image: blog5,
    content: "Digitalizacija je promijenila način na koji poslujemo, a knjigovodstvo nije izuzetak. Online knjigovodstvo postaje standard u BiH, omogućavajući klijentima da svoju dokumentaciju razmjenjuju sa knjigovođom putem digitalnih platformi, bez fizičkih sastanaka i prenosa papira.\n\nKako to funkcioniše u praksi? Klijent skenira ili fotografiše ulazne fakture i druge dokumente i šalje ih putem sigurne platforme, e-maila ili specijaliziranih aplikacija. Knjigovođa unosi dokumente, vodi knjige i obračunava poreze, a sve izvještaje šalje klijentu u digitalnom obliku.\n\nPrednosti su brojne - štedite vrijeme jer ne morate fizički donositi dokumentaciju, imate pristup svojim podacima 24/7, smanjuje se rizik od gubitka dokumenata, a komunikacija je brža i efikasnija. Posebno je korisno za firme koje rade van Sarajeva ili imaju kancelarije u više gradova.\n\nKada je u pitanju sigurnost, profesionalne agencije koriste šifrovane platforme, redovne backup-e i pridržavaju se GDPR standarda. ENS d.o.o. nudi punu online knjigovodstvenu uslugu sa vlastitom klijentskom platformom, gdje možete u svakom trenutku provjeriti stanje vaših knjiga, izvještaja i poreznih obaveza."
  },
  {
    id: "16",
    slug: "porez-na-dohodak-fbih-vodic",
    title: "Porez na dohodak u FBiH 2026 - sve stope, olakšice i obračun",
    excerpt: "Detaljan pregled poreza na dohodak u Federaciji BiH za 2026. godinu - stope, lični odbitak, olakšice za izdržavane članove i praktični primjeri.",
    category: "Porezi",
    author: "Emir Begić",
    date: "12. Juli 2026.",
    readTime: "6 min",
    image: blog6,
    content: "Porez na dohodak u Federaciji BiH iznosi 10% i primjenjuje se na sve oblike dohotka - od plata, preko samostalne djelatnosti, do dohotka od imovine i kapitala. Iako je stopa relativno jednostavna, sistem olakšica i lični odbitak čine obračun nešto kompleksnijim.\n\nLični odbitak osnovice za 2026. godinu iznosi 300 KM mjesečno, odnosno 3.600 KM godišnje. Ovaj iznos se ne oporezuje. Dodatno, postoji koeficijent za izdržavane članove porodice - 0,5 za bračnog druga, 0,5 za prvo dijete, 0,7 za drugo, 0,9 za treće i svako naredno dijete.\n\nPorezno priznati troškovi za zaposlene uključuju doprinose za penzijsko i zdravstveno osiguranje (31% iz brutto plate), te određene naknade poput regresa, otpremnine i naknade za prevoz. Za samostalne preduzetnike, priznaju se svi troškovi koji su nastali u svrhu obavljanja djelatnosti i imaju validan dokument.\n\nPraktičan primjer: zaposleni sa brutto platom od 1.500 KM, oženjen sa jednim djetetom, ima lični odbitak od 600 KM (300 + 150 + 150). Nakon odbitka doprinosa i ličnog odbitka, oporeziva osnovica je značajno niža. ENS d.o.o. nudi besplatne kalkulacije plate za sve poslodavce u Sarajevu."
  },
  {
    id: "17",
    slug: "doprinosi-fbih-2026-stope",
    title: "Doprinosi u FBiH 2026 - stope, obračun i obaveze poslodavca",
    excerpt: "Aktuelne stope doprinosa za penzijsko, zdravstveno i osiguranje od nezaposlenosti u FBiH, s primjerima obračuna iz brutto i netto plate.",
    category: "Plate",
    author: "Lejla Mujić",
    date: "20. Juli 2026.",
    readTime: "6 min",
    image: blog7,
    content: "Doprinosi su ključna stavka u obračunu plata u Federaciji BiH i čine značajan trošak poslodavca. Razumijevanje stopa i pravilnog obračuna je esencijalno za svakog vlasnika firme, jer greške mogu rezultirati ozbiljnim kaznama i obračunom zateznih kamata.\n\nUkupna stopa doprinosa iz brutto plate u FBiH iznosi 31%, raspoređena na sljedeći način: penzijsko i invalidsko osiguranje 17%, zdravstveno osiguranje 12,5%, te osiguranje od nezaposlenosti 1,5%. Pored toga, na teret poslodavca su doprinosi od 10,5% (PIO 6%, zdravstveno 4%, nezaposlenost 0,5%) i opća vodna naknada 0,5%.\n\nObračun se uvijek vrši iz brutto plate. Praktičan primjer: za netto platu od 1.000 KM, brutto plata iznosi približno 1.587 KM, doprinosi iz plate (31%) iznose 492 KM, porez na dohodak (10% nakon ličnog odbitka) iznosi 95 KM, a doprinosi na teret poslodavca dodatnih 175 KM. Ukupni trošak poslodavca je oko 1.762 KM.\n\nVažno je naglasiti da postoji najniža osnovica za obračun doprinosa, koja se redovno usklađuje. Također, postoje specifična pravila za rad sa nepunim radnim vremenom, sezonske radnike i strane državljane. ENS d.o.o. preuzima cjelokupan obračun plata, predaju MIP-a i komunikaciju sa Poreznom upravom, oslobađajući vas administrativnog tereta."
  },
  {
    id: "18",
    slug: "kako-promijeniti-knjigovodstvenu-agenciju",
    title: "Kako promijeniti knjigovodstvenu agenciju bez stresa - praktični vodič",
    excerpt: "Niste zadovoljni svojim knjigovođom? Saznajte kako napraviti glatku tranziciju na novu agenciju bez problema sa Poreznom upravom.",
    category: "Savjeti",
    author: "Amila Hodžić",
    date: "28. Juli 2026.",
    readTime: "5 min",
    image: blog8,
    content: "Mnogi vlasnici firmi godinama trpe loše usluge svojih knjigovođa jer se boje promjene - smatraju da je proces komplikovan i da bi mogao izazvati probleme sa institucijama. Istina je da je promjena knjigovodstvene agencije relativno jednostavan proces ako se planira pravilno.\n\nPrvi korak je odabir nove agencije. Razgovarajte sa najmanje 2-3 agencije, tražite preporuke, provjerite reference i pitajte za konkretnu cijenu i opseg usluga. Dobra agencija će vam ponuditi besplatne početne konsultacije i transparentan ugovor bez skrivenih troškova.\n\nIdealan trenutak za promjenu je kraj kvartala ili kraj poslovne godine, jer je tada zatvoren određeni izvještajni period. Stari knjigovođa je dužan predati vam svu poslovnu dokumentaciju - knjige, izvještaje, MIP obrasce, PDV prijave i druge dokumente. Po zakonu, ova dokumentacija je vlasništvo firme, ne agencije.\n\nNova agencija će preuzeti dokumentaciju, izvršiti reviziju zatečenog stanja i preuzeti vođenje knjiga od dogovorenog datuma. Bitno je obavijestiti Poreznu upravu i banku o promjeni ovlaštenog lica za podnošenje izvještaja. ENS d.o.o. ima ustaljenu proceduru preuzimanja klijenata i u potpunosti vam olakšava ovu tranziciju - mi obavljamo sve administrativne korake umjesto vas."
  },
  {
    id: "19",
    slug: "knjigovodstvo-za-ugostitelje-sarajevo",
    title: "Knjigovodstvo za ugostitelje u Sarajevu - specifičnosti restorana, kafića i hotela",
    excerpt: "Ugostiteljski objekti imaju jedinstvene knjigovodstvene izazove. Saznajte kako pravilno voditi knjige restorana, kafića ili hotela u Sarajevu.",
    category: "Knjigovodstvo",
    author: "Kenan Hadžić",
    date: "05. August 2026.",
    readTime: "7 min",
    image: blog9,
    content: "Ugostiteljska djelatnost u Sarajevu je u stalnom razvoju, ali sa sobom donosi specifične knjigovodstvene izazove koje generičke agencije često ne razumiju u potpunosti. Veliki broj malih transakcija, gotovinsko poslovanje, fiskalne kase i specifični porezni tretman čine ovaj sektor jednim od najzahtjevnijih.\n\nNajveći izazov je dnevno usaglašavanje fiskalnih izvještaja sa stvarnim prometom. Svaki ugostiteljski objekat mora imati fiskalnu kasu i dnevno generisati Z-izvještaj koji se predaje Poreznoj upravi. Greške u fiskalnim računima (pogrešne stope PDV-a, neispravne stavke) mogu rezultirati visokim kaznama prilikom inspekcijskog nadzora.\n\nPosebnu pažnju zahtijeva obračun PDV-a. Hrana i bezalkoholna pića se oporezuju opštom stopom od 17%, dok specifične stavke poput smještaja imaju isti tretman. Važno je pravilno klasificirati ulazne troškove - sirovine za pripremu hrane, alkohol, cigarete, te utvrditi pravo na povrat ulaznog PDV-a.\n\nDodatni izazov su zaposlenici sa varijabilnim platama, napojnice, sezonski radnici i smjenski rad sa noćnim dodacima. ENS d.o.o. ima dugogodišnje iskustvo sa ugostiteljima u Sarajevu - od malih kafića na Baščaršiji do velikih restorana i hotela. Naš tim razumije specifičnosti vašeg posla i nudi pakete prilagođene veličini i vrsti vašeg objekta."
  },
  {
    id: "20",
    slug: "porezne-kazne-bih-kako-izbjeci",
    title: "Porezne kazne u BiH - najčešći prekršaji i kako ih izbjeći",
    excerpt: "Pregled najčešćih poreznih kazni u Bosni i Hercegovini i praktični savjeti kako spriječiti probleme sa Poreznom upravom i UINO.",
    category: "Porezi",
    author: "Emir Begić",
    date: "15. August 2026.",
    readTime: "6 min",
    image: blog10,
    content: "Porezne kazne u Bosni i Hercegovini mogu ozbiljno ugroziti likvidnost čak i uspješnih firmi. Iznosi se kreću od nekoliko stotina KM za manje prekršaje, do desetina hiljada KM za teže prijestupe. Ono što je još važnije - veliki broj kazni se može potpuno izbjeći jednostavnom prevencijom.\n\nNajčešći prekršaji u praksi su: kašnjenje u podnošenju PDV prijave (kazna od 500 do 5.000 KM), kašnjenje u uplati poreznih obaveza (zatezne kamate plus dodatne kazne), neispravno izdavanje fiskalnih računa, te neprijavljivanje radnika ili kasna prijava promjena u Poreznu upravu i Zavod PIO.\n\nPosebno opasna je kazna za neprijavljivanje rada na crno - od 5.000 do 30.000 KM po radniku, plus naknadno plaćanje svih doprinosa retroaktivno. Inspekcije UINO-a mogu izreći kazne i za sitne propuste poput nepravilno istaknute cjenovnik ili nedostatka knjige reklamacija.\n\nKljučna prevencija je angažovanje pouzdane knjigovodstvene agencije koja prati sve rokove i zakonske izmjene. Profesionalna agencija ima sistem podsjetnika za sve poreske obaveze i pravovremeno upozorava klijenta na potrebne radnje. ENS d.o.o. svojim klijentima garantuje preuzimanje odgovornosti za rokove - ako mi propustimo rok, mi snosimo kaznu, ne vi."
  }
];