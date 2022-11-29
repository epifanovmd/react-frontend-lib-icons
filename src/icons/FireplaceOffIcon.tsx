import React, { FC, memo } from 'react';
import FireplaceOffSvg from '../svg/fireplace-off.svg';

export interface IFireplaceOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FireplaceOffIcon: FC<IFireplaceOffIconProps> = memo(props => {
  return <FireplaceOffSvg {...props} />;
});
