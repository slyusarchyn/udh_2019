export class Loader {
    constructor(id) {
        this.id = id;
    }

    showLoader() {
        document.getElementById(this.id).style.display = 'block';
    }

    hideLoader() {
        document.getElementById(this.id).style.display = 'none';
    }
}
