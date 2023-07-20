import { WelcomeEmailSender } from "../application/welcome-email-sender";
import { FakeEmailSender } from "./fake-email-sender";
import { InMemoryUserRepository } from "./in-memory-user-repository";
import { UserController } from "./user-controller";

export const inMemoryUserRepository = new InMemoryUserRepository();
export const fakeEmailSender = new FakeEmailSender();
export const welcomeEmailSender = new WelcomeEmailSender(
  inMemoryUserRepository,
  fakeEmailSender
);
export const userController = new UserController(welcomeEmailSender);
