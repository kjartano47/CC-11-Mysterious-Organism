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
	return {
		specimenNum: num,
		dna: arr,
		mutate() {
			console.log("Specimen has begun mutating...");
			//picking a random dna base location
			randIndex = Math.floor(Math.random() * this.dna.length);
			console.log("mutation on base: " + randIndex);
			//create a new base
			let newBase = returnRandBase();
			while (newBase === this.dna[randIndex]) {
				newBase = returnRandBase();
			}
			//assigning newBase to the random location
			console.log(
				"Mutation has occurred at: " +
					randIndex +
					" with the base: " +
					newBase
			);
			this.dna[randIndex] = newBase;

			return this.dna;
		},
		compareDNA(pAequor) {
			//pass in an object not an arr
			let match = 0;
			for (let i = 0; i < pAequor.dna.length; i++) {
				if (this.dna[i] === pAequor.dna[i]) {
					match++;
					console.log("Match!");
				}
			}
			console.log(
				" The percentage of DNA specimen: #" +
					pAequor.specimenNum +
					" and #" +
					this.specimenNum +
					" have in common is " +
					((match / pAequor.dna.length) * 100).toFixed() +
					"%"
			);
		},
		willLikelySurvive() {
			let goodBase = 0;
			let baseSize = this.dna.length;
			for (let i = 0; i < this.dna.length; i++) {
				if (this.dna[i] === "C" || this.dna[i] === "G") {
					goodBase++;
				}
			}
			console.log("baseSize is : " + baseSize);
			console.log("goodBase is : " + goodBase);
			console.log(((goodBase / baseSize) * 100).toFixed());
			return ((goodBase / baseSize) * 100).toFixed() >= 60 ? true : false;
		},
	};
};

let num1 = 1;
let testArr = [
	"C",
	"G",
	"G",
	"T",
	"G",
	"G",
	"G",
	"T",
	"G",
	"G",
	"T",
	"T",
	"T",
	"T",
	"C",
];

let counter = 0;
let pAequorArray = [];
while (counter <= 30) {
	let contenderStrand = pAequorFactory(counter, mockUpStrand());

	if (contenderStrand.willLikelySurvive()) {
		pAequorArray.push(contenderStrand);
		counter++;
	}
}
console.log(pAequorArray);
