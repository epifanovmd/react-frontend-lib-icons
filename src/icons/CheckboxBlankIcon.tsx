import React, { FC, memo } from 'react';
import CheckboxBlankSvg from '../svg/checkbox-blank.svg';

export interface ICheckboxBlankIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxBlankIcon: FC<ICheckboxBlankIconProps> = memo(props => {
  return <CheckboxBlankSvg {...props} />;
});
