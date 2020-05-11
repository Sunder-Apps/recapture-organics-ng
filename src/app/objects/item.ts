import { ItemData } from './item-data';

export class Item {
    constructor (
        public absent_at_location_ids: string[],
        public id: string,
        public is_deleted: boolean,
        public item_data: ItemData,
        public present_at_all_locations: boolean,
        public present_at_location_ids: string[],
        public type: string,
        public updated_at: string,
        public version: number
    ) { }
}
