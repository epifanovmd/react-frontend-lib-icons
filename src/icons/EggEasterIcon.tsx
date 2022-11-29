import React, { FC, memo } from 'react';
import EggEasterSvg from '../svg/egg-easter.svg';

export interface IEggEasterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EggEasterIcon: FC<IEggEasterIconProps> = memo(props => {
  return <EggEasterSvg {...props} />;
});
