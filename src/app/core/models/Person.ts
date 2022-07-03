import { Entity, PrimaryKey } from "@mikro-orm/core";

@Entity()
export class Person {
  @PrimaryKey()
  id!: number;
}
