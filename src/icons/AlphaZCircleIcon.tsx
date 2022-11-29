import React, { FC, memo } from 'react';
import AlphaZCircleSvg from '../svg/alpha-z-circle.svg';

export interface IAlphaZCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaZCircleIcon: FC<IAlphaZCircleIconProps> = memo(props => {
  return <AlphaZCircleSvg {...props} />;
});
