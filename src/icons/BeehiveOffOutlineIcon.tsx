import React, { FC, memo } from 'react';
import BeehiveOffOutlineSvg from '../svg/beehive-off-outline.svg';

export interface IBeehiveOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeehiveOffOutlineIcon: FC<IBeehiveOffOutlineIconProps> = memo(props => {
  return <BeehiveOffOutlineSvg {...props} />;
});
