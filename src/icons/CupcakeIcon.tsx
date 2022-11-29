import React, { FC, memo } from 'react';
import CupcakeSvg from '../svg/cupcake.svg';

export interface ICupcakeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CupcakeIcon: FC<ICupcakeIconProps> = memo(props => {
  return <CupcakeSvg {...props} />;
});
