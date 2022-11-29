import React, { FC, memo } from 'react';
import BellRingSvg from '../svg/bell-ring.svg';

export interface IBellRingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellRingIcon: FC<IBellRingIconProps> = memo(props => {
  return <BellRingSvg {...props} />;
});
