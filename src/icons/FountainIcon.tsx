import React, { FC, memo } from 'react';
import FountainSvg from '../svg/fountain.svg';

export interface IFountainIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FountainIcon: FC<IFountainIconProps> = memo(props => {
  return <FountainSvg {...props} />;
});
