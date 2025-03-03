import React from "react";
import type { Metadata } from "next";
import { fetchDeliveryDetails } from "../../../api/deliveries";
import Link from "next/link";
import TitleH1 from "../../../components/TitleH1/TitleH1";

export const metadata: Metadata = {
    title: "Подробно о доставке",
    description: "Подробно о доставке",
};

export default async function DeliveryDetails({
    params,
}: {
    params: { id: string };
    }) {
    const delivery = await fetchDeliveryDetails(params.id);
    return (
        <div className="g-container">
            <div className="delivery-block">
                <Link href="/" className="delivery-btn">
                    ← Назад к списку
                </Link>
            </div>
            <TitleH1
                title={`Доставка #${delivery.entity.cdek_number}`}
            ></TitleH1>
            <div className="delivery-card">
                {/* Основная информация */}
                <div className="delivery__section basic-information">
                    <h2 className="title__h2">Основная информация</h2>
                    <div className="delivery__holder">
                        <div className="delivery__name">Статус:</div>
                        <div className="delivery__result">
                            {delivery.statuses.slice(-1)[0].name}
                        </div>
                    </div>
                    <div className="delivery__holder">
                        <div className="delivery__name">Комментарий: </div>
                        <div className="delivery__result">
                            {delivery.entity.comment || "—"}
                        </div>
                    </div>
                    <div className="delivery__holder">
                        <div className="delivery__name">Дата создания:</div>
                        <div className="delivery__result">
                            {new Date(
                                delivery.statuses[0].date_time,
                            ).toLocaleString()}
                        </div>
                    </div>
                    <div className="delivery__holder">
                        <div className="delivery__name">Отправитель:</div>
                        <div className="delivery__result">
                            {delivery.sender.company}
                        </div>
                    </div>
                    <div className="delivery__holder">
                        <div className="delivery__name">
                            Представитель отправителя:
                        </div>
                        <div className="delivery__result">
                            {delivery.sender.name}
                        </div>
                    </div>
                    <div className="delivery__holder">
                        <div className="delivery__name">Продавец:</div>
                        <div className="delivery__result">
                            {delivery.seller.name}
                        </div>
                    </div>
                    <div className="delivery__holder">
                        <div className="delivery__name">Получатель:</div>
                        <div className="delivery__result">
                            {delivery.recipient.company}
                        </div>
                    </div>
                    <div className="delivery__holder">
                        <div className="delivery__name">
                            Представитель получателя:
                        </div>
                        <div className="delivery__result">
                            {delivery.recipient.name}
                        </div>
                    </div>
                    <div className="delivery__holder">
                        <div className="delivery__name">Номера телефонов:</div>
                        <div className="delivery__result">
                            {delivery.recipient.phones.map((el) => {
                                return <span>{el.number} </span>;
                            })}
                        </div>
                    </div>
                </div>

                {/* Адреса */}
                <div className="delivery__section addresses">
                    <h2 className="title__h2">Адреса</h2>
                    <div className="delivery__holder">
                        <div className="delivery__name">Откуда, город:</div>
                        <div className="delivery__result">
                            {delivery.from_location.city}
                        </div>
                    </div>
                    <div className="delivery__holder">
                        <div className="delivery__name">Откуда, страна:</div>
                        <div className="delivery__result">
                            {delivery.from_location.country}
                        </div>
                    </div>
                    <div className="delivery__holder">
                        <div className="delivery__name">Откуда, регион:</div>
                        <div className="delivery__result">
                            {delivery.from_location.region}
                        </div>
                    </div>
                    <div className="delivery__holder">
                        <div className="delivery__name">
                            Откуда, полный адрес:
                        </div>
                        <div className="delivery__result">
                            {delivery.from_location.address}
                        </div>
                    </div>
                    <div className="delivery__holder">
                        <div className="delivery__name">Куда, город:</div>
                        <div className="delivery__result">
                            {delivery.to_location.city}
                        </div>
                    </div>
                    <div className="delivery__holder">
                        <div className="delivery__name">Куда, страна</div>
                        <div className="delivery__result">
                            {delivery.to_location.country}
                        </div>
                    </div>
                    <div className="delivery__holder">
                        <div className="delivery__name">Куда, регион</div>
                        <div className="delivery__result">
                            {delivery.to_location.region}
                        </div>
                    </div>

                    <div className="delivery__holder">
                        <div className="delivery__name">
                            Куда, полный адрес:
                        </div>
                        <div className="delivery__result">
                            {delivery.to_location.address}
                        </div>
                    </div>
                </div>

                {/* История статусов */}
                <div className="delivery__section status-history">
                    <h2 className="title__h2">История статусов</h2>
                    <div className="space-y-2">
                        {delivery.statuses.map((status) => (
                            <div
                                className="delivery__holder"
                                key={status.date_time}
                            >
                                <div className="delivery__name">
                                    {status.name}
                                </div>
                                <div className="delivery__result">
                                    {new Date(
                                        status.date_time,
                                    ).toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
