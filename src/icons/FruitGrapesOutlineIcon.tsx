import React, { FC, memo } from 'react';
import FruitGrapesOutlineSvg from '../svg/fruit-grapes-outline.svg';

export interface IFruitGrapesOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FruitGrapesOutlineIcon: FC<IFruitGrapesOutlineIconProps> = memo(props => {
  return <FruitGrapesOutlineSvg {...props} />;
});
