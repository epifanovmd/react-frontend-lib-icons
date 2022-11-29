import React, { FC, memo } from 'react';
import AlphaKCircleSvg from '../svg/alpha-k-circle.svg';

export interface IAlphaKCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaKCircleIcon: FC<IAlphaKCircleIconProps> = memo(props => {
  return <AlphaKCircleSvg {...props} />;
});
