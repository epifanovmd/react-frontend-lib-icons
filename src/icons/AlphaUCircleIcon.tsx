import React, { FC, memo } from 'react';
import AlphaUCircleSvg from '../svg/alpha-u-circle.svg';

export interface IAlphaUCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaUCircleIcon: FC<IAlphaUCircleIconProps> = memo(props => {
  return <AlphaUCircleSvg {...props} />;
});
