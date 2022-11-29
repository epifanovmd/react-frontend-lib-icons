import React, { FC, memo } from 'react';
import Numeric1Svg from '../svg/numeric-1.svg';

export interface INumeric1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric1Icon: FC<INumeric1IconProps> = memo(props => {
  return <Numeric1Svg {...props} />;
});
