import React, { FC, memo } from 'react';
import ToyBrickRemoveSvg from '../svg/toy-brick-remove.svg';

export interface IToyBrickRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToyBrickRemoveIcon: FC<IToyBrickRemoveIconProps> = memo(props => {
  return <ToyBrickRemoveSvg {...props} />;
});
