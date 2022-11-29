import React, { FC, memo } from 'react';
import BellSleepOutlineSvg from '../svg/bell-sleep-outline.svg';

export interface IBellSleepOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellSleepOutlineIcon: FC<IBellSleepOutlineIconProps> = memo(props => {
  return <BellSleepOutlineSvg {...props} />;
});
