import React, { FC, memo } from 'react';
import RadioHandheldSvg from '../svg/radio-handheld.svg';

export interface IRadioHandheldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadioHandheldIcon: FC<IRadioHandheldIconProps> = memo(props => {
  return <RadioHandheldSvg {...props} />;
});
