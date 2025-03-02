export default [
    {
        entity: {
            uuid: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe0", // id
            type: 1,
            is_return: false,
            is_reverse: false,
            cdek_number: "10084985780", // Номер
            number: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe5",
            tariff_code: 137,
            comment: "Твой коментарий-1", // Коментарий
            shipment_point: "LFG1",
            delivery_point: "LFG1",
            items_cost_currency: "RUB",
            recipient_currency: "RUB",
            delivery_recipient_cost: {},
        },
        sender: {
            // отправитель
            company: 'ООО "Рога и копыта-1"',
            name: "Иван Иванов-1",
            contragent_type: "LEGAL_ENTITY",
            passport_requirements_satisfied: false,
        },
        seller: {
            // продавец
            name: "Петр Петрович-1",
        },
        recipient: {
            // получатель
            company: 'ООО "Покупатель-1"',
            name: "Семен Семенович-1", // представитель получателя
            phones: [{ number: "70000000000" }],
            passport_requirements_satisfied: false,
        },
        from_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Москва", // Из какого города
            country_code: "RU",
            country: "Россия",
            region: "Московская область", // Из какого региона
            region_code: 7,
            longitude: 39.356765,
            latitude: 46.313532,
            address: "Россия, Московская область, Москва, ул. Станционная, 2", // Полный адрес
            postal_code: "212345",
        },
        to_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Краснодар", // В какой город
            country_code: "RU",
            country: "Россия",
            region: "Краснодарский край", // В какой регион
            region_code: 7,
            longitude: 38.975312,
            latitude: 45.035471,
            address: "Краснодар, улица Тихая 7", // Полный адрес
            postal_code: "545906",
        },
        services: {
            code: "INSURANCE",
            parameter: "300.00",
            sum: 2.14,
            total_sum: 2.25,
            discount_percent: 0,
            discount_sum: 0.0,
            vat_rate: 5.0,
            vat_sum: 0.11,
        },
        packages: [
            {
                number: "1",
                barcode: "000513478230",
                weight: 200,
                length: 20,
                width: 15,
                weight_volume: 60,
                weight_calc: 200,
                height: 1,
                comment: "приложена опись",
                items: [
                    {
                        name: "Книга",
                        ware_key: "BOOK123",
                        payment: {
                            value: 300.0,
                            vat_sum: 0,
                        },
                        weight: 200,
                        weight_gross: 200,
                        amount: 1,
                        delivery_amount: 0,
                        return_item_detail: {},
                        excise: false,
                        cost: 300,
                    },
                ],
                package_id: "339fe7a8-2e78-4230-b960-5875564e577a",
            },
        ],
        statuses: [
            {
                code: "CREATED", // СОЗДАННЫЙ
                name: "Создан",
                date_time: "2025-02-14T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ACCEPTED", // ПРИНЯЛ
                name: "Принят",
                date_time: "2025-02-15T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "CANCELLED", // Отменено
                name: "Отменено",
                date_time: "2025-02-16T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ON_THE_WAY", // В пути
                name: "В пути",
                date_time: "2025-02-17T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "DELIVERED", // Доставлено
                name: "Доставлено",
                date_time: "2025-02-18T08:02:36+0000",
                city: "Офис СДЭК",
            },
        ],
        is_client_return: false,
        delivery_mode: "3",
        delivery_detail: {
            delivery_sum: 338.1,
            total_sum: 357.25,
            payment_info: [],
            delivery_vat_rate: 5.0,
            delivery_vat_sum: 16.9,
            delivery_discount_percent: 0,
            delivery_discount_sum: 0,
        },
        calls: {},
        requests: [
            {
                request_uuid: "841b7969-eeca-48b6-8b23-0fa2156709e5",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:37+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a1b545de-775c-426f-b211-0cafa4057729",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:34+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4f32c80a-9be0-411f-b424-72900d72568e",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:22+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "fd9a134f-3e14-46e8-983a-34cdf9128acd",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "91a82423-fe6b-4931-8644-104fd2650bd6",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:48+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "f6b18222-f235-4eac-9b9d-c13bbc094574",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:45+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5690face-703a-499e-8e61-a0f4817d3ac0",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:41+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "e855ab75-0ee2-48a6-8178-90585e07daa3",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:38+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5e126f91-0d27-40ac-9040-9898a2a20bc1",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:20+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "8620bb4d-e1fe-4a70-b09e-170e856edac7",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:17+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4412b754-71e8-4751-bcb5-9256bce15c8a",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:47+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a647dc70-130a-4977-a9c7-ea680a3ae22d",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:35+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "093a8530-4ef2-4078-a859-60df23393fea",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:34+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "3e1d69b9-f1f3-4cbb-835f-65e9cdce97c8",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:31+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "d1ed2fda-9acc-4151-8418-c45699909364",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "53f4374b-b165-4a30-92a0-2ac4b783f0ba",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:39+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "8073327f-6739-4443-b209-878c99c8c3a3",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:36+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "f15a8ea5-0fd4-4aae-b75b-5a272c285b03",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:33+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "bb666053-54c6-42a4-801f-10c1fb19d7ac",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:22+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "7fbb4064-6560-4174-9eeb-bc118f9fb20d",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ac335d5e-4670-4af9-9292-70167a11b262",
                type: "UPDATE",
                date_time: "2025-02-20T09:42:12+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ddff435d-39fb-468e-a97e-2da82d9a1e67",
                type: "UPDATE",
                date_time: "2025-02-20T09:40:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "c5d27cc9-d738-4fcc-995d-66571e667da0",
                type: "UPDATE",
                date_time: "2025-02-20T09:38:57+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "85f21cf4-4ba5-4108-85dd-b619b183b467",
                type: "UPDATE",
                date_time: "2025-02-20T09:06:47+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "effed112-5365-48f9-a123-32fe2113d3f2",
                type: "UPDATE",
                date_time: "2025-02-20T09:04:08+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ab643505-45e6-49a0-95af-8aa8a6aeae05",
                type: "UPDATE",
                date_time: "2025-02-20T08:49:03+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "49bf5500-5f73-4104-ae74-37f2104c2250",
                type: "UPDATE",
                date_time: "2025-02-18T11:01:02+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "e4ba9bf4-cbcf-4b78-b99c-d4dee157be42",
                type: "UPDATE",
                date_time: "2025-02-18T11:00:09+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "b8047e65-c1be-4847-ac51-b1841dbfa689",
                type: "CREATE",
                date_time: "2025-02-14T08:02:36+0000",
                state: "SUCCESSFUL",
            },
        ],
        related_entities: [],
    },
    {
        entity: {
            uuid: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe1", // id
            type: 1,
            is_return: false,
            is_reverse: false,
            cdek_number: "10084985781", // Номер
            number: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe5",
            tariff_code: 137,
            comment: "Твой коментарий-2", // Коментарий
            shipment_point: "LFG1",
            delivery_point: "LFG1",
            items_cost_currency: "RUB",
            recipient_currency: "RUB",
            delivery_recipient_cost: {},
        },
        sender: {
            // отправитель
            company: 'ООО "Рога и копыта-2"',
            name: "Иван Иванов-2",
            contragent_type: "LEGAL_ENTITY",
            passport_requirements_satisfied: false,
        },
        seller: {
            // продавец
            name: "Петр Петрович-2",
        },
        recipient: {
            // получатель
            company: 'ООО "Покупатель-2"',
            name: "Семен Семенович-3", // представитель получателя
            phones: [{ number: "70000000001" }],
            passport_requirements_satisfied: false,
        },
        from_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Москва", // Из какого города
            country_code: "RU",
            country: "Россия",
            region: "Московская область", // Из какого региона
            region_code: 7,
            longitude: 39.356765,
            latitude: 46.313532,
            address: "Россия, Московская область, Москва, ул. Станционная, 2", // Полный адрес
            postal_code: "212345",
        },
        to_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Пермь", // В какой город
            country_code: "RU",
            country: "Россия",
            region: "Пермский край", // В какой регион
            region_code: 7,
            longitude: 38.975312,
            latitude: 45.035471,
            address: "Пермь, улица Шумная, 9", // Полный адрес
            postal_code: "545906",
        },
        services: {
            code: "INSURANCE",
            parameter: "300.00",
            sum: 2.14,
            total_sum: 2.25,
            discount_percent: 0,
            discount_sum: 0.0,
            vat_rate: 5.0,
            vat_sum: 0.11,
        },
        packages: [
            {
                number: "1",
                barcode: "000513478230",
                weight: 200,
                length: 20,
                width: 15,
                weight_volume: 60,
                weight_calc: 200,
                height: 1,
                comment: "приложена опись",
                items: [
                    {
                        name: "Книга",
                        ware_key: "BOOK123",
                        payment: {
                            value: 300.0,
                            vat_sum: 0,
                        },
                        weight: 200,
                        weight_gross: 200,
                        amount: 1,
                        delivery_amount: 0,
                        return_item_detail: {},
                        excise: false,
                        cost: 300,
                    },
                ],
                package_id: "339fe7a8-2e78-4230-b960-5875564e577a",
            },
        ],
        statuses: [
            {
                code: "CREATED", // СОЗДАННЫЙ
                name: "Создан",
                date_time: "2025-02-14T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ACCEPTED", // ПРИНЯЛ
                name: "Принят",
                date_time: "2025-02-15T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "CANCELLED", // Отменено
                name: "Отменено",
                date_time: "2025-02-16T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ON_THE_WAY", // В пути
                name: "В пути",
                date_time: "2025-02-17T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "DELIVERED", // Доставлено
                name: "Доставлено",
                date_time: "2025-02-18T08:02:36+0000",
                city: "Офис СДЭК",
            },
        ],
        is_client_return: false,
        delivery_mode: "3",
        delivery_detail: {
            delivery_sum: 338.1,
            total_sum: 357.25,
            payment_info: [],
            delivery_vat_rate: 5.0,
            delivery_vat_sum: 16.9,
            delivery_discount_percent: 0,
            delivery_discount_sum: 0,
        },
        calls: {},
        requests: [
            {
                request_uuid: "841b7969-eeca-48b6-8b23-0fa2156709e5",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:37+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a1b545de-775c-426f-b211-0cafa4057729",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:34+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4f32c80a-9be0-411f-b424-72900d72568e",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:22+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "fd9a134f-3e14-46e8-983a-34cdf9128acd",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "91a82423-fe6b-4931-8644-104fd2650bd6",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:48+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "f6b18222-f235-4eac-9b9d-c13bbc094574",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:45+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5690face-703a-499e-8e61-a0f4817d3ac0",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:41+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "e855ab75-0ee2-48a6-8178-90585e07daa3",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:38+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5e126f91-0d27-40ac-9040-9898a2a20bc1",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:20+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "8620bb4d-e1fe-4a70-b09e-170e856edac7",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:17+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4412b754-71e8-4751-bcb5-9256bce15c8a",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:47+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a647dc70-130a-4977-a9c7-ea680a3ae22d",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:35+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "093a8530-4ef2-4078-a859-60df23393fea",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:34+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "3e1d69b9-f1f3-4cbb-835f-65e9cdce97c8",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:31+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "d1ed2fda-9acc-4151-8418-c45699909364",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "53f4374b-b165-4a30-92a0-2ac4b783f0ba",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:39+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "8073327f-6739-4443-b209-878c99c8c3a3",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:36+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "f15a8ea5-0fd4-4aae-b75b-5a272c285b03",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:33+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "bb666053-54c6-42a4-801f-10c1fb19d7ac",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:22+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "7fbb4064-6560-4174-9eeb-bc118f9fb20d",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ac335d5e-4670-4af9-9292-70167a11b262",
                type: "UPDATE",
                date_time: "2025-02-20T09:42:12+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ddff435d-39fb-468e-a97e-2da82d9a1e67",
                type: "UPDATE",
                date_time: "2025-02-20T09:40:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "c5d27cc9-d738-4fcc-995d-66571e667da0",
                type: "UPDATE",
                date_time: "2025-02-20T09:38:57+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "85f21cf4-4ba5-4108-85dd-b619b183b467",
                type: "UPDATE",
                date_time: "2025-02-20T09:06:47+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "effed112-5365-48f9-a123-32fe2113d3f2",
                type: "UPDATE",
                date_time: "2025-02-20T09:04:08+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ab643505-45e6-49a0-95af-8aa8a6aeae05",
                type: "UPDATE",
                date_time: "2025-02-20T08:49:03+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "49bf5500-5f73-4104-ae74-37f2104c2250",
                type: "UPDATE",
                date_time: "2025-02-18T11:01:02+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "e4ba9bf4-cbcf-4b78-b99c-d4dee157be42",
                type: "UPDATE",
                date_time: "2025-02-18T11:00:09+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "b8047e65-c1be-4847-ac51-b1841dbfa689",
                type: "CREATE",
                date_time: "2025-02-14T08:02:36+0000",
                state: "SUCCESSFUL",
            },
        ],
        related_entities: [],
    },
    {
        entity: {
            uuid: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe2", // id
            type: 1,
            is_return: false,
            is_reverse: false,
            cdek_number: "10084985782", // Номер
            number: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe5",
            tariff_code: 137,
            comment: "Твой коментарий-2", // Коментарий
            shipment_point: "LFG1",
            delivery_point: "LFG1",
            items_cost_currency: "RUB",
            recipient_currency: "RUB",
            delivery_recipient_cost: {},
        },
        sender: {
            // отправитель
            company: 'ООО "Рога и копыта-2"',
            name: "Иван Иванов-2",
            contragent_type: "LEGAL_ENTITY",
            passport_requirements_satisfied: false,
        },
        seller: {
            // продавец
            name: "Петр Петрович-2",
        },
        recipient: {
            // получатель
            company: 'ООО "Покупатель-2"',
            name: "Семен Семенович-2", // представитель получателя
            phones: [{ number: "70000000002" }],
            passport_requirements_satisfied: false,
        },
        from_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Москва", // Из какого города
            country_code: "RU",
            country: "Россия",
            region: "Московская область", // Из какого региона
            region_code: 7,
            longitude: 39.356765,
            latitude: 46.313532,
            address: "Россия, Московская область, Москва, ул. Станционная, 2", // Полный адрес
            postal_code: "212345",
        },
        to_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "С-Петербург", // В какой город
            country_code: "RU",
            country: "Россия",
            region: "Ленинградская обл.", // В какой регион
            region_code: 7,
            longitude: 38.975312,
            latitude: 45.035471,
            address: "С-Петербкрг, улица Незаметная, 2", // Полный адрес
            postal_code: "545906",
        },
        services: {
            code: "INSURANCE",
            parameter: "300.00",
            sum: 2.14,
            total_sum: 2.25,
            discount_percent: 0,
            discount_sum: 0.0,
            vat_rate: 5.0,
            vat_sum: 0.11,
        },
        packages: [
            {
                number: "1",
                barcode: "000513478230",
                weight: 200,
                length: 20,
                width: 15,
                weight_volume: 60,
                weight_calc: 200,
                height: 1,
                comment: "приложена опись",
                items: [
                    {
                        name: "Книга",
                        ware_key: "BOOK123",
                        payment: {
                            value: 300.0,
                            vat_sum: 0,
                        },
                        weight: 200,
                        weight_gross: 200,
                        amount: 1,
                        delivery_amount: 0,
                        return_item_detail: {},
                        excise: false,
                        cost: 300,
                    },
                ],
                package_id: "339fe7a8-2e78-4230-b960-5875564e577a",
            },
        ],
        statuses: [
            {
                code: "CREATED", // СОЗДАННЫЙ
                name: "Создан",
                date_time: "2025-02-14T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ACCEPTED", // ПРИНЯЛ
                name: "Принят",
                date_time: "2025-02-15T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "CANCELLED", // Отменено
                name: "Отменено",
                date_time: "2025-02-16T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ON_THE_WAY", // В пути
                name: "В пути",
                date_time: "2025-02-17T08:02:36+0000",
                city: "Офис СДЭК",
            },
        ],
        is_client_return: false,
        delivery_mode: "3",
        delivery_detail: {
            delivery_sum: 338.1,
            total_sum: 357.25,
            payment_info: [],
            delivery_vat_rate: 5.0,
            delivery_vat_sum: 16.9,
            delivery_discount_percent: 0,
            delivery_discount_sum: 0,
        },
        calls: {},
        requests: [
            {
                request_uuid: "841b7969-eeca-48b6-8b23-0fa2156709e5",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:37+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a1b545de-775c-426f-b211-0cafa4057729",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:34+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4f32c80a-9be0-411f-b424-72900d72568e",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:22+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "fd9a134f-3e14-46e8-983a-34cdf9128acd",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "91a82423-fe6b-4931-8644-104fd2650bd6",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:48+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "f6b18222-f235-4eac-9b9d-c13bbc094574",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:45+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5690face-703a-499e-8e61-a0f4817d3ac0",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:41+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "e855ab75-0ee2-48a6-8178-90585e07daa3",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:38+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5e126f91-0d27-40ac-9040-9898a2a20bc1",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:20+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "8620bb4d-e1fe-4a70-b09e-170e856edac7",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:17+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4412b754-71e8-4751-bcb5-9256bce15c8a",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:47+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a647dc70-130a-4977-a9c7-ea680a3ae22d",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:35+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "093a8530-4ef2-4078-a859-60df23393fea",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:34+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "3e1d69b9-f1f3-4cbb-835f-65e9cdce97c8",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:31+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "d1ed2fda-9acc-4151-8418-c45699909364",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "53f4374b-b165-4a30-92a0-2ac4b783f0ba",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:39+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "8073327f-6739-4443-b209-878c99c8c3a3",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:36+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "f15a8ea5-0fd4-4aae-b75b-5a272c285b03",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:33+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "bb666053-54c6-42a4-801f-10c1fb19d7ac",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:22+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "7fbb4064-6560-4174-9eeb-bc118f9fb20d",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ac335d5e-4670-4af9-9292-70167a11b262",
                type: "UPDATE",
                date_time: "2025-02-20T09:42:12+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ddff435d-39fb-468e-a97e-2da82d9a1e67",
                type: "UPDATE",
                date_time: "2025-02-20T09:40:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "c5d27cc9-d738-4fcc-995d-66571e667da0",
                type: "UPDATE",
                date_time: "2025-02-20T09:38:57+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "85f21cf4-4ba5-4108-85dd-b619b183b467",
                type: "UPDATE",
                date_time: "2025-02-20T09:06:47+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "effed112-5365-48f9-a123-32fe2113d3f2",
                type: "UPDATE",
                date_time: "2025-02-20T09:04:08+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ab643505-45e6-49a0-95af-8aa8a6aeae05",
                type: "UPDATE",
                date_time: "2025-02-20T08:49:03+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "49bf5500-5f73-4104-ae74-37f2104c2250",
                type: "UPDATE",
                date_time: "2025-02-18T11:01:02+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "e4ba9bf4-cbcf-4b78-b99c-d4dee157be42",
                type: "UPDATE",
                date_time: "2025-02-18T11:00:09+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "b8047e65-c1be-4847-ac51-b1841dbfa689",
                type: "CREATE",
                date_time: "2025-02-14T08:02:36+0000",
                state: "SUCCESSFUL",
            },
        ],
        related_entities: [],
    },
    {
        entity: {
            uuid: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe3", // id
            type: 1,
            is_return: false,
            is_reverse: false,
            cdek_number: "10084985783", // Номер
            number: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe5",
            tariff_code: 137,
            comment: "Твой коментарий-3", // Коментарий
            shipment_point: "LFG1",
            delivery_point: "LFG1",
            items_cost_currency: "RUB",
            recipient_currency: "RUB",
            delivery_recipient_cost: {},
        },
        sender: {
            // отправитель
            company: 'ООО "Рога и копыта-3"',
            name: "Иван Иванов-3",
            contragent_type: "LEGAL_ENTITY",
            passport_requirements_satisfied: false,
        },
        seller: {
            // продавец
            name: "Петр Петрович-3",
        },
        recipient: {
            // получатель
            company: 'ООО "Покупатель-3"',
            name: "Семен Семенович-3", // представитель получателя
            phones: [{ number: "70000000003" }],
            passport_requirements_satisfied: false,
        },
        from_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Москва", // Из какого города
            country_code: "RU",
            country: "Россия",
            region: "Московская область", // Из какого региона
            region_code: 7,
            longitude: 39.356765,
            latitude: 46.313532,
            address: "Россия, Московская область, Москва, ул. Станционная, 2", // Полный адрес
            postal_code: "212345",
        },
        to_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Н-Новгород", // В какой город
            country_code: "RU",
            country: "Россия",
            region: "Нижегородская обл.", // В какой регион
            region_code: 7,
            longitude: 38.975312,
            latitude: 45.035471,
            address: "Н-Новгород, улица Цветочная 7", // Полный адрес
            postal_code: "545906",
        },
        services: {
            code: "INSURANCE",
            parameter: "300.00",
            sum: 2.14,
            total_sum: 2.25,
            discount_percent: 0,
            discount_sum: 0.0,
            vat_rate: 5.0,
            vat_sum: 0.11,
        },
        packages: [
            {
                number: "1",
                barcode: "000513478230",
                weight: 200,
                length: 20,
                width: 15,
                weight_volume: 60,
                weight_calc: 200,
                height: 1,
                comment: "приложена опись",
                items: [
                    {
                        name: "Книга",
                        ware_key: "BOOK123",
                        payment: {
                            value: 300.0,
                            vat_sum: 0,
                        },
                        weight: 200,
                        weight_gross: 200,
                        amount: 1,
                        delivery_amount: 0,
                        return_item_detail: {},
                        excise: false,
                        cost: 300,
                    },
                ],
                package_id: "339fe7a8-2e78-4230-b960-5875564e577a",
            },
        ],
        statuses: [
            {
                code: "CREATED", // СОЗДАННЫЙ
                name: "Создан",
                date_time: "2025-02-14T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ACCEPTED", // ПРИНЯЛ
                name: "Принят",
                date_time: "2025-02-15T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "CANCELLED", // Отменено
                name: "Отменено",
                date_time: "2025-02-16T08:02:36+0000",
                city: "Офис СДЭК",
            },
        ],
        is_client_return: false,
        delivery_mode: "3",
        delivery_detail: {
            delivery_sum: 338.1,
            total_sum: 357.25,
            payment_info: [],
            delivery_vat_rate: 5.0,
            delivery_vat_sum: 16.9,
            delivery_discount_percent: 0,
            delivery_discount_sum: 0,
        },
        calls: {},
        requests: [
            {
                request_uuid: "841b7969-eeca-48b6-8b23-0fa2156709e5",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:37+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a1b545de-775c-426f-b211-0cafa4057729",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:34+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4f32c80a-9be0-411f-b424-72900d72568e",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:22+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "fd9a134f-3e14-46e8-983a-34cdf9128acd",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "91a82423-fe6b-4931-8644-104fd2650bd6",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:48+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "f6b18222-f235-4eac-9b9d-c13bbc094574",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:45+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5690face-703a-499e-8e61-a0f4817d3ac0",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:41+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "e855ab75-0ee2-48a6-8178-90585e07daa3",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:38+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5e126f91-0d27-40ac-9040-9898a2a20bc1",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:20+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "8620bb4d-e1fe-4a70-b09e-170e856edac7",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:17+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4412b754-71e8-4751-bcb5-9256bce15c8a",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:47+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a647dc70-130a-4977-a9c7-ea680a3ae22d",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:35+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "093a8530-4ef2-4078-a859-60df23393fea",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:34+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "3e1d69b9-f1f3-4cbb-835f-65e9cdce97c8",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:31+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "d1ed2fda-9acc-4151-8418-c45699909364",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "53f4374b-b165-4a30-92a0-2ac4b783f0ba",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:39+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "8073327f-6739-4443-b209-878c99c8c3a3",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:36+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "f15a8ea5-0fd4-4aae-b75b-5a272c285b03",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:33+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "bb666053-54c6-42a4-801f-10c1fb19d7ac",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:22+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "7fbb4064-6560-4174-9eeb-bc118f9fb20d",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ac335d5e-4670-4af9-9292-70167a11b262",
                type: "UPDATE",
                date_time: "2025-02-20T09:42:12+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ddff435d-39fb-468e-a97e-2da82d9a1e67",
                type: "UPDATE",
                date_time: "2025-02-20T09:40:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "c5d27cc9-d738-4fcc-995d-66571e667da0",
                type: "UPDATE",
                date_time: "2025-02-20T09:38:57+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "85f21cf4-4ba5-4108-85dd-b619b183b467",
                type: "UPDATE",
                date_time: "2025-02-20T09:06:47+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "effed112-5365-48f9-a123-32fe2113d3f2",
                type: "UPDATE",
                date_time: "2025-02-20T09:04:08+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ab643505-45e6-49a0-95af-8aa8a6aeae05",
                type: "UPDATE",
                date_time: "2025-02-20T08:49:03+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "49bf5500-5f73-4104-ae74-37f2104c2250",
                type: "UPDATE",
                date_time: "2025-02-18T11:01:02+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "e4ba9bf4-cbcf-4b78-b99c-d4dee157be42",
                type: "UPDATE",
                date_time: "2025-02-18T11:00:09+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "b8047e65-c1be-4847-ac51-b1841dbfa689",
                type: "CREATE",
                date_time: "2025-02-14T08:02:36+0000",
                state: "SUCCESSFUL",
            },
        ],
        related_entities: [],
    },
    {
        entity: {
            uuid: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe4", // id
            type: 1,
            is_return: false,
            is_reverse: false,
            cdek_number: "10084985784", // Номер
            number: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe5",
            tariff_code: 137,
            comment: "Твой коментарий-4", // Коментарий
            shipment_point: "LFG1",
            delivery_point: "LFG1",
            items_cost_currency: "RUB",
            recipient_currency: "RUB",
            delivery_recipient_cost: {},
        },
        sender: {
            // отправитель
            company: 'ООО "Рога и копыта-4"',
            name: "Иван Иванов-4",
            contragent_type: "LEGAL_ENTITY",
            passport_requirements_satisfied: false,
        },
        seller: {
            // продавец
            name: "Петр Петрович-4",
        },
        recipient: {
            // получатель
            company: 'ООО "Покупатель-4"',
            name: "Семен Семенович-4", // представитель получателя
            phones: [{ number: "70000000004" }],
            passport_requirements_satisfied: false,
        },
        from_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Москва", // Из какого города
            country_code: "RU",
            country: "Россия",
            region: "Московская область", // Из какого региона
            region_code: 7,
            longitude: 39.356765,
            latitude: 46.313532,
            address: "Россия, Московская область, Москва, ул. Станционная, 2", // Полный адрес
            postal_code: "212345",
        },
        to_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Рязань", // В какой город
            country_code: "RU",
            country: "Россия",
            region: "Рязанская обл.", // В какой регион
            region_code: 7,
            longitude: 38.975312,
            latitude: 45.035471,
            address: "Рязань, улица Скролмная 4", // Полный адрес
            postal_code: "545906",
        },
        services: {
            code: "INSURANCE",
            parameter: "300.00",
            sum: 2.14,
            total_sum: 2.25,
            discount_percent: 0,
            discount_sum: 0.0,
            vat_rate: 5.0,
            vat_sum: 0.11,
        },
        packages: [
            {
                number: "1",
                barcode: "000513478230",
                weight: 200,
                length: 20,
                width: 15,
                weight_volume: 60,
                weight_calc: 200,
                height: 1,
                comment: "приложена опись",
                items: [
                    {
                        name: "Книга",
                        ware_key: "BOOK123",
                        payment: {
                            value: 300.0,
                            vat_sum: 0,
                        },
                        weight: 200,
                        weight_gross: 200,
                        amount: 1,
                        delivery_amount: 0,
                        return_item_detail: {},
                        excise: false,
                        cost: 300,
                    },
                ],
                package_id: "339fe7a8-2e78-4230-b960-5875564e577a",
            },
        ],
        statuses: [
            {
                code: "CREATED", // СОЗДАННЫЙ
                name: "Создан",
                date_time: "2025-02-14T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ACCEPTED", // ПРИНЯЛ
                name: "Принят",
                date_time: "2025-02-15T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "CANCELLED", // Отменено
                name: "Отменено",
                date_time: "2025-02-16T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ON_THE_WAY", // В пути
                name: "В пути",
                date_time: "2025-02-17T08:02:36+0000",
                city: "Офис СДЭК",
            },
        ],
        is_client_return: false,
        delivery_mode: "3",
        delivery_detail: {
            delivery_sum: 338.1,
            total_sum: 357.25,
            payment_info: [],
            delivery_vat_rate: 5.0,
            delivery_vat_sum: 16.9,
            delivery_discount_percent: 0,
            delivery_discount_sum: 0,
        },
        calls: {},
        requests: [
            {
                request_uuid: "841b7969-eeca-48b6-8b23-0fa2156709e5",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:37+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a1b545de-775c-426f-b211-0cafa4057729",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:34+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4f32c80a-9be0-411f-b424-72900d72568e",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:22+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "fd9a134f-3e14-46e8-983a-34cdf9128acd",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "91a82423-fe6b-4931-8644-104fd2650bd6",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:48+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "f6b18222-f235-4eac-9b9d-c13bbc094574",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:45+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5690face-703a-499e-8e61-a0f4817d3ac0",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:41+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "e855ab75-0ee2-48a6-8178-90585e07daa3",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:38+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5e126f91-0d27-40ac-9040-9898a2a20bc1",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:20+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "8620bb4d-e1fe-4a70-b09e-170e856edac7",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:17+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4412b754-71e8-4751-bcb5-9256bce15c8a",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:47+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a647dc70-130a-4977-a9c7-ea680a3ae22d",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:35+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "093a8530-4ef2-4078-a859-60df23393fea",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:34+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "3e1d69b9-f1f3-4cbb-835f-65e9cdce97c8",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:31+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "d1ed2fda-9acc-4151-8418-c45699909364",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "53f4374b-b165-4a30-92a0-2ac4b783f0ba",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:39+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "8073327f-6739-4443-b209-878c99c8c3a3",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:36+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "f15a8ea5-0fd4-4aae-b75b-5a272c285b03",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:33+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "bb666053-54c6-42a4-801f-10c1fb19d7ac",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:22+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "7fbb4064-6560-4174-9eeb-bc118f9fb20d",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ac335d5e-4670-4af9-9292-70167a11b262",
                type: "UPDATE",
                date_time: "2025-02-20T09:42:12+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ddff435d-39fb-468e-a97e-2da82d9a1e67",
                type: "UPDATE",
                date_time: "2025-02-20T09:40:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "c5d27cc9-d738-4fcc-995d-66571e667da0",
                type: "UPDATE",
                date_time: "2025-02-20T09:38:57+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "85f21cf4-4ba5-4108-85dd-b619b183b467",
                type: "UPDATE",
                date_time: "2025-02-20T09:06:47+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "effed112-5365-48f9-a123-32fe2113d3f2",
                type: "UPDATE",
                date_time: "2025-02-20T09:04:08+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ab643505-45e6-49a0-95af-8aa8a6aeae05",
                type: "UPDATE",
                date_time: "2025-02-20T08:49:03+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "49bf5500-5f73-4104-ae74-37f2104c2250",
                type: "UPDATE",
                date_time: "2025-02-18T11:01:02+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "e4ba9bf4-cbcf-4b78-b99c-d4dee157be42",
                type: "UPDATE",
                date_time: "2025-02-18T11:00:09+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "b8047e65-c1be-4847-ac51-b1841dbfa689",
                type: "CREATE",
                date_time: "2025-02-14T08:02:36+0000",
                state: "SUCCESSFUL",
            },
        ],
        related_entities: [],
    },
    {
        entity: {
            uuid: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe5", // id
            type: 1,
            is_return: false,
            is_reverse: false,
            cdek_number: "10084985785", // Номер
            number: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe5",
            tariff_code: 137,
            comment: "Твой коментарий-5", // Коментарий
            shipment_point: "LFG1",
            delivery_point: "LFG1",
            items_cost_currency: "RUB",
            recipient_currency: "RUB",
            delivery_recipient_cost: {},
        },
        sender: {
            // отправитель
            company: 'ООО "Рога и копыта-5"',
            name: "Иван Иванов-5",
            contragent_type: "LEGAL_ENTITY",
            passport_requirements_satisfied: false,
        },
        seller: {
            // продавец
            name: "Петр Петрович-5",
        },
        recipient: {
            // получатель
            company: 'ООО "Покупатель-5"',
            name: "Семен Семенович-5", // представитель получателя
            phones: [{ number: "70000000005" }],
            passport_requirements_satisfied: false,
        },
        from_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Москва", // Из какого города
            country_code: "RU",
            country: "Россия",
            region: "Московская область", // Из какого региона
            region_code: 7,
            longitude: 39.356765,
            latitude: 46.313532,
            address: "Россия, Московская область, Москва, ул. Станционная, 2", // Полный адрес
            postal_code: "212345",
        },
        to_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Новосибирск", // В какой город
            country_code: "RU",
            country: "Россия",
            region: "Новосибирская обл.", // В какой регион
            region_code: 7,
            longitude: 38.975312,
            latitude: 45.035471,
            address: "Новосибирск, улица Панфилова 5", // Полный адрес
            postal_code: "545906",
        },
        services: {
            code: "INSURANCE",
            parameter: "300.00",
            sum: 2.14,
            total_sum: 2.25,
            discount_percent: 0,
            discount_sum: 0.0,
            vat_rate: 5.0,
            vat_sum: 0.11,
        },
        packages: [
            {
                number: "1",
                barcode: "000513478230",
                weight: 200,
                length: 20,
                width: 15,
                weight_volume: 60,
                weight_calc: 200,
                height: 1,
                comment: "приложена опись",
                items: [
                    {
                        name: "Книга",
                        ware_key: "BOOK123",
                        payment: {
                            value: 300.0,
                            vat_sum: 0,
                        },
                        weight: 200,
                        weight_gross: 200,
                        amount: 1,
                        delivery_amount: 0,
                        return_item_detail: {},
                        excise: false,
                        cost: 300,
                    },
                ],
                package_id: "339fe7a8-2e78-4230-b960-5875564e577a",
            },
        ],
        statuses: [
            {
                code: "CREATED", // СОЗДАННЫЙ
                name: "Создан",
                date_time: "2025-02-14T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ACCEPTED", // ПРИНЯЛ
                name: "Принят",
                date_time: "2025-02-15T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "CANCELLED", // Отменено
                name: "Отменено",
                date_time: "2025-02-16T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ON_THE_WAY", // В пути
                name: "В пути",
                date_time: "2025-02-17T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "DELIVERED", // Доставлено
                name: "Доставлено",
                date_time: "2025-02-18T08:02:36+0000",
                city: "Офис СДЭК",
            },
        ],
        is_client_return: false,
        delivery_mode: "3",
        delivery_detail: {
            delivery_sum: 338.1,
            total_sum: 357.25,
            payment_info: [],
            delivery_vat_rate: 5.0,
            delivery_vat_sum: 16.9,
            delivery_discount_percent: 0,
            delivery_discount_sum: 0,
        },
        calls: {},
        requests: [
            {
                request_uuid: "841b7969-eeca-48b6-8b23-0fa2156709e5",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:37+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a1b545de-775c-426f-b211-0cafa4057729",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:34+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4f32c80a-9be0-411f-b424-72900d72568e",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:22+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "fd9a134f-3e14-46e8-983a-34cdf9128acd",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "91a82423-fe6b-4931-8644-104fd2650bd6",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:48+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "f6b18222-f235-4eac-9b9d-c13bbc094574",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:45+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5690face-703a-499e-8e61-a0f4817d3ac0",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:41+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "e855ab75-0ee2-48a6-8178-90585e07daa3",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:38+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5e126f91-0d27-40ac-9040-9898a2a20bc1",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:20+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "8620bb4d-e1fe-4a70-b09e-170e856edac7",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:17+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4412b754-71e8-4751-bcb5-9256bce15c8a",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:47+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a647dc70-130a-4977-a9c7-ea680a3ae22d",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:35+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "093a8530-4ef2-4078-a859-60df23393fea",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:34+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "3e1d69b9-f1f3-4cbb-835f-65e9cdce97c8",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:31+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "d1ed2fda-9acc-4151-8418-c45699909364",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "53f4374b-b165-4a30-92a0-2ac4b783f0ba",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:39+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "8073327f-6739-4443-b209-878c99c8c3a3",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:36+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "f15a8ea5-0fd4-4aae-b75b-5a272c285b03",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:33+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "bb666053-54c6-42a4-801f-10c1fb19d7ac",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:22+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "7fbb4064-6560-4174-9eeb-bc118f9fb20d",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ac335d5e-4670-4af9-9292-70167a11b262",
                type: "UPDATE",
                date_time: "2025-02-20T09:42:12+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ddff435d-39fb-468e-a97e-2da82d9a1e67",
                type: "UPDATE",
                date_time: "2025-02-20T09:40:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "c5d27cc9-d738-4fcc-995d-66571e667da0",
                type: "UPDATE",
                date_time: "2025-02-20T09:38:57+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "85f21cf4-4ba5-4108-85dd-b619b183b467",
                type: "UPDATE",
                date_time: "2025-02-20T09:06:47+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "effed112-5365-48f9-a123-32fe2113d3f2",
                type: "UPDATE",
                date_time: "2025-02-20T09:04:08+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ab643505-45e6-49a0-95af-8aa8a6aeae05",
                type: "UPDATE",
                date_time: "2025-02-20T08:49:03+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "49bf5500-5f73-4104-ae74-37f2104c2250",
                type: "UPDATE",
                date_time: "2025-02-18T11:01:02+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "e4ba9bf4-cbcf-4b78-b99c-d4dee157be42",
                type: "UPDATE",
                date_time: "2025-02-18T11:00:09+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "b8047e65-c1be-4847-ac51-b1841dbfa689",
                type: "CREATE",
                date_time: "2025-02-14T08:02:36+0000",
                state: "SUCCESSFUL",
            },
        ],
        related_entities: [],
    },
    {
        entity: {
            uuid: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe6", // id
            type: 1,
            is_return: false,
            is_reverse: false,
            cdek_number: "10084985786", // Номер
            number: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe5",
            tariff_code: 137,
            comment: "Твой коментарий-6", // Коментарий
            shipment_point: "LFG1",
            delivery_point: "LFG1",
            items_cost_currency: "RUB",
            recipient_currency: "RUB",
            delivery_recipient_cost: {},
        },
        sender: {
            // отправитель
            company: 'ООО "Рога и копыта-6"',
            name: "Иван Иванов-6",
            contragent_type: "LEGAL_ENTITY",
            passport_requirements_satisfied: false,
        },
        seller: {
            // продавец
            name: "Петр Петрович-6",
        },
        recipient: {
            // получатель
            company: 'ООО "Покупатель-6"',
            name: "Семен Семенович-6", // представитель получателя
            phones: [{ number: "70000000006" }],
            passport_requirements_satisfied: false,
        },
        from_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Москва", // Из какого города
            country_code: "RU",
            country: "Россия",
            region: "Московская область", // Из какого региона
            region_code: 7,
            longitude: 39.356765,
            latitude: 46.313532,
            address: "Россия, Московская область, Москва, ул. Станционная, 2", // Полный адрес
            postal_code: "212345",
        },
        to_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Владивосток", // В какой город
            country_code: "RU",
            country: "Россия",
            region: "Приморский край", // В какой регион
            region_code: 7,
            longitude: 38.975312,
            latitude: 45.035471,
            address: "Владивосток, улица Партизан 6", // Полный адрес
            postal_code: "545906",
        },
        services: {
            code: "INSURANCE",
            parameter: "300.00",
            sum: 2.14,
            total_sum: 2.25,
            discount_percent: 0,
            discount_sum: 0.0,
            vat_rate: 5.0,
            vat_sum: 0.11,
        },
        packages: [
            {
                number: "1",
                barcode: "000513478230",
                weight: 200,
                length: 20,
                width: 15,
                weight_volume: 60,
                weight_calc: 200,
                height: 1,
                comment: "приложена опись",
                items: [
                    {
                        name: "Книга",
                        ware_key: "BOOK123",
                        payment: {
                            value: 300.0,
                            vat_sum: 0,
                        },
                        weight: 200,
                        weight_gross: 200,
                        amount: 1,
                        delivery_amount: 0,
                        return_item_detail: {},
                        excise: false,
                        cost: 300,
                    },
                ],
                package_id: "339fe7a8-2e78-4230-b960-5875564e577a",
            },
        ],
        statuses: [
            {
                code: "CREATED", // СОЗДАННЫЙ
                name: "Создан",
                date_time: "2025-02-14T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ACCEPTED", // ПРИНЯЛ
                name: "Принят",
                date_time: "2025-02-15T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "CANCELLED", // Отменено
                name: "Отменено",
                date_time: "2025-02-16T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ON_THE_WAY", // В пути
                name: "В пути",
                date_time: "2025-02-17T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "DELIVERED", // Доставлено
                name: "Доставлено",
                date_time: "2025-02-18T08:02:36+0000",
                city: "Офис СДЭК",
            },
        ],
        is_client_return: false,
        delivery_mode: "3",
        delivery_detail: {
            delivery_sum: 338.1,
            total_sum: 357.25,
            payment_info: [],
            delivery_vat_rate: 5.0,
            delivery_vat_sum: 16.9,
            delivery_discount_percent: 0,
            delivery_discount_sum: 0,
        },
        calls: {},
        requests: [
            {
                request_uuid: "841b7969-eeca-48b6-8b23-0fa2156709e5",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:37+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a1b545de-775c-426f-b211-0cafa4057729",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:34+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4f32c80a-9be0-411f-b424-72900d72568e",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:22+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "fd9a134f-3e14-46e8-983a-34cdf9128acd",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "91a82423-fe6b-4931-8644-104fd2650bd6",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:48+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "f6b18222-f235-4eac-9b9d-c13bbc094574",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:45+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5690face-703a-499e-8e61-a0f4817d3ac0",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:41+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "e855ab75-0ee2-48a6-8178-90585e07daa3",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:38+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5e126f91-0d27-40ac-9040-9898a2a20bc1",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:20+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "8620bb4d-e1fe-4a70-b09e-170e856edac7",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:17+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4412b754-71e8-4751-bcb5-9256bce15c8a",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:47+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a647dc70-130a-4977-a9c7-ea680a3ae22d",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:35+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "093a8530-4ef2-4078-a859-60df23393fea",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:34+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "3e1d69b9-f1f3-4cbb-835f-65e9cdce97c8",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:31+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "d1ed2fda-9acc-4151-8418-c45699909364",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "53f4374b-b165-4a30-92a0-2ac4b783f0ba",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:39+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "8073327f-6739-4443-b209-878c99c8c3a3",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:36+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "f15a8ea5-0fd4-4aae-b75b-5a272c285b03",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:33+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "bb666053-54c6-42a4-801f-10c1fb19d7ac",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:22+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "7fbb4064-6560-4174-9eeb-bc118f9fb20d",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ac335d5e-4670-4af9-9292-70167a11b262",
                type: "UPDATE",
                date_time: "2025-02-20T09:42:12+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ddff435d-39fb-468e-a97e-2da82d9a1e67",
                type: "UPDATE",
                date_time: "2025-02-20T09:40:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "c5d27cc9-d738-4fcc-995d-66571e667da0",
                type: "UPDATE",
                date_time: "2025-02-20T09:38:57+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "85f21cf4-4ba5-4108-85dd-b619b183b467",
                type: "UPDATE",
                date_time: "2025-02-20T09:06:47+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "effed112-5365-48f9-a123-32fe2113d3f2",
                type: "UPDATE",
                date_time: "2025-02-20T09:04:08+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ab643505-45e6-49a0-95af-8aa8a6aeae05",
                type: "UPDATE",
                date_time: "2025-02-20T08:49:03+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "49bf5500-5f73-4104-ae74-37f2104c2250",
                type: "UPDATE",
                date_time: "2025-02-18T11:01:02+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "e4ba9bf4-cbcf-4b78-b99c-d4dee157be42",
                type: "UPDATE",
                date_time: "2025-02-18T11:00:09+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "b8047e65-c1be-4847-ac51-b1841dbfa689",
                type: "CREATE",
                date_time: "2025-02-14T08:02:36+0000",
                state: "SUCCESSFUL",
            },
        ],
        related_entities: [],
    },
    {
        entity: {
            uuid: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe7", // id
            type: 1,
            is_return: false,
            is_reverse: false,
            cdek_number: "10084985787", // Номер
            number: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe5",
            tariff_code: 137,
            comment: "Твой коментарий-7", // Коментарий
            shipment_point: "LFG1",
            delivery_point: "LFG1",
            items_cost_currency: "RUB",
            recipient_currency: "RUB",
            delivery_recipient_cost: {},
        },
        sender: {
            // отправитель
            company: 'ООО "Рога и копыта-7"',
            name: "Иван Иванов-7",
            contragent_type: "LEGAL_ENTITY",
            passport_requirements_satisfied: false,
        },
        seller: {
            // продавец
            name: "Петр Петрович-7",
        },
        recipient: {
            // получатель
            company: 'ООО "Покупатель-7"',
            name: "Семен Семенович-1", // представитель получателя
            phones: [{ number: "70000000007" }],
            passport_requirements_satisfied: false,
        },
        from_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Москва", // Из какого города
            country_code: "RU",
            country: "Россия",
            region: "Московская область", // Из какого региона
            region_code: 7,
            longitude: 39.356765,
            latitude: 46.313532,
            address: "Россия, Московская область, Москва, ул. Станционная, 2", // Полный адрес
            postal_code: "212345",
        },
        to_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Хабаровск", // В какой город
            country_code: "RU",
            country: "Россия",
            region: "Хабаровский край", // В какой регион
            region_code: 7,
            longitude: 38.975312,
            latitude: 45.035471,
            address: "Хабаровск, улица Ленина 7", // Полный адрес
            postal_code: "545906",
        },
        services: {
            code: "INSURANCE",
            parameter: "300.00",
            sum: 2.14,
            total_sum: 2.25,
            discount_percent: 0,
            discount_sum: 0.0,
            vat_rate: 5.0,
            vat_sum: 0.11,
        },
        packages: [
            {
                number: "1",
                barcode: "000513478230",
                weight: 200,
                length: 20,
                width: 15,
                weight_volume: 60,
                weight_calc: 200,
                height: 1,
                comment: "приложена опись",
                items: [
                    {
                        name: "Книга",
                        ware_key: "BOOK123",
                        payment: {
                            value: 300.0,
                            vat_sum: 0,
                        },
                        weight: 200,
                        weight_gross: 200,
                        amount: 1,
                        delivery_amount: 0,
                        return_item_detail: {},
                        excise: false,
                        cost: 300,
                    },
                ],
                package_id: "339fe7a8-2e78-4230-b960-5875564e577a",
            },
        ],
        statuses: [
            {
                code: "CREATED", // СОЗДАННЫЙ
                name: "Создан",
                date_time: "2025-02-14T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ACCEPTED", // ПРИНЯЛ
                name: "Принят",
                date_time: "2025-02-15T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "CANCELLED", // Отменено
                name: "Отменено",
                date_time: "2025-02-16T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ON_THE_WAY", // В пути
                name: "В пути",
                date_time: "2025-02-17T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "DELIVERED", // Доставлено
                name: "Доставлено",
                date_time: "2025-02-18T08:02:36+0000",
                city: "Офис СДЭК",
            },
        ],
        is_client_return: false,
        delivery_mode: "3",
        delivery_detail: {
            delivery_sum: 338.1,
            total_sum: 357.25,
            payment_info: [],
            delivery_vat_rate: 5.0,
            delivery_vat_sum: 16.9,
            delivery_discount_percent: 0,
            delivery_discount_sum: 0,
        },
        calls: {},
        requests: [
            {
                request_uuid: "841b7969-eeca-48b6-8b23-0fa2156709e5",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:37+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a1b545de-775c-426f-b211-0cafa4057729",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:34+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4f32c80a-9be0-411f-b424-72900d72568e",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:22+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "fd9a134f-3e14-46e8-983a-34cdf9128acd",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "91a82423-fe6b-4931-8644-104fd2650bd6",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:48+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "f6b18222-f235-4eac-9b9d-c13bbc094574",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:45+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5690face-703a-499e-8e61-a0f4817d3ac0",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:41+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "e855ab75-0ee2-48a6-8178-90585e07daa3",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:38+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5e126f91-0d27-40ac-9040-9898a2a20bc1",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:20+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "8620bb4d-e1fe-4a70-b09e-170e856edac7",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:17+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4412b754-71e8-4751-bcb5-9256bce15c8a",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:47+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a647dc70-130a-4977-a9c7-ea680a3ae22d",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:35+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "093a8530-4ef2-4078-a859-60df23393fea",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:34+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "3e1d69b9-f1f3-4cbb-835f-65e9cdce97c8",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:31+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "d1ed2fda-9acc-4151-8418-c45699909364",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "53f4374b-b165-4a30-92a0-2ac4b783f0ba",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:39+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "8073327f-6739-4443-b209-878c99c8c3a3",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:36+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "f15a8ea5-0fd4-4aae-b75b-5a272c285b03",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:33+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "bb666053-54c6-42a4-801f-10c1fb19d7ac",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:22+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "7fbb4064-6560-4174-9eeb-bc118f9fb20d",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ac335d5e-4670-4af9-9292-70167a11b262",
                type: "UPDATE",
                date_time: "2025-02-20T09:42:12+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ddff435d-39fb-468e-a97e-2da82d9a1e67",
                type: "UPDATE",
                date_time: "2025-02-20T09:40:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "c5d27cc9-d738-4fcc-995d-66571e667da0",
                type: "UPDATE",
                date_time: "2025-02-20T09:38:57+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "85f21cf4-4ba5-4108-85dd-b619b183b467",
                type: "UPDATE",
                date_time: "2025-02-20T09:06:47+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "effed112-5365-48f9-a123-32fe2113d3f2",
                type: "UPDATE",
                date_time: "2025-02-20T09:04:08+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ab643505-45e6-49a0-95af-8aa8a6aeae05",
                type: "UPDATE",
                date_time: "2025-02-20T08:49:03+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "49bf5500-5f73-4104-ae74-37f2104c2250",
                type: "UPDATE",
                date_time: "2025-02-18T11:01:02+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "e4ba9bf4-cbcf-4b78-b99c-d4dee157be42",
                type: "UPDATE",
                date_time: "2025-02-18T11:00:09+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "b8047e65-c1be-4847-ac51-b1841dbfa689",
                type: "CREATE",
                date_time: "2025-02-14T08:02:36+0000",
                state: "SUCCESSFUL",
            },
        ],
        related_entities: [],
    },
    {
        entity: {
            uuid: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe8", // id
            type: 1,
            is_return: false,
            is_reverse: false,
            cdek_number: "10084985788", // Номер
            number: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe5",
            tariff_code: 137,
            comment: "Твой коментарий-8", // Коментарий
            shipment_point: "LFG1",
            delivery_point: "LFG1",
            items_cost_currency: "RUB",
            recipient_currency: "RUB",
            delivery_recipient_cost: {},
        },
        sender: {
            // отправитель
            company: 'ООО "Рога и копыта-8"',
            name: "Иван Иванов-8",
            contragent_type: "LEGAL_ENTITY",
            passport_requirements_satisfied: false,
        },
        seller: {
            // продавец
            name: "Петр Петрович-8",
        },
        recipient: {
            // получатель
            company: 'ООО "Покупатель-8"',
            name: "Семен Семенович-8", // представитель получателя
            phones: [{ number: "70000000008" }],
            passport_requirements_satisfied: false,
        },
        from_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Москва", // Из какого города
            country_code: "RU",
            country: "Россия",
            region: "Московская область", // Из какого региона
            region_code: 7,
            longitude: 39.356765,
            latitude: 46.313532,
            address: "Россия, Московская область, Москва, ул. Станционная, 2", // Полный адрес
            postal_code: "212345",
        },
        to_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Челябинск", // В какой город
            country_code: "RU",
            country: "Россия",
            region: "Свердловская обл. край", // В какой регион
            region_code: 7,
            longitude: 38.975312,
            latitude: 45.035471,
            address: "Челябинск, улица Сталеваров, 8", // Полный адрес
            postal_code: "545906",
        },
        services: {
            code: "INSURANCE",
            parameter: "300.00",
            sum: 2.14,
            total_sum: 2.25,
            discount_percent: 0,
            discount_sum: 0.0,
            vat_rate: 5.0,
            vat_sum: 0.11,
        },
        packages: [
            {
                number: "1",
                barcode: "000513478230",
                weight: 200,
                length: 20,
                width: 15,
                weight_volume: 60,
                weight_calc: 200,
                height: 1,
                comment: "приложена опись",
                items: [
                    {
                        name: "Книга",
                        ware_key: "BOOK123",
                        payment: {
                            value: 300.0,
                            vat_sum: 0,
                        },
                        weight: 200,
                        weight_gross: 200,
                        amount: 1,
                        delivery_amount: 0,
                        return_item_detail: {},
                        excise: false,
                        cost: 300,
                    },
                ],
                package_id: "339fe7a8-2e78-4230-b960-5875564e577a",
            },
        ],
        statuses: [
            {
                code: "CREATED", // СОЗДАННЫЙ
                name: "Создан",
                date_time: "2025-02-14T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ACCEPTED", // ПРИНЯЛ
                name: "Принят",
                date_time: "2025-02-15T08:02:36+0000",
                city: "Офис СДЭК",
            },
        ],
        is_client_return: false,
        delivery_mode: "3",
        delivery_detail: {
            delivery_sum: 338.1,
            total_sum: 357.25,
            payment_info: [],
            delivery_vat_rate: 5.0,
            delivery_vat_sum: 16.9,
            delivery_discount_percent: 0,
            delivery_discount_sum: 0,
        },
        calls: {},
        requests: [
            {
                request_uuid: "841b7969-eeca-48b6-8b23-0fa2156709e5",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:37+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a1b545de-775c-426f-b211-0cafa4057729",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:34+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4f32c80a-9be0-411f-b424-72900d72568e",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:22+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "fd9a134f-3e14-46e8-983a-34cdf9128acd",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "91a82423-fe6b-4931-8644-104fd2650bd6",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:48+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "f6b18222-f235-4eac-9b9d-c13bbc094574",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:45+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5690face-703a-499e-8e61-a0f4817d3ac0",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:41+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "e855ab75-0ee2-48a6-8178-90585e07daa3",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:38+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5e126f91-0d27-40ac-9040-9898a2a20bc1",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:20+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "8620bb4d-e1fe-4a70-b09e-170e856edac7",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:17+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4412b754-71e8-4751-bcb5-9256bce15c8a",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:47+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a647dc70-130a-4977-a9c7-ea680a3ae22d",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:35+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "093a8530-4ef2-4078-a859-60df23393fea",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:34+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "3e1d69b9-f1f3-4cbb-835f-65e9cdce97c8",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:31+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "d1ed2fda-9acc-4151-8418-c45699909364",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "53f4374b-b165-4a30-92a0-2ac4b783f0ba",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:39+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "8073327f-6739-4443-b209-878c99c8c3a3",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:36+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "f15a8ea5-0fd4-4aae-b75b-5a272c285b03",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:33+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "bb666053-54c6-42a4-801f-10c1fb19d7ac",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:22+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "7fbb4064-6560-4174-9eeb-bc118f9fb20d",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ac335d5e-4670-4af9-9292-70167a11b262",
                type: "UPDATE",
                date_time: "2025-02-20T09:42:12+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ddff435d-39fb-468e-a97e-2da82d9a1e67",
                type: "UPDATE",
                date_time: "2025-02-20T09:40:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "c5d27cc9-d738-4fcc-995d-66571e667da0",
                type: "UPDATE",
                date_time: "2025-02-20T09:38:57+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "85f21cf4-4ba5-4108-85dd-b619b183b467",
                type: "UPDATE",
                date_time: "2025-02-20T09:06:47+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "effed112-5365-48f9-a123-32fe2113d3f2",
                type: "UPDATE",
                date_time: "2025-02-20T09:04:08+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ab643505-45e6-49a0-95af-8aa8a6aeae05",
                type: "UPDATE",
                date_time: "2025-02-20T08:49:03+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "49bf5500-5f73-4104-ae74-37f2104c2250",
                type: "UPDATE",
                date_time: "2025-02-18T11:01:02+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "e4ba9bf4-cbcf-4b78-b99c-d4dee157be42",
                type: "UPDATE",
                date_time: "2025-02-18T11:00:09+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "b8047e65-c1be-4847-ac51-b1841dbfa689",
                type: "CREATE",
                date_time: "2025-02-14T08:02:36+0000",
                state: "SUCCESSFUL",
            },
        ],
        related_entities: [],
    },
    {
        entity: {
            uuid: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe9", // id
            type: 1,
            is_return: false,
            is_reverse: false,
            cdek_number: "10084985789", // Номер
            number: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe5",
            tariff_code: 137,
            comment: "Твой коментарий-9", // Коментарий
            shipment_point: "LFG1",
            delivery_point: "LFG1",
            items_cost_currency: "RUB",
            recipient_currency: "RUB",
            delivery_recipient_cost: {},
        },
        sender: {
            // отправитель
            company: 'ООО "Рога и копыта-9"',
            name: "Иван Иванов-9",
            contragent_type: "LEGAL_ENTITY",
            passport_requirements_satisfied: false,
        },
        seller: {
            // продавец
            name: "Петр Петрович-9",
        },
        recipient: {
            // получатель
            company: 'ООО "Покупатель-9"',
            name: "Семен Семенович-9", // представитель получателя
            phones: [{ number: "70000000009" }],
            passport_requirements_satisfied: false,
        },
        from_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Москва", // Из какого города
            country_code: "RU",
            country: "Россия",
            region: "Московская область", // Из какого региона
            region_code: 7,
            longitude: 39.356765,
            latitude: 46.313532,
            address: "Россия, Московская область, Москва, ул. Станционная, 2", // Полный адрес
            postal_code: "212345",
        },
        to_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Казань", // В какой город
            country_code: "RU",
            country: "Россия",
            region: "Татарстан", // В какой регион
            region_code: 7,
            longitude: 38.975312,
            latitude: 45.035471,
            address: "Казань, улица Большевитская, 9", // Полный адрес
            postal_code: "545906",
        },
        services: {
            code: "INSURANCE",
            parameter: "300.00",
            sum: 2.14,
            total_sum: 2.25,
            discount_percent: 0,
            discount_sum: 0.0,
            vat_rate: 5.0,
            vat_sum: 0.11,
        },
        packages: [
            {
                number: "1",
                barcode: "000513478230",
                weight: 200,
                length: 20,
                width: 15,
                weight_volume: 60,
                weight_calc: 200,
                height: 1,
                comment: "приложена опись",
                items: [
                    {
                        name: "Книга",
                        ware_key: "BOOK123",
                        payment: {
                            value: 300.0,
                            vat_sum: 0,
                        },
                        weight: 200,
                        weight_gross: 200,
                        amount: 1,
                        delivery_amount: 0,
                        return_item_detail: {},
                        excise: false,
                        cost: 300,
                    },
                ],
                package_id: "339fe7a8-2e78-4230-b960-5875564e577a",
            },
        ],
        statuses: [
            {
                code: "CREATED", // СОЗДАННЫЙ
                name: "Создан",
                date_time: "2025-02-14T08:02:36+0000",
                city: "Офис СДЭК",
            },
        ],
        is_client_return: false,
        delivery_mode: "3",
        delivery_detail: {
            delivery_sum: 338.1,
            total_sum: 357.25,
            payment_info: [],
            delivery_vat_rate: 5.0,
            delivery_vat_sum: 16.9,
            delivery_discount_percent: 0,
            delivery_discount_sum: 0,
        },
        calls: {},
        requests: [
            {
                request_uuid: "841b7969-eeca-48b6-8b23-0fa2156709e5",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:37+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a1b545de-775c-426f-b211-0cafa4057729",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:34+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4f32c80a-9be0-411f-b424-72900d72568e",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:22+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "fd9a134f-3e14-46e8-983a-34cdf9128acd",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "91a82423-fe6b-4931-8644-104fd2650bd6",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:48+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "f6b18222-f235-4eac-9b9d-c13bbc094574",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:45+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5690face-703a-499e-8e61-a0f4817d3ac0",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:41+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "e855ab75-0ee2-48a6-8178-90585e07daa3",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:38+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5e126f91-0d27-40ac-9040-9898a2a20bc1",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:20+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "8620bb4d-e1fe-4a70-b09e-170e856edac7",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:17+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4412b754-71e8-4751-bcb5-9256bce15c8a",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:47+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a647dc70-130a-4977-a9c7-ea680a3ae22d",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:35+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "093a8530-4ef2-4078-a859-60df23393fea",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:34+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "3e1d69b9-f1f3-4cbb-835f-65e9cdce97c8",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:31+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "d1ed2fda-9acc-4151-8418-c45699909364",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "53f4374b-b165-4a30-92a0-2ac4b783f0ba",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:39+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "8073327f-6739-4443-b209-878c99c8c3a3",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:36+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "f15a8ea5-0fd4-4aae-b75b-5a272c285b03",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:33+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "bb666053-54c6-42a4-801f-10c1fb19d7ac",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:22+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "7fbb4064-6560-4174-9eeb-bc118f9fb20d",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ac335d5e-4670-4af9-9292-70167a11b262",
                type: "UPDATE",
                date_time: "2025-02-20T09:42:12+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ddff435d-39fb-468e-a97e-2da82d9a1e67",
                type: "UPDATE",
                date_time: "2025-02-20T09:40:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "c5d27cc9-d738-4fcc-995d-66571e667da0",
                type: "UPDATE",
                date_time: "2025-02-20T09:38:57+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "85f21cf4-4ba5-4108-85dd-b619b183b467",
                type: "UPDATE",
                date_time: "2025-02-20T09:06:47+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "effed112-5365-48f9-a123-32fe2113d3f2",
                type: "UPDATE",
                date_time: "2025-02-20T09:04:08+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ab643505-45e6-49a0-95af-8aa8a6aeae05",
                type: "UPDATE",
                date_time: "2025-02-20T08:49:03+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "49bf5500-5f73-4104-ae74-37f2104c2250",
                type: "UPDATE",
                date_time: "2025-02-18T11:01:02+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "e4ba9bf4-cbcf-4b78-b99c-d4dee157be42",
                type: "UPDATE",
                date_time: "2025-02-18T11:00:09+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "b8047e65-c1be-4847-ac51-b1841dbfa689",
                type: "CREATE",
                date_time: "2025-02-14T08:02:36+0000",
                state: "SUCCESSFUL",
            },
        ],
        related_entities: [],
    },
    {
        entity: {
            uuid: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe10", // id
            type: 1,
            is_return: false,
            is_reverse: false,
            cdek_number: "10084985780", // Номер
            number: "f2d45fd9-0a0c-4c1a-b704-d32adcaa5fe5",
            tariff_code: 137,
            comment: "Твой коментарий-1", // Коментарий
            shipment_point: "LFG1",
            delivery_point: "LFG1",
            items_cost_currency: "RUB",
            recipient_currency: "RUB",
            delivery_recipient_cost: {},
        },
        sender: {
            // отправитель
            company: 'ООО "Рога и копыта-1"',
            name: "Иван Иванов-1",
            contragent_type: "LEGAL_ENTITY",
            passport_requirements_satisfied: false,
        },
        seller: {
            // продавец
            name: "Петр Петрович-1",
        },
        recipient: {
            // получатель
            company: 'ООО "Покупатель-1"',
            name: "Семен Семенович-1", // представитель получателя
            phones: [{ number: "70000000000" }],
            passport_requirements_satisfied: false,
        },
        from_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Москва", // Из какого города
            country_code: "RU",
            country: "Россия",
            region: "Московская область", // Из какого региона
            region_code: 7,
            longitude: 39.356765,
            latitude: 46.313532,
            address: "Россия, Московская область, Москва, ул. Станционная, 2", // Полный адрес
            postal_code: "212345",
        },
        to_location: {
            code: 1607,
            city_uuid: "6cf70ab9-b2d0-40e9-8269-8af1461ee16a",
            city: "Краснодар", // В какой город
            country_code: "RU",
            country: "Россия",
            region: "Краснодарский край", // В какой регион
            region_code: 7,
            longitude: 38.975312,
            latitude: 45.035471,
            address: "Краснодар, улица Тихая 7", // Полный адрес
            postal_code: "545906",
        },
        services: {
            code: "INSURANCE",
            parameter: "300.00",
            sum: 2.14,
            total_sum: 2.25,
            discount_percent: 0,
            discount_sum: 0.0,
            vat_rate: 5.0,
            vat_sum: 0.11,
        },
        packages: [
            {
                number: "1",
                barcode: "000513478230",
                weight: 200,
                length: 20,
                width: 15,
                weight_volume: 60,
                weight_calc: 200,
                height: 1,
                comment: "приложена опись",
                items: [
                    {
                        name: "Книга",
                        ware_key: "BOOK123",
                        payment: {
                            value: 300.0,
                            vat_sum: 0,
                        },
                        weight: 200,
                        weight_gross: 200,
                        amount: 1,
                        delivery_amount: 0,
                        return_item_detail: {},
                        excise: false,
                        cost: 300,
                    },
                ],
                package_id: "339fe7a8-2e78-4230-b960-5875564e577a",
            },
        ],
        statuses: [
            {
                code: "CREATED", // СОЗДАННЫЙ
                name: "Создан",
                date_time: "2025-02-14T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ACCEPTED", // ПРИНЯЛ
                name: "Принят",
                date_time: "2025-02-15T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "CANCELLED", // Отменено
                name: "Отменено",
                date_time: "2025-02-16T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "ON_THE_WAY", // В пути
                name: "В пути",
                date_time: "2025-02-17T08:02:36+0000",
                city: "Офис СДЭК",
            },
            {
                code: "DELIVERED", // Доставлено
                name: "Доставлено",
                date_time: "2025-02-18T08:02:36+0000",
                city: "Офис СДЭК",
            },
        ],
        is_client_return: false,
        delivery_mode: "3",
        delivery_detail: {
            delivery_sum: 338.1,
            total_sum: 357.25,
            payment_info: [],
            delivery_vat_rate: 5.0,
            delivery_vat_sum: 16.9,
            delivery_discount_percent: 0,
            delivery_discount_sum: 0,
        },
        calls: {},
        requests: [
            {
                request_uuid: "841b7969-eeca-48b6-8b23-0fa2156709e5",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:37+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a1b545de-775c-426f-b211-0cafa4057729",
                type: "UPDATE",
                date_time: "2025-02-20T11:40:34+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4f32c80a-9be0-411f-b424-72900d72568e",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:22+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "fd9a134f-3e14-46e8-983a-34cdf9128acd",
                type: "UPDATE",
                date_time: "2025-02-20T11:25:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "91a82423-fe6b-4931-8644-104fd2650bd6",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:48+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "f6b18222-f235-4eac-9b9d-c13bbc094574",
                type: "UPDATE",
                date_time: "2025-02-20T11:22:45+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5690face-703a-499e-8e61-a0f4817d3ac0",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:41+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "e855ab75-0ee2-48a6-8178-90585e07daa3",
                type: "UPDATE",
                date_time: "2025-02-20T11:19:38+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "5e126f91-0d27-40ac-9040-9898a2a20bc1",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:20+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "8620bb4d-e1fe-4a70-b09e-170e856edac7",
                type: "UPDATE",
                date_time: "2025-02-20T11:17:17+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "4412b754-71e8-4751-bcb5-9256bce15c8a",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:47+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "a647dc70-130a-4977-a9c7-ea680a3ae22d",
                type: "UPDATE",
                date_time: "2025-02-20T09:58:35+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "093a8530-4ef2-4078-a859-60df23393fea",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:34+0000",
                state: "INVALID",
                errors: [
                    {
                        code: "v2_recipient_location_not_recognized",
                        message: "Recipient location is not recognized",
                    },
                ],
            },
            {
                request_uuid: "3e1d69b9-f1f3-4cbb-835f-65e9cdce97c8",
                type: "UPDATE",
                date_time: "2025-02-20T09:56:31+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "d1ed2fda-9acc-4151-8418-c45699909364",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "53f4374b-b165-4a30-92a0-2ac4b783f0ba",
                type: "UPDATE",
                date_time: "2025-02-20T09:53:39+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "8073327f-6739-4443-b209-878c99c8c3a3",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:36+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "f15a8ea5-0fd4-4aae-b75b-5a272c285b03",
                type: "UPDATE",
                date_time: "2025-02-20T09:50:33+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "bb666053-54c6-42a4-801f-10c1fb19d7ac",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:22+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "7fbb4064-6560-4174-9eeb-bc118f9fb20d",
                type: "UPDATE",
                date_time: "2025-02-20T09:45:19+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ac335d5e-4670-4af9-9292-70167a11b262",
                type: "UPDATE",
                date_time: "2025-02-20T09:42:12+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ddff435d-39fb-468e-a97e-2da82d9a1e67",
                type: "UPDATE",
                date_time: "2025-02-20T09:40:43+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "c5d27cc9-d738-4fcc-995d-66571e667da0",
                type: "UPDATE",
                date_time: "2025-02-20T09:38:57+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "85f21cf4-4ba5-4108-85dd-b619b183b467",
                type: "UPDATE",
                date_time: "2025-02-20T09:06:47+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "effed112-5365-48f9-a123-32fe2113d3f2",
                type: "UPDATE",
                date_time: "2025-02-20T09:04:08+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "ab643505-45e6-49a0-95af-8aa8a6aeae05",
                type: "UPDATE",
                date_time: "2025-02-20T08:49:03+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "49bf5500-5f73-4104-ae74-37f2104c2250",
                type: "UPDATE",
                date_time: "2025-02-18T11:01:02+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "e4ba9bf4-cbcf-4b78-b99c-d4dee157be42",
                type: "UPDATE",
                date_time: "2025-02-18T11:00:09+0000",
                state: "SUCCESSFUL",
            },
            {
                request_uuid: "b8047e65-c1be-4847-ac51-b1841dbfa689",
                type: "CREATE",
                date_time: "2025-02-14T08:02:36+0000",
                state: "SUCCESSFUL",
            },
        ],
        related_entities: [],
    },
];