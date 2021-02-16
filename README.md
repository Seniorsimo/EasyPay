# EasyPay

EasyPay è un servizio di micro-pagamenti, caratterizzato dalla possibilità di effettuare gli stessi in maniera pratica e veloce tramite il proprio smartphone.

Il progetto è composto da molteplici moduli:

- un frontend dedicato ai commercianti [EasyPayAtm (https://github.com/gmammolo/Easypay-atm)](https://github.com/gmammolo/Easypay-atm)
- un applicativo Android dedicato agli utilizzatori [EasyPayMobile (https://github.com/MichelettiAlessandro/EasyPay_Mobile)](https://github.com/MichelettiAlessandro/EasyPay_Mobile)
- una interfaccia per l'integrazione con servizi terzi [EasyPayOnline (https://github.com/gmammolo/EasyPay-online)](https://github.com/gmammolo/EasyPay-online)

**ATTENZIONE: Il progetto è un lavoro universitario e non ha alcuna finalità commerciale. Il progetto è un semplice prototipo dell'idea**



## Spring Boot

Il progetto è stato realizzato utilizzando [Spring Boot](https://spring.io/projects/spring-boot) nella sua versione 2.1.9

```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.1.9.RELEASE)
 
spring-boot-starter-web      2.1.9.RELEASE
spring-boot-starter-data-jpa 2.1.9.RELEASE
spring-boot-starter-security 2.1.9.RELEASE
spring-boot-starter-actuator 2.1.9.RELEASE
springdoc-openapi-ui         1.5.2
log4j                        1.2.17
lombok                       1.18.6
jstl                         1.2
tomcat-embed-jasper          9.0.22
derby                        10.13.1.1
postgresql                   42.2.6
hibernate-spatial            5.3.12.Final
java-jwt                     3.4.0
```



## Server di Sviluppo

 Per testare il contenuto locale è sufficiente lanciare il jar tramite il comando

```
$ java -jar ./target/EasyPay-1.0.jar --server.port=8080
```

*Nota: a causa di un problema di compatibilità l'ambiente di sviluppo non può essere eseguito senza un supporto database compatibile con Hibernate spatial. Il progetto è configurato per avviarsi tramite Derby con un database "in memory" nel profilo di sviluppo, ma affinché l'avvio avvenga correttamente è necessario rimuovere suddetta dipendenza o utilizzare un database supportato.*

## Server di Application / Produzione

Per avviare il contenuto tramite profilo di produzione è necessario lanciare il jar opportunamente configurato

```
$ java -jar ./target/EasyPay-1.0.jar --server.port=8080 -Dspring.profiles.active=prod -Dspring.datasource.url=jdbc:postgresql://<database_host> -Dspring.datasource.username=<database_username> -Dspring.datasource.password=<database_password>
```

Il progetto è rilasciato su [Heroku](https://www.heroku.com/). *Essendo un progetto universitario con finalità il conseguimento di un esame lo sviluppo sarà interrotto una volta entrato in produzione e presentato.*

L'ambiente di Application verrà sostituito dall'ambiente di Production in data 14/02/2021 ed è raggiungibile su [https:///easypay-unito.herokuapp.com/](https://easypay-unito.herokuapp.com/).

La descrizione delle api per l'integrazione del servizio sono disponibili qui: [https://easypay-unito.herokuapp.com/swagger-ui)](https://easypay-unito.herokuapp.com/swagger-ui).



## Info utili su Spring

Spring è un framework java molto flessibile focalizzato all'utilizzo enterprise. Agevola lo sviluppo a livello applicativo permettendo un disaccoppiamento fra quest'ultimo e l'ambiente di lavoro.

Spring Boot, invece, permette la realizzazione di applicazioni tramite Spring astraendo ulteriormente l'applicativo, il quale conterrà tutto il necessario per poter essere "eseguito" semplicemente avviandolo.

### Componenti utilizzate

#### spring-data-jpa

Utilizzato a livello di persistenza dei dati: permette la realizzazione di *Repository* per l'accesso ai dati tramite le **Java Persistance API** e il framework [Hibernate (https://hibernate.org/)](https://hibernate.org/)

#### spring-security

Utilizzato per la gestione degli accessi all'intero sistema.

#### hibernate-spatial

Permette l'utilizzo e l'integrazione nei *Repository JPA* di query *Spaziali*. Utilizzato per l'estrazione dei dati relativi ai commercianti presenti in zona.

#### lombok

Libreria Java per ridurre la quantità di codice *boilerplate* e velocizzare lo sviluppo. Permette di automatizzare la realizzazione di metodi get, set, costruttori e molto altro. [Lombok (https://projectlombok.org/)](https://projectlombok.org/).

