import React, { FC, memo } from 'react';
import AlphaQCircleSvg from '../svg/alpha-q-circle.svg';

export interface IAlphaQCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaQCircleIcon: FC<IAlphaQCircleIconProps> = memo(props => {
  return <AlphaQCircleSvg {...props} />;
});
