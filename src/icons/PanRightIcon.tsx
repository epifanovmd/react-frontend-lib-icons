import React, { FC, memo } from 'react';
import PanRightSvg from '../svg/pan-right.svg';

export interface IPanRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanRightIcon: FC<IPanRightIconProps> = memo(props => {
  return <PanRightSvg {...props} />;
});
