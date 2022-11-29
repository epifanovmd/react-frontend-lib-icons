import React, { FC, memo } from 'react';
import HomeRemoveSvg from '../svg/home-remove.svg';

export interface IHomeRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeRemoveIcon: FC<IHomeRemoveIconProps> = memo(props => {
  return <HomeRemoveSvg {...props} />;
});
