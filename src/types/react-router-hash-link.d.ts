declare module 'react-router-hash-link' {
  import { ComponentType, ReactNode } from 'react';
  import { LinkProps } from 'react-router-dom';

  export interface HashLinkProps extends Omit<LinkProps, 'to'> {
    to: string;
    smooth?: boolean;
    scroll?: (element: HTMLElement) => void;
    children: ReactNode;
  }

  export const HashLink: ComponentType<HashLinkProps>;
}
