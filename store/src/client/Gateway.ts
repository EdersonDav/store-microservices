import axios, { AxiosInstance } from 'axios';

export class Gateway {
  public readonly gateway: AxiosInstance;
  constructor(url: string) {
    this.gateway = axios.create({
      baseURL: url,
    });
  }
}
