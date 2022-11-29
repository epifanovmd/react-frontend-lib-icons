import React, { FC, memo } from 'react';
import AlphaOCircleSvg from '../svg/alpha-o-circle.svg';

export interface IAlphaOCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaOCircleIcon: FC<IAlphaOCircleIconProps> = memo(props => {
  return <AlphaOCircleSvg {...props} />;
});
