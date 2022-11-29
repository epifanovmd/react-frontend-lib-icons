import React, { FC, memo } from 'react';
import PanSvg from '../svg/pan.svg';

export interface IPanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanIcon: FC<IPanIconProps> = memo(props => {
  return <PanSvg {...props} />;
});
