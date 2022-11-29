import React, { FC, memo } from 'react';
import AlphaICircleSvg from '../svg/alpha-i-circle.svg';

export interface IAlphaICircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaICircleIcon: FC<IAlphaICircleIconProps> = memo(props => {
  return <AlphaICircleSvg {...props} />;
});
