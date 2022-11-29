import React, { FC, memo } from 'react';
import HomeEditOutlineSvg from '../svg/home-edit-outline.svg';

export interface IHomeEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeEditOutlineIcon: FC<IHomeEditOutlineIconProps> = memo(props => {
  return <HomeEditOutlineSvg {...props} />;
});
