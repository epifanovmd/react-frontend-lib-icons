import React, { FC, memo } from 'react';
import HomeEditSvg from '../svg/home-edit.svg';

export interface IHomeEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeEditIcon: FC<IHomeEditIconProps> = memo(props => {
  return <HomeEditSvg {...props} />;
});
