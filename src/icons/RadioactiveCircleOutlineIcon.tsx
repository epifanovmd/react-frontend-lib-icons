import React, { FC, memo } from 'react';
import RadioactiveCircleOutlineSvg from '../svg/radioactive-circle-outline.svg';

export interface IRadioactiveCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadioactiveCircleOutlineIcon: FC<IRadioactiveCircleOutlineIconProps> = memo(props => {
  return <RadioactiveCircleOutlineSvg {...props} />;
});
