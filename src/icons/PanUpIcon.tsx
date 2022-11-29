import React, { FC, memo } from 'react';
import PanUpSvg from '../svg/pan-up.svg';

export interface IPanUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanUpIcon: FC<IPanUpIconProps> = memo(props => {
  return <PanUpSvg {...props} />;
});
