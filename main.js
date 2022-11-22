// Returns a random DNA base
const returnRandBase = () => {
	const dnaBases = ["A", "T", "C", "G"];
	return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
	const newStrand = [];
	for (let i = 0; i < 15; i++) {
		newStrand.push(returnRandBase());
	}
	return newStrand;
};

const pAequorFactory = (num, arr) => {
	const newSpecimen = {
		specimenNum: num,
		dna: arr,
		mutate() {
			console.log("Hello1");
			return (mutatedBase = this.dna[Math.floor(Math.random() * 4)]);
		},
	};
	console.log("Hello2");
	return newSpecimen;
};

console.log(pAequorFactory(1, mockUpStrand()));
console.log(pAequorFactory.dna);
pAequorFactory(1, mockUpStrand().mutate);
