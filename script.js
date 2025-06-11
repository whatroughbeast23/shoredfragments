const musicKeywords = ['song','note','jazz','blues','music','band','guitar','swing','sing','sax','drum','funk','hip hop','punk','bebop','orchestra','piano','dj','disco','funkadelic'];
const filmKeywords = ['film','movie','tv','screen','director','picture','cinema','roto','episode'];
const scienceKeywords = ['science','quantum','chemical','bicycle','einstein','schr','dna','count','technology','physics','math','numer','computer'];
const politicsKeywords = ['revolution','politic','liberat','fascist','communist','anarch','activist','strike','riot','justice','union','social','capital','imperial'];

function determineTopic(author, line) {
  const text = (author + ' ' + line).toLowerCase();
  if (musicKeywords.some(k => text.includes(k))) return 'M - Music';
  if (filmKeywords.some(k => text.includes(k))) return 'N - Film & Art';
  if (scienceKeywords.some(k => text.includes(k))) return 'Q - Science';
  if (politicsKeywords.some(k => text.includes(k))) return 'J - Politics';
  return 'P - Literature';
}

const rawData = `
Homer (c. 8th century BCE)|Within myth reveal complicated men,
Diogenes (c. 412-323 BCE)|Who makes a list? I piss on your thinking,
Sappho (c. 630-570 BCE)|Breathe first the words: goddess, live, forever,
Caedmon (c. 657-684)|Shepherds dream in notes that they can not play,
Sei Sh\u014dnagon (c. 966-1017)|Leave it listed underneath your pillow,
Dante Alighieri (1265-1321)|We are always in the middle of life,
Petrarch (1304-1374)|No interest from a happy, married girl,
Chaucer (c. 1343-1400)|Open eyes, the rudest joke I could tell,
Edmund Spenser (c. 1552-1599)|Calendar dreams and Arcadian fae,
William Shakespeare (1564-1616)|Grammar will let you say what you don't say,
Andrew Marvell (1621-1678)|And I will find you within a green world,
Moli\u00e8re (1622-1673)|The flair of hypocrasy crafts dramas,
Alexander Pope (1688-1744)|Bitter life is a lemon, writ by line,
Voltaire (1694-1778)|This is a garden we must cultivate,
Samuel Johnson (1709-1784)|A catalog of meanings in our sound,
Crispus Attucks (c. 1723-1770)|So we begin by overlooking blood,
The Goldberg Variations (1741)|Sound spirals back, to end at the start,
Beethoven (1770-1827)|Some storms becomes a universal song,
Samuel Taylor Coleridge (1772-1834)|A dream, a fragment, and a cursed bird,
Jane Austen (1775-1817)|Every truth universally's not,
Lord Byron & Percey Shelly (1800-1850)|Boyfriends best destined to die in their seas,
Mary Shelly & Frankenstein (1797-1851)|How men would like to birth without women,
John Keats (1795-1821)|How sad your bright star becomes pretty birds,
William Blake (1757-1827)|Decadent angel visions, crashing through.
John Brown (1800-1859)|What's born from blood must with blood be repaid,
Liszt (1811-1886)|Manic female copulation of notes,
Wagner (1813-1883)|Pure art which is the world, sad case of hate,
Ada Lovelace (1815-1852)|They steal your count without counting on you,
Dangerfield Newby (1815-1859)|There is a principle we must swear by,
Anthony Trollope (1815-1882)|Complex dynamics are a gentle joke,
Karl Marx (1818-1883)|Conditions arise in contradiction,
George Eliot (1819-1880)|Short, scarred horror balances out the real,
Emily Bront\u00eb (1820-1847)|What is secreted away destroys us,
Harriet Tubman (c. 1822-1913)|The only armament to fear is fear,
Paschal Beverly Randolph (1825-1875)|The only obligation is to try,
Strauss (1825-1899)|The average bat must live life in champagne,
Jerry Thomas (1830-1885)|One can flip the world with one simple stir,
Emily Dickinson (1830-1886)|One must -- becomes -- a common -- hyphenate,
Mark Twain (1835-1910)|You must float through the darkness and confront,
Ferdinand Cheval (1836-1924)|Ideally, build without explaining it,
Grieg (1843-1907)|Did you know that whole mountain ranges sing?,
Mussorgsky (1839-1881)|And demons fly from mountain ranges, too,
Pyotr Ilyich Tchaikovsky (1840-1893)|Eventually a swan becomes the gun,
Ambrose Bierce (1842-1914)|Ironist - noun - disappointed preacher,
Peter Kropotkin (1842-1921)|All life works together. This is called bread,
Comte de Lautr\u00e9amont (1846-1870)|By the awkward girls of the world I'm known,
J.K. Huysmans (1848-1907)|To be an angel, one must harrow Hells,
Sarah Orne Jewett (1849-1909)|Let the world itself teach you its paces,
Oscar Wilde (1854-1900)|It's worse to be talked about than be wild,
Sigmund Freud (1856-1939)|To speak of the taboo is to tell truths,
Blues Musicians (1860s-)|The throat breaks into a note called colored,
Anton Chekhov (1860-1904)|No gun is ever truly unloaded,
Alice in Wonderland (1865)|Curious dreamlands connects new synapse,
Beatrix Potter (1866-1943)|Mushrooms, rabbits, watercolor rhizomes,
Ernest Dowson (1867-1900)|'Tis a glory, my love, she is a whore,
Natsume S\u014dseki (1867-1916)|See through the heart of things as a dead cat,
Emma Goldman (1869-1940)|Power constrains and destroys real, wild, love,
My Brother's Bar (1873-present)|Some liminal things, like alcohol, stay,
Amy Lowell (1874-1925)|Purer than the man, becoming image,
Gertrude Stein (1874-1946)|break, sentence, fragment, break, break, and repeat,
Aleister Crowley (1875-1947)|His magical fucking asshole buggered,
Mrs. Nash (? - 1878)|Live as yourself. Time will erase erasure,
Lord Dunsany (1878-1957)|All the other gods wake up in your pen,
Wallace Stevens (1879-1955)|Let the sonic syntax hang in the air,
Albert Einstein (1879-1955)|Nothing is dead. We are a conversion,
Pablo Picasso (1881-1973)|Everything breaks into simple, stark lines,
H.D. (1886-1961)|And still we want our women as corpses,
Ma Rainey (1886-1939)|It's none of your business just what I do,
Erwin Schr\u00f6dinger (1887-1961)|The cat is dead, since measurement begins,
Marcel Duchamp (1887-1968)|You have already been a piece of art,
Claude McKay (1889-1948)|The world has no patience for moral rhymes,
Vaslav Nijinsky (1889-1950)|The point of the foot is a stabbing knife,
The concept of Wyoming (1890)|Wide open spaces, opened for us all,
Tchaikovsky's Pique Dame (1890)|The turn of a secret card is to death,
H.P. Lovecraft (1890-1937)|There are other things to fear than difference,
Antonio Gramsci (1891-1937)|Grim reality can not kill our hope,
Zora Neale Hurston (1891-1960)|Mules and men, in their chatter, tell the truth,
Edna St. Vincent Millay (1892-1950)|Wild, dripping sex, within a sonnet form,
W.B. Yeats (1865-1939)|The world turns on it's gyres, birthing beasts,
Man Ray (1890-1976)|Photography is a trick of the mind,
Ry\u016bnosuke Akutagawa (1892-1927)|Faults crack fissures in mind and memory,
Wilfred Owen (1893-1918)|Perfect iambics mean untimely ends,
Joan Mir\u00f3 (1893-1983)|There is a color to things, a roundness,
E.E. Cummings (1894-1962)|one (when can they) paints inorder: the word,
Bessie Smith (1894-1937)|No earth can contain such a B.D. Bitch,
Nancy Cunard (1896-1965)|For love of the world you were shriveled up,
Tristan Tzara (1896-1963)|Some flings from Romania are joyous,
Robert Graves (1895-1985)|Imagine if you'd met black Madonnas,
Dziga Vertov (1896-1954)|Do not forget these are flickering dreams,
Sergei Eisenstein (1898-1948)|Meaning arises from associating,
Bertolt Brecht (1898-1956)|We remind you that this is a poem,
Paul Robeson (1898-1976)|They treat your human everywhere but home,
Ren\u00e9 Clair (1898-1981)|Married to the sorcery of the film,
Mezz Mezzrow (1899-1972)|How high the moon? It sings of clarinets,
Ernest Hemingway (1899-1961)|Being dressed as a girl made you a man,
Jean Cocteau (1889-1963)|Orphic blood spills symbols into vision,
Duke Ellington (1899-1974)|The muse, herself, appoints nobility,
Jorge Luis Borges (1889-1986)|With a few fragments, I breathe infinites,
The Marx Brothers (Groucho: 1890–1977, Harpo: 1888–1964, Chico: 1887–1961, Zeppo: 1901–1979, Gummo: 1892–1977)|Only way to be on balance is off,
Moms Mabley (1894-1975)|They will only listen to survivors,
Ren\u00e9 Crevel (1900-1935)|After such an exit, I will be hanged,
Luis Bu\u00f1uel (1900-1983)|A priest without religion, is moral,
Werner Heisenberg (1901-1976)|These words speed by, but are they really here?,
Langston Hughes (1902-1967)|I hope someday to sleep, like a blues rock,
John Steinbeck (1902-1968)|Life is hard, between the easy parties,
Silvina Ocampo (1903-1993)|A careful looseness draws new worlds awake,
Salvador Dal\u00ed (1904-1989)|The world breaks into paranoiac lines,
Samuel Beckett (1906-1989)|Obession. Microscopic, edge the page,
Albert Hofmann (1906-2008)|A Sandoz bicycle's a time machine,
Louis Jordan (1908-1975)|Something about jumping! keeps love! bumping!,
Lester "Prez" Young (1909-1959)|Such statesmen as should swing a holiday,
Eug\u00e8ne Ionesco (1909-1994)|How quickly everyone is led along,
Akira Kurosawa (1910-1998)|There are truths unseen inbetween the frames,
Lucille Ball (1911-1989)|A clolwn can't say "pregnant", but can show it,
Kirby J. Hensley (1911-1999)|Everyone deserves their own private church,
John Cage (1912-1992)|Think in terms of what you would think against,
Michelangelo Antonioni (1912-2007)|Image itself a perceptible lie,
Krazy Kat (1913-1944)|Tue romans, is a brick to bean a brain,
Red Skelton (1913-1997)|Build routines of expression, let them fail,
Sun Ra (1914-1993)|There are sonics beyond this world-- listen!,
William S. Burroughs (1914-1997)|cut is to Language a virus itself,
Vorticists (1914-1915)|Blast it all! The machines destroy themselves,
Jack Parsons (1914-1952)|Mix chemical coils for space age occult,
Lady Day (Billie Holiday) (1915-1959)|A tragedy forseen must still be lived,
Roland Barthes (1915-1980)|Every day we live in our world's mythos,
Orson Welles (1915-1985)|Deep bass rosebud chimes at evil midnight,
jazz musicians (1916s -)|One can break even with some extra flash,
Maya Deren (1917-1961)|Look! For the eye frames dancing at all times,
Gwendolyn Brooks (1917-2000)|Three words per, line will make you, well, beloved,
Dadaists (1916-1924)|Beyond the no, Recombine-- pure la da,
Shirley Jackson (1916-1965)|They'll call you a witch, so why not be one?,
Ella Fitzgerald (1917-1996)|The note itself flies, contorting the voice,
Leonora Carrington (1917-2011)|Once, before you died, I dreamed your nightmare,
Theremin (1919)|Sounds await to be plucked out of the air,
Lawrence Ferlinghetti (1919-2021)|And so, in public, the word is just like that,
Merz (Kurt Schwitters) (1919-1948)|The detritus they sell us embalms us,
The Sidecar cocktail (c. 1920)|Three simple ingredients pass the time,
Rosalind Franklin (1920-1958)|Your contributions will all be plundered,
Timothy Leary (1920-1996)|What breaks us free will become our new chains,
Charlie "Bird" Parker (1920-1955)|A swung sonnet, living through blowing pain,
Surrealists (1920s-1950s)|Recombination of occult technique,
Lost Generation (1920s)|Some of them never wanted to be found,
Gene Roddenberry (1921-1991)|Awful men can still dream of our best days,
Jack Kerouac (1922-1969)|Movement of the soul on road is Catholic,
Charles Mingus (1922-1979)|The groove can only swing deeper yet still,
Marjorie Cameron (1922-1995)|A scarlet woman wins, while losing all,
Hank Williams (1923-1953)|Niether will we leave these places alive,
Rod Serling (1924-1975)|For your consideration: moral arcs,
Max Roach (1924-2007)|Play against the feel and they will feel it,
Jimmy Carter (1924-present)|America loves to blame honesty,
Lenny Bruce (1925-1966)|What is sick in this world? Immoral rules,
Flannery O'Connor (1925-1964)|What they call a saving grace is a grave,
Yukio Mishima (1925-1970)|The only honorable fascist is dead,
Gilles Deleuze & F\u00e9lix Guattari (1925-1995 & 1930-1992)|Diagnose with your spores or with your rhyzomes,
Neal Cassady (1926-1968)|Life is a car crash con man trick it's own,
John Coltrane (1926-1967)|Live and twist joy in every second passed,
Miles Davis (1926-1991)|Slow down and draw out the space of each breath,
Allen Ginsberg (1926-1997)|Celebrate the sad sick sunflower mist,
Edward Kienholz (1927-1994)|This junkyard world is not to comfort you,
Kenneth Anger (1927-2023)|Audacious refuge in the tabloid lies,
Philip K. Dick (1928-1982)|Fake and real combine because we are both,
Mr. Rogers (1928-2003)|It takes less energy to be just kind,
Ursula K. Le Guin (1929-2018)|Each point of view refracts a brand new map,
Alejandro Jodorowsky (1929-present)|Personal pain maps tarot galaxies,
John Cassavetes (1929-1989)|Life follows shadows, we jazz improvise,
Heiner M\u00fcller (1929-1995)|Steal and breka moldings into new versions,
Jean Baudrillard (1929-2007)|Since nothing is real, what's fake is now true,
Jacques Derrida (1930-2004)|Each minute minnow of meaning is lost,
Stephen Sondheim (1930-2021)|All facets of life deserve their music,
Jacques Demy (1931-1990)|MOtion, and picture, and sound's a ballet,
Lenore Kandel (1932-2009)|Are you ready for the real, fucking truth?,
Nina Simone (1933-2003)|The type we are talking about are free,
Bruce Conner (1933-2008)|All things may be placed -- in relation to --,
Krysztoff Penderecki (1933-2020)|I am merely echoing your death urge,
Robert Anton Wilson (1932-2007)|Conspiracies are true against themselves,
Yoko Ono (1933-present)|Imagination leaps wildly to sound,
Amiri Baraka (1934-2014)|THis revolutions for the whole, wide world,
Richard Brautigan (1935-1984)|The unloved and overlooked need keeping,
Ken Kesey (1935-2001)|We explore ourselves by knowing others,
Owsley Stanley (1935-2011)|What a carnivore can bear, science sounds,
Mr. Boston Bartending Guide (1935)|When you know what a bullshot is, drink one,
Murder in the Cathedral (T.S. Eliot) (1935)|All the blood in the world, the priest still lives,
Wilt Chamberlain (1936-1999)|The basket, dear love, is one place I score,
Abbie Hoffman (1936-1989)|The world is for the young, if we take it,
Jim Henson (1936-1990)|I have felt that radical love will win,
Teacake (Their Eyes Were Watching God) (1937)|Adonis and Osiris are Black Gods,
Hunter S. Thompson (1937-2005)|Morality will disappoint you, Duke,
Alice Coltrane (1937-2007)|The song is platform for the spiral soul,
George Carlin (1937-2008)|Let all your anger serve greater purpose,
Philip Glass (1937-present)|The smallest silence makes the loudest noise,
Gary Gygax (1938-2008)|Steal the fantasies of men and fix them,
M\u0153bius (1938-2012)|Everything is a bright cartoon landscape,
Ralph Bakshi (1938-present)|Rewind, rework your life in rotoscope,
Joyce Carol Oates (1938-present)|Bring forth dark liminal daemon love,
D.C. Fontana (1939-2019)|If queer and alien, live prosperous long,
Grace Slick (1939-present)|I don't trust myself, over thirty one,
Miss Major (1940-present)|Wich to throw a kiss, but carry the bricks,
H.R. Giger (1940-2014)|We're all aliens, fucking each other,
Frank Zappa (1940-1993)|They will listen to music if it's gross,
Harry Nilsson (1941-1994)|Write your love beyond all your failing times,
George Clinton (1941-present)|The light in everyone is on the one,
Bob Dylan (1941-present)|The easy thesis is masks, or false true,
Captain Trips (Jerry Garcia) (1942-1995)|No human is god: let me be music,
Curtis Mayfield (1942-1999)|No form can contain what needs to be said,
Casablanca (1942)|A coward will not run guns for their love,
Jimi Hendrix (1942-1970)|Each sound in the pocket yearns to break free,
Sly Stone (1943-2025)|Thank you for letting me loose myself, now,
jazz (bebop) (1940s)|Every is angular, let be, be,
Upstate New York (spiedies, salt potatoes) (1940s-present)|Fresh butter slathers summer's desires,
Frank Oz (1944-present)|Humans, too, are played like marionettes,
Angela Davis (1944-present)|Some spaces I must try to better hear,
Kareem Abdul-Jabbar (1947-present)|Talent is made for a greater purpose,
Divine (1945-1988)|If you make me gross, I will be grosser,
Ron "Pigpen" McKernan (1945-1973)|To live the bluest is always to die it,
Marsha P. Johnson (1945-1992)|And yet we still forget what you have done,
Neil Young (1945-present)|There's only one chorus: it's all one song,
Tim Curry -- Never Rocky Horror (1946-present)|What a joy to be able to play well,
Syd Barrett (1946-2006)|Your illnesses will transmute into their gold,
Liza Minnelli (1946-present)|Family foundation will build yourself,
Brian Eno (1948-present)|Experiment widely, pretend you're smart,
Andy Kaufman (1949-1984)|Oh, sweet mytery of life -- unexplained,
Haruki Murakami (1949-present)|Meld your divided city of a mind,
Hank Williams Jr. (1949-present)|The past annoints us with hard legacies,
Slavoj \u017di\u017eek (1949-present)|But perhaps reverseing these words is true,
Tom Waits (1949-present)|Call out gruffly for the duende of junk,
Steven Jesse Bernstein (1950-1991)|Every gob of verbal spit is music,
Anne Carson (1950-present)|Classics are best read through Norma Jean's eyes,
Sylvia Rivera (1951-2002)|They will push you out of your own movement,
Bootsy Collins (1951-present)|Split your sound so it's heard so many ways,
bell hooks (1952-2021)|we are not yet beginning to speak love,
Christine Lavin (1952-present)|If the mundane is not funny, you're dead,
Clive Barker (1952-present)|Pleasure and terror is called Jouissance,
City Lights Books (1953)|The worth of th e book is they try killing,
Cornel West (1953-present)|To be free we must see we are all one,
Steve Jackson (1953-present)|In building games, we are building ourselves,
Alan Moore (1953-present)|To spell, itself, is grimoire of the words,
Tolkien \u2013 Lord of the Rings (1954-1955)|Difficult moments make heros of all,
Disneyland (1955)|Everyone deserves' happy fantasy,
My grandfather's coffee truck (1950s)|I'm learning to cook from the same cookbook,
Rock and roll (mid-1950s)|What is once a fad becomes serious,
Beat poets (1950s-1960s)|Every broken down underground will shine,
GG Allin (1956-1993)|Truth is an asshole that shits out genius,
Judith Butler (1956-present)|We are done and undone by what we do,
Situationists (1957-1972)|The tensions caused for aesthetics are gold,
Ian Curtis (1956-1980)|Life's a shaky proposition these days,
Helios Creed (1957-present)|If you do things wrong enough, they turn right,
Lamb Chop (puppet) (1957-present)|Words cascades a river that's unending,
Prince (1958-2016)|Being the best does not king you in pop,
LEGO (1958-present)|Build and flow freely, it's all interlocked,
Comandanta Ramona (c. 1959-2006)|Liberation is a stitched doll of hope,
Alison Bechdel (1960-present)|A steady hand explores art of the truth,
The Beatles (1960-1970)|Everyone who says they hate you's a fink,
Jean-Michael Basquiat (1960-1988)|You can only lose such a game of tag,
Catch-22 (1961)|You can't get out if you know that you're in,
Freedom Rides (1961)|Liberation is worth the cost of death,
Bergman's Faith Trilogy (1961-1963)|A silent god forces your own morals,
Bonzo Dog Band (1962-1978)|This life should be tilting into the drink,
The Rolling Stones (1962-present)|Your own devils are familiar parties,
Doctor Who (1963)|One clear hero will continue always,
Claudia Rankine (1963-present)|Diagnose society with poems,
Freedom Schools (1964)|Why would they prevent you from school? Think clear!,
The Munsters (1964-1966)|What's monsterous is not respecting all,
Moog synthesizer (1964)|Electric ghosts are brought to dance the air,
The Who (1964-present)|Violence refined becomes emotions pure,
British Invasion (1964-1966)|When you lose your way, look outside yourself,
Compton's Cafeteria Riot (1966)|When you make your stand, no one will notice,
The Crying of Lot 49 (1966)|Careful! Some thread can be follow too far,
Hippies (mid-1960s)|If you don't cop out, you can tune on in,
Mitch Hedberg (1968-2005)|I used to like one liners. Still do, too,
The Shaggs (1968)|Passion, devotion, is worth more than skill,
Mark Fisher (k-punk) (1968-2017)|I am haunted by your futures, cut off,
Sesame Street (1969)|A careful use of a tool can teach all,
Blows Against the Empire (1970)|The only way to space is to steal it,
"Sugar Man" by Rodriguez (1970)|The mundane drug wait is liminal love,
Emerson, Lake & Palmer (1970-1979)|Push things to the edges beyond the rim,
Dr. Demento Show (1970-present)|Obsess over the weird, for life is fun,
Parliament-Funkadelic (1970s)|Blend yourselves together and find your soul,
Lily Tomlin & Jane Wagner (1970s)|The balance of sadness bursts to laughter,
DIY Zine Scenes (1970s-ongoing)|spock slash kirk or: women's secret talking,
Maria Bamford (1970-present)|Your sick and your weird is what people love,
Boots Riley (1971-present)|Stick to the truth, tell it slant, over beats,
Hank Williams III (1972-present)|Truth's still an asshole that shits out genius,
Superfly (1972)|It costs just everything to win it all,
Dan Harmon (1973-present)|Expose your own wound, and learn to laugh too,
Gilda Radner & Jane Curtin (1975-1980)|The greatest of us will be overlooked,
Disco (1970s)|They will burn you for their racist hatred,
Punk (mid-1970s)|They will co-opt you for capital greed,
Bad Brains (1977-present)|Your music becomes second to your looks,
Captain Harlock (1978)|Everyone's welcome on Arcadia,
Killer of Sheep (1978)|Desire your fun, struggle to make it,
Busdriver (1978-present)|Your technique and craft is worth sweating for,
The Dicks (1980-1986)|Fuck off homophobe nazis. Enuff said,
Samantha Irby (1980-present)|Spill all of your guts to their discomfort,
Hardcore Punk (early 1980s)|Don't let some meatheads come in and fuck it,
Hip Hop (late 1970s-1980s)|Underground rythyms connect cultures bloom,
Industrial (late 1970s-1980s)|If we must live in the grind, sing machines,
Foucault in BDSM clubs (1980s)|Panopticon invoked. Punish me, dad,
Wild Style (1983)|I have written my brightness on a train,
Public Enemy (1985-present)|People forget what they're not reminded,
Janelle Mon\u00e1e (1985-present)|When they tell you there's no future, doubt it,
Solange (1986-present)|No one now believes you found Kendrick first,
The KLF (1987-1992)|All things worth regretting are worth burning,
Square One's Mathnet (1987-1992)|No one knows why this. Adds up,
Beloved (Toni Morrison) (1987)|History is a ghost you cannot kill,
Frank Ocean (1987-present)|Hiding emotions is a real trap house,
Hole (1989-2002)|As a woman, you will be sold as skag,
Grunge (late 1980s-1990s)|Your disaffection becomes a market,
G-Funk (late 1980s-1990s)|The world is a remix, even if harsh,
Twin Peaks (1990-1991)|Fix your evil fucking heart, or go die,
Bikini Kill (1990-1997)|Hole is a better band, fucking fight me,
ND Stevenson (1991-present)|Write your honest truths and you will live well,
Nothing But Trouble (1991)|Dan Akyroyd should be given more films,
Harvey Danger (1992-2009)|Stand apart from the scene, infuse your soul,
Ashley Burch (1992-present)|Awkward, strange, and weird live happy in you,
Alt Rock (1990s)|It will come around again, but different,
Ska Revival 3rd wave (1990s)|At the horns of dilemma, resist, dance,
Stone Butch Blues (1993)|We are always inventing our true selves,
Emo (1990s)|Someday I will tell the truth, by Panic,
The X-Files (1993-2002, 2016-2018)|What counts as truth is the spark between us,
Courtney and Kathleen (1995 -)|Courtney is worse than Kathleen. That is true,
Hedwig and the Angry Inch (1998)|Rip down the barricades in your own mind,
Boondocks (comic) (1999-2006)|The young will listen to you over time,
Freaks and Geeks (1999-2000)|Everyone feels just like this. You're alone,
Pete Doherty / Babyshambles / Libertines (2000s)|The last of the rock romantics -- still lives,
Dubstep (early 2000s)|Bro, you gotta hear this wicked sick drop,
Witch Kult (2000s)|Bro, this music makes you wish you're a girl,
GarageBand solo (2004)|Means of production open to us all,
Kamikaze Girls (2004)|One must consider what one must die for,
Boondocks (TV) (2005-2014)|On the come up, then becoming too White,
Childish Gambino (2008)|The intentions you speak of will turn true,
The Aces (2008-present)|Let your guilt go and be your queerest self,
Let der Ratte Komme In (2008)|Everyone wants a monster to save them,
Death Grips (2010-present)|There is nothing in the rulebook at all,
The female comedian whose name I don't remember who said rape jokes are never funny (2012)|You did a rape joke set, then hit on me,
Life Is Strange (2015)|Chloe Price must Live. The Bae over Bay,
Andrea Lawlor (contemporary)|If we're honest, who of us is not Paul?,
Fever 333 (2017-present)|None of us seem to be angry enough,
The People's Joker (2022)|If you were an edgelord: how's transition?,
I Saw the TV Glow (2024)|If you are breathing, my dear, there's still time.
`;

const poemLines = rawData.trim().split('\n').map(row => {
  const [author, line] = row.split('|');
  const a = author.trim();
  const l = line.trim();
  return { author: a, line: l, topic: determineTopic(a, l) };
});

function render(lines) {
  const container = document.getElementById('poem');
  container.innerHTML = '';
  lines.forEach(item => {
    const div = document.createElement('div');
    div.className = 'poem-line';
    const text = document.createElement('div');
    text.className = 'line-text';
    text.textContent = item.line;
    const attr = document.createElement('div');
    attr.className = 'attribution';
    attr.textContent = item.author;
    div.appendChild(text);
    div.appendChild(attr);
    container.appendChild(div);
  });
}

function sortByTopic() {
  const arr = [...poemLines].sort((a, b) => (a.topic || '').localeCompare(b.topic || ''));
  render(arr);
}

function sortByConnections() {
  const arr = [...poemLines].sort((a, b) => a.author.localeCompare(b.author));
  render(arr);
}

function sortRandom() {
  const arr = [...poemLines].sort(() => Math.random() - 0.5);
  render(arr);
}

function sortRhyzomatic() {
  // group by topic then randomize groups and lines
  const groups = {};
  poemLines.forEach(p => {
    const t = p.topic || 'Misc';
    if (!groups[t]) groups[t] = [];
    groups[t].push(p);
  });
  const topics = Object.keys(groups).sort(() => Math.random() - 0.5);
  const arr = [];
  topics.forEach(t => {
    arr.push(...groups[t].sort(() => Math.random() - 0.5));
  });
  render(arr);
}

function sortChronological() {
  render(poemLines);
}

document.getElementById('chronological').addEventListener('click', sortChronological);
document.getElementById('topic').addEventListener('click', sortByTopic);
document.getElementById('rhyzomatic').addEventListener('click', sortRhyzomatic);
document.getElementById('connections').addEventListener('click', sortByConnections);
document.getElementById('random').addEventListener('click', sortRandom);

// initial render
sortChronological();
