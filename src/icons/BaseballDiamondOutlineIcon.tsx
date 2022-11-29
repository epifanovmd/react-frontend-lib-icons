import React, { FC, memo } from 'react';
import BaseballDiamondOutlineSvg from '../svg/baseball-diamond-outline.svg';

export interface IBaseballDiamondOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BaseballDiamondOutlineIcon: FC<IBaseballDiamondOutlineIconProps> = memo(props => {
  return <BaseballDiamondOutlineSvg {...props} />;
});
