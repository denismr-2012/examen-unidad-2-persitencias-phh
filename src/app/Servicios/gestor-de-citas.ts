import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Capacitor } from '@capacitor/core';


@Injectable({
  providedIn: 'root'
})
export class GestorDeCitas { sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite)
  platform: string = ""
  initiated:boolean = false 
  db!: SQLiteDBConnection
  DB_NAME: string = "citas_table"
  DB_ENCRYPTION: boolean = false
  DB_MODE: string = "no-encryption"
  DB_VERSION: number = 1
  DB_READ_ONLY: boolean = false

  
  COL_ID: string = "id"
  TABLE_NAME: string = "citas_table"
  COL_QUOTESQL: string = "citas"
  COL_AUTHORSQL: string = "autor"

  
  DB_SQL_TABLES: string = `
    CREATE TABLE IF NOT EXISTS ${this.TABLE_NAME} (
      ${this.COL_ID} INTEGER PRIMARY KEY AUTOINCREMENT,
      ${this.COL_QUOTESQL} TEXT NOT NULL,
      ${this.COL_AUTHORSQL} TEXT NOT NULL
    );`
  getDeleteFromHomePage: any;

  constructor() { }

  async startPlugin() { 
    try {
      console.log("DbService::iniciarPlugin")
      this.platform = Capacitor.getPlatform()
  
      console.log("DbService::iniciarPlugin plataform="+this.platform)
      if(this.platform == "web") {        
        await customElements.whenDefined('jeep-sqlite')        
        const jeepSqliteEl = document.querySelector('jeep-sqlite')
        if(jeepSqliteEl != null) {
          console.log("DbService::iniciarPlugin::initWebStore")
          await this.sqlite.initWebStore()
        }
      }
  
      console.log("sqlite::createConnection()")
      this.db = await this.sqlite.createConnection(
        this.DB_NAME,
        this.DB_ENCRYPTION,
        this.DB_MODE,
        this.DB_VERSION,
        this.DB_READ_ONLY
      )
      console.dir(this.db)    
  
      console.log("db.open()")      
      const ret = await this.sqlite.checkConnectionsConsistency()
      const isConn = (await this.sqlite.isConnection(this.DB_NAME, this.DB_READ_ONLY)).result;      
      if (ret.result && isConn) {
        this.db = await this.sqlite.retrieveConnection(this.DB_NAME, this.DB_READ_ONLY);
      } else {
        this.db = await this.sqlite.createConnection(this.DB_NAME, this.DB_ENCRYPTION, this.DB_MODE, this.DB_VERSION, this.DB_READ_ONLY);
      }    

      await this.db.open() 
      console.dir(this.db)    
  
      console.log("db.execute(SQL_TABLES)")
      console.log(this.DB_SQL_TABLES)
      await this.db.execute(this.DB_SQL_TABLES)
  
      if(this.platform == "web") {
        console.log("DbService::iniciarPlugin::saveStore()")
        await this.sqlite.saveToStore(this.DB_NAME)
      }
      this.initiated = true 
    } catch(e) {
      console.error(e)
    }


  
  }

  async terminateConnection() { 
    await this.db.close()
  }

  async addCita(citaReceive: Cita) { 
    const sqlINSERT = `INSERT INTO ${this.TABLE_NAME}
                      (${this.COL_QUOTESQL}, ${this.COL_AUTHORSQL})
                      VALUES (?, ?)`
    await this.db.run(sqlINSERT, [citaReceive.cita, citaReceive.autor])
  }

  async getCitaListRandom(): Promise<Cita> { 
    const sqlSELECT = `SELECT * FROM ${this.TABLE_NAME} ORDER BY RANDOM() LIMIT 1`
    const getCitaListQuery = await this.db.query(sqlSELECT)
    return getCitaListQuery?.values?.[0] ?? null
  }

  async getCitaList(): Promise<Cita[]> { 
    const sqlSELECT = `SELECT * FROM ${this.TABLE_NAME}`
    const getCitaListQuery = await this.db.query(sqlSELECT)
    return getCitaListQuery?.values ?? []
  }

  async deleteCita(id: number){ 
    const sqlDELETE = `DELETE FROM ${this.TABLE_NAME} WHERE ${this.COL_ID} = ?`
    await this.db.run(sqlDELETE, [id])
  }
  
}
