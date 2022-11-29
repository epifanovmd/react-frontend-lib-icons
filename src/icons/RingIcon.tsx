import React, { FC, memo } from 'react';
import RingSvg from '../svg/ring.svg';

export interface IRingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RingIcon: FC<IRingIconProps> = memo(props => {
  return <RingSvg {...props} />;
});
