import React, { FC, memo } from 'react';
import ToyBrickOutlineSvg from '../svg/toy-brick-outline.svg';

export interface IToyBrickOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToyBrickOutlineIcon: FC<IToyBrickOutlineIconProps> = memo(props => {
  return <ToyBrickOutlineSvg {...props} />;
});
