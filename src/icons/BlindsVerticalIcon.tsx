import React, { FC, memo } from 'react';
import BlindsVerticalSvg from '../svg/blinds-vertical.svg';

export interface IBlindsVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BlindsVerticalIcon: FC<IBlindsVerticalIconProps> = memo(props => {
  return <BlindsVerticalSvg {...props} />;
});
