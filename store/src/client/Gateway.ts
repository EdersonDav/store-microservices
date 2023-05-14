import axios, { AxiosInstance } from 'axios';

export class Gateway {
  public readonly request: AxiosInstance;
  constructor(url: string) {
    this.request = axios.create({
      baseURL: url,
    });
  }
}
