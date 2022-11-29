import React, { FC, memo } from 'react';
import SiloOutlineSvg from '../svg/silo-outline.svg';

export interface ISiloOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SiloOutlineIcon: FC<ISiloOutlineIconProps> = memo(props => {
  return <SiloOutlineSvg {...props} />;
});
