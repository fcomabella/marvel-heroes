import { IconButtonProps } from '@ui/components/icon-button/icon-button-props';
import { IconButtonRoot } from '@ui/components/icon-button/icon-button-root';
import { ReactNode } from 'react';

export const IconButton = ({
  children,
  ...props
}: IconButtonProps): ReactNode => (
  <IconButtonRoot {...props}>{children}</IconButtonRoot>
);
