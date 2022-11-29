import React, { FC, memo } from 'react';
import LabelMultipleOutlineSvg from '../svg/label-multiple-outline.svg';

export interface ILabelMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LabelMultipleOutlineIcon: FC<ILabelMultipleOutlineIconProps> = memo(props => {
  return <LabelMultipleOutlineSvg {...props} />;
});
