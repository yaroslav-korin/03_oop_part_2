import { Pages } from '../Pages';

type Pageable = new (...args: any[]) => { pages: Pages; };

export function PagesIterableMixin<TBase extends Pageable>(Base: TBase) {
    abstract class PagesIterableMixinClass extends Base {
        private _nextIdx = 0;
        private _pagesLastIdx = this.pages.length - 1;

        public next() {
            if (this._nextIdx === this._pagesLastIdx) {
                return { value: `${this.toString()}, ${this.pages.getPageByIndex(this._pagesLastIdx).toString()}`,  done: true };
            } else {
                return {
                    value: `${this.toString()}, ${this.pages.getPageByIndex(this._nextIdx++).toString()}`,
                    done: false,
                };
            }
        }

        [Symbol.iterator]() {
            return this;
        }
    }

    return PagesIterableMixinClass;
}
