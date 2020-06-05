FROM mcr.microsoft.com/dotnet/core/sdk:3.1

WORKDIR /app

COPY StatesCountriesApi.csproj .
RUN dotnet restore

COPY . .

EXPOSE 5000

ENTRYPOINT dotnet watch run --urls "http://0.0.0.0:5000"
