import React, { FC, memo } from 'react';
import LabelOffSvg from '../svg/label-off.svg';

export interface ILabelOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LabelOffIcon: FC<ILabelOffIconProps> = memo(props => {
  return <LabelOffSvg {...props} />;
});
