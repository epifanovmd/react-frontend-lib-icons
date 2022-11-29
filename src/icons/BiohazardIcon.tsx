import React, { FC, memo } from 'react';
import BiohazardSvg from '../svg/biohazard.svg';

export interface IBiohazardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BiohazardIcon: FC<IBiohazardIconProps> = memo(props => {
  return <BiohazardSvg {...props} />;
});
