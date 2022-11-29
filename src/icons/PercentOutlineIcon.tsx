import React, { FC, memo } from 'react';
import PercentOutlineSvg from '../svg/percent-outline.svg';

export interface IPercentOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PercentOutlineIcon: FC<IPercentOutlineIconProps> = memo(props => {
  return <PercentOutlineSvg {...props} />;
});
