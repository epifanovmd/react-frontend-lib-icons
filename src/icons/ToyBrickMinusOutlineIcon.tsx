import React, { FC, memo } from 'react';
import ToyBrickMinusOutlineSvg from '../svg/toy-brick-minus-outline.svg';

export interface IToyBrickMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToyBrickMinusOutlineIcon: FC<IToyBrickMinusOutlineIconProps> = memo(props => {
  return <ToyBrickMinusOutlineSvg {...props} />;
});
