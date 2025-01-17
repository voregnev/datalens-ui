# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1675.1] 10.06.2024

Created:

- созданы функции по работе с пользователями;
- добавлена функция "Поделиться" для дашбордов.

Fixed:

- исправлен инфтерфейс "Поделиться", добавлена кнопка "Обновить ссылку".

## [0.1675.0] 05.06.2024

Created:

- обновление с main ветки 0.1532.0 -> 0.1675.0

Fixed:

- исправлена фильтрация по ролям;
- исправлены мелкие ошибки.

## [0.1532.6] 27.04.2024

Created:

- Добавлен функционал по экспорту данных в ODS формат.

## [0.1532.5] 25.04.2024

Created:

- [0.1532.5] Добавлен функционал по выдаче прав доступа к объектам DL для определенных ролей в интерфейсе.

## [0.1532.4] 16.04.2024

Created:

- [0.1532.4] добавлена возможность в параметрах QL-чарта выводить label;
- [0.1532.4] созданы две функции /ping?encodeId и /ping?decodeId.

Fixed:

- исправлена ошибка в авторизации;
- пункт меню Поделится отображается только для пользователей, у которых есть права на редактирование;
- установлен язык по умолчанию 'ru'.

## [0.1532.0] 16.04.2024

Created:

- обновление с main ветки 0.1488.0 -> 0.1532.0

## [0.1488.2] 08.04.2024

Created:

- добавлен интерфейс авторизации по логину и паролю;
- добавлен код для разработки интерфейса безопасности;
- [0.1488.2] добавлен логин на кнопке выйти.

Fixed:

- [0.1488.1] исправлена ошибка с отсутствие доступа при создание чарта-QL;

## [0.1410.0] 12.03.2024

Created:

- загружены обновления с главной ветки;
- внесены изменения связанные с безопасность редактирования;
- добавлена возможность "Поделиться".

Fixed:

- доработан механизм для прокидывания параметров запроса для "поделиться".

### Added:
* Добавлена возможность передача заголовка `x-rpc-authorization` в запросе на сервер.

## 0.1245.0-1

### Added:
* Добавлена возможность передача заголовка `x-rpc-authorization` в запросе на сервер.