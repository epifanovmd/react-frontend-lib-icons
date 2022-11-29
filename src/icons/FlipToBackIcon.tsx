import React, { FC, memo } from 'react';
import FlipToBackSvg from '../svg/flip-to-back.svg';

export interface IFlipToBackIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlipToBackIcon: FC<IFlipToBackIconProps> = memo(props => {
  return <FlipToBackSvg {...props} />;
});
