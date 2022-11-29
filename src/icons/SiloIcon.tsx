import React, { FC, memo } from 'react';
import SiloSvg from '../svg/silo.svg';

export interface ISiloIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SiloIcon: FC<ISiloIconProps> = memo(props => {
  return <SiloSvg {...props} />;
});
