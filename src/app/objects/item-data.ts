import { Variation } from './variation';

export class ItemData {
    constructor (
        description: string,
        name: string,
        product_type: string,
        skip_modifier_screen: boolean,
        tax_ids: string[],
        variations: Variation[]
    ) { }
}
