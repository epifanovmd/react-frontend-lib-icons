import React, { FC, memo } from 'react';
import RadioTowerSvg from '../svg/radio-tower.svg';

export interface IRadioTowerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadioTowerIcon: FC<IRadioTowerIconProps> = memo(props => {
  return <RadioTowerSvg {...props} />;
});
