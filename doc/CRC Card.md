# CRC Cards



## Old

<table>
  <tr>
    <td colspan="2">Cliente</td>
  </tr>
  <tr>
    <td colspan="2">Dati del cliente che vuole pagare con easyPay</td>
  </tr>
  <tr>
    <td>Responsibility</td>
    <td>Collaborators</td>
  </tr>
  <tr>
    <td>Visualizzare / inserire / modificare i propri dati</td>
    <td>Conto</td>
  </tr>
</table>
<table>
  <tr>
    <td colspan="2">Commerciante</td>
  </tr>
  <tr>
    <td colspan="2">Gestione dei dati del commerciante che offre di pagare con easyPay</td>
  </tr>
  <tr>
    <td>Responsibility</td>
    <td>Collaborators</td>
  </tr>
  <tr>
    <td>Visualizzare / inserire / modificare i propri dati</td>
    <td>Conto</td>
  </tr>
</table>

<table>
  <tr>
    <td colspan="2">Conto</td>
  </tr>
  <tr>
    <td colspan="2">Gestione dei dati personali del cliente inerenti ai dati</td>
  </tr>
  <tr>
    <td>Responsibility</td>
    <td>Collaborators</td>
  </tr>
  <tr>
    <td>Transazione che permette di effettuare un pagamento a un Cliente presso un commerciante o tra clienti</td>
    <td>Pagamento Commerciante Cliente Ricarica Movimenti</td>
  </tr>
</table>

<table>
  <tr>
    <td colspan="2">Movimenti</td>
  </tr>
  <tr>
    <td colspan="2">Storico delle transazioni</td>
  </tr>
  <tr>
    <td>Responsibility</td>
    <td>Collaborators</td>
  </tr>
  <tr>
    <td>Visualizzare le transazioni per periodo selezionato</td>
    <td>Conto</td>
  </tr>
</table>

<table>
  <tr>
    <td colspan="2">Pagamento</td>
  </tr>
  <tr>
    <td colspan="2">Gestione del pagamento</td>
  </tr>
  <tr>
    <td>Responsibility</td>
    <td>Collaborators</td>
  </tr>
  <tr>
    <td>Transazione che permette di effettuare un pagamento a un Cliente presso un commerciante o tra clienti</td>
    <td>Conto</td>
  </tr>
</table>

<table>
  <tr>
    <td colspan="2">Ricarica</td>
  </tr>
  <tr>
    <td colspan="2">Gestione della ricarica via contanti presso commerciante</td>
  </tr>
  <tr>
    <td>Responsibility</td>
    <td>Collaborators</td>
  </tr>
  <tr>
    <td>Ricaricare il proprio conto via contanti / bonifico </td>
    <td>Conto</td>
  </tr>
</table>

<table>
  <tr>
    <td colspan="2">Operatore</td>
  </tr>
  <tr>
    <td colspan="2">Amministratore del sistema</td>
  </tr>
  <tr>
    <td>Responsibility</td>
    <td>Collaborators</td>
  </tr>
  <tr>
    <td>fornire assistenza e gestione totale delle operazioni</td>
    <td>Anagrafica Conto</td>
  </tr>
</table>

<table>
  <tr>
    <td colspan="2">Anagrafica</td>
  </tr>
  <tr>
    <td colspan="2">Gestione dati utenti</td>
  </tr>
  <tr>
    <td>Responsibility</td>
    <td>Collaborators</td>
  </tr>
  <tr>
    <td>Visualizza / inserisce e modifica tutti i dati degli utenti</td>
    <td>Operatore Cliente Commerciante</td>
  </tr>
</table>


## Nuove

| Cliente                                                      | Superclasse: -                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Descrizione**: Utente che utilizza il sistema di pagamento *EasyPay* | **Subclassi: Commerciante**                                  |
| **Responsabilità**:<br />- Visualizzare i propri dati<br />- Modificare i propri dati<br />- Inserire i propri dati | **Collaborazioni**:<br />- Conto<br />- Credenziali<br />- Commerciante |

| Commerciante                                                 | Superclasse: Cliente                                        |
| ------------------------------------------------------------ | :---------------------------------------------------------- |
| **Descrizione**: Commerciante che utiliza il sistema di pagamento *EasyPay* | **SubClassi**: -                                            |
| **Responsabilità**:<br />- Visualizzare i propri dati<br />- Modificare i propri dati<br />- Inserire i propri dati<br />- Accettare pagamenti | **Collaborazioni**:<br />- Conto<br />- Cliente<br /><br /> |

| Credenziali                                                  | Superclasse: -                     |
| ------------------------------------------------------------ | ---------------------------------- |
| **Descrizione**: Informazioni di accesso rlative ad un Cliente | **Subclassi: -**                   |
| **Responsabilità**:<br />- Permettere l'accesso ad un Cliente | **Collaborazioni**:<br />- Cliente |

| Conto                                                        | Superclasse: -                                      |
| ------------------------------------------------------------ | --------------------------------------------------- |
| **Descrizione**: Gestisce le informazioni relative alla situazione economica di un Cliente | **Subclassi: -**                                    |
| **Responsabilità**:<br />- Visualizzare la propria situazione economica<br />- Modificare la propria configurazione economica | **Collaborazioni**:<br />- Cliente<br />- Movimento |

| Movimento                                                    | Superclasse: -                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Descrizione**: Gestisce le informazioni relative agli spostamenti di valuta nel seistema | **Subclassi: Pagamento, Ricarica**                           |
| **Responsabilità**:<br />- Visualizzare le proprie transazioni<br /><br /> | **Collaborazioni**:<br />- Conto<br />- Pagamento<br />- Ricarica |

| Pagamento                                                    | Superclasse: Movimento                            |
| ------------------------------------------------------------ | ------------------------------------------------- |
| **Descrizione**: Gestisce le informazioni relative agli spostamenti di valuta fra due Conti | **Subclassi: -**                                  |
| **Responsabilità**:<br />- Effettuare uno spostamento di valuta fra due Conti<br /> | **Collaborazioni**:<br />- Movimento<br />- Conto |

| Ricarica                                                     | Superclasse: Movimento                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Descrizione**: Gestisce le informazioni relative all'introduzione di valuta nel sistema | **Subclassi: -**                                             |
| **Responsabilità**:<br />- Effettuare una introduzione di valuta in un Conto<br /><br /> | **Collaborazioni**:<br />- Movimento<br />- Conto<br />- Atm |

| Atm                                                          | Superclasse: -                      |
| ------------------------------------------------------------ | ----------------------------------- |
| **Descrizione**: Gestisce le informazioni relative ai punti in cui è possibile effettuare ricariche | **Subclassi: -**                    |
| **Responsabilità**:<br />- Effettuare una ricarica su un conto | **Collaborazioni**:<br />- Ricarica |

## Next

| Operatore                                                    | Superclasse: -                                     |
| ------------------------------------------------------------ | -------------------------------------------------- |
| **Descrizione**: Amministratore del sistema                  | **Subclassi: -**                                   |
| **Responsabilità**:<br />- Fornire assistenza totale delle operazioni<br /> | **Collaborazioni**:<br />- Anagrafica<br />- Conto |

| Anagrafica                                                   | Superclasse: -                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Descrizione**: Gestione degli utenti                       | **Subclassi: -**                                             |
| **Responsabilità**:<br />- Visualizzare le utenze:<br />- Modificare le utenze:<br />- Inserire Operatori | **Collaborazioni**:<br />- Cliente<br />- Commerciante<br />- Operatore |

