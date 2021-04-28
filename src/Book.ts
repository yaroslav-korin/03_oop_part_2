import { Pages } from './Pages';
import { Item } from './Item';
import { PagesIterableMixin } from './helpers/PagesIterableMixin';

class Book extends Item {
    private readonly title: string;
    private readonly author: string;
    public pages: Pages;

    constructor(title: string, author: string, pages: Pages) {
        super();
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.length}`;
    }
}

export default PagesIterableMixin(Book);
