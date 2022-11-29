import React, { FC, memo } from 'react';
import LabelOutlineSvg from '../svg/label-outline.svg';

export interface ILabelOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LabelOutlineIcon: FC<ILabelOutlineIconProps> = memo(props => {
  return <LabelOutlineSvg {...props} />;
});
