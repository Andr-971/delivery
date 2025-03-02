import React from "react";
import Link from "next/link";
import { fetchDeliveries } from "../api/deliveries";
import CustomSelect from "../components/CustomSelect/CustomSelect";
import TitleH1 from "../components/TitleH1/TitleH1";

export default async function Home({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const headerTableText = [
        "Номер",
        "Статус",
        "Дата создания",
        "Откуда",
        "Куда",
        "Действия",
    ];
    const statusFilter = (searchParams.status as string) || "";
    const page = parseInt(searchParams.page as string) || 1;

    const { deliveries, totalPages } = await fetchDeliveries(
        page,
        statusFilter,
    );

    return (
        <div className="g-container">
            <TitleH1 title="Список доставок"></TitleH1>
            <CustomSelect />

            <div className="table-holder">
                <table className="table">
                    <thead className="table__header">
                        <tr className="table__header_box">
                            {headerTableText.map((el) => {
                                return (
                                    <th className="table__title" key={el}>
                                        {el}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody className="table__body">
                        {deliveries.map((delivery) => (
                            <tr
                                key={delivery.entity.uuid}
                                className="table__body_string"
                            >
                                <td className="table__item" aria-label="Номер">
                                    {delivery.entity.cdek_number}
                                </td>
                                <td className="table__item" aria-label="Статус">
                                    {
                                        delivery.statuses[
                                            delivery.statuses.length - 1
                                        ]?.name
                                    }
                                </td>
                                <td
                                    className="table__item"
                                    aria-label="Дата создания"
                                >
                                    {new Date(
                                        delivery.statuses[0].date_time,
                                    ).toLocaleDateString()}
                                </td>
                                <td className="table__item" aria-label="Откуда">
                                    {delivery.from_location.city}
                                </td>
                                <td className="table__item" aria-label="Куда">
                                    {delivery.to_location.city}
                                </td>
                                <td
                                    className="table__item"
                                    aria-label="Действия"
                                >
                                    <Link
                                        href={`/deliveries/${delivery.entity.uuid}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        Подробнее
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <Link
                        key={i + 1}
                        href={`?page=${i + 1}&status=${statusFilter}`}
                        className={`pagination__link ${
                            page === i + 1 ? "slateGrey text-white" : "white"
                        }`}
                    >
                        <button
                            className={`pagination__btn ${
                                page === i + 1
                                    ? "slateGrey text-white"
                                    : "white"
                            }`}
                        >
                            {i + 1}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
}
