import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
} from "@mikro-orm/core";
import { Person } from "../models/Person";

@Entity()
export class LoginAttempt {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => Person, {
    wrappedReference: true,
  })
  person!: IdentifiedReference<Person>;
}
