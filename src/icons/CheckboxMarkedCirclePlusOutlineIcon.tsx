import React, { FC, memo } from 'react';
import CheckboxMarkedCirclePlusOutlineSvg from '../svg/checkbox-marked-circle-plus-outline.svg';

export interface ICheckboxMarkedCirclePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxMarkedCirclePlusOutlineIcon: FC<ICheckboxMarkedCirclePlusOutlineIconProps> = memo(props => {
  return <CheckboxMarkedCirclePlusOutlineSvg {...props} />;
});
