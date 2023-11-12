import * as SQLite from "expo-sqlite";

//Create database
const db = SQLite.openDatabase("sessions.db");

//init database
export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)",
        [],
        () => resolve(),
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
};

//function to add data on db
export const insertSession = ({ localId, email, token }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO sessions (localId, email, token) VALUES (?, ?, ?)",
        [localId, email, token],
        (_, result) => resolve(result),
        (_, error) => reject(error)
        )
    });
  });
  return promise;
};

//read data to session
export const fetchSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM sessions',
            [],
            (_,result) => resolve(result),
            (_,error) => reject(error)
        )
        })
    })
    return promise
}

export const deleteSessions = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('DELETE FROM sessions',
            [],
            (_,result) => resolve(result),
            (_,error) => reject(error)
            )
        })
    })
    return promise
}