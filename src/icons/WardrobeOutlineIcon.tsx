import React, { FC, memo } from 'react';
import WardrobeOutlineSvg from '../svg/wardrobe-outline.svg';

export interface IWardrobeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WardrobeOutlineIcon: FC<IWardrobeOutlineIconProps> = memo(props => {
  return <WardrobeOutlineSvg {...props} />;
});
