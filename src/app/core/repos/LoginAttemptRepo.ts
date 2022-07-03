import { EntityRepository } from "@mikro-orm/postgresql";
import { LoginAttempt } from "../models/LoginAttempt";

export class LoginAttemptRepo extends EntityRepository<LoginAttempt> {}
