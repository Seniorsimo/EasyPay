```mermaid
erDiagram
	Cliente ||--|| Crendenziali : has
	Cliente |o--|| Commerciante : is
	Conto ||--|| Cliente : has
	Conto ||--o{ Movimento : to
	Conto ||--o{ Movimento : from
	Movimento ||--o| Ricarica : is
	Movimento ||--o| Pagamento : is
	Ricarica }o--|| Atm : has
	
    Crendenziali {
        bigint ClienteId
        varchar username
        varchar password
        varchar token
        date createdAt
        date updatedAt
    }
    Commerciante {
        bigint ClienteId
        varchar ragSoc
        varchar pIva
        blob point
    }
    Cliente {
        bigint id
        varchar otp
        varchar pin
        varchar nome
        varchar cognome
        varchar cf
        integer birthDate
        varchar phone
        varchar address
        date createdAt Date
        date updatedAt Date
    }
    Atm {
        bigint id
    }
    Ricarica {
        bigint MovimentoId
        bigint AtmId
    }
    Pagamento {
        bigint MovimentoId
    }
    Movimento {
        bigint id
        float valore
        integer timestamp
        bigint from
        bigint to
    }
    Conto {
        bigint id
        float budget
        float saldo
        bigint ClienteId
    }
```

