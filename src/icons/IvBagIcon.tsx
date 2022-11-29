import React, { FC, memo } from 'react';
import IvBagSvg from '../svg/iv-bag.svg';

export interface IIvBagIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IvBagIcon: FC<IIvBagIconProps> = memo(props => {
  return <IvBagSvg {...props} />;
});
