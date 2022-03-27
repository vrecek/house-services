import { ChangeEventHandler } from "react";
import { IconBaseProps } from "react-icons";

export interface offerSelect {
   icon: IconBaseProps,
   options: Array<string>,
   action: ChangeEventHandler<HTMLElement>
}