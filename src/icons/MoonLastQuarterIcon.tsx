import React, { FC, memo } from 'react';
import MoonLastQuarterSvg from '../svg/moon-last-quarter.svg';

export interface IMoonLastQuarterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoonLastQuarterIcon: FC<IMoonLastQuarterIconProps> = memo(props => {
  return <MoonLastQuarterSvg {...props} />;
});
