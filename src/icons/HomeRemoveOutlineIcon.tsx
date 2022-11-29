import React, { FC, memo } from 'react';
import HomeRemoveOutlineSvg from '../svg/home-remove-outline.svg';

export interface IHomeRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeRemoveOutlineIcon: FC<IHomeRemoveOutlineIconProps> = memo(props => {
  return <HomeRemoveOutlineSvg {...props} />;
});
