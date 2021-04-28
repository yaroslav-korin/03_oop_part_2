import { Pages } from './Pages';
import { Item } from './Item';
import { PagesIterableMixin } from './helpers/PagesIterableMixin';

class Magazine extends Item {
    private _title: string;
    public pages: Pages;

    constructor(title: string, pages: Pages) {
        super();
        this._title = title;
        this.pages = pages;
    }

    get title(): string {
        return this._title;
    }

    set setTitle(title: string) {
        this._title = title;
    }

    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.length}`;
    }
}

export default PagesIterableMixin(Magazine);
