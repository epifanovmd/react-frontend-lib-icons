import React, { FC, memo } from 'react';
import SharkFinSvg from '../svg/shark-fin.svg';

export interface ISharkFinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SharkFinIcon: FC<ISharkFinIconProps> = memo(props => {
  return <SharkFinSvg {...props} />;
});
