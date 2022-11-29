import React, { FC, memo } from 'react';
import AtmSvg from '../svg/atm.svg';

export interface IAtmIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AtmIcon: FC<IAtmIconProps> = memo(props => {
  return <AtmSvg {...props} />;
});
