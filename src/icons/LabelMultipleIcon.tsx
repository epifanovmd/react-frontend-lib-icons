import React, { FC, memo } from 'react';
import LabelMultipleSvg from '../svg/label-multiple.svg';

export interface ILabelMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LabelMultipleIcon: FC<ILabelMultipleIconProps> = memo(props => {
  return <LabelMultipleSvg {...props} />;
});
