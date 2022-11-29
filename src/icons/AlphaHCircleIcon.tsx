import React, { FC, memo } from 'react';
import AlphaHCircleSvg from '../svg/alpha-h-circle.svg';

export interface IAlphaHCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaHCircleIcon: FC<IAlphaHCircleIconProps> = memo(props => {
  return <AlphaHCircleSvg {...props} />;
});
