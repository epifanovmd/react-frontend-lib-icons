import React, { FC, memo } from 'react';
import HumbleBundleSvg from '../svg/humble-bundle.svg';

export interface IHumbleBundleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumbleBundleIcon: FC<IHumbleBundleIconProps> = memo(props => {
  return <HumbleBundleSvg {...props} />;
});
