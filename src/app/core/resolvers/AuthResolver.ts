// Commenting out this import, makes the TS error go away :P
import colors from "colors";

import { FilterQuery, ObjectQuery } from "@mikro-orm/core";
import { Person } from "../models/Person";
import { LoginAttemptRepo } from "../repos/LoginAttemptRepo";
import { LoginAttempt } from "../../core/models/LoginAttempt";

type A = FilterQuery<Person>;
type B = ObjectQuery<LoginAttempt>["person"]; // = `any` <- symptom of the problem

export class AuthResolver {
  constructor(private loginAttemptRepo: LoginAttemptRepo) {}

  async searchLoginAttempts() {
    const person = 42;
    await this.loginAttemptRepo.find(
      // The error occurs here:
      // Type of property 'person' circularly references itself in mapped type '{ id?: FilterValue<number> | undefined; person?: any; }'.ts(2615)
      {
        person,
      }
    );
  }
}
