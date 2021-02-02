import { DateType, Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { CustomType } from "../my-custom-type";

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property({ type: DateType, nullable: true })
  born?: Date;

  @Property({ type: CustomType, nullable: true })
  myCustomType?: number;
}
