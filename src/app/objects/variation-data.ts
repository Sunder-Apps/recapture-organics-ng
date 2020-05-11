import { PriceMoney } from './price-money';

export class VariationData {
    constructor (
        public item_id: string,
        public name: string,
        public ordinal: number,
        public price_money: PriceMoney,
        public pricing_type: string,
        public sku: string
    ) { }
}
