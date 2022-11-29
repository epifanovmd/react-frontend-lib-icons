import React, { FC, memo } from 'react';
import SimOutlineSvg from '../svg/sim-outline.svg';

export interface ISimOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SimOutlineIcon: FC<ISimOutlineIconProps> = memo(props => {
  return <SimOutlineSvg {...props} />;
});
