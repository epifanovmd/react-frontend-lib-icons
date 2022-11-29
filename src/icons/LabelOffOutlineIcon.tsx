import React, { FC, memo } from 'react';
import LabelOffOutlineSvg from '../svg/label-off-outline.svg';

export interface ILabelOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LabelOffOutlineIcon: FC<ILabelOffOutlineIconProps> = memo(props => {
  return <LabelOffOutlineSvg {...props} />;
});
