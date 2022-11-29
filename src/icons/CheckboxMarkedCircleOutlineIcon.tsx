import React, { FC, memo } from 'react';
import CheckboxMarkedCircleOutlineSvg from '../svg/checkbox-marked-circle-outline.svg';

export interface ICheckboxMarkedCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxMarkedCircleOutlineIcon: FC<ICheckboxMarkedCircleOutlineIconProps> = memo(props => {
  return <CheckboxMarkedCircleOutlineSvg {...props} />;
});
