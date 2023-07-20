import { EmailSender } from "../domain/email-sender";
import { UserRepository } from "../domain/user-repository";

export class WelcomeEmailSender {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly emailSender: EmailSender
  ) {}

  async run(userId: string) {
    console.log(userId);
    const user = await this.userRepository.getById(userId);
    if (!user) {
      throw new Error("User id not found");
    }

    console.log("User", user.email);
    await this.emailSender.send(user.email, "Welcome to the app");
  }
}
