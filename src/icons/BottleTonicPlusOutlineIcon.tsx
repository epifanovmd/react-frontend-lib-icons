import React, { FC, memo } from 'react';
import BottleTonicPlusOutlineSvg from '../svg/bottle-tonic-plus-outline.svg';

export interface IBottleTonicPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BottleTonicPlusOutlineIcon: FC<IBottleTonicPlusOutlineIconProps> = memo(props => {
  return <BottleTonicPlusOutlineSvg {...props} />;
});
