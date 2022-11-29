import React, { FC, memo } from 'react';
import LabelPercentSvg from '../svg/label-percent.svg';

export interface ILabelPercentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LabelPercentIcon: FC<ILabelPercentIconProps> = memo(props => {
  return <LabelPercentSvg {...props} />;
});
