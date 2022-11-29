import React, { FC, memo } from 'react';
import AppleSvg from '../svg/apple.svg';

export interface IAppleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AppleIcon: FC<IAppleIconProps> = memo(props => {
  return <AppleSvg {...props} />;
});
