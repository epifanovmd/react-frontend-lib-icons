import React, { FC, memo } from 'react';
import AlphaYCircleSvg from '../svg/alpha-y-circle.svg';

export interface IAlphaYCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaYCircleIcon: FC<IAlphaYCircleIconProps> = memo(props => {
  return <AlphaYCircleSvg {...props} />;
});
