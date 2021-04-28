import { Page } from './Page';

export class Pages {
    private readonly pages: Page[];

    constructor(pages: Page[]) {
        this.pages = pages;
    }

    get length(): number {
        return this.pages.length;
    }

    getPageByIndex(idx: number): Page {
        return this.pages[idx];
    }

}
