import * as jwt from "jsonwebtoken";

export interface AuthenticationDataForm{
    hashlink :string | undefined
  }
  export class AuthenticatorForm {
    public generate(input: AuthenticationDataForm): string {

    const token = jwt.sign(input, (process.env.JWT_KEY) as string,
    {
      expiresIn: process.env.EXPIRES_IN,
    }
    );
    return token;
  }

  public getTokenData(token: string): AuthenticationDataForm {
    const data = jwt.verify(token, (process.env.JWT_KEY) as string,)
    return data as AuthenticationDataForm;
  }
}