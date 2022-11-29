import React, { FC, memo } from 'react';
import BellCircleOutlineSvg from '../svg/bell-circle-outline.svg';

export interface IBellCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellCircleOutlineIcon: FC<IBellCircleOutlineIconProps> = memo(props => {
  return <BellCircleOutlineSvg {...props} />;
});
