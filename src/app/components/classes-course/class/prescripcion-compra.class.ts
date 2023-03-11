

export class Item {
   _codItem:                       number;
    _desItem:                       string ;
   _mcaHay:                        string ;
   _pvp:                           string ;
   _ordenAgrupacion:               number;
   _codEstadoProductoPrescripcion: string ;
   _numTiendas:                    number;

  get codItem() {
    return this._codItem
  }

  set codItem( desc ) {
    this._codItem = desc;
  }

  get desItem() {
    return this._desItem
  }

  set desItem( desc ) {
    console.log('%cdesItem ', 'color: white; background-color: #007acc;', desc);
    this._desItem = desc.toUpperCase();
  }

  get mcaHay() {
    return this._mcaHay
  }

  set mcaHay( desc ) {
    this._mcaHay = desc;
  }

  get pvp() {
    return this._pvp
  }

  set pvp( desc ) {
    this._pvp = desc;
  }

  get ordenAgrupacion() {
    return this._ordenAgrupacion
  }

  set ordenAgrupacion( desc ) {
    this._ordenAgrupacion = desc;
  }

  get codEstadoProductoPrescripcion() {
    return this._codEstadoProductoPrescripcion;
  }

  set codEstadoProductoPrescripcion( desc ) {
    this._codEstadoProductoPrescripcion = desc;
  }
  get numTiendas() {
    return this._numTiendas
  }

  set numTiendas( desc ) {
    this._numTiendas = desc;
  }
}


export class Agrupacion {
  _codAgrupacion: number;
  _desAgrupacion: string;
  _item:          Item[];

  get codAgrupacion() {
    return this._codAgrupacion;
  }

  set codAgrupacion( d ) {
    this._codAgrupacion = d;
  }
  get desAgrupacion() {
    return this._desAgrupacion;
  }

  set desAgrupacion( d ) {
    this._desAgrupacion = d;
  }
  get item() {
    return this._item;
  }

  set item( d ) {
    this._item = [];
    if ( d.length ) {
      d.forEach( ( r, i) => {
        this._item.push(
          Object.assign( new Item, r)
        )
      })
    }
  }
}


export class GrupoCompra {
  _codGrupoCompra:        number;
  _desGrupoCompra:        string;
  _codEstadoPrescripcion: string;
  _agrupacion:            Agrupacion[];

  get codGrupoCompra() {
    return this._codGrupoCompra;
  }
  set codGrupoCompra( d ) {
    this._codGrupoCompra = d;
  }
  get desGrupoCompra() {
    return this._desGrupoCompra;
  }
  set desGrupoCompra( d ) {
    this._desGrupoCompra = d;
  }
  get codEstadoPrescripcion() {
    return this._codEstadoPrescripcion;
  }
  set codEstadoPrescripcion( d ) {
    this._codEstadoPrescripcion = d;
  }
  get agrupacion() {
    return this._agrupacion;
  }
  set agrupacion( d ) {
    this._agrupacion = [];
    d.forEach(i => {
      this._agrupacion.push(
        Object.assign( new Agrupacion, i )
      )
    });
  }
}


export class PrescipcionCompra {
  _fecServicio: string;
  _grupoCompra: GrupoCompra[];

  get fecServicio() {
    return this._fecServicio;
  }
  set fecServicio( f ) {
    this._fecServicio = f;
  }

  get grupoCompra() {
    return this._grupoCompra;
  }

  set grupoCompra( gc: GrupoCompra[] ) {
    this._grupoCompra = [];
    gc.forEach( (pres: any, index) => {
      this._grupoCompra.push(
        Object.assign( new GrupoCompra, pres )
      );

        // if ( this._grupoCompra[index].agrupacion.length ) {
        //   this._grupoCompra[index].agrupacion = this._grupoCompra[index].agrupacion;

        //   if ( this._grupoCompra[index].agrupacion[index].item.length ) {
        //     this._grupoCompra[index].agrupacion[index].item = this._grupoCompra[index].agrupacion[index].item;
        //   }
        // }

    });
    console.log('%cgrupo compra ', 'color: white; background-color: #007acc;', this._grupoCompra);
  }
}
