import React, { FC, memo } from 'react';
import CheckboxMarkedSvg from '../svg/checkbox-marked.svg';

export interface ICheckboxMarkedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxMarkedIcon: FC<ICheckboxMarkedIconProps> = memo(props => {
  return <CheckboxMarkedSvg {...props} />;
});
