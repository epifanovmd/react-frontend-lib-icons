import React, { FC, memo } from 'react';
import ToyBrickRemoveOutlineSvg from '../svg/toy-brick-remove-outline.svg';

export interface IToyBrickRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToyBrickRemoveOutlineIcon: FC<IToyBrickRemoveOutlineIconProps> = memo(props => {
  return <ToyBrickRemoveOutlineSvg {...props} />;
});
