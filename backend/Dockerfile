FROM openjdk:8
WORKDIR /app
COPY ./target/*.war ./app.war
EXPOSE 8080
CMD ["java", "-jar","app.war"]