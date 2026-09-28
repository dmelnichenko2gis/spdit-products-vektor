// Данные слоёв
const layersData = {
    standard: [
        {
            file: "City", icon: "🏙️", title: "Населённые пункты",
            geomType: "Полигон (Polygon)", content: "Границы населенных пунктов",
            attrs: [
                {name: "City", type: "текст", desc: "Название населенного пункта"},
                {name: "CityId", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "District", icon: "📍", title: "Административный район",
            geomType: "Полигон (Polygon)", content: "Границы административных районов",
            attrs: [
                {name: "CityId", type: "текст", desc: "Идентификатор населенного пункта (стаб)"},
                {name: "District", type: "текст", desc: "Название района"},
                {name: "DistrictId", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "Division", icon: "🗂️", title: "Административные округа",
            geomType: "Полигон (Polygon)", content: "Границы округов",
            attrs: [
                {name: "Division", type: "текст", desc: "Название округа"},
                {name: "CityId", type: "текст", desc: "Идентификатор населенного пункта (стаб)"},
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "House", icon: "🏠", title: "Дома",
            geomType: "Полигон (Polygon)", content: "Дома",
            attrs: [
                {name: "Name", type: "текст", desc: "Название здания"},
                {name: "Type", type: "текст", desc: "Тип здания: Административные сооружения, Вход в переход, Дома_новостройки, Дошкольные, Жилые дома, Известный по назначению, Киоски, Навес, Станция метро, Частные дома, Школы"},
                {name: "Caption", type: "текст", desc: "Подпись здания"},
                {name: "Purpose", type: "текст", desc: "Назначение"},
                {name: "PostIndex", type: "число", desc: "Почтовый индекс"},
                {name: "Elevation", type: "число", desc: "Максимальная этажность"},
                {name: "Entrance", type: "число", desc: "Количество подъездов"},
                {name: "Apartments", type: "число", desc: "Количество квартир (доп. атрибут)"},
                {name: "District", type: "текст", desc: "Название района"},
                {name: "DistrictId", type: "текст", desc: "Идентификатор района (стаб)"},
                {name: "HouseId", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "City", type: "текст", desc: "Название Населенного пункта"},
                {name: "CityId", type: "текст", desc: "Идентификатор населенного пункта (стаб)"},
                {name: "Street", type: "текст", desc: "Название улицы и тип"},
                {name: "StreetId1", type: "текст", desc: "Идентификатор улицы (стаб)"},
                {name: "Number", type: "текст", desc: "Номер дома"},
                {name: "Street2", type: "текст", desc: "Название улицы и тип"},
                {name: "StreetId2", type: "текст", desc: "Идентификатор улицы (стаб)"},
                {name: "Number2", type: "текст", desc: "Номер дома"},
                {name: "Street3", type: "текст", desc: "Название улицы и тип"},
                {name: "StreetId3", type: "текст", desc: "Идентификатор улицы (стаб)"},
                {name: "Number3", type: "текст", desc: "Номер дома"},
                {name: "Street4", type: "текст", desc: "Название улицы и тип"},
                {name: "StreetId4", type: "текст", desc: "Идентификатор улицы (стаб)"},
                {name: "Number4", type: "текст", desc: "Номер дома"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "Quarter", icon: "🧩", title: "Кварталы",
            geomType: "Полигон (Polygon)", content: "Кварталы",
            attrs: [
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Type", type: "текст", desc: "Тип квартала: Административная территория, Взлетно-посадочные полосы, Вспомогательные кварталы, Газоны внутридворовые, Гаражи, Горнолыжные трассы, Дачные территории, Дорожное полотно / асфальт, Жилые, Зелёные насаждения, Зимние развлечения, Кварталы под мостами, Кладбища, Клумбы, Парк, Перроны, Пешеходные территории, Пирсы / причалы, Растительность внутридворовая, Растительность загородная, Спортивные территории, Территория предприятий, Частный сектор"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "Bridge", icon: "🌉", title: "Мосты",
            geomType: "Полилиния (Polyline)", content: "Мосты",
            attrs: [
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "RiverLine", icon: "🏞️", title: "Река_линейная",
            geomType: "Полилиния (Polyline)", content: "Реки линейные",
            attrs: [
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "RiverPolygon", icon: "🌊", title: "Река_площадная",
            geomType: "Полигон (Polygon)", content: "Реки площадные",
            attrs: [
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "NameRiver", icon: "💧", title: "Название реки, Подписи мелких рек, Название острова, Туннели, Направление течения, Название большого острова",
            geomType: "Полилиния (Polyline)", content: "Подписи рек",
            attrs: [
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Name", type: "текст", desc: "Название реки"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "RiverDirect", icon: "➡️", title: "Направление течения",
            geomType: "Полилиния (Polyline)", content: "Направление течения",
            attrs: [
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "Street", icon: "🛣️", title: "Улицы",
            geomType: "Полилиния (Polyline)", content: "Улицы",
            attrs: [
                {name: "CityId", type: "текст", desc: "Идентификатор населенного пункта (стаб)"},
                {name: "City", type: "текст", desc: "Название Населенного пункта"},
                {name: "StreetId", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Name", type: "текст", desc: "Название улицы"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "Zven", icon: "🚆", title: "ЖД полотно",
            geomType: "Полилиния (Polyline)", content: "Ж/д полотно (Электропоезд)",
            attrs: [
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "LivingArea", icon: "🏘️", title: "Жилмассивы",
            geomType: "Полигон (Polygon)", content: "Жилмассивы",
            attrs: [
                {name: "Name", type: "текст", desc: "Название жилмассива"},
                {name: "CityId", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "RailwayStops", icon: "🚉", title: "Остановки ЖД",
            geomType: "Точка (Point)", content: "Остановки ЖД",
            attrs: [
                {name: "Name", type: "текст", desc: "Название"},
                {name: "CityId", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "Tunnel", icon: "🚇", title: "Туннели",
            geomType: "Полилиния (Polyline)", content: "Туннели",
            attrs: [
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        }
    ],
    additional: [
        {
            file: "HouseEnter", icon: "🚪", title: "Вход в здание",
            geomType: "Точка (Point)", content: "Вход в здание",
            attrs: [
                {name: "IsPrimary", type: "число", desc: "0 – неглавный, 1 - главный"},
                {name: "HouseId", type: "текст", desc: "Идентификатор здания (стаб)"},
                {name: "Name", type: "текст", desc: "Название входа"},
                {name: "Numer", type: "текст", desc: "Номер подъезда"},
                {name: "IsPorch", type: "число", desc: "Признак подъезда: 0 – нет, 1 – да"},
                {name: "Intercom", type: "число", desc: "Наличие домофона: 0 – нет, 1 – да"},
                {name: "HasRamp", type: "число", desc: "Доступная среда: 0 – нет, 1 – да"},
                {name: "Apartments", type: "текст", desc: "Диапазон квартир"},
                {name: "HouseEntId", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "HouseEnterDirection", icon: "↗️", title: "Направление входа в здание",
            geomType: "Полилиния (Polyline)", content: "Направление входа в здание",
            attrs: [
                {name: "HouseEntId", type: "текст", desc: "Идентификатор входа в здание (стаб)"},
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "RoadGraph", icon: "🛤️", title: "Дорожный граф",
            geomType: "Полилиния (Polyline)", content: "Дорожный граф",
            attrs: [
                {name: "Arrow", type: "число", desc: "Направление движения по ребру: 0 - перекрыто, 1 - только прямо, 2 - только обратно, 3 - двустороннее"},
                {name: "Uturn", type: "число", desc: "Признак разворота на ребре: 0 - запрещен, 1 - в прямом направлении, 2 - в обратном направлении, 3 - в обоих направлениях"},
                {name: "Width", type: "число", desc: "Ширина звена в метрах"},
                {name: "ZLevelFrom", type: "число", desc: "Z-уровень начала звена"},
                {name: "ZLevelTo", type: "число", desc: "Z-уровень окончания звена"},
                {name: "RoadClId", type: "число", desc: "Код класса дорог (сис-код): 1 - Внутриквартальные проезды, 2 - Дороги без покрытия, 3 - Прочие улицы города, 4 - Основные улицы города, 5 - Магистральные улицы города, 6 - Междугородние трассы, 7 - Федеральные трассы, 8 - Велосипедные дорожки, 9 – Пешеходные дорожки"},
                {name: "StreetId", type: "текст", desc: "Идентификатор улицы (стаб)"},
                {name: "EdgeTypeId", type: "число", desc: "Код типа звена (сис-код): 0 - Обычное звено, 1 - Соединение, 2 - Круговое движение"},
                {name: "RBndStrght", type: "число", desc: "Полосность прямого направления"},
                {name: "RBndBck", type: "число", desc: "Полосность обратного направления"},
                {name: "IsFerry", type: "текст", desc: "Признак переправы"},
                {name: "Style", type: "число", desc: "Системный стиль"},
                {name: "RoadGrId", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "StreetName", type: "текст", desc: "Название улицы"},
                {name: "Speed", type: "число", desc: "Стандартная скорость звена"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "Fence", icon: "🚧", title: "Заборы",
            geomType: "Полилиния (Polyline)", content: "Заборы",
            attrs: [
                {name: "Type", type: "текст", desc: "Тип забора"},
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "Gateway", icon: "🚦", title: "Проход-проезд",
            geomType: "Точка (Point)", content: "Проход-проезд",
            attrs: [
                {name: "BarrType", type: "число", desc: "Код типа ограждения: 0 - проход-проезд, 1 - ворота, 2 - шлагбаум, 3 - турникет, 4 - калитка"},
                {name: "GatewType", type: "число", desc: "Код типа проезда: 0 - центральный, 1 - дополнительный, 2 - служебный"},
                {name: "PaymType", type: "число", desc: "Код типа оплаты: 0 - бесплатный, 1 - платный, 2 - по пропускам"},
                {name: "X", type: "число", desc: "Координата X"},
                {name: "Y", type: "число", desc: "Координата Y"},
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "Sights", icon: "🏛️", title: "Достопримечательности",
            geomType: "Точка (Point)", content: "Достопримечательности",
            attrs: [
                {name: "Purpose", type: "текст", desc: "Назначение достопримечательности"},
                {name: "StartDate", type: "текст", desc: "Дата начала сезона"},
                {name: "EndDate", type: "текст", desc: "Дата окончания сезона"},
                {name: "HouseId", type: "текст", desc: "Идентификатор здания (стаб)"},
                {name: "Name", type: "текст", desc: "Название"},
                {name: "SightId", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "X", type: "число", desc: "Координата X"},
                {name: "Y", type: "число", desc: "Координата Y"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "ParkingsGround", icon: "🅿️", title: "Парковки наземные",
            geomType: "Точка (Point)", content: "Парковки наземные",
            attrs: [
                {name: "Purpose", type: "текст", desc: "Назначение"},
                {name: "Name", type: "текст", desc: "Название"},
                {name: "LevelCount", type: "число", desc: "Количество уровней"},
                {name: "HouseId", type: "текст", desc: "Идентификатор здания, к которому привязана парковка (стаб)"},
                {name: "X", type: "число", desc: "Координата X"},
                {name: "Y", type: "число", desc: "Координата Y"},
                {name: "MinCpcty", type: "число", desc: "Мин. вместимость"},
                {name: "MaxCpcty", type: "число", desc: "Макс. вместимость"},
                {name: "Charged", type: "число", desc: "Платность: 0 – бесплатная, 1 - платная"},
                {name: "ParkingAcc", type: "текст", desc: "Доступность: общедоступная, для клиентов, для инвалидов"},
                {name: "Synonym", type: "текст", desc: "Текстовый синоним"},
                {name: "ParkingTer", type: "число", desc: "Привязка к территории парковок (сис-код)"},
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"}
            ]
        },
        {
            file: "ParkingsMultilevel", icon: "🏢", title: "Парковки многоуровневые",
            geomType: "Точка (Point)", content: "Парковки многоуровневые",
            attrs: [
                {name: "Purpose", type: "текст", desc: "Назначение"},
                {name: "Name", type: "текст", desc: "Название"},
                {name: "LevelCount", type: "число", desc: "Количество уровней"},
                {name: "HouseId", type: "текст", desc: "Идентификатор здания, к которому привязана парковка (стаб)"},
                {name: "X", type: "число", desc: "Координата X"},
                {name: "Y", type: "число", desc: "Координата Y"},
                {name: "MinCpcty", type: "число", desc: "Мин. вместимость"},
                {name: "MaxCpcty", type: "число", desc: "Макс. вместимость"},
                {name: "Charged", type: "число", desc: "Платность: 0 – бесплатная, 1 - платная"},
                {name: "ParkingAcc", type: "текст", desc: "Доступность: общедоступная, для клиентов, для инвалидов"},
                {name: "Synonym", type: "текст", desc: "Текстовый синоним"},
                {name: "ParkingTer", type: "число", desc: "Привязка к территории парковок (сис-код)"},
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "ParkingsUnderground", icon: "🚗", title: "Парковки подземные",
            geomType: "Точка (Point)", content: "Парковки подземные",
            attrs: [
                {name: "Purpose", type: "текст", desc: "Назначение"},
                {name: "Name", type: "текст", desc: "Название"},
                {name: "LevelCount", type: "число", desc: "Количество уровней"},
                {name: "HouseId", type: "текст", desc: "Идентификатор здания, к которому привязана парковка (стаб)"},
                {name: "X", type: "число", desc: "Координата X"},
                {name: "Y", type: "число", desc: "Координата Y"},
                {name: "MinCpcty", type: "число", desc: "Мин. вместимость"},
                {name: "MaxCpcty", type: "число", desc: "Макс. вместимость"},
                {name: "Charged", type: "число", desc: "Платность: 0 – бесплатная, 1 - платная"},
                {name: "ParkingAcc", type: "текст", desc: "Доступность: общедоступная, для клиентов, для инвалидов"},
                {name: "Synonym", type: "текст", desc: "Текстовый синоним"},
                {name: "ParkingTer", type: "число", desc: "Привязка к территории парковок (сис-код)"},
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"}
            ]
        },
        {
            file: "ParkingTerritory", icon: "🅿️", title: "Территория парковок",
            geomType: "Полигон (Polygon)", content: "Территория парковок",
            attrs: [
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "TransportEdge", icon: "🚌", title: "Звенья Транспортной сети",
            geomType: "Полилиния (Polyline)", content: "Транспортный граф",
            attrs: [
                {name: "Type", type: "текст", desc: "Тип звена"},
                {name: "Id", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "TransportStops", icon: "🚏", title: "Остановки ОТ",
            geomType: "Точка (Point)", content: "Остановки общественного транспорта",
            attrs: [
                {name: "TrType", type: "текст", desc: "Тип транспорта"},
                {name: "Name", type: "текст", desc: "Название"},
                {name: "CityId", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "TypeCode", type: "число", desc: "Код типа остановки (сискод)"},
                {name: "TrStopId", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "X", type: "число", desc: "Координата X"},
                {name: "Y", type: "число", desc: "Координата Y"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "Firms", icon: "🏢", title: "Организации",
            geomType: "Точка (Point)", content: "Организации",
            attrs: [
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "Place", icon: "📌", title: "Места",
            geomType: "Полигон (Polygon)", content: "Места",
            attrs: [
                {name: "Name", type: "текст", desc: "Название места"},
                {name: "Id", type: "число", desc: "Идентификационный номер объекта"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "RoadCrosses", icon: "🔀", title: "Перекрестки",
            geomType: "Точка (Point)", content: "Перекрёстки",
            attrs: [
                {name: "DeadEnd", type: "число", desc: "Тупик: 0 – нет, 1 - да"},
                {name: "Junction", type: "текст", desc: "Названия маневра"},
                {name: "Control", type: "число", desc: "Управляемый: 0 - нет, 1 - да, 2 - только днем"},
                {name: "Synonym", type: "текст", desc: "Синоним"},
                {name: "ZLevel", type: "число", desc: "Z-уровень"},
                {name: "GatewayId", type: "текст", desc: "Идентификатор перехода (стаб)"},
                {name: "CrossesId", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "RestrIdN*", type: "текст", desc: "Идентификатор запрещенного маневра N* (стаб)"},
                {name: "FromIdN*", type: "текст", desc: "Идентификатор исходного звена N (стаб)"},
                {name: "TranspIdN*", type: "число", desc: "Код вида транспорта (сис-код): 1 - На автомобиле, 2 - На велосипеде, 3 - Пешком"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        },
        {
            file: "DeadEnds", icon: "⛔", title: "Тупики",
            geomType: "Точка (Point)", content: "Тупики",
            attrs: [
                {name: "ZLevel", type: "число", desc: "Z-уровень"},
                {name: "GatewayId", type: "текст", desc: "Идентификатор перехода (стаб)"},
                {name: "CrossesId", type: "текст", desc: "Идентификатор (стаб)"},
                {name: "DeadEnd", type: "число", desc: "Тупик: 0 – нет, 1 - да"}
            ]
        },
        {
            file: "RoadSigns", icon: "🚸", title: "Дорожные знаки",
            geomType: "—", content: "Въезд в населенный пункт; выезд из населенного пункта; искусственная неровность; конец всех ограничений; место для разворота; ограничение скорости; пешеходный переход",
            attrs: [
                {name: "EdgeId", type: "число", desc: "Идентификатор звена дорожного графа, на котором находится дорожный знак"},
                {name: "MapClassId", type: "число", desc: "Идентификатор слоя: 1773-Ограничение скорости, 1774-Конец ограничения скорости, 1775-Конец всех ограничений, 1776-Въезд в населенный пункт, 1777-Выезд из населенного пункта, 1778-Место для разворота, 1779-Пешеходный переход, 1780-Искусственная неровность, 1781-Направление движения по полосам, 1859-Проезд запрещён, 2762-Полоса для маршрутных транспортных средств, 2763-Запрещающие знаки, 2764-Предписывающие знаки, 2765-Начало одностороннего движения, 2766-Конец одностороннего движения, 2818-Конец полосы для маршрутных транспортных средств, 3262-Дорога с полосой для маршрутных транспортных средств, 3263-Конец дороги с полосой для маршрутных транспортных средств, 4982-Главная дорога, 4983-Пересечение со второстепенной дорогой, 4984-Примыкание второстепенной дороги, 4985-Уступите дорогу, 4986-Движение без остановки запрещено, 4987-Движение запрещено, 4988-Остановка запрещена, 4989-Стоянка запрещена, 4990-Круговое движение, 4991-Парковка, 4992-Дорожные работы, 5011-Остановка наземного транспорта, 5015-Ограничение длины, 5016-Ограничение высоты, 5017-Ограничение ширины, 5018-Запрет движения грузовиков, 5019-Фактическая масса авто, 5020-Ограничение нагрузки на ось, 5021-Движение транспортных средств с опасными грузами запрещено, 5022-Движение транспортных средств с взрывчатыми и легковоспламеняющимися грузами запрещено, 5027-Туалет, 5028-Пункт питания, 5029-Мойка автомобилей, 5030-Техническое обслуживание автомобилей, 5031-Автозаправочная станция, 5032-Пост дорожно-патрульной службы, 5033-Место для отдыха"},
                {name: "Side", type: "число", desc: "Месторасположение знака по отношению к звену: 1 - по направлению звена, 2 - в обратном направлении, 3 - для обоих направлений"},
                {name: "SpeedLimit", type: "число", desc: "Ограничение по скорости"},
                {name: "Type", type: "текст", desc: "Тип"},
                {name: "ZoneDistan", type: "число", desc: "Зона действия (м)"},
                {name: "Id", type: "число", desc: "Идентификационный номер объекта"},
                {name: "Shape", type: "—", desc: "Геометрия объекта"}
            ]
        }
    ]
};

// =======================================================
// РАЗДЕЛ: ДОРОЖНЫЙ ГРАФ ESRI
// =======================================================

layersData.esri = [
    {
        file: "RestrictedTurns",
        icon: "↩️",
        title: "Повороты дорожного графа ESRI",
        geomType: "Полилиния (Polyline)",
        content: "Повороты",
        attrs: [
            {
                name: "Id",
                type: "текст",
                desc: "Идентификатор (стаб)"
            },
            {
                name: "Edge1End",
                type: "текст",
                desc: "Показывает, проходит ли поворот через конец первого ребра. Y означает, что поворот проходит через конец первого ребра, а N означает, что поворот проходит через начало первого ребра."
            },
            {
                name: "Edge1FCID",
                type: "число",
                desc: "Идентификатор ID класса объектов линейного объекта, обозначающий первое ребро поворота."
            },
            {
                name: "Edge1FID",
                type: "число",
                desc: "Идентификатор ID объектов линейного объекта, обозначающий первое ребро поворота."
            },
            {
                name: "Edge1Pos",
                type: "число",
                desc: "Положение вдоль линейного объекта, обозначающее первое ребро поворота."
            },
            {
                name: "Edge2FCID",
                type: "число",
                desc: "Идентификатор ID класса объектов линейного объекта, обозначающий второе ребро поворота."
            },
            {
                name: "Edge2FID",
                type: "число",
                desc: "Идентификатор ID объектов линейного объекта, обозначающий второе ребро поворота."
            },
            {
                name: "Edge2Pos",
                type: "число",
                desc: "Положение вдоль линейного объекта, обозначающее второе ребро поворота."
            },
            {
                name: "Edge3FCID",
                type: "число",
                desc: "Идентификатор ID класса объектов линейного объекта, обозначающий третье ребро многореберного поворота."
            },
            {
                name: "Edge3FID",
                type: "число",
                desc: "Идентификатор ID объектов линейного объекта, обозначающий третье ребро многореберного поворота."
            },
            {
                name: "Edge3Pos",
                type: "число",
                desc: "Положение вдоль линейного объекта, обозначающее третье ребро многореберного поворота."
            },
            {
                name: "Shape",
                type: "—",
                desc: "Геометрия объекта"
            }
        ]
    },
    {
        file: "Streets",
        icon: "🛣️",
        title: "Дорожный граф ESRI",
        geomType: "Полилиния (Polyline)",
        content: "Дорожный граф",
        attrs: [
            {
                name: "EdgeId",
                type: "число",
                desc: "Идентификатор (стаб)"
            },
            {
                name: "ST_NAME",
                type: "текст",
                desc: "Название улицы с уточнением по месту."
            },
            {
                name: "ST_TYP_BEF",
                type: "текст",
                desc: "Тип улицы."
            },
            {
                name: "ST_NM_BASE",
                type: "текст",
                desc: "Название улицы."
            },
            {
                name: "ST_NM_CITY",
                type: "текст",
                desc: "Город."
            },
            {
                name: "FUNC_CLASS",
                type: "текст",
                desc: "Код класса улицы."
            },
            {
                name: "ROAD_CATEG",
                type: "текст",
                desc: "Класс улицы."
            },
            {
                name: "F_ZLEV",
                type: "число",
                desc: "Уровень начала звена."
            },
            {
                name: "T_ZLEV",
                type: "число",
                desc: "Уровень окончания звена."
            },
            {
                name: "TYPE_LINK",
                type: "текст",
                desc: "Тип звена."
            },
            {
                name: "RoadDirect",
                type: "число",
                desc: "Направление движения по ребру: 0 - перекрыто, F - только прямо, T - только обратно, Any - двустороннее."
            },
            {
                name: "RbndStght",
                type: "число",
                desc: "Количество полос в прямом направлении."
            },
            {
                name: "RbndBck",
                type: "число",
                desc: "Количество полос в обратном направлении."
            },
            {
                name: "Width",
                type: "число",
                desc: "Ширина полотна."
            },
            {
                name: "IsFerry",
                type: "число",
                desc: "Признак переправы."
            },
            {
                name: "Style",
                type: "число",
                desc: "Код визуального стиля: 0 - по умолчанию, 1 - Тоннель-путепровод, 2 - Невидимое, 3 - Мост, 4 - Арка, 5 - Лестницы, 6 - Надземный переход, 7 - Подземный переход, 8 - Переход метро, 9 - Пешеходный мост, 10 - Парковые дорожки, 11 - Тропинки, 12 - Зебра, 13 - Жилая зона, 14 - Брод, 15 - Строящаяся, 16 - Дублёр, 17 - Зимник, 20 - Въезд/выезд из тоннеля, 22 - Тоннель под землей, 24 - Спуск в подземный переход."
            },
            {
                name: "U_TURN",
                type: "число",
                desc: "Признак разворота на ребре: 0 - запрещен, 1 - в прямом направлении, 2 - в обратном направлении, 3 - в обоих направлениях."
            },
            {
                name: "OriginId",
                type: "число",
                desc: "Внутренний идентификатор 2ГИС."
            },
            {
                name: "TrackNames1",
                type: "текст",
                desc: "Названия трасс."
            },
            {
                name: "TopoNames1",
                type: "текст",
                desc: "Топографические названия."
            },
            {
                name: "MaxSpdDrct",
                type: "число",
                desc: "Макс. скорость движения в прямом направлении."
            },
            {
                name: "AvgSpdDrct",
                type: "число",
                desc: "Сред. скорость движения в прямом направлении."
            },
            {
                name: "MaxSpdRvrs",
                type: "число",
                desc: "Макс. скорость движения в обратном направлении."
            },
            {
                name: "AvgSpdRvrs",
                type: "число",
                desc: "Сред. скорость движения в обратном направлении."
            },
            {
                name: "Foot",
                type: "число",
                desc: "Возможность передвижения пешком."
            },
            {
                name: "Car",
                type: "число",
                desc: "Возможность движения на автомобиле."
            },
            {
                name: "Shape",
                type: "—",
                desc: "Геометрия объекта."
            }
        ]
    }
        ];


// =======================================================
// СОСТОЯНИЕ
// =======================================================

let currentRawQuery = '';
let currentQueryWords = [];
let currentGeomFilter = 'all';

let searchSuggestions = [];
let visibleSearchSuggestions = [];
let activeSuggestionIndex = -1;

const MAX_RENDERED_RESULTS = 200;
const MAX_SEARCH_SUGGESTIONS = 10;

const SITE_SECTIONS = [
    {
        id: 'standard',
        gridId: 'standard-grid',
        countId: 'standard-count',
        name: 'Стандартный набор'
    },
    {
        id: 'additional',
        gridId: 'additional-grid',
        countId: 'additional-count',
        name: 'Дополнительные слои'
    },
    {
        id: 'esri',
        gridId: 'esri-grid',
        countId: 'esri-count',
        name: 'Дорожный граф ESRI'
    }
];


// =======================================================
// УТИЛИТЫ
// =======================================================

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text ?? '';
    return div.innerHTML;
}

function normalizeText(text) {
    return String(text ?? '')
        .toLowerCase()
        .replaceAll('ё', 'е')
        .trim();
}

function getQueryWords(query) {
    return normalizeText(query)
        .split(/\s+/)
        .map(word => word.trim())
        .filter(Boolean);
}

function textMatchesQuery(searchText) {
    if (currentQueryWords.length === 0) return true;

    return currentQueryWords.every(word => {
        return searchText.includes(word);
    });
}

function escapeRegExp(text) {
    return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function debounce(callback, delay = 250) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

function flattenSearchableValue(value, visited = new WeakSet()) {
    if (value === null || value === undefined) return '';

    if (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean'
    ) {
        return String(value);
    }

    if (Array.isArray(value)) {
        return value
            .map(item => flattenSearchableValue(item, visited))
            .join(' ');
    }

    if (typeof value === 'object') {
        if (visited.has(value)) return '';

        visited.add(value);

        return Object.values(value)
            .map(val => flattenSearchableValue(val, visited))
            .join(' ');
    }

    return '';
}

function highlightText(text, query = currentRawQuery) {
    const value = String(text ?? '');
    const search = String(query ?? '').trim();

    if (!search) return escapeHtml(value);

    const words = [...new Set(
        search
            .split(/\s+/)
            .map(word => word.trim())
            .filter(Boolean)
    )];

    if (words.length === 0) return escapeHtml(value);

    words.sort((a, b) => b.length - a.length);

    const regex = new RegExp(words.map(escapeRegExp).join('|'), 'gi');

    let result = '';
    let lastIndex = 0;

    value.replace(regex, (match, offset) => {
        result += escapeHtml(value.slice(lastIndex, offset));
        result += `<mark class="search-highlight">${escapeHtml(match)}</mark>`;
        lastIndex = offset + match.length;
        return match;
    });

    result += escapeHtml(value.slice(lastIndex));

    return result;
}


// =======================================================
// ТИПЫ ГЕОМЕТРИИ
// =======================================================

function getTypeBadgeClass(geomType) {
    const type = geomType || '';

    if (type.includes('Полигон')) return 'type-polygon';
    if (type.includes('Полилиния')) return 'type-polyline';
    if (type.includes('Точка')) return 'type-point';

    return 'type-other';
}

function getShortType(geomType) {
    const type = geomType || '';

    if (type.includes('Полигон')) return 'Полигон';
    if (type.includes('Полилиния')) return 'Линия';
    if (type.includes('Точка')) return 'Точка';

    return 'Прочее';
}

function getGeomValue(geomType) {
    const type = geomType || '';

    if (type.includes('Полигон')) return 'polygon';
    if (type.includes('Полилиния')) return 'polyline';
    if (type.includes('Точка')) return 'point';

    return 'other';
}


// =======================================================
// ПОИСКОВЫЙ ИНДЕКС
// =======================================================

function buildSearchIndex() {
    SITE_SECTIONS.forEach(sectionConfig => {
        const sectionId = sectionConfig.id;
        const layers = layersData[sectionId];

        if (!Array.isArray(layers)) return;

        layers.forEach(layer => {
            const attrs = Array.isArray(layer.attrs) ? layer.attrs : [];

            attrs.forEach(attr => {
                attr._searchText = normalizeText(flattenSearchableValue(attr));
            });

            layer._searchText = normalizeText(flattenSearchableValue(layer));
        });
    });
}

function matchesSearch(layer) {
    if (currentQueryWords.length === 0) return true;

    return textMatchesQuery(layer._searchText || '');
}

function matchesGeom(layer) {
    if (currentGeomFilter === 'all') return true;

    return getGeomValue(layer.geomType) === currentGeomFilter;
}

function getFilteredLayers(sectionId) {
    const layers = layersData[sectionId];

    if (!Array.isArray(layers)) return [];

    return layers.filter(layer => {
        return matchesSearch(layer) && matchesGeom(layer);
    });
}

function attrMatchesSearch(attr) {
    if (currentQueryWords.length === 0) return false;

    return textMatchesQuery(attr._searchText || '');
}


// =======================================================
// ПОДСКАЗКИ ПОИСКА
// =======================================================

function ensureSearchSuggestionsBox() {
    const searchBox = document.querySelector('.search-box');

    if (!searchBox) return null;

    let suggestionsBox = document.getElementById('search-suggestions');

    if (!suggestionsBox) {
        suggestionsBox = document.createElement('div');
        suggestionsBox.id = 'search-suggestions';
        suggestionsBox.className = 'search-suggestions';
        searchBox.appendChild(suggestionsBox);
    }

    return suggestionsBox;
}

function addSuggestionToMap(map, value, type, detail) {
    const cleanValue = String(value ?? '').trim();

    if (!cleanValue) return;

    const normalizedValue = normalizeText(cleanValue);
    const key = `${type}:${normalizedValue}`;

    if (!map.has(key)) {
        map.set(key, {
            value: cleanValue,
            type,
            details: new Set(),
            count: 0,
            normalizedValue,
            normalizedDetails: ''
        });
    }

    const item = map.get(key);

    item.count += 1;

    if (detail) {
        item.details.add(String(detail).trim());
    }
}

function formatSuggestionDetail(detailsSet, count) {
    const details = [...detailsSet].filter(Boolean);

    if (details.length === 0) {
        return count > 1 ? `Встречается ${count} раз` : '';
    }

    const visible = details.slice(0, 2).join(', ');
    const hiddenCount = details.length - 2;

    return hiddenCount > 0
        ? `${visible} и ещё ${hiddenCount}`
        : visible;
}

function buildSearchSuggestions() {
    const map = new Map();

    SITE_SECTIONS.forEach(sectionConfig => {
        const sectionId = sectionConfig.id;
        const sectionName = sectionConfig.name;
        const layers = layersData[sectionId];

        if (!Array.isArray(layers)) return;

        layers.forEach(layer => {
            addSuggestionToMap(map, layer.file, 'Слой', `${sectionName} • ${layer.content}`);
            addSuggestionToMap(map, layer.content, 'Содержание', `${sectionName} • ${layer.file}`);
            addSuggestionToMap(map, layer.geomType, 'Геометрия', sectionName);

            const attrs = Array.isArray(layer.attrs) ? layer.attrs : [];

            attrs.forEach(attr => {
                addSuggestionToMap(map, attr.name, 'Атрибут', layer.file);
                addSuggestionToMap(map, attr.type, 'Тип данных', layer.file);
            });
        });
    });

    searchSuggestions = [...map.values()].map(item => {
        const detail = formatSuggestionDetail(item.details, item.count);

        return {
            ...item,
            detail,
            normalizedDetails: normalizeText(detail)
        };
    });
}

function getSuggestionScore(suggestion, queryWords) {
    let score = 0;

    queryWords.forEach(word => {
        if (suggestion.normalizedValue === word) {
            score += 100;
        } else if (suggestion.normalizedValue.startsWith(word)) {
            score += 70;
        } else if (suggestion.normalizedValue.includes(word)) {
            score += 40;
        } else if (suggestion.normalizedDetails.includes(word)) {
            score += 15;
        }
    });

    if (suggestion.type === 'Слой') score += 8;
    if (suggestion.type === 'Атрибут') score += 6;
    if (suggestion.type === 'Содержание') score += 4;

    return score;
}

function getSearchSuggestions(query) {
    const queryWords = getQueryWords(query);

    if (queryWords.length === 0) return [];

    return searchSuggestions
        .map(suggestion => {
            const searchArea = `${suggestion.normalizedValue} ${suggestion.normalizedDetails}`;

            const matched = queryWords.every(word => searchArea.includes(word));

            if (!matched) return null;

            return {
                ...suggestion,
                score: getSuggestionScore(suggestion, queryWords)
            };
        })
        .filter(Boolean)
        .sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            return a.value.localeCompare(b.value, 'ru');
        })
        .slice(0, MAX_SEARCH_SUGGESTIONS);
}

function renderSearchSuggestions(query) {
    const suggestionsBox = ensureSearchSuggestionsBox();

    if (!suggestionsBox) return;

    visibleSearchSuggestions = getSearchSuggestions(query);
    activeSuggestionIndex = -1;

    if (visibleSearchSuggestions.length === 0) {
        hideSearchSuggestions();
        return;
    }

    suggestionsBox.innerHTML = visibleSearchSuggestions.map((suggestion, index) => `
        <button class="suggestion-item" type="button" data-index="${index}">
            <span class="suggestion-main">
                <span class="suggestion-value">
                    ${highlightText(suggestion.value, query)}
                </span>

                <span class="suggestion-type">
                    ${escapeHtml(suggestion.type)}
                </span>
            </span>

            ${
                suggestion.detail
                    ? `<span class="suggestion-detail">${highlightText(suggestion.detail, query)}</span>`
                    : ''
            }
        </button>
    `).join('');

    suggestionsBox.classList.add('active');
}

function hideSearchSuggestions() {
    const suggestionsBox = document.getElementById('search-suggestions');

    if (!suggestionsBox) return;

    suggestionsBox.classList.remove('active');

    window.setTimeout(() => {
        if (!suggestionsBox.classList.contains('active')) {
            suggestionsBox.innerHTML = '';
        }
    }, 180);

    visibleSearchSuggestions = [];
    activeSuggestionIndex = -1;
}

function updateActiveSuggestion() {
    document.querySelectorAll('.suggestion-item').forEach((item, index) => {
        item.classList.toggle('active', index === activeSuggestionIndex);
    });
}

function applySearchSuggestion(value) {
    const searchInput = document.getElementById('search');

    if (!searchInput) return;

    searchInput.value = value;

    currentRawQuery = value.trim();
    currentQueryWords = getQueryWords(currentRawQuery);

    hideSearchSuggestions();
    renderAll();

    searchInput.focus();
}


// =======================================================
// РЕНДЕРИНГ КАРТОЧЕК
// =======================================================

function renderCards(layers, containerId) {
    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = '';

    if (layers.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                😔 Ничего не найдено
            </div>
        `;
        return;
    }

    const fragment = document.createDocumentFragment();
    const visibleLayers = layers.slice(0, MAX_RENDERED_RESULTS);

    visibleLayers.forEach(layer => {
        const card = document.createElement('div');
        card.className = 'card';
        card.title = `${layer.file} — ${layer.title}`;

        const badgeClass = getTypeBadgeClass(layer.geomType);
        const shortType = getShortType(layer.geomType);
        const attrsCount = Array.isArray(layer.attrs) ? layer.attrs.length : 0;

        card.innerHTML = `
            <div class="card-icon">${escapeHtml(layer.icon)}</div>

            <div class="card-filename">
                ${highlightText(layer.file)}
            </div>

            <div class="card-title">
                ${highlightText(layer.content)}
            </div>

            <div class="card-type">
                <span class="type-badge ${badgeClass}">
                    ${escapeHtml(shortType)}
                </span>

                <span>${attrsCount} атр.</span>
            </div>
        `;

        card.addEventListener('click', () => openModal(layer));

        fragment.appendChild(card);
    });

    container.appendChild(fragment);

    if (layers.length > MAX_RENDERED_RESULTS) {
        const message = document.createElement('div');
        message.className = 'no-results';
        message.innerHTML = `
            Показано ${MAX_RENDERED_RESULTS} из ${layers.length}. 
            Уточните поисковый запрос.
        `;
        container.appendChild(message);
    }
}


// =======================================================
// СЧЁТЧИКИ И ОБЩИЙ РЕНДЕР
// =======================================================

function updateCounters() {
    SITE_SECTIONS.forEach(sectionConfig => {
        const counter = document.getElementById(sectionConfig.countId);

        if (!counter) return;

        const sectionId = sectionConfig.id;

        const filteredCount = getFilteredLayers(sectionId).length;
        const totalCount = Array.isArray(layersData[sectionId])
            ? layersData[sectionId].length
            : 0;

        counter.textContent = `${filteredCount} / ${totalCount}`;
    });
}

function renderAll() {
    SITE_SECTIONS.forEach(sectionConfig => {
        renderCards(
            getFilteredLayers(sectionConfig.id),
            sectionConfig.gridId
        );
    });

    updateCounters();
}


// =======================================================
// МОДАЛЬНОЕ ОКНО
// =======================================================

function openModal(layer) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');

    if (!modal || !body) return;

    const badgeClass = getTypeBadgeClass(layer.geomType);
    const attrs = Array.isArray(layer.attrs) ? layer.attrs : [];

    const attrsHtml = attrs.length > 0
        ? `
            <section class="modal-block attributes-block">
                <div class="modal-block-head">
                    <div>
                        <div class="modal-step">3</div>
                        <h4>Атрибуты слоя</h4>
                    </div>

                    <span class="attrs-count">${attrs.length} полей</span>
                </div>

                <p class="modal-block-desc">
                    Поля атрибутивной таблицы слоя. Каждая строка содержит имя поля, тип данных и назначение.
                </p>

                <div class="attrs-list-compact">
                    ${attrs.map(attr => {
                        const isMatched = attrMatchesSearch(attr);

                        return `
                            <div class="attr-row ${isMatched ? 'attr-row-found' : ''}">
                                <div class="attr-row-main">
                                    <div class="attr-row-name">
                                        ${highlightText(attr.name)}
                                    </div>

                                    <div class="attr-row-type">
                                        ${highlightText(attr.type)}
                                    </div>
                                </div>

                                <div class="attr-row-desc">
                                    ${highlightText(attr.desc || 'Описание не указано')}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </section>
        `
        : `
            <section class="modal-block attributes-block">
                <div class="modal-block-head">
                    <div>
                        <div class="modal-step">3</div>
                        <h4>Атрибуты слоя</h4>
                    </div>
                </div>

                <p class="modal-block-desc">
                    Атрибуты не указаны.
                </p>
            </section>
        `;

    body.innerHTML = `
        <div class="layer-modal-header">
            <div class="modal-icon">
                ${escapeHtml(layer.icon)}
            </div>

            <div class="layer-modal-title">
                <h3>${highlightText(layer.content)}</h3>

                <div class="modal-meta">
                    <span class="type-badge ${badgeClass}">
                        ${escapeHtml(layer.geomType)}
                    </span>

                    <span class="card-filename">
                        ${highlightText(layer.file)}
                    </span>

                    <span class="type-badge type-other">
                        ${attrs.length} атрибут(ов)
                    </span>
                </div>
            </div>
        </div>

        <section class="modal-block">
            <div class="modal-block-head">
                <div>
                    <div class="modal-step">1</div>
                    <h4>Основная информация</h4>
                </div>
            </div>

            <div class="layer-summary">
                <div class="layer-summary-item">
                    <span class="summary-label">Имя файла слоя</span>
                    <span class="summary-value">${highlightText(layer.file)}</span>
                </div>

                <div class="layer-summary-item">
                    <span class="summary-label">Тип объекта</span>
                    <span class="summary-value">${escapeHtml(layer.geomType)}</span>
                </div>

                <div class="layer-summary-item">
                    <span class="summary-label">Содержание слоя</span>
                    <span class="summary-value">${highlightText(layer.content)}</span>
                </div>
            </div>
        </section>

        <section class="modal-block">
            <div class="modal-block-head">
                <div>
                    <div class="modal-step">2</div>
                    <h4>Описание</h4>
                </div>
            </div>

            <p class="modal-block-desc">
                ${highlightText(layer.title)}
            </p>
        </section>

        ${attrsHtml}
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');

    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function setupModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('modal-close');

    if (!modal) return;

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', event => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}


// =======================================================
// ВКЛАДКИ
// =======================================================

function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;

            tabBtns.forEach(button => {
                button.classList.remove('active');
            });

            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            btn.classList.add('active');

            const targetTab = document.getElementById(tabId);

            if (targetTab) {
                targetTab.classList.add('active');
            }

            if (tabId === 'vector-example') {
                setTimeout(() => {
                    initVectorExampleMap();
                }, 100);
            }
            if (tabId === 'data-request') {
                initDataRequestTab();
            }
        });
    });
}


// =======================================================
// ПОИСК И ФИЛЬТРЫ
// =======================================================

function setupSearchAndFilters() {
    const searchInput = document.getElementById('search');
    const clearBtn = document.getElementById('clear-search');
    const geomFilter = document.getElementById('geom-filter');
    const suggestionsBox = ensureSearchSuggestionsBox();

    if (searchInput) {
        const handleSearch = debounce(event => {
            currentRawQuery = event.target.value.trim();
            currentQueryWords = getQueryWords(currentRawQuery);

            renderAll();
        }, 200);

        searchInput.addEventListener('input', event => {
            renderSearchSuggestions(event.target.value);
            handleSearch(event);
        });

        searchInput.addEventListener('focus', event => {
            renderSearchSuggestions(event.target.value);
        });

        searchInput.addEventListener('keydown', event => {
            if (visibleSearchSuggestions.length === 0) return;

            if (event.key === 'ArrowDown') {
                event.preventDefault();

                activeSuggestionIndex =
                    (activeSuggestionIndex + 1) % visibleSearchSuggestions.length;

                updateActiveSuggestion();
            }

            if (event.key === 'ArrowUp') {
                event.preventDefault();

                activeSuggestionIndex =
                    activeSuggestionIndex <= 0
                        ? visibleSearchSuggestions.length - 1
                        : activeSuggestionIndex - 1;

                updateActiveSuggestion();
            }

            if (event.key === 'Enter') {
                if (activeSuggestionIndex >= 0) {
                    event.preventDefault();

                    const suggestion = visibleSearchSuggestions[activeSuggestionIndex];

                    if (suggestion) {
                        applySearchSuggestion(suggestion.value);
                    }
                }
            }

            if (event.key === 'Escape') {
                hideSearchSuggestions();
            }
        });

        searchInput.addEventListener('blur', () => {
            setTimeout(() => {
                hideSearchSuggestions();
            }, 150);
        });
    }

    if (suggestionsBox) {
        suggestionsBox.addEventListener('mousedown', event => {
            const item = event.target.closest('.suggestion-item');

            if (!item) return;

            const index = Number(item.dataset.index);
            const suggestion = visibleSearchSuggestions[index];

            if (suggestion) {
                applySearchSuggestion(suggestion.value);
            }
        });
    }

    if (clearBtn && searchInput) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';

            currentRawQuery = '';
            currentQueryWords = [];

            hideSearchSuggestions();
            renderAll();

            searchInput.focus();
        });
    }

    if (geomFilter) {
        geomFilter.addEventListener('change', event => {
            currentGeomFilter = event.target.value;
            renderAll();
        });
    }
}

/// =======================================================
// ПРИМЕР ВЕКТОРНЫХ ДАННЫХ НА 2GIS MAPGL / MAP TILES
// =======================================================

const DGIS_API_KEY = '10364b9c-d16c-40eb-848d-559ce40b7e14';
const DGIS_STYLE_ID = 'c080bb6a-8134-4993-93a1-5b4d8c36a59b';
const DGIS_EMPTY_STYLE_ID = 'd908d6c9-3fce-413e-987a-21a34c2e7118';

// Центр карты: Астана
const DGIS_DEFAULT_CENTER = [71.4491, 51.1694];
const DGIS_DEFAULT_ZOOM = 12;

let vectorMap = null;
let vectorMapInitialized = false;

let vectorLayerConfigs = [];
let vectorMapObjects = {};
let vectorLoadedGeojson = {};
let active2gisPopup = null;

let isBaseMapVisible = true;

// =======================================================
// ИНИЦИАЛИЗАЦИЯ КАРТЫ
// =======================================================

async function initVectorExampleMap() {
    if (vectorMapInitialized) {
        return;
    }

    const mapElement = document.getElementById('vector-map');

    if (!mapElement) {
        console.warn('Контейнер #vector-map не найден');
        return;
    }

    if (typeof mapgl === 'undefined') {
        console.error('2GIS MapGL API не загружен. Проверь подключение скрипта mapgl.');
        return;
    }

    vectorMapInitialized = true;

    vectorMap = new mapgl.Map('vector-map', {
        center: DGIS_DEFAULT_CENTER,
        zoom: DGIS_DEFAULT_ZOOM,
        key: DGIS_API_KEY,
        style: DGIS_STYLE_ID
    });

    // Кнопка скрытия / показа подложки
    createBaseMapToggleButton(mapElement);

    // Загрузка списка векторных слоёв справа
    await loadVectorLayersManifest();
}

function createBaseMapToggleButton(mapElement) {
    if (!mapElement) {
        console.warn('Контейнер карты не передан в createBaseMapToggleButton');
        return;
    }

    if (document.getElementById('toggle-basemap-btn')) {
        return;
    }

    const button = document.createElement('button');

    button.id = 'toggle-basemap-btn';
    button.type = 'button';
    button.textContent = 'Скрыть подложку';

    // Стили прямо через JS, чтобы кнопка точно появилась
    button.style.position = 'absolute';
    button.style.top = '12px';
    button.style.left = '12px';
    button.style.zIndex = '9999';
    button.style.padding = '8px 12px';
    button.style.border = '1px solid #b9d8ef';
    button.style.borderRadius = '10px';
    button.style.background = '#ffffff';
    button.style.color = '#1f2a44';
    button.style.fontSize = '13px';
    button.style.fontWeight = '600';
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';

    // Важно: позиционируем кнопку относительно самой карты
    mapElement.style.position = 'relative';

    // Добавляем кнопку внутрь контейнера карты
    mapElement.appendChild(button);

    button.addEventListener('click', () => {
        if (!vectorMap) {
            return;
        }

        if (isBaseMapVisible) {
            const styleChanged = setVectorMapStyle(DGIS_EMPTY_STYLE_ID);

            if (styleChanged) {
                button.textContent = 'Показать подложку';
                isBaseMapVisible = false;
            }
        } else {
            const styleChanged = setVectorMapStyle(DGIS_STYLE_ID);

            if (styleChanged) {
                button.textContent = 'Скрыть подложку';
                isBaseMapVisible = true;
            }
        }
    });

    console.log('Кнопка переключения подложки добавлена');
}

function setVectorMapStyle(styleId) {
    if (!vectorMap) {
        return false;
    }

    if (typeof vectorMap.setStyleById === 'function') {
        vectorMap.setStyleById(styleId);
        return true;
    }

    if (typeof vectorMap.setStyle === 'function') {
        vectorMap.setStyle(styleId);
        return true;
    }

    console.warn('В текущей версии MapGL нет метода setStyleById или setStyle');
    return false;
}

function collectCoordinates(geometry, result) {
    if (!geometry || !geometry.coordinates) return;

    collectCoordinatesRecursive(geometry.coordinates, result);
}

function collectCoordinatesRecursive(coords, result) {
    if (!Array.isArray(coords)) return;

    if (
        typeof coords[0] === 'number' &&
        typeof coords[1] === 'number'
    ) {
        result.push(coords);
        return;
    }

    coords.forEach(item => collectCoordinatesRecursive(item, result));
}

function getBoundsFromCoordinates(coords) {
    if (!coords.length) return null;

    let minLng = coords[0][0];
    let maxLng = coords[0][0];
    let minLat = coords[0][1];
    let maxLat = coords[0][1];

    coords.forEach(([lng, lat]) => {
        minLng = Math.min(minLng, lng);
        maxLng = Math.max(maxLng, lng);
        minLat = Math.min(minLat, lat);
        maxLat = Math.max(maxLat, lat);
    });

    return {
        minLng,
        maxLng,
        minLat,
        maxLat
    };
}
// =======================================================
// ЗАГРУЗКА МАНИФЕСТА СЛОЁВ
// =======================================================

async function loadVectorLayersManifest() {
    try {
        const response = await fetch('data/layers-manifest.json');

        if (!response.ok) {
            throw new Error('Не удалось загрузить data/layers-manifest.json');
        }

        vectorLayerConfigs = await response.json();

        renderVectorLayerList();

        for (const layerConfig of vectorLayerConfigs) {
            if (layerConfig.visible) {
                try {
                    await loadVectorLayer(layerConfig);
                } catch (layerError) {
                    console.error(`Не удалось загрузить слой ${layerConfig.title}:`, layerError);
                }
            }
        }

        fitMapToVisibleLayers();
    } catch (error) {
        console.error(error);

        const list = document.getElementById('vector-layer-list');

        if (list) {
            list.innerHTML = `
                <p class="layers-loading">
                    Не удалось загрузить список слоёв. Проверь папку <b>data</b>
                    и файл <b>layers-manifest.json</b>.
                </p>
            `;
        }
    }
}
// =======================================================
// ОТРИСОВКА GEOJSON-СЛОЯ НА КАРТЕ
// =======================================================

function drawGeoJsonLayer(layerConfig, geojson) {
    if (!vectorMap || !geojson || !Array.isArray(geojson.features)) {
        return;
    }

    if (!vectorMapObjects[layerConfig.id]) {
        vectorMapObjects[layerConfig.id] = [];
    }

    geojson.features.forEach(feature => {
        if (!feature.geometry) {
            return;
        }

        const geometry = feature.geometry;
        const color = layerConfig.color || '#2d9cdb';

        // -------------------------------
        // Point
        // -------------------------------
        if (geometry.type === 'Point') {
            const marker = new mapgl.Marker(vectorMap, {
                coordinates: geometry.coordinates
            });

            attachFeatureClickHandler(marker, layerConfig, feature);

            vectorMapObjects[layerConfig.id].push(marker);
        }

        // -------------------------------
        // MultiPoint
        // -------------------------------
        if (geometry.type === 'MultiPoint') {
            geometry.coordinates.forEach(pointCoords => {
                const marker = new mapgl.Marker(vectorMap, {
                    coordinates: pointCoords
                });

                attachFeatureClickHandler(marker, layerConfig, feature);

                vectorMapObjects[layerConfig.id].push(marker);
            });
        }

        // -------------------------------
        // LineString
        // -------------------------------
        if (geometry.type === 'LineString') {
            const polyline = new mapgl.Polyline(vectorMap, {
                coordinates: geometry.coordinates,
                color,
                width: layerConfig.width || 3
            });

            attachFeatureClickHandler(polyline, layerConfig, feature);

            vectorMapObjects[layerConfig.id].push(polyline);
        }

        // -------------------------------
        // MultiLineString
        // -------------------------------
        if (geometry.type === 'MultiLineString') {
            geometry.coordinates.forEach(lineCoords => {
                const polyline = new mapgl.Polyline(vectorMap, {
                    coordinates: lineCoords,
                    color,
                    width: layerConfig.width || 3
                });

                attachFeatureClickHandler(polyline, layerConfig, feature);

                vectorMapObjects[layerConfig.id].push(polyline);
            });
        }

        // -------------------------------
        // Polygon
        // -------------------------------
        if (geometry.type === 'Polygon') {
            const polygon = new mapgl.Polygon(vectorMap, {
                coordinates: geometry.coordinates,
                color: hexToRgba(color, 0.35),
                strokeColor: color,
                strokeWidth: layerConfig.strokeWidth || 2
            });

            attachFeatureClickHandler(polygon, layerConfig, feature);

            vectorMapObjects[layerConfig.id].push(polygon);
        }

        // -------------------------------
        // MultiPolygon
        // -------------------------------
        if (geometry.type === 'MultiPolygon') {
            geometry.coordinates.forEach(polygonCoords => {
                const polygon = new mapgl.Polygon(vectorMap, {
                    coordinates: polygonCoords,
                    color: hexToRgba(color, 0.35),
                    strokeColor: color,
                    strokeWidth: layerConfig.strokeWidth || 2
                });

                attachFeatureClickHandler(polygon, layerConfig, feature);

                vectorMapObjects[layerConfig.id].push(polygon);
            });
        }
    });
}

// =======================================================
// УДАЛЕНИЕ ВЕКТОРНОГО СЛОЯ С КАРТЫ
// =======================================================

function removeVectorLayer(layerId) {
    const objects = vectorMapObjects[layerId];

    if (!Array.isArray(objects)) {
        return;
    }

    objects.forEach(object => {
        if (object && typeof object.destroy === 'function') {
            object.destroy();
        }
    });

    vectorMapObjects[layerId] = [];

    if (active2gisPopup && typeof active2gisPopup.destroy === 'function') {
        active2gisPopup.destroy();
        active2gisPopup = null;
    }
}
// =======================================================
// МАСШТАБИРОВАНИЕ КАРТЫ ПО ВИДИМЫМ СЛОЯМ
// =======================================================

function fitMapToVisibleLayers() {
    if (!vectorMap) {
        return;
    }

    const coords = [];

    vectorLayerConfigs.forEach(layerConfig => {
        const checkbox = Array.from(
            document.querySelectorAll('input[data-layer-id]')
        ).find(input => input.dataset.layerId === layerConfig.id);

        if (!checkbox || !checkbox.checked) {
            return;
        }

        const geojson = vectorLoadedGeojson[layerConfig.id];

        if (!geojson) {
            return;
        }

        const features = Array.isArray(geojson.features)
            ? geojson.features
            : geojson.type === 'Feature'
                ? [geojson]
                : [];

        features.forEach(feature => {
            if (feature && feature.geometry) {
                collectCoordinates(feature.geometry, coords);
            }
        });
    });

    const bounds = getBoundsFromCoordinates(coords);

    if (!bounds) {
        return;
    }

    try {
        vectorMap.fitBounds({
            southWest: [bounds.minLng, bounds.minLat],
            northEast: [bounds.maxLng, bounds.maxLat]
        });
    } catch (error) {
        console.warn('Не удалось применить fitBounds через объект bounds:', error);

        try {
            vectorMap.fitBounds([
                [bounds.minLng, bounds.minLat],
                [bounds.maxLng, bounds.maxLat]
            ]);
        } catch (secondError) {
            console.warn('Не удалось применить fitBounds через массив bounds:', secondError);
        }
    }
}

// =======================================================
// ПАНЕЛЬ СЛОЁВ
// =======================================================

function renderVectorLayerList() {
    const list = document.getElementById('vector-layer-list');

    if (!list) return;

    list.innerHTML = vectorLayerConfigs.map(layer => `
        <label class="vector-layer-item">
            <input
                type="checkbox"
                data-layer-id="${escapeHtml(layer.id)}"
                ${layer.visible ? 'checked' : ''}
            >

            <div>
                <div class="vector-layer-name">
                    ${escapeHtml(layer.title)}
                </div>

                <div class="vector-layer-meta">
                    ${escapeHtml(layer.id)} • ${escapeHtml(layer.type)}
                </div>
            </div>

            <span
                class="vector-layer-color"
                style="background:${escapeHtml(layer.color)}"
            ></span>
        </label>
    `).join('');

    list.querySelectorAll('input[type="checkbox"]').forEach(input => {
        input.addEventListener('change', async event => {
            const layerId = event.target.dataset.layerId;
            const layerConfig = vectorLayerConfigs.find(layer => layer.id === layerId);

            if (!layerConfig) return;

            if (event.target.checked) {
                await loadVectorLayer(layerConfig);
            } else {
                removeVectorLayer(layerId);
            }
        });
    });
}
// =======================================================
// УДАЛЕНИЕ ВЕКТОРНОГО СЛОЯ
// =======================================================

function removeVectorLayer(layerId) {
    const objects = vectorMapObjects[layerId];

    if (!Array.isArray(objects)) {
        return;
    }

    objects.forEach(object => {
        if (object && typeof object.destroy === 'function') {
            object.destroy();
        }
    });

    vectorMapObjects[layerId] = [];
}
// =======================================================
// МАСШТАБИРОВАНИЕ КАРТЫ ПО ВИДИМЫМ СЛОЯМ
// =======================================================

function fitMapToVisibleLayers() {
    if (!vectorMap) {
        return;
    }

    const coords = [];

    vectorLayerConfigs.forEach(layerConfig => {
        const checkbox = document.querySelector(
            `input[data-layer-id="${layerConfig.id}"]`
        );

        if (!checkbox || !checkbox.checked) {
            return;
        }

        const geojson = vectorLoadedGeojson[layerConfig.id];

        if (!geojson || !Array.isArray(geojson.features)) {
            return;
        }

        geojson.features.forEach(feature => {
            if (feature.geometry) {
                collectCoordinates(feature.geometry, coords);
            }
        });
    });

    const bounds = getBoundsFromCoordinates(coords);

    if (!bounds) {
        return;
    }

    try {
        vectorMap.fitBounds({
            southWest: [bounds.minLng, bounds.minLat],
            northEast: [bounds.maxLng, bounds.maxLat]
        });
    } catch (error) {
        console.warn('Не удалось применить fitBounds:', error);
    }
}

// =======================================================
// ЗАГРУЗКА GEOJSON-СЛОЯ
// =======================================================

async function loadVectorLayer(layerConfig) {
    if (!vectorMap) {
        return;
    }

    // Если слой уже отрисован — ничего не делаем
    if (
        vectorMapObjects[layerConfig.id] &&
        vectorMapObjects[layerConfig.id].length > 0
    ) {
        return;
    }

    // Если GeoJSON уже был загружен — просто рисуем заново
    if (vectorLoadedGeojson[layerConfig.id]) {
        drawGeoJsonLayer(layerConfig, vectorLoadedGeojson[layerConfig.id]);
        return;
    }

    try {
        const response = await fetch(layerConfig.file);

        if (!response.ok) {
            throw new Error(`Не удалось загрузить ${layerConfig.file}`);
        }

        const geojson = await response.json();

        vectorLoadedGeojson[layerConfig.id] = geojson;

        drawGeoJsonLayer(layerConfig, geojson);
    } catch (error) {
        console.error(error);
        alert(`Не удалось загрузить слой: ${layerConfig.title}`);
    }
}
// =======================================================
// ОТРИСОВКА GEOJSON-СЛОЯ ИЗ ПАПКИ DATA
// =======================================================

function drawGeoJsonLayer(layerConfig, geojson) {
    if (!vectorMap || !geojson || !Array.isArray(geojson.features)) {
        return;
    }

    if (!vectorMapObjects[layerConfig.id]) {
        vectorMapObjects[layerConfig.id] = [];
    }

    geojson.features.forEach(feature => {
        if (!feature.geometry) {
            return;
        }

        const geometry = feature.geometry;
        const color = layerConfig.color || '#2d9cdb';

        if (geometry.type === 'Point') {
            const marker = new mapgl.Marker(vectorMap, {
                coordinates: geometry.coordinates
            });

            attachGeojsonFeatureClick(marker, layerConfig, feature);

            vectorMapObjects[layerConfig.id].push(marker);
        }

        if (geometry.type === 'MultiPoint') {
            geometry.coordinates.forEach(pointCoordinates => {
                const marker = new mapgl.Marker(vectorMap, {
                    coordinates: pointCoordinates
                });

                attachGeojsonFeatureClick(marker, layerConfig, feature);

                vectorMapObjects[layerConfig.id].push(marker);
            });
        }

        if (geometry.type === 'LineString') {
            const polyline = new mapgl.Polyline(vectorMap, {
                coordinates: geometry.coordinates,
                color: color,
                width: layerConfig.width || 3
            });

            attachGeojsonFeatureClick(polyline, layerConfig, feature);

            vectorMapObjects[layerConfig.id].push(polyline);
        }

        if (geometry.type === 'MultiLineString') {
            geometry.coordinates.forEach(lineCoordinates => {
                const polyline = new mapgl.Polyline(vectorMap, {
                    coordinates: lineCoordinates,
                    color: color,
                    width: layerConfig.width || 3
                });

                attachGeojsonFeatureClick(polyline, layerConfig, feature);

                vectorMapObjects[layerConfig.id].push(polyline);
            });
        }

        if (geometry.type === 'Polygon') {
            const polygon = new mapgl.Polygon(vectorMap, {
                coordinates: geometry.coordinates,
                color: hexToRgba(color, 0.35),
                strokeColor: color,
                strokeWidth: layerConfig.strokeWidth || 2
            });

            attachGeojsonFeatureClick(polygon, layerConfig, feature);

            vectorMapObjects[layerConfig.id].push(polygon);
        }

        if (geometry.type === 'MultiPolygon') {
            geometry.coordinates.forEach(polygonCoordinates => {
                const polygon = new mapgl.Polygon(vectorMap, {
                    coordinates: polygonCoordinates,
                    color: hexToRgba(color, 0.35),
                    strokeColor: color,
                    strokeWidth: layerConfig.strokeWidth || 2
                });

                attachGeojsonFeatureClick(polygon, layerConfig, feature);

                vectorMapObjects[layerConfig.id].push(polygon);
            });
        }
    });
}
// =======================================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// =======================================================

function hexToRgba(hex, opacity = 1) {
    if (!hex || !hex.startsWith('#')) {
        return `rgba(45, 156, 219, ${opacity})`;
    }

    const value = hex.replace('#', '');

    const r = parseInt(value.substring(0, 2), 16);
    const g = parseInt(value.substring(2, 4), 16);
    const b = parseInt(value.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function getFirstCoordinateFromGeometry(geometry) {
    if (!geometry || !geometry.coordinates) {
        return DGIS_DEFAULT_CENTER;
    }

    let coords = geometry.coordinates;

    while (Array.isArray(coords[0])) {
        coords = coords[0];
    }

    return coords;
}
// =======================================================
// POPUP С АТРИБУТАМИ ОБЪЕКТОВ ИЗ DATA/*.GEOJSON
// =======================================================

function formatPropertyValue(value) {
    if (value === null || value === undefined || value === '') {
        return '—';
    }

    if (typeof value === 'object') {
        return JSON.stringify(value);
    }

    return String(value);
}

function formatFeaturePropertiesHtml(properties) {
    if (!properties || Object.keys(properties).length === 0) {
        return `
            <div class="feature-popup-empty">
                Атрибутивные данные отсутствуют
            </div>
        `;
    }

    return `
        <div class="feature-popup-table">
            ${Object.entries(properties).map(([key, value]) => `
                <div class="feature-popup-row">
                    <div class="feature-popup-key">${escapeHtml(key)}</div>
                    <div class="feature-popup-value">${escapeHtml(formatPropertyValue(value))}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function getPopupCoordinateFromGeometry(geometry) {
    if (!geometry || !geometry.coordinates) {
        return DGIS_DEFAULT_CENTER;
    }

    let coords = geometry.coordinates;

    while (Array.isArray(coords[0])) {
        coords = coords[0];
    }

    return coords;
}

function showGeojsonFeaturePopup(layerConfig, feature, coordinates) {
    if (!vectorMap || !feature || !coordinates) {
        return;
    }

    closeActiveGeojsonPopup();

    const properties = feature.properties || {};

    const html = `
        <div class="feature-popup">
            <button class="feature-popup-close" type="button" title="Закрыть">×</button>

            <div class="feature-popup-title">
                ${escapeHtml(layerConfig.title || layerConfig.id || 'Объект слоя')}
            </div>

            <div class="feature-popup-subtitle">
                ${escapeHtml(layerConfig.id || '')} • ${escapeHtml(layerConfig.type || '')}
            </div>

            ${formatFeaturePropertiesHtml(properties)}
        </div>
    `;

    active2gisPopup = new mapgl.HtmlMarker(vectorMap, {
        coordinates,
        html
    });

    setupGeojsonPopupCloseHandler();
}

function closeActiveGeojsonPopup() {
    if (active2gisPopup && typeof active2gisPopup.destroy === 'function') {
        active2gisPopup.destroy();
        active2gisPopup = null;
    }
}

let geojsonPopupCloseHandlerInitialized = false;

function setupGeojsonPopupCloseHandler() {
    if (geojsonPopupCloseHandlerInitialized) {
        return;
    }

    geojsonPopupCloseHandlerInitialized = true;

    const handlePopupEvent = event => {
        const popup = event.target.closest('.feature-popup');

        if (!popup) {
            return;
        }

        // Не даём кликам внутри окна уходить в карту
        event.stopPropagation();

        const closeButton = event.target.closest('.feature-popup-close');

        if (closeButton) {
            event.preventDefault();
            event.stopPropagation();
            closeActiveGeojsonPopup();
        }
    };

    document.addEventListener('pointerdown', handlePopupEvent, true);
    document.addEventListener('click', handlePopupEvent, true);
}

function attachGeojsonFeatureClick(mapObject, layerConfig, feature) {
    if (!mapObject || typeof mapObject.on !== 'function') {
        return;
    }

    mapObject.on('click', event => {
        let coordinates = null;

        if (event && Array.isArray(event.lngLat)) {
            coordinates = event.lngLat;
        } else if (event && Array.isArray(event.coordinates)) {
            coordinates = event.coordinates;
        } else {
            coordinates = getPopupCoordinateFromGeometry(feature.geometry);
        }

        showGeojsonFeaturePopup(layerConfig, feature, coordinates);
    });
}

// =======================================================
// ВКЛАДКА: ЗАПРОС ДАННЫХ
// =======================================================

// ЗАМЕНИ на свой endpoint Formspree
const DATA_REQUEST_ENDPOINT = 'https://formspree.io/f/mjgqovzg';

let dataRequestInitialized = false;

function generateOrderNumber() {
    const now = new Date();

    const datePart = now.toISOString()
        .slice(0, 10)
        .replaceAll('-', '');

    const timePart = now.toTimeString()
        .slice(0, 8)
        .replaceAll(':', '');

    const randomPart = Math.random()
        .toString(36)
        .slice(2, 6)
        .toUpperCase();

    return `REQ-${datePart}-${timePart}-${randomPart}`;
}

function initDataRequestTab() {
    if (dataRequestInitialized) {
        return;
    }

    dataRequestInitialized = true;

    const form = document.getElementById('data-request-form');
    const orderNumberEl = document.getElementById('data-request-order-number');
    const downloadBtn = document.getElementById('download-request-form');
    const statusEl = document.getElementById('data-request-status');

    if (!form || !orderNumberEl || !downloadBtn) {
        return;
    }

    const orderNumber = generateOrderNumber();
    orderNumberEl.textContent = orderNumber;

    downloadBtn.addEventListener('click', () => {
        const payload = getDataRequestFormPayload();

        if (!payload) {
            setDataRequestStatus('Заполните обязательные поля перед скачиванием формы.', 'error');
            return;
        }

        downloadDataRequestForm(payload);
    });

    form.addEventListener('submit', async event => {
        event.preventDefault();

        const payload = getDataRequestFormPayload();

        if (!payload) {
            setDataRequestStatus('Заполните обязательные поля.', 'error');
            return;
        }

        await sendDataRequestForm(payload);
    });

    function getDataRequestFormPayload() {
        const name = document.getElementById('request-name')?.value.trim();
        const email = document.getElementById('request-email')?.value.trim();
        const phone = document.getElementById('request-phone')?.value.trim();
        const dataDescription = document.getElementById('request-data-description')?.value.trim();
        const area = document.getElementById('request-area')?.value.trim();
        const format = document.getElementById('request-format')?.value;
        const comment = document.getElementById('request-comment')?.value.trim();

        if (!name || !email || !dataDescription) {
            return null;
        }

        return {
            orderNumber,
            name,
            email,
            phone,
            dataDescription,
            area,
            format,
            comment,
            createdAt: new Date().toLocaleString('ru-RU')
        };
    }

    function downloadDataRequestForm(payload) {
        const content = `
ЗАПРОС ДАННЫХ

Номер заказа: ${payload.orderNumber}
Дата создания: ${payload.createdAt}

ФИО / организация:
${payload.name}

Email:
${payload.email}

Телефон:
${payload.phone || '—'}

Какие данные нужны:
${payload.dataDescription}

Территория / город:
${payload.area || '—'}

Формат данных:
${payload.format || '—'}

Комментарий:
${payload.comment || '—'}
        `.trim();

        const blob = new Blob([content], {
            type: 'text/plain;charset=utf-8'
        });

        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `${payload.orderNumber}.txt`;

        document.body.appendChild(link);
        link.click();
        link.remove();

        URL.revokeObjectURL(url);

        setDataRequestStatus('Форма скачана.', 'success');
    }

    async function sendDataRequestForm(payload) {
        if (!DATA_REQUEST_ENDPOINT || DATA_REQUEST_ENDPOINT.includes('XXXXX')) {
            setDataRequestStatus(
                'Не настроена отправка формы. Укажи endpoint Formspree в script.js.',
                'error'
            );
            return;
        }

        setDataRequestStatus('Отправка запроса...', 'pending');

        try {
            const response = await fetch(DATA_REQUEST_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `Новый запрос данных ${payload.orderNumber}`,
                    'Номер заказа': payload.orderNumber,
                    'Дата создания': payload.createdAt,
                    'ФИО / организация': payload.name,
                    'Email': payload.email,
                    'Телефон': payload.phone || '—',
                    'Какие данные нужны': payload.dataDescription,
                    'Территория / город': payload.area || '—',
                    'Формат данных': payload.format || '—',
                    'Комментарий': payload.comment || '—'
                })
            });

            if (!response.ok) {
                throw new Error('Ошибка отправки формы');
            }

            setDataRequestStatus(
                `Запрос ${payload.orderNumber} успешно отправлен администратору.`,
                'success'
            );

            form.reset();

            const newOrderNumber = generateOrderNumber();
            orderNumberEl.textContent = newOrderNumber;

            // Обновляем номер заказа внутри замыкания нельзя,
            // поэтому проще перезагрузить вкладку при следующем открытии.
            // Если нужен новый номер без перезагрузки — скажи, дам улучшенный вариант.

        } catch (error) {
            console.error(error);

            setDataRequestStatus(
                'Не удалось отправить запрос. Попробуйте позже или скачайте форму и отправьте вручную.',
                'error'
            );
        }
    }

    function setDataRequestStatus(message, type = 'pending') {
        if (!statusEl) {
            return;
        }

        statusEl.textContent = message;
        statusEl.className = `data-request-status ${type}`;
    }
}
// =======================================================
// ИНИЦИАЛИЗАЦИЯ
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
    buildSearchIndex();
    buildSearchSuggestions();

    renderAll();
    setupTabs();
    setupSearchAndFilters();
    setupModal();

    console.log('✅ Сайт загружен');

    SITE_SECTIONS.forEach(sectionConfig => {
        const layers = Array.isArray(layersData[sectionConfig.id])
            ? layersData[sectionConfig.id]
            : [];

        console.log(`${sectionConfig.name}: ${layers.length}`);
    });

    initVectorExampleMap() ;
});