export interface AccessTokenPayload {
  iss: string;
  aud: number;
}

export class UserByAccessTokenDto {
  private aud: number;

  constructor({ aud }: AccessTokenPayload) {
    this.aud = aud;
  }

  get id() {
    return this.aud;
  }
}
