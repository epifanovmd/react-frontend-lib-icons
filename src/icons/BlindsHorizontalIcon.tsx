import React, { FC, memo } from 'react';
import BlindsHorizontalSvg from '../svg/blinds-horizontal.svg';

export interface IBlindsHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BlindsHorizontalIcon: FC<IBlindsHorizontalIconProps> = memo(props => {
  return <BlindsHorizontalSvg {...props} />;
});
