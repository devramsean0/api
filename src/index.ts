// Packages
import fetch from 'node-fetch';
// Animal
export async function AnimalApi(image: boolean, animal: string) {
	const Animal = animal.toLowerCase();
	if (image == true) {
		if (Animal == 'dog') {
			const response = await fetch('https://some-random-api.ml/img/dog');
			const data = await response.json();
			return data.link;
		} else if (Animal == 'cat') {
			const response = await fetch('https://some-random-api.ml/img/cat');
			const data = await response.json();
			return data.link;
		} else if (Animal == 'panda') {
			const response = await fetch('https://some-random-api.ml/img/panda');
			const data = await response.json();
			return data.link;
		} else if (Animal == 'bird') {
			const response = await fetch('https://some-random-api.ml/img/birb');
			const data = await response.json();
			return data.link;
		} else if (Animal == 'fox') {
			const response = await fetch('https://some-random-api.ml/img/fox');
			const data = await response.json();
			return data.link;
		} else if (Animal == 'koala') {
			const response = await fetch('https://some-random-api.ml/img/koala');
			const data = await response.json();
			return data.link;
		} else {
			return '[ERROR[Somehow you have a incorrect animal]';
		}
	} else {
		return `MAJOR ERROR`;
	}
}
