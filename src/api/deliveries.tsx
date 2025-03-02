
import { Delivery } from "../types/delivery";
import mockData from "../../mockData";

const ITEMS_PER_PAGE = 10;

export async function fetchDeliveries(page: number = 1, statusFilter: string = "",): Promise<{ deliveries: Delivery[]; totalPages: number }> {
    // 👇 В реальном приложении заменить на fetch к API
    const filtered = mockData.filter((delivery) => {
        return (
            !statusFilter ||
            delivery.statuses[delivery.statuses.length - 1].code ===
                statusFilter
        );
    });
    // 👇 Формирум индексы для страниц
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    return {
        deliveries: filtered.slice(start, end),
        totalPages: Math.ceil(filtered.length / ITEMS_PER_PAGE),
    };
}
// 👇 Детальная страница
export async function fetchDeliveryDetails(id: string): Promise<Delivery> {
    // 👇 В реальном приложении заменить на fetch к API
    return mockData.find((d) => d.entity.uuid === id)!;
}
