import React, { FC, memo } from 'react';
import AlphaMCircleSvg from '../svg/alpha-m-circle.svg';

export interface IAlphaMCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaMCircleIcon: FC<IAlphaMCircleIconProps> = memo(props => {
  return <AlphaMCircleSvg {...props} />;
});
