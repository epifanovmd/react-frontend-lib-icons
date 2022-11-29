import React, { FC, memo } from 'react';
import AlphaBCircleSvg from '../svg/alpha-b-circle.svg';

export interface IAlphaBCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaBCircleIcon: FC<IAlphaBCircleIconProps> = memo(props => {
  return <AlphaBCircleSvg {...props} />;
});
