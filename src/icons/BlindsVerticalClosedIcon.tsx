import React, { FC, memo } from 'react';
import BlindsVerticalClosedSvg from '../svg/blinds-vertical-closed.svg';

export interface IBlindsVerticalClosedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BlindsVerticalClosedIcon: FC<IBlindsVerticalClosedIconProps> = memo(props => {
  return <BlindsVerticalClosedSvg {...props} />;
});
