Для разработки создайте .env файл в папке docker и создайте переменные для использования прокси, пример в env.example
Прокси нужно для того чтобы работать с prisma (не работает с ru ip)

Если установили новые пакеты в контейнере, для копирования node_modules на хост использовать команды:
docker cp "autotochka-client:/app/node_modules" "client/"
docker cp "autotochka-server:/app/node_modules" "server/"
