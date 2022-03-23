export interface ButtonType {
   text: string,
   cname?: string,
   additional?: HTMLElement | Element,
   action?: React.MouseEventHandler<HTMLButtonElement>
}