import React, { FC, memo } from 'react';
import FireplaceSvg from '../svg/fireplace.svg';

export interface IFireplaceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FireplaceIcon: FC<IFireplaceIconProps> = memo(props => {
  return <FireplaceSvg {...props} />;
});
