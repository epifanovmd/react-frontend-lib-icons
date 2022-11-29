import React, { FC, memo } from 'react';
import BalconySvg from '../svg/balcony.svg';

export interface IBalconyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BalconyIcon: FC<IBalconyIconProps> = memo(props => {
  return <BalconySvg {...props} />;
});
