import React, { FC, memo } from 'react';
import CheckboxBlankOutlineSvg from '../svg/checkbox-blank-outline.svg';

export interface ICheckboxBlankOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxBlankOutlineIcon: FC<ICheckboxBlankOutlineIconProps> = memo(props => {
  return <CheckboxBlankOutlineSvg {...props} />;
});
