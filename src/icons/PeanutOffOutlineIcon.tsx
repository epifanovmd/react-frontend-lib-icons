import React, { FC, memo } from 'react';
import PeanutOffOutlineSvg from '../svg/peanut-off-outline.svg';

export interface IPeanutOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PeanutOffOutlineIcon: FC<IPeanutOffOutlineIconProps> = memo(props => {
  return <PeanutOffOutlineSvg {...props} />;
});
