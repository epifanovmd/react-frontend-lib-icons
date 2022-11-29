import React, { FC, memo } from 'react';
import ToyBrickPlusOutlineSvg from '../svg/toy-brick-plus-outline.svg';

export interface IToyBrickPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToyBrickPlusOutlineIcon: FC<IToyBrickPlusOutlineIconProps> = memo(props => {
  return <ToyBrickPlusOutlineSvg {...props} />;
});
