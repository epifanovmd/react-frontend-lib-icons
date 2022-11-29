import React, { FC, memo } from 'react';
import FlipVerticalSvg from '../svg/flip-vertical.svg';

export interface IFlipVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlipVerticalIcon: FC<IFlipVerticalIconProps> = memo(props => {
  return <FlipVerticalSvg {...props} />;
});
