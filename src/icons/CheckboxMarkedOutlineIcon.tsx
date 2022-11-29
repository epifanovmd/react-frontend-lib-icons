import React, { FC, memo } from 'react';
import CheckboxMarkedOutlineSvg from '../svg/checkbox-marked-outline.svg';

export interface ICheckboxMarkedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxMarkedOutlineIcon: FC<ICheckboxMarkedOutlineIconProps> = memo(props => {
  return <CheckboxMarkedOutlineSvg {...props} />;
});
