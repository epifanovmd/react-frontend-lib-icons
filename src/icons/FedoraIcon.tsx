import React, { FC, memo } from 'react';
import FedoraSvg from '../svg/fedora.svg';

export interface IFedoraIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FedoraIcon: FC<IFedoraIconProps> = memo(props => {
  return <FedoraSvg {...props} />;
});
