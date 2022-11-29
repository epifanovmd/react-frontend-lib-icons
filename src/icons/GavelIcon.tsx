import React, { FC, memo } from 'react';
import GavelSvg from '../svg/gavel.svg';

export interface IGavelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GavelIcon: FC<IGavelIconProps> = memo(props => {
  return <GavelSvg {...props} />;
});
