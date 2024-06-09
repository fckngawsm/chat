# Используем базовый образ Node.js
FROM node:18.20.1

# Установка рабочей директории
WORKDIR /usr/src/app

# Копируем файлы зависимостей
COPY package.json ./
COPY yarn.lock ./

# Устанавливаем зависимости
RUN yarn install

# Копируем остальные файлы проекта
COPY . .

# Открываем порт
EXPOSE 8000

# Копируем скрипт entrypoint.sh и устанавливаем права на выполнение
COPY ./entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

# Определяем entrypoint
ENTRYPOINT ["sh", "./entrypoint.sh"]
