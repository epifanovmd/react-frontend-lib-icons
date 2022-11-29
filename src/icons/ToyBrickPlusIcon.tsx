import React, { FC, memo } from 'react';
import ToyBrickPlusSvg from '../svg/toy-brick-plus.svg';

export interface IToyBrickPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToyBrickPlusIcon: FC<IToyBrickPlusIconProps> = memo(props => {
  return <ToyBrickPlusSvg {...props} />;
});
