import React, { FC, memo } from 'react';
import FormDropdownSvg from '../svg/form-dropdown.svg';

export interface IFormDropdownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormDropdownIcon: FC<IFormDropdownIconProps> = memo(props => {
  return <FormDropdownSvg {...props} />;
});
