FROM node:20-bullseye-slim

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Очищаем кэш npm и устанавливаем зависимости
RUN npm cache clean --force 
RUN npm install --legacy-peer-deps

# Копируем остальной код приложения в рабочую директорию
COPY . .

# Открываем порт для взаимодействия с React приложением
EXPOSE 5173

# Запускаем React приложение
CMD ["npm", "run", "dev"]
