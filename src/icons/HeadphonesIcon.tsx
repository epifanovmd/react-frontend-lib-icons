import React, { FC, memo } from 'react';
import HeadphonesSvg from '../svg/headphones.svg';

export interface IHeadphonesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadphonesIcon: FC<IHeadphonesIconProps> = memo(props => {
  return <HeadphonesSvg {...props} />;
});
