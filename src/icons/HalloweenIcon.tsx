import React, { FC, memo } from 'react';
import HalloweenSvg from '../svg/halloween.svg';

export interface IHalloweenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HalloweenIcon: FC<IHalloweenIconProps> = memo(props => {
  return <HalloweenSvg {...props} />;
});
