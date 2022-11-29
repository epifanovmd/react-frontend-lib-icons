import React, { FC, memo } from 'react';
import AppleFinderSvg from '../svg/apple-finder.svg';

export interface IAppleFinderIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AppleFinderIcon: FC<IAppleFinderIconProps> = memo(props => {
  return <AppleFinderSvg {...props} />;
});
