import { VariationData } from './variation-data';

export class Variation {
    constructor (
        absent_at_location_ids: string[],
        id: string,
        is_deleted: boolean,
        item_variation_data: VariationData[],
        present_at_all_locations: boolean,
        present_at_location_ids: string[],
        type: string,
        updated_at: string,
        version: number
    ) { }
}
