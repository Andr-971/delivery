interface Payment {
    value: number;
    vat_sum: number;
}
interface Item {
    name: string;
    ware_key: string;
    payment: Payment;
    weight: number;
    weight_gross: number;
    amount: number;
    delivery_amount: number;
    return_item_detail: Record<string, unknown>;
    excise: boolean;
    cost: number;
}
interface Package {
    number: string;
    barcode: string;
    weight: number;
    length: number;
    width: number;
    weight_volume: number;
    weight_calc: number;
    height: number;
    comment: string;
    items: Item[];
    package_id: string;
}
interface Status {
    code: string;
    name: string;
    date_time: string;
    city: string;
}
interface Error {
    code: string;
    message: string;
}
interface Request {
    request_uuid: string;
    type: string;
    date_time: string;
    state: string;
    errors?: Error[];
}
interface Location {
    code: number;
    city_uuid: string;
    city: string;
    country_code: string;
    country: string;
    region: string;
    region_code: number;
    longitude: number;
    latitude: number;
    address: string;
    postal_code: string;
}
interface Service {
    code: string;
    parameter: string;
    sum: number;
    total_sum: number;
    discount_percent: number;
    discount_sum: number;
    vat_rate: number;
    vat_sum: number;
}
interface DeliveryDetail {
    delivery_sum: number;
    total_sum: number;
    payment_info: any[]; // Можно уточнить тип, если известна структура
    delivery_vat_rate: number;
    delivery_vat_sum: number;
    delivery_discount_percent: number;
    delivery_discount_sum: number;
}
interface Entity {
    uuid: string;
    type: number;
    is_return: boolean;
    is_reverse: boolean;
    cdek_number: string;
    number: string;
    tariff_code: number;
    comment: string;
    shipment_point: string;
    delivery_point: string;
    items_cost_currency: string;
    recipient_currency: string;
    delivery_recipient_cost: Record<string, unknown>;
}
interface Sender {
    company: string;
    name: string;
    contragent_type: string;
    passport_requirements_satisfied: boolean;
}
interface Seller {
    name: string;
}
interface Recipient {
    company: string;
    name: string;
    phones: { number: string }[];
    passport_requirements_satisfied: boolean;
}
export interface Delivery {
    entity: Entity;
    sender: Sender;
    seller: Seller;
    recipient: Recipient;
    from_location: Location;
    to_location: Location;
    services: Service;
    packages: Package[];
    statuses: Status[];
    is_client_return: boolean;
    delivery_mode: string;
    delivery_detail: DeliveryDetail;
    calls: Record<string, unknown>;
    requests: Request[];
    related_entities: any[];
}


