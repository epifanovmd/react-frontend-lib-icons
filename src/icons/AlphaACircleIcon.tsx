import React, { FC, memo } from 'react';
import AlphaACircleSvg from '../svg/alpha-a-circle.svg';

export interface IAlphaACircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaACircleIcon: FC<IAlphaACircleIconProps> = memo(props => {
  return <AlphaACircleSvg {...props} />;
});
