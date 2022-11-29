import React, { FC, memo } from 'react';
import MoonWaningCrescentSvg from '../svg/moon-waning-crescent.svg';

export interface IMoonWaningCrescentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoonWaningCrescentIcon: FC<IMoonWaningCrescentIconProps> = memo(props => {
  return <MoonWaningCrescentSvg {...props} />;
});
