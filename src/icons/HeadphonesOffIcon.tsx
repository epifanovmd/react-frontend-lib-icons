import React, { FC, memo } from 'react';
import HeadphonesOffSvg from '../svg/headphones-off.svg';

export interface IHeadphonesOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadphonesOffIcon: FC<IHeadphonesOffIconProps> = memo(props => {
  return <HeadphonesOffSvg {...props} />;
});
