import React, { FC, memo } from 'react';
import AlphaJCircleSvg from '../svg/alpha-j-circle.svg';

export interface IAlphaJCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaJCircleIcon: FC<IAlphaJCircleIconProps> = memo(props => {
  return <AlphaJCircleSvg {...props} />;
});
