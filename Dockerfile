FROM node:18.4.0-alpine3.15
RUN addgroup app && adduser -S -G app app 
RUN mkdir /app && chown app:app /app
USER app
WORKDIR /app
RUN mkdir data
COPY --chown=app:app package*.json ./
RUN npm install 
COPY . .
ENV REACT_APP_API_END_POINT_SABEK_USER=https://j55nm7cgfj.execute-api.us-east-2.amazonaws.com/default/LambdaForIoT?topic= \
    REACT_APP_GATEWAY_API_KEY_SABEK_USER=rb21EUMVreCe1p3CITM54SSpxhmZMA721WlfGiV4
EXPOSE 3000 
CMD ["npm","start"]
