// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	// Sw/Sh Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Singles",
	},
	{
		name: "[Gen 8] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656537/">Random Battle Suggestions</a>`,
		],

		mod: 'gen8',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Unrated Random Battle",

		mod: 'gen8',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672210/">OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672556/">OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3674058/">OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 8] OU (Blitz)",

		mod: 'gen8',
		ruleset: ['[Gen 8] OU', 'Blitz'],
	},
	{
		name: "[Gen 8] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3676539/">Ubers Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3675564/">Ubers Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3675194/">Ubers Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['AG', 'Baton Pass'],
	},
	{
		name: "[Gen 8] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3676723/">UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659681/">UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3674793/">UU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 8] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3676870/">RU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661013/">RU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3676023/">RU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 8] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677068/">NU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3673598/">NU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3676265/">NU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] RU'],
		banlist: ['RU', 'NUBL', 'Drizzle', 'Drought', 'Aurora Veil'],
	},
	{
		name: "[Gen 8] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3676543/">PU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3676106/">PU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 8] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656348/">LC Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661419/">LC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657374/">LC Viability Rankings</a>`,
		],

		mod: 'gen8',
		maxLevel: 5,
		ruleset: ['Little Cup', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Rufflet', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Vulpix-Alola',
			'Chlorophyll', 'Moody', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672167/">Monotype Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3673391/">Monotype Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3673165">Monotype Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Same Type Clause', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kartana', 'Kyogre', 'Kyurem-Black',
			'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Pheromosa', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Moody', 'Power Construct', 'Shadow Tag', 'Damp Rock', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656364/">1v1 Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3664157/">1v1 Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657779/">1v1 Viability Rankings</a>`,
		],

		mod: 'gen8',
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Endless Battle Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Dialga', 'Dragonite', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black',
			'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mew', 'Mewtwo', 'Mimikyu', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Rayquaza', 'Reshiram', 'Sableye', 'Solgaleo', 'Victini', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom',
			'Moody', 'Focus Sash', 'Perish Song',
		],
	},
	{
		name: "[Gen 8] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672172/">AG Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3675040/">AG Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672899/">AG Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 8] ZU",
		desc: `The unofficial usage-based tier below PU.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3675570/">ZU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3664800/">ZU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] PU'],
		banlist: ['PU', 'Exeggutor-Alola', 'Haunter', 'Scrafty', 'Toxicroak', 'Vikavolt'],
	},
	{
		name: "[Gen 8] LC UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660866/">LC UU</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['[Gen 8] LC'],
		banlist: [
			// LC OU
			'Abra', 'Archen', 'Chinchou', 'Dewpider', 'Diglett-Base', 'Drilbur', 'Dwebble', 'Ferroseed', 'Foongus', 'Grookey',
			'Koffing', 'Magnemite', 'Mareanie', 'Mienfoo', 'Mudbray', 'Onix', 'Pawniard', 'Ponyta', 'Ponyta-Galar',
			'Porygon', 'Scorbunny', 'Scraggy', 'Spritzee', 'Staryu', 'Timburr', 'Trapinch', 'Tyrunt', 'Vullaby', 'Vulpix',
			// LC BL
			'Farfetch\u2019d-Galar', 'Shellder', 'Wingull',
		],
	},
	{
		name: "[Gen 8] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656824/">CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3671157/">CAP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658514/">CAP Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] OU', '+CAP'],
		banlist: ['Crucibellite'],
	},
	{
		name: "[Gen 8] Battle Stadium Singles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656336/">BSS Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672698/">BSS Viability Rankings</a>`,
		],

		mod: 'gen8',
		forcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Single Restricted GBU'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] Custom Game",

		mod: 'gen8',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// Sw/Sh Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Doubles",
	},
	{
		name: "[Gen 8] Random Doubles Battle",

		mod: 'gen8',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672010/">Doubles OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658826/">Doubles OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3673519/">Doubles OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Dynamax Clause', 'Swagger Clause'],
		banlist: ['DUber', 'Power Construct', 'Shadow Tag'],
	},
	{
		name: "[Gen 8] Doubles Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661142/">Doubles Ubers</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
		banlist: [],
	},
	{
		name: "[Gen 8] Doubles UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658504/">Doubles UU</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['[Gen 8] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 8] VGC 2021",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672129/">VGC 2021 Metagame Discussion & Resources</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Single Restricted GBU', 'VGC Timer'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] VGC 2020",
		threads: [
			`&bullet; <a href="https://www.pokemon.com/us/pokemon-news/2020-pokemon-video-game-championships-vgc-format-rules/">VGC 2020 Rules</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657818/">VGC 2020 Sample Teams</a>`,
		],

		mod: 'gen8dlc1',
		gameType: 'doubles',
		searchShow: false,
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU', 'VGC Timer'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] 2v2 Doubles",
		desc: `Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656321/">2v2 Doubles</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		teamLength: {
			validate: [2, 4],
			battle: 2,
		},
		ruleset: ['Standard Doubles', 'Accuracy Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Jirachi', 'Kyogre',
			'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Rayquaza', 'Reshiram', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom',
			'Power Construct', 'Focus Sash', 'Final Gambit', 'Perish Song', 'Swagger',
		],
	},
	{
		name: '[Gen 8] Metronome Battle',
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3632075/">Metronome Battle</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		teamLength: {
			validate: [2, 2],
			battle: 2,
		},
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		banlist: [
			'Pokestar Spirit', 'Shedinja + Sturdy', 'Battle Bond', 'Cheek Pouch', 'Cursed Body', 'Dry Skin', 'Fluffy', 'Fur Coat', 'Gorilla Tactics',
			'Grassy Surge', 'Huge Power', 'Ice Body', 'Iron Barbs', 'Libero', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Perish Body', 'Poison Heal',
			'Power Construct', 'Pressure', 'Protean', 'Pure Power', 'Rain Dish', 'Rough Skin', 'Sand Spit', 'Sand Stream', 'Snow Warning', 'Stamina',
			'Volt Absorb', 'Water Absorb', 'Wonder Guard', 'Abomasite', 'Aguav Berry', 'Assault Vest', 'Berry', 'Berry Juice', 'Berserk Gene',
			'Black Sludge', 'Enigma Berry', 'Figy Berry', 'Gold Berry', 'Iapapa Berry', 'Kangaskhanite', 'Leftovers', 'Mago Berry', 'Medichamite',
			'Steel Memory', 'Oran Berry', 'Rocky Helmet', 'Shell Bell', 'Sitrus Berry', 'Wiki Berry', 'Harvest + Jaboca Berry', 'Harvest + Rowap Berry',
		],
		onValidateSet(set) {
			const species = this.dex.getSpecies(set.species);
			if (species.types.includes('Steel')) {
				return [`${species.name} is a Steel-type, which is banned from Metronome Battle.`];
			}
			if (species.bst > 625) {
				return [`${species.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
			}
			const item = this.dex.getItem(set.item);
			if (set.item && item.megaStone) {
				const megaSpecies = this.dex.getSpecies(item.megaStone);
				if (species.baseSpecies === item.megaEvolves && megaSpecies.bst > 625) {
					return [
						`${set.name || set.species}'s item ${item.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`,
					];
				}
			}
			if (set.moves.length !== 1 || this.dex.getMove(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
		},
	},
	{
		name: "[Gen 8] Doubles Custom Game",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		debug: true,
		teamLength: {
			validate: [2, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// National Dex
	///////////////////////////////////////////////////////////////////

	{
		section: "National Dex",
	},
	{
		name: "[Gen 8] National Dex",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666135/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667921/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666572/">National Dex Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack',
			'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala',
			'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Pheromosa',
			'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Tornadus-Therian', 'Urshifu-Base', 'Xerneas', 'Yveltal',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] National Dex UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660920/">National Dex UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672486/">National Dex UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672482/">National Dex UU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] National Dex'],
		banlist: [
			// National Dex OU
			'Blissey', 'Chansey', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Cinderace', 'Clefable', 'Corviknight', 'Excadrill', 'Ferrothorn',
			'Garchomp', 'Gliscor', 'Greninja', 'Heatran', 'Kartana', 'Kommo-o', 'Landorus-Therian', 'Lopunny-Mega', 'Magearna', 'Magnezone',
			'Mawile-Mega', 'Medicham-Mega', 'Pelipper', 'Rillaboom', 'Scizor-Mega', 'Serperior', 'Slowbro-Base', 'Swampert-Mega', 'Tangrowth',
			'Tapu Fini', 'Tapu Koko', 'Tapu Lele', 'Toxapex', 'Tyranitar', 'Volcarona', 'Zapdos-Base',
			'nduubl', // National Dex UUBL
			'Aerodactyl-Mega', 'Azumarill', 'Blacephalon', 'Diancie-Mega', 'Gallade-Mega', 'Gardevoir-Mega', 'Gengar', 'Gyarados', 'Hawlucha',
			'Heracross-Mega', 'Hydreigon', 'Kyurem', 'Latias', 'Latias-Mega', 'Latios', 'Manaphy', 'Pinsir-Mega', 'Slowbro-Mega', 'Thundurus',
			'Venusaur-Mega', 'Victini', 'Xurkitree', 'Drizzle', 'Drought',
			// Slowbronite is banned so it doesn't validate on Galarian Slowbro
			'Slowbronite',
		],
		// Used to distinguish UU from below UU in the client
		restricted: [
			'Absol-Mega', 'Aegislash', 'Aggron-Mega', 'Altaria-Mega', 'Amoonguss', 'Beedrill-Mega', 'Bisharp', 'Breloom', 'Buzzwole', 'Celesteela',
			'Chesnaught', 'Crobat', 'Donphan', 'Dragonite', 'Hippowdon', 'Honchkrow', 'Hoopa-Unbound', 'Infernape', 'Jirachi', 'Keldeo', 'Krookodile',
			'Mamoswine', 'Mandibuzz', 'Manectric-Mega', 'Melmetal', 'Mew', 'Mienshao', 'Moltres-Base', 'Nihilego', 'Porygon2', 'Regieleki', 'Ribombee',
			'Rotom-Heat', 'Rotom-Wash', 'Sableye-Mega', 'Scizor', 'Shuckle', 'Skarmory', 'Slowking', 'Slowking-Galar', 'Staraptor', 'Swampert', 'Umbreon',
			'Urshifu-Rapid-Strike', 'Weavile', 'Zapdos-Galar',
		],
	},
	{
		name: "[Gen 8] National Dex Monotype",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3674344/">National Dex Monotype</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Same Type Clause', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Arceus', 'Blastoise-Mega', 'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega',
			'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala',
			'Magearna', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza',
			'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Battle Bond', 'Moody', 'Power Construct', 'Shadow Tag', 'Damp Rock', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] National Dex AG",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672423/">National Dex AG</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex'],
	},

	// Pet Mods
	///////////////////////////////////////////////////////////////////

	{
		section: "Pet Mods",
	},
	{
		name: "[Gen 8] Megas for All",
		desc: `Almost every Pok&eacute;mon has a Mega Evolution.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3671140/">Megas for All</a>`,
		],

		mod: 'megasforall',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Mega Data Mod'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken', 'Cinderace', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed',
			'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black',
			'Kyurem-White', 'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier',
			'Tornadus-Therian', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete', 'Calyrex-Ice', 'Calyrex-Shadow',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Double Trouble",
		desc: `Doubles-based metagame where Pok&eacute;mon are adjusted to become DOU-viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657658/">Double Trouble</a>`,
		],

		mod: 'doubletrouble',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 8] Doubles OU'],
		// Dumb hack because Mawile has 5 abilities for some reason
		validateSet(set, teamHas) {
			const species = this.dex.getSpecies(set.species);
			const ability = this.dex.getAbility(set.ability);
			if (species.name === "Mawile" && set.moves.includes("Follow Me") && ability.name !== "Steelworker") {
				return [`Mawile can only use Follow Me with Steelworker.`];
			}
			if (!(species.name === 'Mawile' && ability.name === 'Huge Power')) {
				return this.validateSet(set, teamHas);
			} else {
				const abil = set.ability;
				set.ability = 'Steelworker';
				const fakeValidation = this.validateSet(set, teamHas);
				if (fakeValidation?.length) return fakeValidation;
				set.ability = abil;
				return null;
			}
		},
	},
	{
		name: "[Gen 6] NEXT OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3476151/">Gen-NEXT Development Thread</a>`,
		],

		mod: 'gennext',
		searchShow: false,
		challengeShow: false,
		ruleset: ['Obtainable', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber'],
	},

	// OM of the Month
	///////////////////////////////////////////////////////////////////

	{
		section: "OM of the Month",
		column: 2,
	},
	{
		name: "[Gen 8] Inheritance",
		desc: `Pok&eacute;mon may use the ability and moves of another, as long as they forfeit their own learnset.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656811/">Inheritance</a>`,
		],

		mod: 'gen8',
		// searchShow: false,
		ruleset: ['Standard', '2 Ability Clause', 'Dynamax Clause'],
		banlist: [
			'Blaziken', 'Butterfree', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chansey', 'Combusken', 'Cresselia', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Eternatus', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kartana', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Marshadow', 'Melmetal', 'Mewtwo',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Regieleki', 'Regigigas', 'Reshiram', 'Shedinja', 'Solgaleo', 'Spectrier', 'Toxtricity',
			'Torkoal', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom',
			'Arena Trap', 'Huge Power', 'Imposter', 'Innards Out', 'Libero', 'Moody', 'Power Construct', 'Pure Power', 'Shadow Tag', 'Simple', 'Unburden', 'Water Bubble',
			'Baton Pass', 'Bolt Beak', 'Fishious Rend', 'Shell Smash',
		],
		getEvoFamily(speciesid) {
			let species = Dex.getSpecies(speciesid);
			while (species.prevo) {
				species = Dex.getSpecies(species.prevo);
			}
			return species.id;
		},
		validateSet(set, teamHas) {
			const unreleased = (pokemon: Species) => pokemon.tier === "Unreleased" && pokemon.isNonstandard === "Unobtainable";
			if (!teamHas.abilityMap) {
				teamHas.abilityMap = Object.create(null);
				for (const speciesid in Dex.data.Pokedex) {
					const pokemon = this.dex.getSpecies(speciesid);
					if (pokemon.isNonstandard || unreleased(pokemon)) continue;
					if (pokemon.requiredAbility || pokemon.requiredItem || pokemon.requiredMove) continue;
					if (this.ruleTable.isBannedSpecies(pokemon)) continue;

					for (const key of Object.values(pokemon.abilities)) {
						const abilityId = this.dex.toID(key);
						if (abilityId in teamHas.abilityMap) {
							teamHas.abilityMap[abilityId][pokemon.evos ? 'push' : 'unshift'](speciesid);
						} else {
							teamHas.abilityMap[abilityId] = [speciesid];
						}
					}
				}
			}

			const problem = this.validateForme(set);
			if (problem.length) return problem;

			const species = this.dex.getSpecies(set.species);
			if (!species.exists || species.num < 1) return [`The Pok\u00e9mon "${set.species}" does not exist.`];
			if (species.isNonstandard || unreleased(species)) {
				return [`${species.name} is not obtainable in Generation ${this.dex.gen}.`];
			}

			const name = set.name;
			if (this.ruleTable.isBannedSpecies(species)) {
				return this.validateSet(set, teamHas);
			}

			const ability = this.dex.getAbility(set.ability);
			if (!ability.exists || ability.isNonstandard) return [`${name} needs to have a valid ability.`];
			const pokemonWithAbility = teamHas.abilityMap[ability.id];
			if (!pokemonWithAbility) return [`${this.dex.getAbility(set.ability).name} is not available on a legal Pok\u00e9mon.`];

			(this.format as any).debug = true;

			if (!teamHas.abilitySources) teamHas.abilitySources = Object.create(null);
			const validSources: string[] = teamHas.abilitySources[this.dex.toID(set.species)] = []; // Evolution families

			let canonicalSource = ''; // Specific for the basic implementation of Donor Clause (see onValidateTeam).

			for (const donor of pokemonWithAbility) {
				const donorSpecies = this.dex.getSpecies(donor);
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.getFormat('gen8inheritance');
				const evoFamily = format.getEvoFamily!(donorSpecies.id);
				if (validSources.includes(evoFamily)) continue;

				set.species = donorSpecies.name;
				set.name = donorSpecies.baseSpecies;
				const problems = this.validateSet(set, teamHas) || [];
				if (!problems.length) {
					validSources.push(evoFamily);
					canonicalSource = donorSpecies.name;
				}
				// Specific for the basic implementation of Donor Clause (see onValidateTeam).
				if (validSources.length > 1) break;
			}
			(this.format as any).debug = false;

			set.name = name;
			set.species = species.name;
			if (!validSources.length) {
				if (pokemonWithAbility.length > 1) return [`${name}'s set is illegal.`];
				return [`${name} has an illegal set with an ability from ${this.dex.getSpecies(pokemonWithAbility[0]).name}.`];
			}

			// Protocol: Include the data of the donor species in the `ability` data slot.
			// Afterwards, we are going to reset the name to what the user intended.
			set.ability = `${set.ability}0${canonicalSource}`;
			return null;
		},
		onValidateTeam(team, f, teamHas) {
			// Donor Clause
			const evoFamilyLists = [];
			for (const set of team) {
				const abilitySources = teamHas.abilitySources?.[this.dex.toID(set.species)];
				if (!abilitySources) continue;
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.getFormat('gen8inheritance');
				evoFamilyLists.push(abilitySources.map(format.getEvoFamily!));
			}

			// Checking actual full incompatibility would require expensive algebra.
			// Instead, we only check the trivial case of multiple Pokémon only legal for exactly one family. FIXME?
			const requiredFamilies = Object.create(null);
			for (const evoFamilies of evoFamilyLists) {
				if (evoFamilies.length !== 1) continue;
				const [familyId] = evoFamilies;
				if (!(familyId in requiredFamilies)) requiredFamilies[familyId] = 1;
				requiredFamilies[familyId]++;
				if (requiredFamilies[familyId] > 2) {
					return [
						`You are limited to up to two inheritances from each evolution family by the Donor Clause.`,
						`(You inherit more than twice from ${this.dex.getSpecies(familyId).name}).`,
					];
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.baseAbility.includes('0')) {
					const donor = pokemon.baseAbility.split('0')[1];
					pokemon.m.donor = this.toID(donor);
					pokemon.baseAbility = this.toID(pokemon.baseAbility.split('0')[0]);
					pokemon.ability = pokemon.baseAbility;
				}
			}
		},
		onSwitchIn(pokemon) {
			if (!pokemon.m.donor) return;
			const donorTemplate = this.dex.getSpecies(pokemon.m.donor);
			if (!donorTemplate.exists) return;
			// Place volatiles on the Pokémon to show the donor details.
			this.add('-start', pokemon, donorTemplate.name, '[silent]');
		},
	},
	{
		name: "[Gen 8] Nature Swap",
		desc: `Pok&eacute;mon have their base stats swapped depending on their nature.`,
		threads: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3673622/">Nature Swap</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: [
			'Blissey', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chansey', 'Cloyster', 'Dialga', 'Eternatus', 'Genesect', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala',
			'Marshadow', 'Melmetal', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram',
			'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
		battle: {
			spreadModify(baseStats, set) {
				const modStats: SparseStatsTable = {atk: 10, def: 10, spa: 10, spd: 10, spe: 10};
				const tr = this.trunc;
				const nature = this.dex.getNature(set.nature);
				let statName: keyof StatsTable;
				for (statName in modStats) {
					const stat = baseStats[statName];
					let usedStat = statName;
					if (nature.plus) {
						if (statName === nature.minus) {
							usedStat = nature.plus;
						} else if (statName === nature.plus) {
							usedStat = nature.minus!;
						}
					}
					modStats[statName] = tr(tr(2 * stat + set.ivs[usedStat] + tr(set.evs[usedStat] / 4)) * set.level / 100 + 5);
				}
				if ('hp' in baseStats) {
					const stat = baseStats['hp'];
					modStats['hp'] = tr(tr(2 * stat + set.ivs['hp'] + tr(set.evs['hp'] / 4) + 100) * set.level / 100 + 10);
				}
				return this.natureModify(modStats as StatsTable, set);
			},
			natureModify(stats, set) {
				const tr = this.trunc;
				const nature = this.dex.getNature(set.nature);
				let s: StatNameExceptHP;
				if (nature.plus) {
					s = nature.minus!;
					const stat = this.ruleTable.has('overflowstatmod') ? Math.min(stats[s], 595) : stats[s];
					stats[s] = this.ruleTable.has('overflowstatmod') ? Math.min(stats[nature.plus], 728) : stats[nature.plus];
					stats[nature.plus] = tr(tr(stat * 110, 16) / 100);
				}
				return stats;
			},
		},
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 8] Balanced Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656408/">Balanced Hackmons</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659817/">BH Resources</a>`,
		],

		mod: 'gen8',
		ruleset: ['-Nonexistent', 'OHKO Clause', 'Evasion Moves Clause', 'Forme Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Calyrex-Shadow', 'Darmanitan-Galar-Zen', 'Eternatus-Eternamax', 'Shedinja',
			'Arena Trap', 'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Libero', 'Magnet Pull', 'Moody',
			'Neutralizing Gas', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard',
			'Comatose + Sleep Talk', 'Double Iron Bash', 'Octolock', 'Shell Smash',
		],
		restricted: ['Zacian-Crowned'],
		onValidateSet(set) {
			const ability = this.dex.getAbility(set.ability);
			if (set.species === 'Zacian-Crowned') {
				if (this.dex.toID(set.item) !== 'rustedsword' || ability.id !== 'intrepidsword') {
					return [`${set.species} is banned.`];
				}
			} else if (ability.id === 'intrepidsword') {
				return [`${set.name}'s ability ${ability.name} is banned.`];
			}
		},
		onChangeSet(set) {
			const item = this.dex.toID(set.item);
			if (set.species === 'Zacian' && item === 'rustedsword') {
				set.species = 'Zacian-Crowned';
				set.ability = 'Intrepid Sword';
				const ironHead = set.moves.indexOf('ironhead');
				if (ironHead >= 0) {
					set.moves[ironHead] = 'behemothblade';
				}
			}
			if (set.species === 'Zamazenta' && item === 'rustedshield') {
				set.species = 'Zamazenta-Crowned';
				set.ability = 'Dauntless Shield';
				const ironHead = set.moves.indexOf('ironhead');
				if (ironHead >= 0) {
					set.moves[ironHead] = 'behemothbash';
				}
			}
		},
	},
	{
		name: "[Gen 8] Mix and Mega",
		desc: `Mega evolve any Pok&eacute;mon with any mega stone and no limit. Boosts based on mega evolution from gen 7.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656469/">Mix and Mega</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659028/">M&amp;M Resources</a>`,
		],

		mod: 'mixandmega',
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Overflow Stat Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Calyrex-Shadow', 'Kyogre', 'Zacian-Crowned',
			'Beedrillite', 'Blazikenite', 'Gengarite', 'Kangaskhanite', 'Mawilite', 'Medichamite', 'Pidgeotite',
			'Moody', 'Shadow Tag', 'Baton Pass', 'Electrify',
		],
		restricted: [
			'Calyrex-Ice', 'Dialga', 'Eternatus', 'Gengar', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyurem-Black', 'Kyurem-White',
			'Lugia', 'Lunala', 'Marshadow', 'Melmetal', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Rayquaza', 'Regigigas', 'Reshiram', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zekrom', 'Zygarde-Complete',
		],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.getItem(set.item);
				if (!item || !item.megaStone) continue;
				const species = this.dex.getSpecies(set.species);
				if (species.isNonstandard) return [`${species.baseSpecies} does not exist in gen 8.`];
				if (this.ruleTable.isRestrictedSpecies(species) || this.toID(set.ability) === 'powerconstruct') {
					return [`${species.name} is not allowed to hold ${item.name}.`];
				}
				if (itemTable.has(item.id)) {
					return [`You are limited to one of each mega stone.`, `(You have more than one ${item.name})`];
				}
				itemTable.add(item.id);
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.getSpecies(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
				const oSpecies = this.dex.getSpecies(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.getSpecies(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-end', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 8] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656414/">Almost Any Ability</a>`,
		],

		mod: 'gen8',
		ruleset: ['Obtainable', '!Obtainable Abilities', 'Species Clause', 'Nickname Clause', '2 Ability Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Buzzwole', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dracovish', 'Dragapult', 'Dragonite', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Kartana', 'Keldeo', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mewtwo', 'Naganadel',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Regigigas', 'Reshiram', 'Shedinja', 'Solgaleo', 'Spectrier', 'Urshifu-Base',
			'Urshifu-Rapid-Strike', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zeraora', 'Zygarde-Base',
			'Arena Trap', 'Comatose', 'Contrary', 'Fluffy', 'Fur Coat', 'Gorilla Tactics', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Intrepid Sword', 'Libero',
			'Moody', 'Neutralizing Gas', 'Parental Bond', 'Power Construct', 'Protean', 'Pure Power', 'Shadow Tag', 'Simple', 'Stakeout', 'Speed Boost', 'Water Bubble', 'Wonder Guard',
			'Baton Pass',
		],
	},
	{
		name: "[Gen 8] STABmons",
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656429/">STABmons</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'STABmons Move Legality', 'Dynamax Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kartana', 'Kyogre',
			'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Mamoswine', 'Marshadow', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa',
			'Porygon-Z', 'Rayquaza', 'Reshiram', 'Silvally', 'Solgaleo', 'Thundurus-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Baton Pass',
		],
		restricted: [
			'Acupressure', 'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Double Iron Bash', 'Electrify', 'Extreme Speed', 'Fishious Rend',
			'Geomancy', 'Lovely Kiss', 'Shell Smash', 'Shift Gear', 'Spore', 'Thousand Arrows', 'V-create', 'Wicked Blow',
		],
	},
	{
		name: "[Gen 8] Camomons",
		desc: `Pok&eacute;mon change type to match their first two moves.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656413/">Camomons</a>`,
		],

		mod: 'gen8',
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Dragonite', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Kartana', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Rayquaza', 'Reshiram', 'Shedinja', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // Chat command
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			const types = [...new Set(target.baseMoveSlots.slice(0, 2).map(move => this.dex.getMove(move.id).type))];
			return {...species, types: types};
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
		},
	},
	{
		name: "[Gen 8] NFE",
		desc: `Only Pok&eacute;mon that can evolve are allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656332/">NFE Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657558/">NFE Resources</a>`,
		],

		mod: 'gen8',
		ruleset: ['Not Fully Evolved', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Chansey', 'Doublade', 'Haunter', 'Magneton', 'Pawniard', 'Porygon2', 'Rhydon', 'Scyther', 'Sneasel', 'Type: Null',
			'Arena Trap', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Cross Evolution",
		desc: `Give a Pok&eacute;mon a Pok&eacute;mon name of the next evolution stage as a nickname to inherit stat changes, typing, abilities, and stats, from the next stage Pok&eacute;mon.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657562/">Cross Evolution</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard', 'Overflow Stat Mod', 'Dynamax Clause'],
		banlist: ['Corsola-Galar', 'Sneasel', 'Type: Null', 'Arena Trap', 'Ice Scales', 'Moody', 'King\'s Rock', 'Baton Pass'],
		restricted: ['Chansey', 'Lunala', 'Shedinja', 'Solgaleo', 'Gorilla Tactics', 'Huge Power', 'Pure Power', 'Shadow Tag'],
		onValidateTeam(team) {
			const names = new Set<ID>();
			for (const set of team) {
				const name = set.name;
				if (names.has(this.dex.toID(name))) {
					return [
						`Your Pok\u00e9mon must have different nicknames.`,
						`(You have more than one Pok\u00e9mon named '${name}')`,
					];
				}
				names.add(this.dex.toID(name));
			}
			if (!names.size) {
				return [
					`${this.format.name} works using nicknames; your team has 0 nicknamed Pok\u00e9mon.`,
					`(If this was intentional, add a nickname to one Pok\u00e9mon that isn't the name of a Pok\u00e9mon species.)`,
				];
			}
		},
		checkCanLearn(move, species, lsetData, set) {
			// @ts-ignore
			if (!set.sp || !set.sp.exists || !set.crossSpecies || !set.crossSpecies.exists) {
				return this.checkCanLearn(move, species, lsetData, set);
			}
			// @ts-ignore
			const problem = this.checkCanLearn(move, set.sp);
			if (!problem) return null;
			// @ts-ignore
			if (!set.crossMovesLeft) return problem;
			// @ts-ignore
			if (this.checkCanLearn(move, set.crossSpecies)) return problem;
			// @ts-ignore
			set.crossMovesLeft--;
			return null;
		},
		validateSet(set, teamHas) {
			const crossSpecies = this.dex.getSpecies(set.name);
			const onChangeSet = this.dex.getFormat('Pokemon').onChangeSet;
			let problems = onChangeSet ? onChangeSet.call(this, set, this.format) : null;
			if (Array.isArray(problems) && problems.length) return problems;
			if (!crossSpecies.exists || crossSpecies.isNonstandard) return this.validateSet(set, teamHas);
			const species = this.dex.getSpecies(set.species);
			const check = this.checkSpecies(set, species, species, {});
			if (check) return [check];
			if (!species.exists || species.isNonstandard || species === crossSpecies) return this.validateSet(set, teamHas);
			if (!species.nfe) return [`${species.name} cannot cross evolve because it doesn't evolve.`];
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable");
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it isn't an evolution.`];
			}
			if (this.ruleTable.isRestrictedSpecies(crossSpecies)) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it is banned.`];
			}
			const crossPrevoSpecies = this.dex.getSpecies(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) {
				return [
					`${species.name} cannot cross evolve into ${crossSpecies.name} because they are not consecutive evolution stages.`,
				];
			}
			const ability = this.dex.getAbility(set.ability);
			if (!this.ruleTable.isRestricted(`ability:${ability.id}`) || Object.values(species.abilities).includes(ability.name)) {
				set.species = crossSpecies.name;
			}

			// @ts-ignore
			set.sp = species;
			// @ts-ignore
			set.crossSpecies = crossSpecies;
			// @ts-ignore
			set.crossMovesLeft = 2;
			problems = this.validateSet(set, teamHas);
			set.name = crossSpecies.name;
			set.species = species.name;
			return problems;
		},
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // chat
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			if (target.set.name === target.set.species) return;
			const crossSpecies = this.dex.getSpecies(target.set.name);
			if (!crossSpecies.exists) return;
			if (species.battleOnly || !species.nfe) return;
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable");
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) return;
			const crossPrevoSpecies = this.dex.getSpecies(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) return;

			const mixedSpecies = this.dex.deepClone(species);
			mixedSpecies.baseSpecies = mixedSpecies.name = `${species.name}-${crossSpecies.name}`;
			mixedSpecies.weightkg =
				Math.max(0.1, +(species.weightkg + crossSpecies.weightkg - crossPrevoSpecies.weightkg)).toFixed(1);
			mixedSpecies.nfe = false;
			mixedSpecies.evos = [];
			mixedSpecies.eggGroups = crossSpecies.eggGroups;
			mixedSpecies.abilities = crossSpecies.abilities;
			mixedSpecies.bst = 0;
			let i: StatName;
			for (i in species.baseStats) {
				const statChange = crossSpecies.baseStats[i] - crossPrevoSpecies.baseStats[i];
				mixedSpecies.baseStats[i] = this.clampIntRange(species.baseStats[i] + statChange, 1, 255);
				mixedSpecies.bst += mixedSpecies.baseStats[i];
			}
			if (crossSpecies.types[0] !== crossPrevoSpecies.types[0]) mixedSpecies.types[0] = crossSpecies.types[0];
			if (crossSpecies.types[1] !== crossPrevoSpecies.types[1]) {
				mixedSpecies.types[1] = crossSpecies.types[1] || crossSpecies.types[0];
			}
			if (mixedSpecies.types[0] === mixedSpecies.types[1]) mixedSpecies.types = [mixedSpecies.types[0]];

			return mixedSpecies;
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.baseSpecies = pokemon.species;
			}
		},
	},
	{
		name: "[Gen 8] Godly Gift",
		desc: `Each Pok&eacute;mon receives one base stat from a God (Uber Pok&eacute;mon) depending on its position in the team. If there is no Uber Pok&eacute;mon, it uses the Pok&eacute;mon in the first slot.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660461/">Godly Gift</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Blissey', 'Chansey', 'Toxapex', 'Uber > 1', 'AG ++ Uber > 1', 'Arena Trap', 'Huge Power', 'Moody', 'Pure Power', 'Shadow Tag', 'Baton Pass'],
		onModifySpecies(species, target, source) {
			if (source || !target || !target.side) return;
			const god = target.side.team.find(set => {
				let godSpecies = this.dex.getSpecies(set.species);
				const validator = this.dex.getRuleTable(this.dex.getFormat(`gen${this.gen}ou`));
				if (this.toID(set.ability) === 'powerconstruct' && this.gen === 7) {
					return true;
				}
				if (set.item) {
					const item = this.dex.getItem(set.item);
					if (item.megaEvolves === set.species) godSpecies = this.dex.getSpecies(item.megaStone);
				}
				const isBanned = validator.isBannedSpecies(godSpecies);
				return isBanned;
			}) || target.side.team[0];
			const stat = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'][target.side.team.indexOf(target.set)];
			const newSpecies = this.dex.deepClone(species);
			let godSpecies = this.dex.getSpecies(god.species);
			if (godSpecies.forme === 'Crowned') {
				godSpecies = this.dex.getSpecies(godSpecies.changesFrom || godSpecies.baseSpecies);
			}
			newSpecies.bst -= newSpecies.baseStats[stat];
			newSpecies.baseStats[stat] = godSpecies.baseStats[stat as StatName];
			newSpecies.bst += newSpecies.baseStats[stat];
			return newSpecies;
		},
	},
	{
		name: "[Gen 8] Pure Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656851/">Pure Hackmons</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 8] Shared Power",
		desc: `Once a Pok&eacute;mon switches in, its ability is shared with the rest of the team.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660877/">Shared Power</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Eternatus', 'Genesect', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna',
			'Marshadow', 'Melmetal', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Pheromosa', 'Rayquaza', 'Reshiram', 'Shedinja', 'Solgaleo', 'Urshifu-Base', 'Urshifu-Rapid-Strike',
			'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom',
			'Arena Trap', 'Contrary', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Electric Surge ++ Surge Surfer',
			'Fur Coat', 'Guts', 'Harvest', 'Huge Power', 'Imposter', 'Innards Out', 'Libero', 'Magic Bounce', 'Magic Guard',
			'Magnet Pull', 'Mold Breaker', 'Moody', 'Neutralizing Gas', 'Power Construct', 'Queenly Majesty', 'Quick Draw',
			'Regenerator', 'Sand Rush', 'Sand Veil', 'Shadow Tag', 'Simple', 'Snow Cloak', 'Snow Warning ++ Slush Rush', 'Speed Boost',
			'Stakeout', 'Steelworker ++ Steely Spirit', 'Tinted Lens', 'Triage', 'Unaware', 'Unburden', 'Water Bubble',
			'Baton Pass',
		],
		getSharedPower(pokemon) {
			const sharedPower = new Set<string>();
			for (const ally of pokemon.side.pokemon) {
				if (ally.previouslySwitchedIn > 0) {
					if (['mirrorarmor', 'trace'].includes(ally.baseAbility)) continue;
					sharedPower.add(ally.baseAbility);
				}
			}
			sharedPower.delete(pokemon.baseAbility);
			return sharedPower;
		},
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.getFormat('gen8sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.getFormat('gen8sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},
		field: {
			suppressingWeather() {
				for (const side of this.battle.sides) {
					for (const pokemon of side.active) {
						if (pokemon && !pokemon.ignoringAbility() && pokemon.hasAbility('Cloud Nine')) {
							return true;
						}
					}
				}
				return false;
			},
		},
		pokemon: {
			hasAbility(ability) {
				if (this.ignoringAbility()) return false;
				if (Array.isArray(ability)) return ability.some(abil => this.hasAbility(abil));
				const abilityid = this.battle.toID(ability);
				return this.ability === abilityid || !!this.volatiles['ability:' + abilityid];
			},
		},
	},
	{
		name: "[Gen 8] Tier Shift",
		desc: `Pok&eacute;mon below OU get their stats, excluding HP, boosted. UU/RUBL get +10, RU/NUBL get +20, NU/PUBL get +30, and PU or lower get +40.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3662165/">Tier Shift</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] OU', 'Overflow Stat Mod'],
		banlist: ['Damp Rock', 'Eviolite', 'Heat Rock'],
		unbanlist: ['Zamazenta-Crowned'],
		onModifySpecies(species, target, source, effect) {
			if (!species.baseStats) return;
			const boosts: {[tier: string]: number} = {
				uu: 10,
				rubl: 10,
				ru: 20,
				nubl: 20,
				nu: 30,
				publ: 30,
				pu: 40,
				nfe: 40,
				lc: 40,
			};
			let tier = this.toID(species.tier) || 'ou';
			if (!(tier in boosts)) return;
			// Non-Pokemon bans in lower tiers
			if (target && boosts[tier] > 20) {
				if (target.set.ability === 'drizzle') tier = 'nubl';
				if (target.set.ability === 'drought') tier = 'nubl';
				if (target.set.moves.includes('auroraveil')) tier = 'nubl';
			}
			const pokemon = this.dex.deepClone(species);
			pokemon.bst = 0;
			const boost = boosts[tier];
			let statName: StatName;
			for (statName in pokemon.baseStats as StatsTable) {
				if (statName === 'hp') continue;
				pokemon.baseStats[statName] = this.clampIntRange(pokemon.baseStats[statName] + boost, 1, 255);
				pokemon.bst += pokemon.baseStats[statName];
			}
			return pokemon;
		},
	},
	{
		name: "[Gen 8] Trademarked",
		desc: `Sacrifice your Pok&eacute;mon's ability for a status move that activates on switch-in.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656980/">Trademarked</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Kyurem-Black', 'Kyurem-White',
			'Giratina', 'Giratina-Origin', 'Genesect', 'Groudon', 'Ho-Oh', 'Kartana', 'Kyogre', 'Lugia', 'Lunala', 'Magearna', 'Marshadow',
			'Melmetal', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram',
			'Solgaleo', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
		restricted: [
			'Baneful Bunker', 'Block', 'Copycat', 'Corrosive Gas', 'Detect', 'Destiny Bond', 'Disable', 'Encore', 'Fairy Lock', 'Ingrain', 'Instruct',
			'King\'s Shield', 'Mat Block', 'Mean Look', 'move:Metronome', 'Obstruct', 'Octolock', 'Nature Power', 'Parting Shot', 'Psycho Shift',
			'Protect', 'Roar', 'Skill Swap', 'Sleep Talk', 'Spiky Shield', 'Substitute', 'Teleport', 'Whirlwind', 'Wish', 'Yawn',
		],
		onValidateTeam(team, format, teamHas) {
			const problems = [];
			for (const trademark in teamHas.trademarks) {
				if (teamHas.trademarks[trademark] > 1) {
					problems.push(`You are limited to 1 of each Trademark.`, `(You have ${teamHas.trademarks[trademark]} Pok\u00e9mon with ${trademark} as a Trademark.)`);
				}
			}
			return problems;
		},
		validateSet(set, teamHas) {
			const dex = this.dex;
			const ability = dex.getMove(set.ability);
			if (ability.category !== 'Status' || ability.status === 'slp' ||
				this.ruleTable.isRestricted(`move:${ability.id}`) || set.moves.map(this.dex.toID).includes(ability.id)) {
				return this.validateSet(set, teamHas);
			}
			if (ability.forceSwitch || ability.selfSwitch) {
				return [
					`Force-switching and self-switching moves are banned from being used as trademarks.`,
					`(${ability.name} is a ${ability.forceSwitch ? 'force' : 'self'}-switching move.)`,
				];
			}
			const customRules = this.format.customRules || [];
			if (!customRules.includes('!obtainableabilities')) customRules.push('!obtainableabilities');

			const TeamValidator: typeof import('../sim/team-validator').TeamValidator =
				require('../sim/team-validator').TeamValidator;

			const validator = new TeamValidator(dex.getFormat(`${this.format.id}@@@${customRules.join(',')}`));
			const moves = set.moves;
			set.moves = [ability.id];
			set.ability = dex.getSpecies(set.species).abilities['0'];
			let problems = validator.validateSet(set, {}) || [];
			if (problems.length) return problems;
			set.moves = moves;
			set.ability = dex.getSpecies(set.species).abilities['0'];
			problems = problems.concat(validator.validateSet(set, teamHas) || []);
			set.ability = ability.id;
			if (!teamHas.trademarks) teamHas.trademarks = {};
			teamHas.trademarks[ability.name] = (teamHas.trademarks[ability.name] || 0) + 1;
			return problems.length ? problems : null;
		},
		pokemon: {
			getAbility() {
				const move = this.battle.dex.getMove(this.battle.toID(this.ability));
				if (!move.exists) return Object.getPrototypeOf(this).getAbility.call(this);
				return {
					id: move.id,
					name: move.name,
					onStart(this: Battle, pokemon: Pokemon) {
						this.add('-activate', pokemon, 'ability: ' + move.name);
						this.useMove(move, pokemon);
					},
					toString() {
						return "";
					},
				};
			},
		},
	},
	{
		name: "[Gen 7] Balanced Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8407209/">USM Balanced Hackmons</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['-Nonexistent', '2 Ability Clause', 'OHKO Clause', 'Evasion Moves Clause', 'CFZ Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Groudon-Primal', 'Rayquaza-Mega', 'Gengarite', 'Comatose + Sleep Talk', 'Chatter',
			'Arena Trap', 'Contrary', 'Huge Power', 'Illusion', 'Innards Out', 'Magnet Pull', 'Moody', 'Parental Bond', 'Protean', 'Psychic Surge', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard',
		],
	},

	// Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Metas",
		column: 2,
	},
	{
		name: "[Gen 8] Monotype Random Battle",

		mod: 'gen8',
		team: 'random',
		ruleset: ['Obtainable', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] BSS Factory",
		desc: `Randomized 3v3 Singles featuring Pok&eacute;mon and movesets popular in Battle Stadium Singles.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3675374/">Information and Suggestions Thread</a>`,
		],

		team: 'randomBSSFactory',
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Obtainable', 'Standard GBU'],
	},
	{
		name: "[Gen 8] Super Staff Bros 4",
		desc: "The fourth iteration of Super Staff Bros is here! Battle with a random team of pokemon created by the sim staff.",
		threads: [
			`&bullet; <a href="https://www.smogon.com/articles/super-staff-bros-4">Introduction &amp; Roster</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/super-staff-bros-4-discussion-thread.3675237/">Discussion Thread</a>`,
		],

		mod: 'ssb',
		team: 'randomStaffBros',
		ruleset: ['Dynamax Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		onBegin() { // TODO look into making an event to put this right after turn|1
			// https://discordapp.com/channels/630837856075513856/630845310033330206/716126469528485909
			// Requires client change
			this.add(`raw|<div class='broadcast-green'><b>Wondering what all these custom moves, abilities, and items do?<br />Check out the <a href="https://www.smogon.com/articles/super-staff-bros-4" target="_blank">Super Staff Bros 4 Guide</a> or use /ssb to find out!</b></div>`);

			this.add('message', [
				'THE BATTLE FOR SURVIVAL BEGINS!', 'WHO WILL SURVIVE?', 'GET READY TO KEEP UP!', 'GET READY!', 'DARE TO BELIEVE YOU CAN SURVIVE!', 'THERE CAN BE ONLY ONE WINNER!', 'GET READY FOR THE FIGHT OF YOUR LIFE!', 'WHO WILL PREVAIL?', 'ONLY ONE TEAM WILL BE LEFT STANDING!', 'BATTLE WITHOUT LIMITS!',
			][this.random(10)]);
			this.add('message', 'FIGHT!');
		},
		onSwitchInPriority: 100,
		onSwitchIn(pokemon) {
			let name: string = this.toID(pokemon.illusion ? pokemon.illusion.name : pokemon.name);
			if (this.dex.getSpecies(name).exists || this.dex.getMove(name).exists || this.dex.getAbility(name).exists) {
				// Certain pokemon have volatiles named after their id
				// To prevent overwriting those, and to prevent accidentaly leaking
				// that a pokemon is on a team through the onStart even triggering
				// at the start of a match, users with pokemon names will need their
				// statuses to end in "user".
				name = name + 'user';
			}
			// Add the mon's status effect to it as a volatile.
			const status = this.dex.getEffect(name);
			if (status?.exists) {
				pokemon.addVolatile(name, pokemon);
			}
			if (pokemon.m.hasBounty) this.add('-start', pokemon, 'bounty', '[silent]');
		},
		onFaint(target, source, effect) {
			if (effect?.effectType !== 'Move') return;
			if (!target.m.hasBounty) return;
			if (source) {
				this.add('-message', `${source.name} received the bounty!`);
				this.boost({atk: 1, def: 1, spa: 1, spd: 1, spe: 1}, source, target, effect);
			}
		},
	},
	{
		name: "[Gen 8] Challenge Cup 1v1",

		mod: 'gen8',
		team: 'randomCC',
		teamLength: {
			battle: 1,
		},
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] Challenge Cup 2v2",

		mod: 'gen8',
		team: 'randomCC',
		gameType: 'doubles',
		teamLength: {
			battle: 2,
		},
		searchShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item.`,

		mod: 'gen8',
		team: 'randomHC',
		ruleset: ['Obtainable Formes', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] Doubles Hackmons Cup",

		mod: 'gen8',
		gameType: 'doubles',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] CAP 1v1",
		desc: `Randomly generated 1v1-style teams only including Pok&eacute;mon made by the Create-A-Pok&eacute;mon Project.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3663533/">CAP 1v1</a>`,
		],

		mod: 'gen8',
		team: 'randomCAP1v1',
		teamLength: {
			battle: 1,
		},
		ruleset: ['Species Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
	},
	{
		name: "[Gen 7] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591157/">Sets and Suggestions</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3616946/">Role Compendium</a>`,
		],

		mod: 'gen7',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Random Doubles Battle",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3601525/">Sets and Suggestions</a>`],

		mod: 'gen7',
		gameType: 'doubles',
		team: 'random',
		searchShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Battle Factory",
		desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,

		mod: 'gen7',
		team: 'randomFactory',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 7] BSS Factory",
		desc: `Randomized 3v3 Singles featuring Pok&eacute;mon and movesets popular in Battle Spot Singles.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3604845/">Information and Suggestions Thread</a>`,
		],

		mod: 'gen7',
		team: 'randomBSSFactory',
		searchShow: false,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Obtainable', 'Standard GBU'],
	},
	{
		name: "[Gen 7] Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item.`,

		mod: 'gen7',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7 Let's Go] Random Battle",

		mod: 'letsgo',
		team: 'random',
		searchShow: false,
		ruleset: ['Obtainable', 'Allow AVs', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 6] Random Battle",

		mod: 'gen6',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 6] Battle Factory",
		desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,

		mod: 'gen6',
		team: 'randomFactory',
		searchShow: false,
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 5] Random Battle",

		mod: 'gen5',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 4] Random Battle",

		mod: 'gen4',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 3] Random Battle",

		mod: 'gen3',
		team: 'random',
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 2] Random Battle",

		mod: 'gen2',
		team: 'random',
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 1] Random Battle",

		mod: 'gen1',
		team: 'random',
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 1] Challenge Cup",

		mod: 'gen1',
		team: 'randomCC',
		searchShow: false,
		challengeShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod'],
	},

	// RoA Spotlight
	///////////////////////////////////////////////////////////////////

	{
		section: "RoA Spotlight",
		column: 3,
	},
	{
		name: "[Gen 3] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3585923/">ADV UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3548578/">ADV UU Viability Rankings</a>`,
		],

		mod: 'gen3',
		// searchShow: false,
		ruleset: ['Standard', 'NFE Clause'],
		banlist: ['Uber', 'OU', 'UUBL', 'Smeargle + Ingrain'],
		unbanlist: ['Scyther', 'Sand Veil'],
	},
	{
		name: "[Gen 3] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3503540/">ADV NU Viability Rankings</a>`,
		],

		mod: 'gen3',
		// searchShow: false,
		ruleset: ['[Gen 3] UU', '!NFE Clause'],
		banlist: ['UU'],
	},
	{
		name: "[Gen 6] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677401/">ORAS Almost Any Ability Discussion</a>`,
		],

		mod: 'gen6',
		ruleset: ['[Gen 6] OU', '2 Ability Clause', '!Obtainable Abilities'],
		banlist: ['Archeops', 'Bisharp', 'Chatot', 'Dragonite', 'Keldeo', 'Kyurem-Black', 'Mamoswine', 'Regigigas', 'Shedinja', 'Slaking', 'Smeargle', 'Snorlax', 'Suicune', 'Terrakion', 'Weavile', 'Dynamic Punch', 'Zap Cannon'],
		unbanlist: ['Aegislash', 'Blaziken', 'Deoxys-Defense', 'Deoxys-Speed', 'Genesect', 'Greninja', 'Landorus'],
		restricted: ['Arena Trap', 'Contrary', 'Fur Coat', 'Huge Power', 'Illusion', 'Imposter', 'Parental Bond', 'Protean', 'Pure Power', 'Simple', 'Speed Boost', 'Wonder Guard'],
		onValidateSet(set) {
			const ability = this.dex.getAbility(set.ability);
			if (this.ruleTable.isRestricted(`ability:${ability.id}`)) {
				const species = this.dex.getSpecies(set.species);
				if (!Object.values(species.abilities).includes(ability.name)) {
					return [
						`The Ability "${ability.name}" is restricted.`,
						`(Only Pok\u00e9mon that get ${ability.name} naturally can use it.)`,
					];
				}
			}
		},
	},

	// Past Gens OU
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Gens OU",
		column: 3,
	},
	{
		name: "[Gen 7] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/sm/tags/ou/">USM OU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8162240/">USM OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667522/">USM OU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['Standard'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 6] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/ou/">ORAS OU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8133793/">ORAS OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3623399/">ORAS OU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['Standard', 'Swagger Clause'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'Soul Dew', 'Baton Pass'],
	},
	{
		name: "[Gen 5] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8133791/">BW2 Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658220/">BW2 OU Viability Rankings</a>`,
		],

		mod: 'gen5',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Sleep Moves Clause', 'Swagger Clause'],
		banlist: ['Uber', 'Arena Trap', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Rush', 'Shadow Tag', 'Soul Dew'],
	},
	{
		name: "[Gen 4] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3506147/">DPP OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8133790/">DPP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3652538/">DPP OU Viability Rankings</a>`,
		],

		mod: 'gen4',
		ruleset: ['Standard'],
		banlist: ['AG', 'Uber', 'Arena Trap', 'Sand Veil', 'Swinub + Snow Cloak', 'Piloswine + Snow Cloak', 'Mamoswine + Snow Cloak', 'Soul Dew', 'Baton Pass'],
	},
	{
		name: "[Gen 3] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8133789/">ADV Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3503019/">ADV OU Viability Rankings</a>`,
		],

		mod: 'gen3',
		ruleset: ['Standard', '3 Baton Pass Clause'],
		banlist: ['Uber', 'Smeargle + Baton Pass', 'Sand Veil'],
	},
	{
		name: "[Gen 2] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8133788/">GSC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3556533/">GSC OU Viability Rankings</a>`,
		],

		mod: 'gen2',
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8133786/">RBY Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3572352/">RBY OU Viability Rankings</a>`,
		],

		mod: 'gen1',
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},

	// US/UM Singles
	///////////////////////////////////////////////////////////////////
	{
		section: "US/UM Singles",
		column: 3,
	},
	{
		name: "[Gen 7] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286276/">USM Ubers</a>`,
		],

		mod: 'gen7',
		// searchShow: false,
		ruleset: ['Standard', 'Mega Rayquaza Clause'],
		banlist: ['Baton Pass'],
	},
	{
		name: "[Gen 7] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621217/">USM UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641346/">USM UU Viability Rankings</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] OU'],
		banlist: ['OU', 'UUBL', 'Drizzle', 'Drought', 'Kommonium Z', 'Mewnium Z'],
	},
	{
		name: "[Gen 7] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3645338/">USM RU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3645873/">USM RU Viability Rankings</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] UU'],
		banlist: ['UU', 'RUBL', 'Mimikyu', 'Aurora Veil'],
		unbanlist: ['Drought'],
	},
	{
		name: "[Gen 7] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3632667/">USM NU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3645166/">USM NU Viability Rankings</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] RU'],
		banlist: ['RU', 'NUBL', 'Drought'],
	},
	{
		name: "[Gen 7] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3611496/">USM PU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3614892/">USM PU Viability Rankings</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 7] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/sm/formats/lc/">USM LC Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3639319/">USM LC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621440/">USM LC Viability Rankings</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['Little Cup', 'Standard', 'Swagger Clause'],
		banlist: [
			'Aipom', 'Cutiefly', 'Drifloon', 'Gligar', 'Gothita', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon',
			'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Trapinch', 'Vulpix-Base', 'Wingull', 'Yanma',
			'Eevium Z', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Sticky Web',
		],
	},
	{
		name: "[Gen 7] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8411581/">USM Monotype</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Same Type Clause', 'Standard', 'Swagger Clause'],
		banlist: [
			'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana', 'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna',
			'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tapu Lele', 'Xerneas', 'Yveltal', 'Zekrom', 'Zygarde',
			'Battle Bond', 'Shadow Tag', 'Damp Rock', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		name: "[Gen 7] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031460/">USUM 1v1</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Swagger Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
		banlist: [
			'Arceus', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Mimikyu', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Snorlax', 'Solgaleo', 'Tapu Koko', 'Xerneas', 'Yveltal', 'Zekrom',
			'Moody', 'Focus Sash', 'Perish Song', 'Detect + Fightinium Z',
		],
	},
	{
		name: "[Gen 7] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3587441/">Anything Goes Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591711/">Anything Goes Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646736/">Anything Goes Sample Teams</a>`,
		],

		mod: 'gen7',
		// searchShow: false,
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 7] ZU",
		desc: `The unofficial usage-based tier below PU.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646743/">ZU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3643412/">ZU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646739/">ZU Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] PU'],
		banlist: [
			'PU', 'Carracosta', 'Crabominable', 'Gorebyss', 'Jynx', 'Raticate-Alola',
			'Shiftry', 'Throh', 'Turtonator', 'Type: Null', 'Ursaring', 'Victreebel',
		],
	},
	{
		name: "[Gen 7] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621207/">CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3626018/">CAP Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3648521/">CAP Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] OU', '+CAP'],
	},
	{
		name: "[Gen 7] Battle Spot Singles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3601012/">Introduction to Battle Spot Singles</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3605970/">Battle Spot Singles Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3601658/">Battle Spot Singles Role Compendium</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3619162/">Battle Spot Singles Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Standard GBU'],
		minSourceGen: 6,
	},
	{
		name: "[Gen 7 Let's Go] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667865/">LGPE OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656868/">LGPE OU Viability Rankings</a>`,
		],

		mod: 'letsgo',
		searchShow: false,
		forcedLevel: 50,
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 7] Custom Game",

		mod: 'gen7',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// US/UM Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "US/UM Doubles",
		column: 3,
	},
	{
		name: "[Gen 7] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661293/">USUM Doubles OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8394179/">USUM Doubles OU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8394190/">USUM Doubles OU Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		// searchShow: false,
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['DUber', 'Power Construct', 'Eevium Z', 'Dark Void'],
	},
	{
		name: "[Gen 7] Doubles UU",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3598014/">Doubles UU Metagame Discussion</a>`],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 7] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 7] VGC 2019",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641100/">VGC 2019 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641123/">VGC 2019 Viability Rankings</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Minimal GBU', 'VGC Timer'],
		banlist: ['Unown'],
		minSourceGen: 7,
	},
	{
		name: "[Gen 7] VGC 2018",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3631800/">VGC 2018 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3622041/">VGC 2018 Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3628885/">VGC 2018 Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		timer: {
			starting: 5 * 60,
			addPerTurn: 0,
			maxPerTurn: 55,
			maxFirstTurn: 90,
			grace: 90,
			timeoutAutoChoose: true,
			dcTimerBank: false,
		},
		ruleset: ['Standard GBU'],
		banlist: ['Oranguru + Symbiosis', 'Passimian + Defiant', 'Unown', 'Custap Berry', 'Enigma Berry', 'Jaboca Berry', 'Micle Berry', 'Rowap Berry'],
		minSourceGen: 7,
	},
	{
		name: "[Gen 7] VGC 2017",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3583926/">VGC 2017 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591794/">VGC 2017 Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3590391/">VGC 2017 Sample Teams</a>`,
		],

		mod: 'vgc17',
		gameType: 'doubles',
		searchShow: false,
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		timer: {
			starting: 15 * 60,
			addPerTurn: 0,
			maxPerTurn: 55,
			maxFirstTurn: 90,
			grace: 90,
			timeoutAutoChoose: true,
			dcTimerBank: false,
		},
		ruleset: ['Obtainable', 'Alola Pokedex', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod'],
		banlist: [
			'Solgaleo', 'Lunala', 'Necrozma', 'Magearna', 'Marshadow', 'Zygarde', 'Mega',
			'Custap Berry', 'Enigma Berry', 'Jaboca Berry', 'Micle Berry', 'Rowap Berry',
		],
		minSourceGen: 7,
	},
	{
		name: "[Gen 7] Battle Spot Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3595001/">Battle Spot Doubles Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3593890/">Battle Spot Doubles Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3595859/">Battle Spot Doubles Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU'],
		minSourceGen: 6,
	},
	{
		name: "[Gen 7] Doubles Custom Game",

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		debug: true,
		teamLength: {
			validate: [2, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// OR/AS Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "OR/AS Singles",
		column: 4,
	},
	{
		name: "[Gen 6] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286277/">ORAS Ubers</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard', 'Swagger Clause', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 6] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/uu/">ORAS UU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3598164/">ORAS UU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] OU'],
		banlist: ['OU', 'UUBL', 'Drizzle', 'Drought'],
	},
	{
		name: "[Gen 6] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/ru/">ORAS RU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3574583/">ORAS RU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 6] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/nu/">ORAS NU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3555650/">ORAS NU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] RU'],
		banlist: ['RU', 'NUBL'],
	},
	{
		name: "[Gen 6] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/pu/">ORAS PU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3528743/">ORAS PU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] NU'],
		banlist: ['NU', 'PUBL', 'Chatter'],
	},
	{
		name: "[Gen 6] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/formats/lc/">ORAS LC Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3547566/">ORAS LC Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['Standard', 'Little Cup'],
		banlist: [
			'Drifloon', 'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Yanma',
			'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger',
		],
	},
	{
		name: "[Gen 6] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8411583/">ORAS Monotype</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard', 'Swagger Clause', 'Same Type Clause'],
		banlist: [
			'Aegislash', 'Altaria-Mega', 'Arceus', 'Blaziken', 'Charizard-Mega-X', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga',
			'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Greninja', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega',
			'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Palkia', 'Rayquaza',
			'Reshiram', 'Sableye-Mega', 'Salamence-Mega', 'Shaymin-Sky', 'Slowbro-Mega', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom',
			'Shadow Tag', 'Damp Rock', 'Smooth Rock', 'Soul Dew', 'Baton Pass',
		],
	},
	{
		name: "[Gen 6] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031459/">ORAS 1v1</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Obtainable', 'Nickname Clause', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Swagger Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: [
			'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom',
			'Focus Sash', 'Soul Dew', 'Perish Song',
		],
	},
	{
		name: "[Gen 6] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3523229/">ORAS Anything Goes</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3548945/">ORAS AG Resources</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Obtainable', 'Team Preview', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 6] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3537407/">ORAS CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/5594694/">ORAS CAP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3545628/">ORAS CAP Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] OU', '+CAP'],
	},
	{
		name: "[Gen 6] Battle Spot Singles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3527960/">ORAS Battle Spot Singles</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3554616/">ORAS BSS Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Obtainable', 'Standard GBU'],
		minSourceGen: 6,
	},
	{
		name: "[Gen 6] Custom Game",

		mod: 'gen6',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// OR/AS Doubles/Triples
	///////////////////////////////////////////////////////////////////

	{
		section: "OR/AS Doubles/Triples",
		column: 4,
	},
	{
		name: "[Gen 6] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3606255/">ORAS Doubles OU Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7387213/">ORAS Doubles OU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7387215/">ORAS Doubles OU Sample Teams</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['DUber', 'Soul Dew', 'Dark Void'],
	},
	{
		name: "[Gen 6] VGC 2016",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3558332/">VGC 2016 Rules</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3580592/">VGC 2016 Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod'],
		banlist: [
			'Mew', 'Celebi', 'Jirachi', 'Deoxys', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus',
			'Victini', 'Keldeo', 'Meloetta', 'Genesect', 'Diancie', 'Hoopa', 'Volcanion', 'Soul Dew',
		],
		minSourceGen: 6,
		onValidateTeam(team) {
			const legends = [
				'Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Reshiram', 'Zekrom', 'Kyurem', 'Xerneas', 'Yveltal', 'Zygarde',
			];
			let n = 0;
			for (const set of team) {
				const baseSpecies = this.dex.getSpecies(set.species).baseSpecies;
				if (legends.includes(baseSpecies)) n++;
				if (n > 2) return ["You can only use up to two legendary Pok\u00E9mon."];
			}
		},
	},
	{
		name: "[Gen 6] Battle Spot Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3560820/">ORAS Battle Spot Doubles Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3560824/">ORAS BSD Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU'],
		minSourceGen: 6,
	},
	{
		name: "[Gen 6] Doubles Custom Game",

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		debug: true,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	{
		name: "[Gen 6] Battle Spot Triples",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3533914/">ORAS Battle Spot Triples Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3549201/">ORAS BST Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'triples',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [6, 6],
		},
		ruleset: ['Standard GBU'],
		minSourceGen: 6,
	},
	{
		name: "[Gen 6] Triples Custom Game",

		mod: 'gen6',
		gameType: 'triples',
		searchShow: false,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		debug: true,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// B2/W2 Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "B2/W2 Singles",
		column: 4,
	},
	{
		name: "[Gen 5] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286278/">BW2 Ubers</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Standard', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 5] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3474024/">BW2 UU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Swagger Clause', 'Sleep Clause Mod'],
		banlist: ['Uber', 'OU', 'UUBL', 'Arena Trap', 'Drought', 'Sand Stream', 'Snow Warning'],
	},
	{
		name: "[Gen 5] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3473124/">BW2 RU Viability Rankings</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'RUBL', 'Shell Smash + Baton Pass'],
	},
	{
		name: "[Gen 5] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3484121/">BW2 NU Viability Rankings</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU', 'NUBL', 'Prankster + Assist'],
	},
	{
		name: "[Gen 5] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/7326932/">BW2 PU</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] NU', 'Sleep Moves Clause'],
		banlist: ['NU', 'Combusken', 'Gothorita', 'Linoone', 'Riolu', 'Rotom-Frost', 'Throh', 'Vigoroth'],
	},
	{
		name: "[Gen 5] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3485860/">BW2 LC Viability Rankings</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['Standard', 'Little Cup', 'Sleep Moves Clause'],
		banlist: [
			'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Scraggy', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma',
			'Sand Rush', 'Sand Veil', 'Berry Juice', 'Soul Dew', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger',
		],
	},
	{
		name: "[Gen 5] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8411584/">BW2 Monotype</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] OU', 'Same Type Clause'],
	},
	{
		name: "[Gen 5] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031458/">BW2 1v1</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Standard', 'Baton Pass Clause', 'Swagger Clause'],
		banlist: ['Uber', 'Cottonee', 'Kyurem-Black', 'Whimsicott', 'Focus Sash', 'Soul Dew', 'Perish Song'],
		unbanlist: ['Genesect', 'Landorus', 'Manaphy', 'Thundurus', 'Tornadus-Therian'],
	},
	{
		name: "[Gen 5] GBU Singles",

		mod: 'gen5',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Standard GBU'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] Custom Game",

		mod: 'gen5',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// B2/W2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: 'B2/W2 Doubles',
		column: 4,
	},
	{
		name: "[Gen 5] PokemonChallenges Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3606719/">BW2 Doubles Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7393048/">BW2 Doubles Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7393081/">BW2 Doubles Sample Teams</a>`,
		],

		mod: 'gen5',
		gameType: 'doubles',
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Item Clause', 'Sleep Clause Mod', 'VGC Timer'],
		banlist: ['Dark Void', 'Gravity', 'Swagger', 'Soul Dew',
                  'Mewtwo', 'Lugia', 'Ho-oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Arceus', 'Reshiram', 'Zekrom', 'Kyurem-White'],
	},
	{
		name: "[Gen 5] GBU Doubles",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] Doubles Custom Game",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	{
		name: "[Gen 5] Triples Custom Game",

		mod: 'gen5',
		gameType: 'triples',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// DPP Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "DPP Singles",
		column: 5,
	},
	{
		name: "[Gen 4] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286279/">DPP Ubers</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['AG'],
	},
	{
		name: "[Gen 4] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3532624/">DPP UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3503638/">DPP UU Viability Rankings</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['[Gen 4] OU', 'Baton Pass Clause'],
		banlist: ['OU', 'UUBL'],
		unbanlist: ['Arena Trap', 'Sand Veil', 'Baton Pass'],
	},
	{
		name: "[Gen 4] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3583742/">DPP NU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3512254/">DPP NU Viability Rankings</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['[Gen 4] UU'],
		banlist: ['UU', 'NUBL'],
	},
	{
		name: "[Gen 4] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/7260264/">DPP PU</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['[Gen 4] NU'],
		banlist: [
			'Articuno', 'Cacturne', 'Charizard', 'Cradily', 'Dodrio', 'Drifblim', 'Dusclops', 'Electrode',
			'Floatzel', 'Gardevoir', 'Gligar', 'Golem', 'Grumpig', 'Haunter', 'Hitmonchan', 'Hypno', 'Jumpluff',
			'Jynx', 'Lickilicky', 'Linoone', 'Magmortar', 'Magneton', 'Manectric', 'Medicham', 'Meganium', 'Nidoqueen',
			'Ninetales', 'Piloswine', 'Poliwrath', 'Porygon2', 'Regice', 'Regirock', 'Roselia', 'Sandslash',
			'Sharpedo', 'Shiftry', 'Skuntank', 'Slowking', 'Tauros', 'Typhlosion', 'Venomoth', 'Vileplume',
		],
	},
	{
		name: "[Gen 4] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dp/articles/little_cup_guide">DPP LC Guide</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7336500/">DPP LC Viability Rankings</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['Standard', 'Little Cup', 'Sleep Moves Clause'],
		banlist: [
			'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma',
			'Berry Juice', 'Deep Sea Tooth', 'Dragon Rage', 'Sonic Boom', 'Swagger',
		],
	},
	{
		name: "[Gen 4] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031457/">DPP 1v1</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['[Gen 4] OU', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview'],
		banlist: ['Latias', 'Porygon-Z', 'Snorlax', 'Focus Sash', 'Destiny Bond', 'Explosion', 'Perish Song', 'Self-Destruct'],
		unbanlist: ['Wobbuffet', 'Wynaut', 'Sand Veil'],
	},
	{
		name: "[Gen 4] Anything Goes",

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Obtainable', 'Arceus EV Limit', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 4] Custom Game",

		mod: 'gen4',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions
		ruleset: ['Cancel Mod'],
	},

	// DPP Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "DPP Doubles",
		column: 5,
	},
	{
		name: "[Gen 4] Doubles OU",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3618411/">DPP Doubles</a>`],

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 4] OU'],
		banlist: ['Explosion'],
		unbanlist: ['Garchomp', 'Latias', 'Latios', 'Manaphy', 'Mew', 'Salamence', 'Wobbuffet', 'Wynaut'],
	},
	{
		name: "[Gen 4] Doubles Custom Game",

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions
		ruleset: ['Cancel Mod'],
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Generations",
		column: 5,
	},
	{
		name: "[Gen 3] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286280/">ADV Ubers</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Wobbuffet + Leftovers'],
	},
	{
		name: "[Gen 3] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031456/">ADV 1v1</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['[Gen 3] OU', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview'],
		banlist: ['Slaking', 'Snorlax', 'Suicune', 'Destiny Bond', 'Explosion', 'Ingrain', 'Perish Song', 'Self-Destruct'],
	},
	{
		name: "[Gen 3] Custom Game",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 3] Doubles Custom Game",

		mod: 'gen3',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 2] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286282/">GSC Ubers</a>`,
		],

		mod: 'gen2',
		searchShow: false,
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 2] UU",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3576710/">GSC UU</a>`],

		mod: 'gen2',
		searchShow: false,
		ruleset: ['[Gen 2] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 2] NU",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3642565/">GSC NU</a>`],

		mod: 'gen2',
		searchShow: false,
		ruleset: ['[Gen 2] UU'],
		banlist: ['UU', 'NUBL'],
	},
	{
		name: "[Gen 2] Custom Game",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286283/">RBY Ubers</a>`,
		],

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 1] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3573896/">RBY UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3647713/">RBY UU Viability Rankings</a>`,
		],

		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 1] OU (Tradeback)",
		desc: `RBY OU with movepool additions from the Time Capsule.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/articles/rby-tradebacks-ou">RBY Tradebacks OU</a>`,
		],

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Obtainable', 'Allow Tradeback', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod'],
		banlist: ['Uber',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Stadium OU",

		mod: 'stadium',
		searchShow: false,
		ruleset: ['Standard', 'Team Preview'],
		banlist: ['Uber',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Custom Game",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod'],
	},

	// ROM Hacks
	///////////////////////////////////////////////////////////////////

	{
		section: "ROM Hacks",
	},
	{
		name: "[Gen 3] Emerald Kaizo",
		desc: `A ROM hack of Pokemon Emerald with vastly increased difficulty`,
		threads: [
		],

		mod: 'emeraldkaizo',
		ruleset: ['Standard'],
	},

	// Hardcore Nuzlocke
	///////////////////////////////////////////////////////////////////

	{
		section: "Hardcore Nuzlocke",
	},
	{
		name: "[Gen 4] Platinum to Fantina",
		desc: `Only valid Nuzlocke encounters and items until Fantina with a level cap of 26`,
		mod: 'gen4',
        maxLevel: 26,
		ruleset: ['Standard'],
        banlist: ['Alakazam', 'Steelix', 'Gengar', 'Dragon Rage', 'Rotom-Fan', 'Rotom-Frost', 'Rotom-Heat', 'Rotom-Mow', 'Rotom-Wash', 'Confuse Ray'],
		onValidateTeam(team) {
            let data = {
                TwinleafTown: [['Magikarp', 3], ['Gyarados', 3]],
                Route201: [['Turtwig', 5], ['Grotle', 5], ['Chimchar', 5], ['Monferno', 5], ['Piplup', 5], ['Prinplup', 5]],
                LakeVerity: [['Starly', 2], ['Staravia', 2], ['Bidoof', 2], ['Bibarel', 2], ['Magikarp', 3], ['Gyarados', 3]],
                Route219: [['Magikarp', 3], ['Gyarados', 3]],
                Route202: [['Starly', 2], ['Staravia', 2], ['Bidoof', 2], ['Bibarel', 2], ['Kricketot', 3], ['Kricketune', 3], ['Shinx', 3], ['Luxio', 3]],
                Route218: [['Magikarp', 3], ['Gyarados', 3]],
                Route204: [['Zubat', 3], ['Golbat', 3], ['Crobat', 3], ['Wurmple', 4], ['Silcoon', 4], ['Beautifly', 4], ['Cascoon', 4], ['Dustox', 4],
                           ['Starly', 4], ['Staravia', 4], ['Bidoof', 4], ['Bibarel', 4], ['Kricketot', 3], ['Kricketune', 3], ['Shinx', 4], ['Luxio', 4],
                           ['Budew', 3], ['Roselia', 3]],
                RavagedPath: [['Zubat', 3], ['Golbat', 3], ['Crobat', 3], ['Psyduck', 4], ['Magikarp', 3], ['Gyarados', 3]],
                Route203: [['Zubat', 4], ['Golbat', 4], ['Crobat', 4], ['Abra', 4], ['Kadabra', 4], ['Starly', 4], ['Staravia', 4], ['Bidoof', 4],
                           ['Bibarel', 4], ['Kricketot', 4], ['Kricketune', 4], ['Shinx', 4], ['Luxio', 4], ['Magikarp', 3], ['Gyarados', 3]],
                OreburghGate: [['Zubat', 5], ['Golbat', 10], ['Crobat', 10], ['Psyduck', 5], ['Geodude', 5], ['Graveler', 5], ['Magikarp', 3], ['Gyarados', 3]],
                Route207: [['Zubat', 5], ['Golbat', 5], ['Crobat', 5], ['Machop', 5], ['Abra', 5], ['Kadabra', 5], ['Geodude', 5], ['Graveler', 5],
                           ['Ponyta', 5], ['Kricketot', 5], ['Kricketune', 5], ['Aipom', 5], ['Heracross', 5], ['Wurmple', 5], ['Silcoon', 5], ['Beautifly', 5],
                           ['Cascoon', 5], ['Dustox', 5], ['Burmy-Trash', 5], ['Burmy-Sandy', 5], ['Burmy', 5], ['Wormadam', 5], ['Wormadam-Trash', 5], ['Wormadam-Sandy', 5], ['Mothim', 5], ['Combee', 5],
                           ['Vespiquen', 5], ['Cherubi', 5], ['Cherrim', 5], ['Munchlax', 5]],
                OreburghMine: [['Zubat', 5], ['Golbat', 5], ['Crobat', 5], ['Geodude', 4], ['Graveler', 4], ['Onix', 6]],
                FloaromaMeadow: [['Aipom', 5], ['Heracross', 5], ['Wurmple', 5], ['Silcoon', 5], ['Beautifly', 5], ['Cascoon', 5], ['Dustox', 5], ['Burmy-Trash', 5], ['Burmy-Sandy', 5], ['Burmy', 5], ['Wormadam', 5],
                                 ['Wormadam-Trash', 5], ['Wormadam-Sandy', 5], 
                                 ['Mothim', 5], ['Combee', 5], ['Vespiquen', 5], ['Cherubi', 5], ['Cherrim', 5], ['Munchlax', 5]],
                Route205: [['Bidoof', 10], ['Bibarel', 10], ['Pachirisu', 9], ['Buizel', 10], ['Floatzel', 10], ['Chatot', 10], ['Shellos', 9], ['Magikarp', 3], ['Gyarados', 3],
                           ['Hoothoot', 12], ['Noctowl', 12], ['Wurmple', 5], ['Silcoon', 5], ['Beautifly', 5], ['Cascoon', 5], ['Dustox', 5], ['Kricketot', 12], ['Kricketune', 12],
                           ['Budew', 12], ['Roselia', 12], ['Aipom', 5], ['Heracross', 5], ['Burmy-Trash', 5], ['Burmy-Sandy', 5], ['Burmy', 5], ['Wormadam', 5], ['Mothim', 5], ['Combee', 5], ['Vespiquen', 5], ['Cherubi', 5],
                           ['Wormadam-Trash', 5], ['Wormadam-Sandy', 5], 
                           ['Cherrim', 5], ['Munchlax', 5]],
                ValleyWindworks: [['Shinx', 10], ['Luxio', 10], ['Pachirisu', 9], ['Buizel', 9], ['Floatzel', 9], ['Chatot', 9], ['Shellos', 9], ['Magikarp', 3], ['Gyarados', 3],
                                  ['Drifloon', 15], ['Aipom', 5], ['Heracross', 5], ['Wurmple', 5], ['Silcoon', 5], ['Beautifly', 5], ['Cascoon', 5], ['Dustox', 5], ['Burmy-Trash', 5], ['Burmy-Sandy', 5], ['Burmy', 5],
                                  ['Wormadam', 5], ['Wormadam-Trash', 5], ['Wormadam-Sandy', 5], ['Mothim', 5], ['Combee', 5], ['Vespiquen', 5], ['Cherubi', 5], ['Cherrim', 5], ['Munchlax', 5]],
                EternaForest: [['Gastly', 13], ['Haunter', 13], ['Hoothoot', 12], ['Noctowl', 12], ['Wurmple', 5], ['Silcoon', 5], ['Beautifly', 5], ['Cascoon', 5], ['Dustox', 5],
                               ['Bidoof', 12], ['Bibarel', 12], ['Kricketot', 10], ['Kricketune', 10], ['Budew', 10], ['Roselia', 10], ['Buneary', 11], ['Lopunny', 11], ['Aipom', 5],
                               ['Heracross', 5], ['Burmy-Trash', 5], ['Burmy-Sandy', 5], ['Burmy', 5], ['Wormadam', 5], ['Wormadam-Trash', 5], ['Wormadam-Sandy', 5], ['Mothim', 5], ['Combee', 5], ['Vespiquen', 5], ['Cherubi', 5],
                               ['Cherrim', 5], ['Munchlax', 5]],
                EternaCity: [['Magikarp', 3], ['Gyarados', 3], ['Togepi', 1], ['Togetic', 1]],
                Route211: [['Zubat', 14], ['Golbat', 14], ['Crobat', 14], ['Machop', 14], ['Abra', 14], ['Kadabra', 14], ['Hoothoot', 15], ['Noctowl', 15], ['Meditite', 13],
                           ['Bidoof', 14], ['Bibarel', 14], ['Chingling', 14], ['Chimecho', 14], ['Bronzor', 14]],
                MtCoronet: [['Zubat', 14], ['Golbat', 14], ['Crobat', 14], ['Machop', 16], ['Abra', 16], ['Kadabra', 16], ['Geodude', 13], ['Graveler', 13], ['Cleffa', 13],
                            ['Clefairy', 17], ['Clefable', 17], ['Nosepass', 14], ['Probopass', 14], ['Meditite', 14], ['Chingling', 13], ['Chimecho', 13], ['Bronzor', 14],
                            ['Magikarp', 3], ['Gyarados', 3]],
                OldChateau: [['Gastly', 14], ['Haunter', 14], ['Rotom', 20]],
                Route206: [['Zubat', 17], ['Golbat', 17], ['Crobat', 17], ['Machop', 17], ['Abra', 17], ['Kadabra', 17], ['Geodude', 16], ['Graveler', 16], ['Ponyta', 16],
                           ['Gligar', 16], ['Kricketune', 17], ['Aipom', 5], ['Heracross', 5], ['Wurmple', 5], ['Silcoon', 5], ['Beautifly', 5], ['Cascoon', 5], ['Dustox', 5],
                           ['Burmy-Trash', 5], ['Burmy-Sandy', 5], ['Burmy', 5], ['Wormadam-Trash', 5], ['Wormadam-Sandy', 5], ['Wormadam', 5], ['Mothim', 5], ['Combee', 5], ['Vespiquen', 5], ['Cherubi', 5], ['Cherrim', 5], ['Munchlax', 5]],
                WaywardCave: [['Zubat', 17], ['Golbat', 17], ['Crobat', 17], ['Geodude', 17], ['Graveler', 17], ['Onix', 18], ['Bronzor', 18], ['Gible', 17], ['Gabite', 17]],
                Route208: [['Zubat', 19], ['Golbat', 19], ['Crobat', 19], ['Ralts', 17], ['Kirlia', 17], ['Budew', 18], ['Roselia', 19], ['Bidoof', 18], ['Bibarel', 18],
                           ['Magikarp', 3], ['Gyarados', 3], ['Aipom', 5], ['Heracross', 5], ['Wurmple', 5], ['Silcoon', 5], ['Beautifly', 5], ['Cascoon', 5], ['Dustox', 5],
                           ['Burmy-Trash', 5], ['Burmy-Sandy', 5], ['Burmy', 5], ['Wormadam-Trash', 5], ['Wormadam-Sandy', 5], ['Wormadam', 5], ['Mothim', 5], ['Combee', 5], ['Vespiquen', 5], ['Cherubi', 5], ['Cherrim', 5], ['Munchlax', 5]],
                HearthomeCity: [['Eevee', 20], ['Vaporeon', 20], ['Jolteon', 20], ['Flareon', 20], ['Espeon', 20], ['Umbreon', 20], ['Leafeon', 20]],
                OreburghCity: [['Cranidos', 20], ['Shieldon', 20]]
            };

            function getRoutesForPokemon(pokemon, data) {
                let routeList = [];
                for (let route in data) {
                    let encounters = data[route];
                    encounters.forEach( (encounter) => {
                        if (pokemon === encounter[0]) {
                            routeList.push(route);
                        }
                    });
                }
                return routeList;
            }

            function validEncounters(pokemonList, routeData) {
                // Deal with one pokemon from the list, and the rest will be handled by recursion.
                let pokemon = pokemonList[0];

                let routes = getRoutesForPokemon(pokemon, routeData);
                if (routes.length === 0) {
                    // Always return a list of tuples (in this case, an empty list)
                    return [];
                }
                else if (pokemonList.length === 1) {
                    // We're at a tail call, where there is only one pokemon left.
                    return [[pokemon, routes[0]]];
                }
                else {
                    // We need to check validity of everything else for each possible route that this Pokemon can come from.
                    for (let i = 0; i < routes.length; i++ ) {
                        let route = routes[ i ];

                        // Make a copy of route data without the route we choose for this Pokemon.
                        let routeDataCopy = {};
                        for (let entry in routeData) {
                            if (entry !== route) {
                                routeDataCopy[entry] = routeData[entry];
                            }
                        }
                        // Recurse with data minus this Pokemon and its chosen route.
                        let result = validEncounters(pokemonList.slice(1), routeDataCopy);

                        // If at least one of the configurations returned are valid, then this current pairing is valid.
                        if (result.length >= 1) {
                            // Combine the current pairing with the returned configurations.
                            return result.concat([[pokemon, route]])
                        }
                    }

                    // If none of the configurations returned are valid, then this current pairing is not valid either.
                    return [];
                }

                // Should never get here.
                console.log("There's a bug in the recursion!");
                return [];
            }

            let pokemonList = [];
			for (const set of team) {
                pokemonList.push(this.dex.getSpecies(set.species).baseSpecies);
            }

            let result = validEncounters(pokemonList, data);
            if (result.length === 6) {
                //console.log('Final team:');
                //console.log(result);
            }
            else {
                console.log('Team not valid!');
                return ['Your team is not valid according to Nuzlocke encounter rules!'];
            }

            let availableTMs = [
                ['bulletseed', 1],
                ['taunt', 1],
                ['earthquake', 1],
                ['return', 1],
                ['brickbreak', 1],
                ['doubleteam', 1],
                ['rocktomb', 1],
                ['secretpower', 1],
                ['attract', 1],
                ['thief', 1],
                ['recycle', 1],
                ['flash', 1],
                ['stealthrock', 1],
                ['captivate', 1],
                ['sleeptalk', 1],
                ['grassknot', 1],
                ['pluck', 1],
                ['substitute', 1],
                ['cut', 0],
                ['rocksmash', 0]
            ];

            let availableItems = [
                ['Draco Plate', 0],
                ['Dread Plate', 0],
                ['Earth Plate', 0],
                ['Fist Plate', 0],
                ['Flame Plate', 0],
                ['Icicle Plate', 0],
                ['Insect Plate', 0],
                ['Iron Plate', 0],
                ['Meadow Plate', 0],
                ['Mind Plate', 0],
                ['Sky Plate', 0],
                ['Splash Plate', 0],
                ['Spooky Plate', 0],
                ['Stone Plate', 0],
                ['Toxic Plate', 0],
                ['Zap Plate', 0],
                ['Damp Rock', 0],
                ['Grip Claw', 1],
                ['Hard Stone', 0],
                ['Heat Rock', 0],
                ['Icy Rock', 0],
                ['Iron Ball', 0],
                ['King\'s Rock', 0],
                ['Leftovers', 0],
                ['Light Clay', 0],
                ['Metal Coat', 0],
                ['Metronome', 0],
                ['Miracle Seed', 0],
                ['Poison Barb', 0],
                ['Quick Claw', 1],
                ['Shed Shell', 0],
                ['Shell Bell', 1],
                ['Silver Powder', 1],
                ['Smooth Rock', 0],
                ['Twisted Spoon', 0],
                ['Cheri Berry', 0],
                ['Chesto Berry', 0],
                ['Pecha Berry', 0],
                ['Rawst Berry', 0],
                ['Aspear Berry', 0],
                ['Leppa Berry', 0],
                ['Oran Berry', 0],
                ['Persim Berry', 0],
                ['Lum Berry', 0],
                ['Sitrus Berry', 0],
                ['Figy Berry', 0],
                ['Wiki Berry', 0],
                ['Mago Berry', 0],
                ['Aguav Berry', 0],
                ['Iapapa Berry', 0],
                ['Haban Berry', 0],
                ['Shuca Berry', 0],
                ['Wacan Berry', 0],
                ['Yache Berry', 0],
                ['', 0],
            ];

            // Now validate the move sets
			for (const set of team) {
                let species = this.dex.getSpecies(set.species).baseSpecies;
                let route = result.filter( encounter => encounter[0] === species )[0][1];
                let minLevel = data[route].filter( encounter => encounter[0] === species )[0][1];

                let validMoves = [];
                let validTMs = [];
                let speciesId = this.dex.getSpecies(set.species).id;
                let lsetData = this.dex.getLearnsetData(speciesId);
                let originalLsetData = lsetData;

                // Moves
                for (let move in lsetData.learnset) {
                    lsetData.learnset[move].forEach( (value) => {
                        if (value.startsWith('4L')) {
                            let level = Number(value.slice(2));
                            if (level <= 26) {
                                validMoves.push([move, level]);
                            }
                        }
                    } );
                }

                // Remove pre-encounter moves (must be done before pre-evo moves)
                validMoves.sort((e1, e2) => e1[1] - e2[1]);
                // Find the index of the earliest valid move based on encounter minimum level
                let i;
                for (i = 0 ; i < validMoves.length; i++) {
                    if (validMoves[i][1] >= minLevel) {
                        break;
                    }
                }
                let start = Math.max(0, i - 4);
                validMoves = validMoves.slice(start);

                // Now do pre-evolution moves
                let current = species;
                let prevo = this.dex.getSpecies(current).prevo;
                while (prevo.length > 0) {
                    speciesId = this.dex.getSpecies(prevo).id;
                    lsetData = this.dex.getLearnsetData(speciesId);
                    for (let move in lsetData.learnset) {
                        lsetData.learnset[move].forEach( (value) => {
                            if (value.startsWith('4L')) {
                                let level = Number(value.slice(2));
                                if (level <= 26) {
                                    validMoves.push([move, level]);
                                }
                            }
                        } );
                    }
                    current = prevo;
                    prevo = this.dex.getSpecies(current).prevo;
                }

                // TMs
                for (let move in originalLsetData.learnset) {
                    originalLsetData.learnset[move].forEach( (value) => {
                        if (value.startsWith('4M')) {
                            validTMs.push(move);
                        }
                    } );
                }

                // Special cases
                if ("Gyarados" === species) {
                    validMoves = validMoves.filter(m => m[0] !== 'thrash');
                }
                if ("Noctowl" === species) {
                    validMoves = validMoves.filter(m => m[0] !== 'skyattack');
                }
                if ("Togetic" === species) {
                    validMoves = validMoves.filter(m => m[0] !== 'magicalleaf');
                }
                if ("Kadabra" === species) {
                    validMoves = validMoves.filter(m => m[0] !== 'kinesis');
                }
                if ("Leafeon" === species) {
                    validMoves = validMoves.filter(m => m[0] !== 'razorleaf');
                }
                if ("Glaceon" === species) {
                    validMoves = validMoves.filter(m => m[0] !== 'icywind');
                }
                if ("Jolteon" === species) {
                    validMoves = validMoves.filter(m => m[0] !== 'thundershock');
                }
                if ("Vaporeon" === species) {
                    validMoves = validMoves.filter(m => m[0] !== 'watergun');
                }
                if ("Flareon" === species) {
                    validMoves = validMoves.filter(m => m[0] !== 'ember');
                }
                if ("Espeon" === species) {
                    validMoves = validMoves.filter(m => m[0] !== 'confusion');
                }
                if ("Umbreon" === species) {
                    validMoves = validMoves.filter(m => m[0] !== 'pursuit');
                }
                if ("Heracross" === species) {
                    validMoves = validMoves.filter(m => m[0] !== 'nightslash');
                }
                if ("Crobat" === species) {
                    validMoves = validMoves.filter(m => m[0] !== 'crosspoison');
                }
                if ("Haunter" === species) {
                    validMoves = validMoves.filter(m => m[0] !== 'hypnosis');
                }
                if ("Vespiquen" === species) {
                    validMoves = validMoves.filter(m => m[0] !== 'poisonsting');
                    validMoves = validMoves.filter(m => m[0] !== 'furycutter');
                    validMoves = validMoves.filter(m => m[0] !== 'defendorder');
                    validMoves = validMoves.filter(m => m[0] !== 'pursuit');
                    validMoves = validMoves.filter(m => m[0] !== 'furyswipes');
                }

                if ("Magikarp" !== species &&
                    "Combee" !== species &&
                    "Kricketot" !== species &&
                    "Abra" !== species ) {
                    if (set.moves.length < 4) {
                        return [species + ' must have four moves'];
                    }
                }

                // Exclusions
                if ("Floatzel" === species) {
                    if (result.find(e => e[0] === 'Drifloon')) {
                        if (set.moves.find(m => m === 'growl')) {
                            return ["Floatzel can't learn Growl if not encountered at Valley Windworks"];
                        }
                    }
                }
                if ("Clefairy" === species) {
                    if (set.moves.find(m => m === 'magicalleaf') &&
                        ( set.moves.find(m => m === 'doubleslap') ||
                          set.moves.find(m => m === 'defensecurl') )
                        ) {
                        return ['Clefairy cannot know Magical Leaf and Doubleslap/Defense Curl'];
                    }
                    if (set.moves.find(m => m === 'doubleslap') &&
                        ( set.moves.find(m => m === 'encore') ||
                          set.moves.find(m => m === 'sweetkiss') ||
                          set.moves.find(m => m === 'copycat') )
                        ) {
                        return ['Clefairy cannot know Doubleslap and Encore/Sweet Kiss/Copycat'];
                    }
                    if (set.moves.find(m => m === 'defensecurl') &&
                        ( set.moves.find(m => m === 'encore') ||
                          set.moves.find(m => m === 'sweetkiss') ||
                          set.moves.find(m => m === 'copycat') )
                        ) {
                        return ['Clefairy cannot know Defense Curl and Encore/Sweet Kiss/Copycat'];
                    }
                }
                if ("Clefable" === species) {
                    if (set.moves.find(m => m === 'doubleslap') &&
                        ( set.moves.find(m => m === 'encore') ||
                          set.moves.find(m => m === 'sweetkiss') ||
                          set.moves.find(m => m === 'copycat') ||
                          set.moves.find(m => m === 'magicalleaf') )
                        ) {
                        return ['Clefable cannot know Doubleslap and Encore/Sweet Kiss/Copycat/Magical Leaf'];
                    }
                    if (set.moves.find(m => m === 'defensecurl') &&
                        ( set.moves.find(m => m === 'encore') ||
                          set.moves.find(m => m === 'sweetkiss') ||
                          set.moves.find(m => m === 'copycat') ||
                          set.moves.find(m => m === 'magicalleaf') )
                        ) {
                        return ['Clefable cannot know Defense Curl and Encore/Sweet Kiss/Copycat/Magical Leaf'];
                    }
                }
                if ("Dustox" === species) {
                    if (set.moves.find(m => m === 'bugbite') &&
                        ( set.moves.find(m => m === 'harden') ||
                          set.moves.find(m => m === 'confusion') ||
                          set.moves.find(m => m === 'gust') )
                        ) {
                        return ['Dustox cannot know Bug Bite and Harden/Confusion/Gust'];
                    }
                }
                if ("Beautifly" === species) {
                    if (set.moves.find(m => m === 'bugbite') &&
                        ( set.moves.find(m => m === 'harden') ||
                          set.moves.find(m => m === 'absorb') ||
                          set.moves.find(m => m === 'gust') )
                        ) {
                        return ['Beautifly cannot know Bug Bite and Harden/Absorb/Gust'];
                    }
                }
                if ("Golbat" === species || "Crobat" === species) {
                    if (set.moves.find(m => m === 'screech') &&
                        set.moves.find(m => m === 'aircutter') ) {
                        return [species + ' cannot know Screech and Air Cutter'];
                    }
                }
                if ("Silcoon" === species || "Cascoon" === species) {
                    if (set.moves.find(m => m === 'bugbite') &&
                        set.moves.find(m => m === 'harden') ) {
                        return [species + ' cannot know Bug Bite and Harden'];
                    }
                }
                if ("Kricketune" === species) {
                    if (set.moves.find(m => m === 'bugbite') &&
                        set.moves.find(m => m === 'furycutter') ) {
                        return ['Kricketune cannot know Bug Bite and Fury Cutter'];
                    }
                    if (set.moves.find(m => m === 'bugbite') &&
                        set.moves.find(m => m === 'leechlife') ) {
                        return ['Kricketune cannot know Bug Bite and Leech Life'];
                    }
                }
                if ("Roselia" === species) {
                    if (set.moves.find(m => m === 'poisonsting') &&
                        set.moves.find(m => m === 'worryseed') ) {
                        return ['Roselia cannot know Poison String and Worry Seed'];
                    }
                }
                if ("Bibarel" === species) {
                    if (set.moves.find(m => m === 'watergun') &&
                        set.moves.find(m => m === 'yawn') ) {
                        return ['Bibarel cannot know Water Gun and Yawn'];
                    }
                }
                if ("Monferno" === species) {
                    if (set.moves.find(m => m === 'machpunch') &&
                        set.moves.find(m => m === 'torment') ) {
                        return ['Monferno cannot know Mach Punch and Torment'];
                    }
                    if (set.moves.find(m => m === 'machpunch') &&
                        set.moves.find(m => m === 'nastyplot') ) {
                        return ['Monferno cannot know Mach Punch and Nasty Plot'];
                    }
                }
                if ("Prinplup" === species) {
                    if (set.moves.find(m => m === 'metalclaw') &&
                        set.moves.find(m => m === 'furyattack') ) {
                        return ['Prinplup cannot know Metal Claw and Fury Attack'];
                    }
                }
                if ("Haunter" === species) {
                    if (set.moves.find(m => m === 'shadowpunch') &&
                        set.moves.find(m => m === 'payback') ) {
                        return ['Haunter cannot know Shadow Punch and Payback'];
                    }
                }

                // Hidden Power
                if (validMoves.find(m => m[0] === 'hiddenpower')) {
                    validMoves.push(['hiddenpowerfire', 1]);
                    validMoves.push(['hiddenpowerwater', 1]);
                    validMoves.push(['hiddenpowergrass', 1]);
                    validMoves.push(['hiddenpowerelectric', 1]);
                    validMoves.push(['hiddenpowerice', 1]);
                    validMoves.push(['hiddenpowerfighting', 1]);
                    validMoves.push(['hiddenpowerpoison', 1]);
                    validMoves.push(['hiddenpowerground', 1]);
                    validMoves.push(['hiddenpowerflying', 1]);
                    validMoves.push(['hiddenpowerpsychic', 1]);
                    validMoves.push(['hiddenpowerbug', 1]);
                    validMoves.push(['hiddenpowerrock', 1]);
                    validMoves.push(['hiddenpowerghost', 1]);
                    validMoves.push(['hiddenpowerdark', 1]);
                    validMoves.push(['hiddenpowerdragon', 1]);
                    validMoves.push(['hiddenpowersteel', 1]);
                }
                if (validTMs.find(m => m === 'hiddenpower')) {
                    validTMs.push(['hiddenpowerfire', 1]);
                    validTMs.push(['hiddenpowerwater', 1]);
                    validTMs.push(['hiddenpowergrass', 1]);
                    validTMs.push(['hiddenpowerelectric', 1]);
                    validTMs.push(['hiddenpowerice', 1]);
                    validTMs.push(['hiddenpowerfighting', 1]);
                    validTMs.push(['hiddenpowerpoison', 1]);
                    validTMs.push(['hiddenpowerground', 1]);
                    validTMs.push(['hiddenpowerflying', 1]);
                    validTMs.push(['hiddenpowerpsychic', 1]);
                    validTMs.push(['hiddenpowerbug', 1]);
                    validTMs.push(['hiddenpowerrock', 1]);
                    validTMs.push(['hiddenpowerghost', 1]);
                    validTMs.push(['hiddenpowerdark', 1]);
                    validTMs.push(['hiddenpowerdragon', 1]);
                    validTMs.push(['hiddenpowersteel', 1]);
                }

                //console.log(species + ' ' + validMoves);

                for (const move of set.moves) {
                    if (!validMoves.find(e => e[0] === move) && !validTMs.find(e => e === move)) {
                        return [species + ' cannot learn ' + move + ' in this rule set'];
                    }
                    if (validMoves.find(e => e[0] === move) && validTMs.find(e => e === move)) {
                        validTMs = validTMs.filter(i => i !== move);
                    }
                }

                // Validate TMs
                for (const move of set.moves) {
                    if (validTMs.find(e => e === move)) {
                        // This move is a TM
                        let match = availableTMs.find(e => e[0] === move);
                        if (match) {
                            // Found an available TM
                            if (match[1] > 0) {
                                // Decrement or remove entirely
                                if (match[1] > 1 ) {
                                    for (var tm in availableTMs) {
                                        if (tm[0] === match[0]) {
                                            tm[1] = tm[1] - 1;
                                        }
                                    }
                                }
                                else {
                                    // Only one left, so use it up
                                    availableTMs = availableTMs.filter(i => i[0] !== match[0]);
                                }
                            }
                            else {
                                // Infinite TM, nothing to do
                            }
                        }
                        else {
                            return [species + ' cannot have TM/HM ' + move + ' (none available)'];
                        }
                    }
                }

                // Validate items
                const item = this.dex.getItem(set.item).name;
                let match = availableItems.find(e => e[0] === item);
                if (match) {
                    // Found an available TM
                    if (match[1] > 0) {
                        // Decrement or remove entirely
                        if (match[1] > 1 ) {
                            for (var item_ in availableItems) {
                                if (item_[0] === match[0]) {
                                    item_[1] = item_[1] - 1;
                                }
                            }
                        }
                        else {
                            // Only one left, so use it up
                            availableItems = availableItems.filter(i => i[0] !== match[0]);
                        }
                    }
                    else {
                        // Infinite item, nothing to do
                    }
                }
                else {
                    return [species + ' cannot have held item ' + item + ' (none available)'];
                }
            }

            // Nuzlocke Species Clause
			const speciesTable: Set<number> = new Set();
			for (const set of team) {
				const species = this.dex.getSpecies(set.species);
				if (speciesTable.has(species.baseSpecies)) {
					return [`You are limited to one of each Pokémon evolution line.`];
				}
				speciesTable.add(species.baseSpecies);
                if (species.prevo.length > 0) {
                    speciesTable.add(species.prevo);
                }
                if (null != species.evo) {
                    for (const evo of species.evo) {
                        speciesTable.add(evo);
                    }
                }
			}
        },
	},
];
