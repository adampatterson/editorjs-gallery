import Sortable from 'sortablejs';

// import buttonIcon from './svg/button-icon.svg';
const buttonIcon = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"/></svg>'
// import trashIcon from './svg/trash.svg';
const trashIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>'
/**
 * Class for working with UI:
 *  - rendering base structure
 *  - show/hide preview
 *  - apply tune view
 */
export default class Ui {
    /**
     * @param {object} ui - image tool Ui module
     * @param {object} ui.api - Editor.js API
     * @param {ImageConfig} ui.config - user config
     * @param {Function} ui.onSelectFile - callback for clicks on Select file button
     * @param {boolean} ui.readOnly - read-only mode flag
     */
    constructor({api, config, onSelectFile, onDeleteFile, onMoveFile, readOnly}) {
        this.api = api;
        this.config = config;
        this.onSelectFile = onSelectFile;
        this.onDeleteFile = onDeleteFile;
        this.onMoveFile = onMoveFile;
        this.readOnly = readOnly;
        this.nodes = {
            wrapper: make('div', [this.CSS.baseClass, this.CSS.wrapper]),
            fileButton: this.createFileButton(),
            container: make('div', this.CSS.container),
            itemsContainer: make('div', this.CSS.itemsContainer),
            controls: make('div', this.CSS.controls),
            preloaderContainer: make('div', this.CSS.preloaderContainer),
            caption: make('div', [this.CSS.input, this.CSS.caption], {
                contentEditable: !this.readOnly,
            }),
            blockTitle: this.createTitle(),
            // galleryTitle: this.createGalleryTitle(),
            // sliderTitle: this.createSliderTitle()
        };

        /**
         * Create base structure
         *  <wrapper>
         *    <blockTitle />
         *    <container>
         *      <items-container>
         *        <image-container />
         *      </items-container>
         *      <controls>
         *        <preloader-container />
         *        <limit-counter />
         *        <select-file-button />
         *      </controls>
         *    </container>
         *    <caption />
         *  </wrapper>
         */
        this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;

        this.nodes.controls.appendChild(this.nodes.preloaderContainer);
        if (this.config.maxElementCount) {
            this.nodes.limitCounter = make('div', this.CSS.limitCounter);
            this.nodes.controls.appendChild(this.nodes.limitCounter);
        }
        this.nodes.controls.appendChild(this.nodes.fileButton);

        this.nodes.container.appendChild(this.nodes.itemsContainer);
        this.nodes.container.appendChild(this.nodes.controls);

        this.nodes.wrapper.appendChild(this.nodes.blockTitle);
        this.nodes.wrapper.appendChild(this.nodes.container);
        this.nodes.wrapper.appendChild(this.nodes.caption);

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            this.nodes.itemsContainer.addEventListener(eventName, function (e) {
                e.preventDefault();
                e.stopPropagation();
            }, false);
        });
    }

    /**
     * CSS classes
     *
     * @returns {object}
     */
    get CSS() {
        return {
            baseClass: this.api.styles.block,
            loading: this.api.styles.loader,
            input: this.api.styles.input,
            button: this.api.styles.button,

            /**
             * Tool's classes
             */
            wrapper: 'image-gallery',
            container: 'image-gallery__container',
            controls: 'image-gallery__controls',
            itemsContainer: 'image-gallery__items',
            imageContainer: 'image-gallery__image',
            preloaderContainer: 'image-gallery__preloaders',
            imagePreloader: 'image-gallery__preloader',
            imageEl: 'image-gallery__image-picture',
            trashButton: 'image-gallery__image-trash',
            caption: 'image-gallery__caption',
            blockTitle: 'image-gallery__title',
            tuneGalleryName: 'image-gallery__tune-name',
            tuneSliderName: 'image-slider__tune-name'
        };
    };

    /**
     * Ui statuses:
     * - empty
     * - uploading
     * - filled
     *
     * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}
     */
    static get status() {
        return {
            EMPTY: 'empty',
            UPLOADING: 'loading',
            FILLED: 'filled',
        };
    }

    /**
     * Renders tool UI
     *
     * @param {MakerGalleryData} toolData - saved tool data
     * @returns {Element}
     */
    render(toolData) {
        return this.nodes.wrapper;
    }

    onRendered() {
        if (!this.sortable) {
            this.sortable = new Sortable(this.nodes.itemsContainer, {
                handle: `.${this.CSS.imageContainer}`,
                filter: `.${this.CSS.trashButton}`,
                onStart: () => {
                    this.nodes.itemsContainer.classList.add(`${this.CSS.itemsContainer}--drag`);
                },
                onEnd: (evt) => {
                    this.nodes.itemsContainer.classList.remove(`${this.CSS.itemsContainer}--drag`);

                    if (evt.oldIndex !== evt.newIndex) {
                        this.onMoveFile(evt.oldIndex, evt.newIndex);
                    }
                }
            });
        }
    }

    createTitle() {
        const title = make('h4', [this.CSS.blockTitle]);

        title.innerHTML = this.config.blockTitle;

        return title;
    }


    /**
     * Creates upload-file button
     *
     * @returns {Element}
     */
    createFileButton() {
        const button = make('div', [this.CSS.button]);

        button.innerHTML = this.config.buttonContent || `${buttonIcon} ${this.api.i18n.t('Select an Image')}`;

        button.addEventListener('click', () => {
            this.onSelectFile();
        });

        return button;
    }

    /**
     * Shows uploading button
     *
     * @returns {void}
     */
    showFileButton() {
        this.nodes.fileButton.style.display = '';
    }

    /**
     * Hide uploading button
     *
     * @returns {void}
     */
    hideFileButton() {
        this.nodes.fileButton.style.display = 'none';
    }

    getPreloader(file) {
        /**
         * @type {HTMLElement}
         */
        let preloader = make('div', this.CSS.imagePreloader);

        this.nodes.preloaderContainer.append(preloader);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            preloader.style.backgroundImage = `url(${e.target.result})`;
        };

        return preloader;
    }

    removePreloader(preloader) {
        preloader.remove();
    }

    /**
     * Shows an image
     *
     * @param {MakerGalleryDataFile} file - image file object
     * @returns {void}
     */
    appendImage(file) {
        let url = file.url;

        /**
         * Check for a source extension to compose element correctly: video tag for mp4, img — for others
         */
        const tag = /\.mp4$/.test(url) ? 'VIDEO' : 'IMG';

        const attributes = {
            src: url
        };

        /**
         * We use eventName variable because IMG and VIDEO tags have different event to be called on source load
         * - IMG: load
         * - VIDEO: loadeddata
         *
         * @type {string}
         */
        let eventName = 'load';

        /**
         * Update attributes and eventName if source is a mp4 video
         */
        if (tag === 'VIDEO') {
            /**
             * Add attributes for playing muted mp4 as a gif
             *
             * @type {boolean}
             */
            attributes.autoplay = false;
            attributes.muted = true;
            attributes.playsinline = true;

            /**
             * Change event to be listened
             *
             * @type {string}
             */
            eventName = 'loadeddata';
        }

        /**
         * @type {Element}
         */
        let imageContainer = make('div', [this.CSS.imageContainer]);

        /**
         * Compose tag with defined attributes
         *
         * @type {Element}
         */
        let imageEl = make(tag, this.CSS.imageEl, attributes);

        /**
         * Add load event listener
         */
        imageEl.addEventListener(eventName, () => {
            this.toggleStatus(imageContainer, Ui.status.FILLED);
        });

        imageContainer.appendChild(imageEl);

        const title = this.api.i18n.t('Delete');

        /**
         * @type {Element}
         */
        let imageTrash = make('div', [this.CSS.trashButton], {
            innerHTML: trashIcon,
            title,
        });

        this.api.tooltip.onHover(imageTrash, title, {
            placement: 'top',
        });

        imageTrash.addEventListener('click', () => {
            this.api.tooltip.hide();

            let arrayChild = Array.prototype.slice.call(this.nodes.itemsContainer.children);
            let elIndex = arrayChild.indexOf(imageContainer);

            if (elIndex !== -1) {
                this.nodes.itemsContainer.removeChild(imageContainer);

                this.onDeleteFile(elIndex);
            }
        });

        imageContainer.appendChild(imageTrash);

        this.nodes.itemsContainer.append(imageContainer);
    }

    /**
     * Shows caption input
     *
     * @param {string} text - caption text
     * @returns {void}
     */
    fillCaption(text) {
        if (this.nodes.caption) {
            this.nodes.caption.innerHTML = text;
        }
    }

    /**
     * Changes UI status
     *
     * @param {Element} elem
     * @param {string} status - see {@link Ui.status} constants
     * @returns {void}
     */
    toggleStatus(elem, status) {
        for (const statusType in Ui.status) {
            if (Object.prototype.hasOwnProperty.call(Ui.status, statusType)) {
                elem.classList.toggle(`${this.CSS.imageContainer}--${Ui.status[statusType]}`, status === Ui.status[statusType]);
            }
        }
    }

    /**
     * @param {int} imageCount
     * @param {int|null} limitCounter
     * @returns {void}
     */
    updateLimitCounter(imageCount, limitCounter) {
        if (limitCounter && this.nodes.limitCounter) {
            if (imageCount === 0) {
                this.nodes.limitCounter.style.display = 'none';
            } else {
                this.nodes.limitCounter.style.display = null;
                this.nodes.limitCounter.innerText = `${imageCount} / ${limitCounter}`;
            }
        }
    }
}

/**
 * Helper for making Elements with attributes
 *
 * @param  {string} tagName           - new Element tag name
 * @param  {Array|string} classNames  - list or name of CSS class
 * @param  {object} attributes        - any attributes
 * @returns {Element}
 */
export const make = function make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
        el.classList.add(...classNames);
    } else if (classNames) {
        el.classList.add(classNames);
    }

    for (const attrName in attributes) {
        el[attrName] = attributes[attrName];
    }

    return el;
};
