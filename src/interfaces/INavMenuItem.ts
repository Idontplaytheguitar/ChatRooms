import { ILink } from "./ILink";

export interface INavMenuItem {
    trigger: string;
    content: {
      link: ILink;
      description?: string
    }[];
}
