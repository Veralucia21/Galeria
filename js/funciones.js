const miniaturas = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const rutasImg = [];
const flechas = document.querySelectorAll(".modal button");
let imgActual = 0;



miniaturas.forEach((miniatura,i) => {
	rutasImg.push(miniatura.getAttribute("href"));
	miniatura.addEventListener("click", evento => {
		evento.preventDefault();
		imgActual = i;
		imgModal.setAttribute("src", rutasImg[imgActual]);
		modal.classList.add("visible");		
	});
});

modal.addEventListener("click", ()=> {
	modal.classList.remove("visible");
});

flechas.forEach((flecha, i) => {
	flecha.addEventListener("click", (evento) => {
		evento.stopPropagation();
		if(i==0){
			imgActual = imgActual > 0 ? imgActual - 1 : rutasImg.length - 1;
		}else{
			imgActual = imgActual < rutasImg.length - 1 ? imgActual + 1 : 0;
		}
		imgModal.setAttribute("src",rutasImg[imgActual]);
	});
});





