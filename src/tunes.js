import {make} from './ui';
// import sliderIcon from './svg/slider.svg';
// import galleryIcon from './svg/gallery.svg';

const sliderIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 -960 960 960" width="24"><path d="M363.077-406.154h373.844L612.769-569.23l-95.078 121.539-62.769-77.693-91.845 119.23Zm-40.769 146.153q-30.308 0-51.307-21-21-21-21-51.308v-455.382q0-30.308 21-51.308 20.999-21 51.307-21h455.383q30.307 0 51.307 21 21 21 21 51.308v455.382q0 30.308-21 51.308t-51.307 21H322.308Zm0-59.999h455.383q4.615 0 8.462-3.846 3.846-3.847 3.846-8.463v-455.382q0-4.616-3.846-8.463-3.847-3.846-8.462-3.846H322.308q-4.616 0-8.462 3.846-3.847 3.847-3.847 8.463v455.382q0 4.616 3.847 8.463 3.846 3.846 8.462 3.846ZM182.309-120.003q-30.307 0-51.307-21-21-21-21-51.307v-515.381h59.999v515.381q0 4.616 3.846 8.462 3.847 3.847 8.462 3.847h515.382v59.998H182.309ZM309.999-800v480-480Z"/></svg>';
const galleryIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 -960 960 960"><path d="M142.309-220.001q-29.826 0-51.067-21.241-21.24-21.24-21.24-51.067v-375.382q0-29.827 21.24-51.067 21.241-21.241 51.067-21.241h375.383q29.827 0 51.067 21.241 21.24 21.24 21.24 51.067v375.382q0 29.827-21.24 51.067-21.24 21.241-51.067 21.241H142.309ZM706.343-520q-15.652 0-25.998-10.346-10.346-10.346-10.346-25.998v-147.311q0-15.651 10.346-25.997 10.346-10.347 25.998-10.347h147.311q15.652 0 25.998 10.347 10.346 10.346 10.346 25.997v147.311q0 15.652-10.346 25.998Q869.306-520 853.654-520H706.343Zm23.655-59.999h100.001V-680H729.998v100.001ZM142.309-280h375.383q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847v-375.382q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H142.309q-5.385 0-8.846 3.462-3.462 3.462-3.462 8.847v375.382q0 5.385 3.462 8.847 3.461 3.462 8.846 3.462Zm31.538-81.923h312.307l-101.153-135-75 100-55-73-81.154 108Zm532.496 141.922q-15.652 0-25.998-10.347-10.346-10.346-10.346-25.997v-147.311q0-15.652 10.346-25.998Q690.691-440 706.343-440h147.311q15.652 0 25.998 10.346 10.346 10.346 10.346 25.998v147.311q0 15.651-10.346 25.997-10.346 10.347-25.998 10.347H706.343ZM729.998-280h100.001v-100.001H729.998V-280Zm-599.997 0v-400 400Zm599.997-299.999V-680v100.001Zm0 299.999v-100.001V-280Z"/></svg>';


/**
 * Working with Block Tunes
 */
export default class Tunes {
    /**
     * @param {object} tune - image tool Tunes managers
     * @param {object} tune.api - Editor API
     * @param {object} tune.actions - list of user defined tunes
     * @param {Function} tune.onChange - tune toggling callback
     */
    constructor({api, actions, onChange}) {
        this.api = api;
        this.actions = actions;
        this.onChange = onChange;
        this.buttons = [];
    }

    /**
     * Available Image tunes
     *
     * @returns {{name: string, icon: string, title: string}[]}
     */
    static get tunes() {
        return [
            {
                name: 'slider',
                icon: sliderIcon,
                title: 'Slider',
            },
            {
                name: 'gallery',
                icon: galleryIcon,
                title: 'Gallery',
            }
        ]
    }

    /**
     * Styles
     *
     * @returns {{wrapper: string, buttonBase: *, button: string, buttonActive: *}}
     */
    get CSS() {
        return {
            wrapper: 'image-gallery__tune-wrapper',
            buttonBase: this.api.styles.button,
            button: 'image-gallery__tune',
            buttonActive: 'active',
        };
    }

    /**
     * Makes buttons with tunes: add background, add border, stretch image
     *
     * @param {MakerGalleryData} toolData - generate Elements of tunes
     * @returns {Element}
     */
    render(toolData) {
        const wrapper = make('div', this.CSS.wrapper);

        this.buttons = [];

        const tunes = Tunes.tunes.concat(this.actions);

        tunes.forEach(tune => {
            const title = this.api.i18n.t(tune.title);
            const el = make('div', [this.CSS.buttonBase, this.CSS.button], {
                innerHTML: tune.icon,
                title,
            });

            el.addEventListener('click', () => {
                this.tuneClicked(tune.name, tune.action);
            });

            el.dataset.tune = tune.name;
            el.classList.toggle(this.CSS.buttonActive, toolData.style === tune.name);

            this.buttons.push(el);

            this.api.tooltip.onHover(el, title, {
                placement: 'top',
            });

            // wrapper.appendChild(el); // Disable the tunes
        });

        return wrapper;
    }

    /**
     * Clicks to one of the tunes
     *
     * @param {string} tuneName - clicked tune name
     * @param {Function} customFunction - function to execute on click
     */
    tuneClicked(tuneName, customFunction) {
        if (typeof customFunction === 'function') {
            if (!customFunction(tuneName)) {
                return false;
            }
        }

        this.buttons.forEach(button => {
            button.classList.toggle(this.CSS.buttonActive, button.dataset.tune === tuneName);
        });

        this.onChange(tuneName);
    }

    handelTitle(tuneName) {
        const galleryTuneName = document.querySelector('.image-gallery__tune-name');
        const sliderTuneName = document.querySelector('.image-slider__tune-name');

        if (tuneName === 'gallery') {
            galleryTuneName.style.display = 'block';
            sliderTuneName.style.display = 'none';
        } else {
            galleryTuneName.style.display = 'none';
            sliderTuneName.style.display = 'block';
        }
    }
}
