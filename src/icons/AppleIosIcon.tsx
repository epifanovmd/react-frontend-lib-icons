import React, { FC, memo } from 'react';
import AppleIosSvg from '../svg/apple-ios.svg';

export interface IAppleIosIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AppleIosIcon: FC<IAppleIosIconProps> = memo(props => {
  return <AppleIosSvg {...props} />;
});
