import React, { FC, memo } from 'react';
import AlphaPCircleSvg from '../svg/alpha-p-circle.svg';

export interface IAlphaPCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaPCircleIcon: FC<IAlphaPCircleIconProps> = memo(props => {
  return <AlphaPCircleSvg {...props} />;
});
