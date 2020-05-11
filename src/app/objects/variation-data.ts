import { PriceMoney } from './price-money';

export class VariationData {
    constructor (
        item_id: string,
        name: string,
        ordinal: number,
        price_money: PriceMoney,
        pricing_type: string,
        sku: string
    ) { }
}
