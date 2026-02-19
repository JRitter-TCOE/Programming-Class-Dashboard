export default class Slider {
    constructor(ref=null) {
        this.slides = [];
        this.offset = 0;
        this.html = $(`<div class="slider"></div>`);

        if (ref) {
            for (const s in ref) {
                this.addSlide(ref[s]);
            }
            this.displaySlides();
        }
    }

    addSlides(objList) {
        for (let obj of objList) {
            this.addSlide(obj);
        }
    }

    addSlide(obj) {
        const slide = $('<div class="slide"></div>');
        slide.append($(`<img src="${obj.img}">`));
        slide.append($(`<p>${obj.title}</p>`));
        const link = $(`<a target="_blank" href="${obj.link}"></a>`).append(slide);
        this.slides.push(link);
    }

    displaySlides() {
        this.html.html = '';
        this.html.append(this.slides);
    }
}