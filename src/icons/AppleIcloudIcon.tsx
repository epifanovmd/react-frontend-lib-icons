import React, { FC, memo } from 'react';
import AppleIcloudSvg from '../svg/apple-icloud.svg';

export interface IAppleIcloudIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AppleIcloudIcon: FC<IAppleIcloudIconProps> = memo(props => {
  return <AppleIcloudSvg {...props} />;
});
