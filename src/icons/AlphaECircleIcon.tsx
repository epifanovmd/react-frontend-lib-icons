import React, { FC, memo } from 'react';
import AlphaECircleSvg from '../svg/alpha-e-circle.svg';

export interface IAlphaECircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaECircleIcon: FC<IAlphaECircleIconProps> = memo(props => {
  return <AlphaECircleSvg {...props} />;
});
