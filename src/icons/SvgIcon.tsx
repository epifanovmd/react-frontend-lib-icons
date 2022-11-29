import React, { FC, memo } from 'react';
import SvgSvg from '../svg/svg.svg';

export interface ISvgIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SvgIcon: FC<ISvgIconProps> = memo(props => {
  return <SvgSvg {...props} />;
});
