import React, { FC, memo } from 'react';
import FlipToFrontSvg from '../svg/flip-to-front.svg';

export interface IFlipToFrontIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlipToFrontIcon: FC<IFlipToFrontIconProps> = memo(props => {
  return <FlipToFrontSvg {...props} />;
});
