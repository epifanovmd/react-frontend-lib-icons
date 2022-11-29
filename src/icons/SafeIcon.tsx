import React, { FC, memo } from 'react';
import SafeSvg from '../svg/safe.svg';

export interface ISafeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SafeIcon: FC<ISafeIconProps> = memo(props => {
  return <SafeSvg {...props} />;
});
