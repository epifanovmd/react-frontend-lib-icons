import React, { FC, memo } from 'react';
import AlphaLCircleSvg from '../svg/alpha-l-circle.svg';

export interface IAlphaLCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaLCircleIcon: FC<IAlphaLCircleIconProps> = memo(props => {
  return <AlphaLCircleSvg {...props} />;
});
