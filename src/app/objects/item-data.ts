import { Variation } from './variation';

export class ItemData {
    constructor (
        public description: string,
        public name: string,
        public product_type: string,
        public skip_modifier_screen: boolean,
        public tax_ids: string[],
        public variations: Variation[]
    ) { }
}
