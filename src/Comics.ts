import { Pages } from './Pages';
import { Item } from './Item';
import { PagesIterableMixin } from './helpers/PagesIterableMixin';

class Comics extends Item {
    private _title: string;
    private _author: string;
    private _artist: string;
    public pages: Pages;

    constructor(title: string, author: string, artist: string, pages: Pages) {
        super();
        this._title = title;
        this._author = author;
        this._artist = artist;
        this.pages = pages;
    }

    get title(): string {
        return this._title;
    }

    set setTitle(title: string) {
        this._title = title;
    }
    get author(): string {
        return this._author;
    }
    set setAuthor(author: string) {
        this._author= author;
    }
    get artist(): string {
        return this._artist;
    }

    set setArtist(artist: string) {
        this._artist = artist;
    }

    toString(): string {
        return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.length}`;
    }
}

export default PagesIterableMixin(Comics);
