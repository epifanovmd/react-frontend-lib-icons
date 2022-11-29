import React, { FC, memo } from 'react';
import AlphaSCircleSvg from '../svg/alpha-s-circle.svg';

export interface IAlphaSCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaSCircleIcon: FC<IAlphaSCircleIconProps> = memo(props => {
  return <AlphaSCircleSvg {...props} />;
});
