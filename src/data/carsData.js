// export const carsData = {
// 	brands: [
// 		"Alfa Romeo",
// 		"Audi",
// 		"BMW",
// 		"Citroen",
// 		"Dacia",
// 		"Honda",
// 		"Lamborhgini",
// 		"Skoda",
// 		"Nissan",
// 		"Toyota",
// 		"Subaru",
// 		"Volkswagen",
// 		"Peugeot",
// 		"Reanult",
// 		"Ford",
// 		"Chevrolet",
// 		"Mercedes",
// 		"Opel",
// 		"Fiat",
// 		"Porsche",
// 		"Seat",
// 		"Maserati",
// 	],
// };

export const allCarsData = [
	{ brand: "Alfa Romeo", models: ["Gulia", "159", "Mito"] },
	{
		brand: "Audi",
		models: [
			"A3",
			"A4",
			"A5",
			"A6",
			"A7",
			"TT",
			"RS3",
			"S3",
			"S4",
			"S5",
			"RS7",
			"RS5",
			"RS4",
		],
	},
	{
		brand: "BMW",
		models: ["Seria 3", "M3", "M4", "M5", "Seria 4", "Seria 5", "X3"],
	},
	{ brand: "Citroen", models: ["C1", "C2", "C3", "C4"] },
	{ brand: "Dacia", models: ["Duster", "Logan"] },
	{ brand: "Honda", models: ["Civic", "Jazz", "Accord"] },
	{ brand: "Lamborghini", models: ["Aventador", "Huracan", "Murcielago"] },
	{ brand: "Skoda", models: ["City", "Octavia", "Fabia", "Felicia"] },
	{ brand: "Nissan", models: ["GT-R", "Juke", "Qashqai", "350z", "370z"] },
	{
		brand: "Toyota",
		models: ["Yaris", "Corrolla", "Supra", "Aygo", "Prius", "Auris"],
	},
	{ brand: "Subaru", models: ["Impreza", "Forester", "BRZ"] },
	{
		brand: "Volkswagen",
		models: [
			"Golf",
			"Passat",
			"Arteon",
			"Bora",
			"Polo",
			"Sharan",
			"Fox",
			"Touran",
		],
	},
	{
		brand: "Peugeot",
		models: ["206", "207", "208", "307", "2008", "308", "508"],
	},
	{
		brand: "Reanult",
		models: [
			"Megane",
			"Clio",
			"Laguna",
			"Arkana",
			"Espace",
			"Kadjar",
			"Kangoo",
			"Scenic",
		],
	},
	{
		brand: "Ford",
		models: [
			"Mustang",
			"Fiest",
			"Focus",
			"Ka",
			"Kuga",
			"Mondeo",
			"F150",
			"Puma",
		],
	},
	{ brand: "Chevrolet", models: ["Camaro", "Aveo", "Corvette", "Matiz"] },
	{
		brand: "Mercedes",
		models: [
			"Klasa A",
			"Klasa B",
			"Klasa C",
			"Klasa E",
			"Klasa G",
			"CLA",
			"CLS",
		],
	},
	{
		brand: "Opel",
		models: [
			"Adam",
			"Corsa",
			"Astra",
			"Vectra",
			"Insignia",
			"Mokka",
			"Grandland X",
			"Grandland",
			"Zafira",
			"Vivaro",
		],
	},
	{
		brand: "Fiat",
		models: [
			"Seicento",
			"Punto",
			"Panda",
			"Punto Evo",
			"126p",
			"125p",
			"500",
			"500L",
			"Cinquecento",
			"Ducato",
			"Doblo",
			"Grande Punto",
			"Stilo",
			"Uno",
		],
	},
	{
		brand: "Porsche",
		models: ["911", "Boxer", "Cayenne", "Cayman", "Macan", "Taycan", ""],
	},
	{ brand: "Seat", models: ["Leon", "Ibiza", "Altea", "Arona", "Toledo"] },
	{
		brand: "Maserati",
		models: [
			"GranTurismo",
			"Ghibli",
			"Quattroporte",
			"Levante",
			"MC20",
			"Coupe",
		],
	},
];

export const brandsArr = allCarsData.map((car) => car.brand);

export const carsBodyType = [
	"Sedan",
	"Coupe",
	"Hatchback",
	"Kombi",
	"Auta miejskie",
	"Kabriolet",
	"Minivan",
	"SUV",
	"Bus",
];

export const fuelTypeArr = [
	"Benzyna",
	"Benzyna + LPG",
	"Diesel",
	"Elektryczny",
	"Hybryda",
];

export const yearArr = [
	...Array.from({ length: 34 }, (_, i) => 2023 - i),
	1980,
	1970,
	1950,
];

export const pricesArr = [
	1000, 2000, 3000, 5000, 10000, 15000, 20000, 25000, 30000, 40000, 50000,
	60000, 70000, 80000, 90000, 100000, 200000, 300000, 500000, 1000000, 5000000,
];

export const mileageArr = [
	10000, 30000, 50000, 75000, 100000, 125000, 150000, 175000, 200000, 250000,
	300000, 500000, 1000000,
];
