import React, { FC, memo } from 'react';
import LabelSvg from '../svg/label.svg';

export interface ILabelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LabelIcon: FC<ILabelIconProps> = memo(props => {
  return <LabelSvg {...props} />;
});
