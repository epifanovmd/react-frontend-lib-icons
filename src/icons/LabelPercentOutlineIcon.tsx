import React, { FC, memo } from 'react';
import LabelPercentOutlineSvg from '../svg/label-percent-outline.svg';

export interface ILabelPercentOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LabelPercentOutlineIcon: FC<ILabelPercentOutlineIconProps> = memo(props => {
  return <LabelPercentOutlineSvg {...props} />;
});
