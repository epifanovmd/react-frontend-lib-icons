import React, { FC, memo } from 'react';
import AlphaGCircleSvg from '../svg/alpha-g-circle.svg';

export interface IAlphaGCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaGCircleIcon: FC<IAlphaGCircleIconProps> = memo(props => {
  return <AlphaGCircleSvg {...props} />;
});
