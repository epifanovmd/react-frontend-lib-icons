import React, { FC, memo } from 'react';
import FleurDeLisSvg from '../svg/fleur-de-lis.svg';

export interface IFleurDeLisIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FleurDeLisIcon: FC<IFleurDeLisIconProps> = memo(props => {
  return <FleurDeLisSvg {...props} />;
});
