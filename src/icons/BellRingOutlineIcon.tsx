import React, { FC, memo } from 'react';
import BellRingOutlineSvg from '../svg/bell-ring-outline.svg';

export interface IBellRingOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellRingOutlineIcon: FC<IBellRingOutlineIconProps> = memo(props => {
  return <BellRingOutlineSvg {...props} />;
});
