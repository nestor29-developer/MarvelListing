export class Error {
  constructor(
    public status: number,
    public statusText: string,
    public message: string
  ) {}
}
