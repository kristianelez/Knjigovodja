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
  }
];