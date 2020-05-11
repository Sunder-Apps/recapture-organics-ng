import { VariationData } from './variation-data';

export class Variation {
    constructor (
        public absent_at_location_ids: string[],
        public id: string,
        public is_deleted: boolean,
        public item_variation_data: VariationData[],
        public present_at_all_locations: boolean,
        public present_at_location_ids: string[],
        public type: string,
        public updated_at: string,
        public version: number,
        public quantity: number = 0
    ) { }
}
