import React, { FC, memo } from 'react';
import AppleSafariSvg from '../svg/apple-safari.svg';

export interface IAppleSafariIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AppleSafariIcon: FC<IAppleSafariIconProps> = memo(props => {
  return <AppleSafariSvg {...props} />;
});
