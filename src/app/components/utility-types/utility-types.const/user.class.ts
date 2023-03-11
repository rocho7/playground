import { IUser, UserRequired, UserPartial, UserUptadePartial, UserOmit, UserGroup } from "../utility-types.const/utility-types.interface";

export class Users {

  users: IUser
  /**
   * Agrega un usuario con lastName opcional
   *
   */
  public add( user: IUser ): void {
    // this.users.push(user);
  }

  /**
   * Agrega un usuario con todas sus propiedades
   *
   */

  public addWithFullInfo(user: UserRequired): void {}

  /**
   * Busca un usuario por cualquiera de sus propiedades
   * Retorna un usuario sin la propiedad createdAt
   * Retorna el usuario en modo lectura
   */

  public find( props: UserPartial ): UserOmit {
    return this.users as UserOmit;
  }

  /**
   * Actualiza un usuario de forma parcial
   * Solo se puede actualizar name y lastName
   */

  public update( user: UserUptadePartial ): void {}

  /**
   * Crea un mapa de usuarios agrupados por nombre
   * {
   *  Juan: [users],
   *  ...
   * }
   *
   */

  public groupByName(): UserGroup {
    return {};
  }
}
