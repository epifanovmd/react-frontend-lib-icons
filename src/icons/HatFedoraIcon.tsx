import React, { FC, memo } from 'react';
import HatFedoraSvg from '../svg/hat-fedora.svg';

export interface IHatFedoraIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HatFedoraIcon: FC<IHatFedoraIconProps> = memo(props => {
  return <HatFedoraSvg {...props} />;
});
