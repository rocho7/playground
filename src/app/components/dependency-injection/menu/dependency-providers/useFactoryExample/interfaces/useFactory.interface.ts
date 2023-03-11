export interface IUseFactory {
  typeOfService: (service: string) => void;
  get: () => string;
  post?: () => string;
  delete?: () => string;

}
