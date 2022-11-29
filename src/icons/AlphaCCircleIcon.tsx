import React, { FC, memo } from 'react';
import AlphaCCircleSvg from '../svg/alpha-c-circle.svg';

export interface IAlphaCCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaCCircleIcon: FC<IAlphaCCircleIconProps> = memo(props => {
  return <AlphaCCircleSvg {...props} />;
});
