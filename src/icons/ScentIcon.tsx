import React, { FC, memo } from 'react';
import ScentSvg from '../svg/scent.svg';

export interface IScentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScentIcon: FC<IScentIconProps> = memo(props => {
  return <ScentSvg {...props} />;
});
