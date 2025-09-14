# Etapa de build com Maven + Eclipse Temurin (OpenJDK 21)
FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app
COPY pom.xml .
COPY src ./src

RUN mvn clean install -DskipTests

# Etapa de runtime com Amazon Corretto 21
FROM amazoncorretto:21
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
