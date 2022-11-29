import React, { FC, memo } from 'react';
import MoonWaxingCrescentSvg from '../svg/moon-waxing-crescent.svg';

export interface IMoonWaxingCrescentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoonWaxingCrescentIcon: FC<IMoonWaxingCrescentIconProps> = memo(props => {
  return <MoonWaxingCrescentSvg {...props} />;
});
