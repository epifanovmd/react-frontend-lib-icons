import React, { FC, memo } from 'react';
import PanLeftSvg from '../svg/pan-left.svg';

export interface IPanLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanLeftIcon: FC<IPanLeftIconProps> = memo(props => {
  return <PanLeftSvg {...props} />;
});
