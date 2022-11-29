import React, { FC, memo } from 'react';
import SimOffOutlineSvg from '../svg/sim-off-outline.svg';

export interface ISimOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SimOffOutlineIcon: FC<ISimOffOutlineIconProps> = memo(props => {
  return <SimOffOutlineSvg {...props} />;
});
