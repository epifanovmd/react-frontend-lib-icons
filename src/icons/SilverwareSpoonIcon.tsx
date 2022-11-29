import React, { FC, memo } from 'react';
import SilverwareSpoonSvg from '../svg/silverware-spoon.svg';

export interface ISilverwareSpoonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SilverwareSpoonIcon: FC<ISilverwareSpoonIconProps> = memo(props => {
  return <SilverwareSpoonSvg {...props} />;
});
