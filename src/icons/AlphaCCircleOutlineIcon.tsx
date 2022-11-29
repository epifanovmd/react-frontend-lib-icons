import React, { FC, memo } from 'react';
import AlphaCCircleOutlineSvg from '../svg/alpha-c-circle-outline.svg';

export interface IAlphaCCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaCCircleOutlineIcon: FC<IAlphaCCircleOutlineIconProps> = memo(props => {
  return <AlphaCCircleOutlineSvg {...props} />;
});
