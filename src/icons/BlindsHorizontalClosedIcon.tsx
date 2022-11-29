import React, { FC, memo } from 'react';
import BlindsHorizontalClosedSvg from '../svg/blinds-horizontal-closed.svg';

export interface IBlindsHorizontalClosedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BlindsHorizontalClosedIcon: FC<IBlindsHorizontalClosedIconProps> = memo(props => {
  return <BlindsHorizontalClosedSvg {...props} />;
});
