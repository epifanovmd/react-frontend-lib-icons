import React, { FC, memo } from 'react';
import MoonFirstQuarterSvg from '../svg/moon-first-quarter.svg';

export interface IMoonFirstQuarterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoonFirstQuarterIcon: FC<IMoonFirstQuarterIconProps> = memo(props => {
  return <MoonFirstQuarterSvg {...props} />;
});
