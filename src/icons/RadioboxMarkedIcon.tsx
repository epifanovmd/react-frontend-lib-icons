import React, { FC, memo } from 'react';
import RadioboxMarkedSvg from '../svg/radiobox-marked.svg';

export interface IRadioboxMarkedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadioboxMarkedIcon: FC<IRadioboxMarkedIconProps> = memo(props => {
  return <RadioboxMarkedSvg {...props} />;
});
