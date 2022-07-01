const da = document.querySelector('.da');

da.addEventListener('click', daAnswer);
const da__da = document.querySelector('.da__da');
const da__da2 = document.querySelector('.da__da2');
const da__da3 = document.querySelector('.da__da3');

function daAnswer() {
	// alert('Вот и славно!')
	vopros.textContent = 'Отлично, спасибо за честный ответ!';
	net.style.display = 'none';
	net2.style.display = 'none';
	net3.style.display = 'none';
	da.style.display = 'none';
	da__da.style.display = 'block';
	setTimeout(function () {
		da__da2.style.display = 'block';
	}, 1000)
	setTimeout(function () {
		da__da3.style.display = 'block';
	}, 2000)

}

const vopros = document.querySelector('.vopros');

const net = document.querySelector('.net');
const net2 = document.querySelector('.net2');
const net3 = document.querySelector('.net3');

net.addEventListener('click', netAnswer);

function netAnswer() {
	net.style.display = 'none';
	vopros.textContent = 'Давай подумаем ЕЩЕ раз...';
	net2.style.display = 'block'
}

net2.addEventListener('click', netAnswer2);

function netAnswer2() {
	net2.style.display = 'none';
	vopros.textContent = 'Давай подумаем ЕЩЕ раз...';
	net3.style.display = 'block'
}

net3.addEventListener('click', netAnswer3);

function netAnswer3() {
	net3.style.display = 'none';
	vopros.textContent = 'Давай подумаем ЕЩЕ раз...';
	net.style.display = 'block'
}